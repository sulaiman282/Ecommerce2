import React from "react";
import "../Css/courasel.css";
import slider1 from "../Images/slider1.jpg"
import slider2 from "../Images/slider2.jpg"
import slider3 from "../Images/slider3.jpg"



export default function Courasel() {
  
  return (
    <div className="container ">
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slider1} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>ঈদ স্পেশাল অফার</h5>
          <p>এই ঈদে যা কিনবেন ডাবল দাম , না কিনলে নাই</p>
          <button className="custom-btn btn-7"><span>Checkout</span></button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider2} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>ঈদ স্পেশাল অফার</h5>
          <p>এই ঈদে যা কিনবেন ডাবল দাম , না কিনলে নাই</p>
          <button className="custom-btn btn-7"><span>Checkout</span></button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider3} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>ঈদ স্পেশাল অফার</h5>
          <p>এই ঈদে যা কিনবেন ডাবল দাম , না কিনলে নাই</p>
          <button className="custom-btn btn-7"><span>Checkout</span></button>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="fa-solid fa-hand-point-left carouselnext" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="fa-solid fa-hand-point-right carouselnext" aria-hidden="true"></span>
      <span className="visually-hidden ">Next</span>
    </button>
  </div>
</div>
  );
}
