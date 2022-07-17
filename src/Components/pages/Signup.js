import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/signup.css";
import {Link } from "react-router-dom";




export default function Signup() {
    document.title = "TSHOP - SIGNUP";
  
  

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
  
  
  
  
  
    const onSubmit = (data) => {
      name = data.name;
      password = data.password;
      email = data.email;
       signUp();
      console.log(data)
      console.log("sign up");
  
    };
  
    let name, email, password;
    
  
    const avatar =
      "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg";
    const history = useNavigate();
  
    async function signUp() {
      let item = { name, password, email, avatar };
      console.warn(item);
  
      let result = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
  
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      notify();
      await new Promise(resolve => setTimeout(resolve, 5000));
      history("/home");
     
     
    }
  
    const notify = () =>
      toast.success("Sign-up Success", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
    return (
      <div className="container">
        <div className="loginbody">
          <div className="mainlogin">
            <ToastContainer />
           
  
            <div className="signup">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="chk" className="labellogin" aria-hidden="true">
                 User  Signup
                </label>
                <input
                  type="text"
                  name="txt"
                  placeholder="User name"
                  {...register("name", {
                    required: "name is required",
                    minLength: { value: 4, message: "Minimum length 4" },
                  })}
                />
  
                {errors.name && <p className="error">{errors.name.message}</p>}
  
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
  
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Email is invalid",
                    },
                  })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
                <input
                  type="password"
                  id="psw"
                  name="psw"
                  placeholder="Password"
                  {...register("password", {
                    required: "Enter password",
                    minLength: { value: 8, message: "Minimum length 8" },
                    maxLength: { value: 20, message: "Maximum length 20" },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                      message:
                        "Password should contain atleast 1 numeric and capital letter",
                    },
                  })}
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
                <button type="submit" className="buttonsp">
                  Sign up
                </button>
              </form>
              <span className="d-flex justify-content-center text-light mt-5">Already have an account? <Link to="../login" className="text-danger ms-2"> Sign in </Link></span>
            </div>
  
           
          </div>
        </div>
      </div>
    );
  }
  