import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hotproductdetails.css";
import { Rating } from "@mui/material";

export default function Anyproductdetails(props) {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1);
  
    var pid=(parseInt(lastURLSegment, 10))
   
  
  
  
    var sp = `https://api.escuelajs.co/api/v1/products/`+pid
  
  
  
    const [data, setData] = useState([]);

  
    useEffect(() => {
   
      axios({
        method: "GET",
        url: sp ,
      
      
      })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((e) => console.log(e))
      
    }, []);
  
  
  
  
  
    return (
  
  
      <div className=" container">
  
      <div className="row">
  
    
  
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
          <div className="d-flex justify-content-center w-100">
            <img
              src={data.images}
              alt="Yo"
              className="mainhotdetailsimage"
            ></img>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-center w-50">
              <img
                src={data.images}
                alt="Yo"
                className="smallchotdetailsimage"
              ></img>
              <img
                src={data.images}
                alt="Girl in a jacket"
                className="smallchotdetailsimage"
              ></img>
              <img
                src={data.images}
                alt="Girl in a jacket"
                className="smallchotdetailsimage"
              ></img>
            </div>
          </div>
        </div>
  
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 textdescriptionbody  ">
       
          <div className=" ps-5 pe-5">
            <h3
              className="fw-bold"
              style={{ color: props.mode === "dark" ? "black" : "white" }}
            >
              {data.title}
            </h3>
            <h5 style={{ color: props.mode === "dark" ? "black" : "white" }}>
             <span>Product id:{data.id}</span> 
            </h5>
            <br></br>
            <br></br>
            <span
              className="textdescriptionbody tw-bold h4 "
              style={{ color: props.mode === "dark" ? "black" : "white" }}
            >
            ৳ {data.price +2000}   
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span
              className="detailsjustifyp"
              style={{ color: props.mode === "dark" ? "black" : "white" }}
            >
            {data.description}
            </span>
  
            <div className="d-flex mt-4">
              <span
                className="pe-1"
                style={{ color: props.mode === "dark" ? "black" : "white" }}
              >
                User Rating :
              </span>
              <Rating
                name="half-rating-read"
                className="pe-1"
                defaultValue={4}
                precision={4}
                readOnly
              />
            </div>
  
            <br></br>
            <br></br>
            <br></br>
            <div className="d-flex ">
              <button className="detailsaddtocart me-3 p-2" type="button">
                <i className="fa-solid fa-bag-shopping p-2 fa-lg"></i>Add TO
                CART
              </button>
  
              <button className="detailsaddtocart p-2" type="button">
                <i className="fa-solid fa-heart p-2 fa-lg"></i>Add TO WISHLIST
              </button>
            </div>
            <div className="mt-5 mb-2">
              <strong
                className="supportedpaymenttext"
                style={{ color: props.mode === "dark" ? "black" : "white" }}
              >
                Supported payment
              </strong>
            </div>
  
            <div
              className="d-flex payment-cards-fa justify-content-between"
              style={{ color: props.mode === "dark" ? "darkblue" : "white" }}
            >
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-apple-pay"></i>
              <i className="fa-brands fa-cc-amazon-pay"></i>
              <i className="fa-brands fa-cc-paypal"></i>
            </div>
          </div>
        </div> 
       </div>
    </div>
  );
  }
  