import React from "react";
import "../Css/navbar2.css";

export default function Navbar2() {
  return (
    <div className="navbar2body d-flex align-items-center">
      <div className="container d-flex justify-content-between ">
      
      
      
      <div className="dropdown">
      <button className="categorybtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Categories<i className="fa-solid fa-caret-down ps-2"></i>
      </button>
      <ul className="dropdown-menu dropdown-menucustom" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="/">Cloths</a></li>
        <li><a className="dropdown-item" href="/">Electronics</a></li>
        <li><a className="dropdown-item" href="/">Furniture</a></li>
        <li><a className="dropdown-item" href="/">Shoes</a></li>
        <li><a className="dropdown-item" href="/">Others</a></li>
      </ul>
      </div>




      <div>
      <a href="/"><i className="fa-solid fa-store pe-2"></i>All Products</a>
      </div>

      <div>
      <a href="/"><i className="fa-solid fa-fire-flame-curved pe-2 text-danger"></i>Hot Deals</a>
      </div>

      <div>
      <a href="/"><i className="fas fa-chart-line pe-2 text-warning"></i>Trending</a>
      </div>

      <div>
      <a href="/"><i className="fa-solid fa-rocket pe-2"></i>New Arrivals</a>
      </div>

      <div>
      <a href="/"><i className="fa-solid fa-blog pe-2"></i>Blog</a>
      </div>



      <div>
      <a href="/"><i className="fa-solid fa-gear pe-2"></i>Services</a>
      </div>

      <div>
      <a href="/"><i className="fa-solid fa-address-book pe-2"></i>Contact Us</a>
      </div>


      


      <div className="dropdown">
      <button className="categorybtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      More<i className="fa-solid fa-angle-right ps-2 more1"></i><i className="fa-solid fa-angle-down ps-2 more2"></i>
      </button>
      <ul className="dropdown-menu dropdown-menucustom" aria-labelledby="dropdownMenuButton1">
        <li><a href="/"><i className="fa-solid fa-blog"></i>Blog</a></li>
        <li><a href="/"><i className="fa-solid fa-gear pe-2"></i>Services</a></li>
        <li> <a href="/"><i className="fa-solid fa-address-book pe-2"></i>Contact Us</a></li>
      </ul>
      </div>

      

      
      
      
      
      </div>
    </div>
  );
}
