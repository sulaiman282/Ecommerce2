import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/login.css";
import {Link } from "react-router-dom";
export default function Login() {
 
      document.title = "TSHOP - LOGIN";
  
  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();






  const onSubmit = (data) => {
   
    password = data.password;
    email = data.email;
    // signUp();
    console.log(data)
   

  };




  let  email, password;
  




  return (
    <div className="container">
      <div className="loginbody">
        <div className="mainlogin">
          <ToastContainer />
      

          <div className="signup">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="chk" className="labellogin" aria-hidden="true">
                User Login
              </label>
          

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
                  
                })}
              />
              {errors.password && <p className="error">{errors.password.message}</p>}
              <button type="submit" className="buttonsp ">
                Login
              </button>
            </form>
             <span className="d-flex justify-content-center text-light mt-5">Don't have an account? <Link to="../signup" className="text-danger ms-2"> Sign up </Link></span>

          </div>

          
        </div>
      </div>
    </div>
  );
}
