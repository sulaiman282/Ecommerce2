import React from "react";
import "../Css/navbar2.css";
import {Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <div className="navbar2body d-flex align-items-center">
      <div className="container d-flex justify-content-between ">
        <div className="dropdown dropdown1">
          <button
            className="categorybtn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories<i className="fa-solid fa-caret-down ps-2"></i>
          </button>
          <ul
            className="dropdown-menu dropdown-menucustom"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <Link className="dropdown-item" to="/products/cloths">
                Cloths
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/products/electronics">
                Electronics
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/products/furniture">
                Furniture
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/products/shoes">
                Shoes
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/all_product">
                Others
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/all_product">
              API Blank
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/all_product">
              API Blank
              </Link>
            </li>
            
          </ul>
        </div>

        <div className="smallhide">
          <Link to="/all_product">
            <i className="fa-solid fa-store pe-2"></i>All Products
          </Link>
        </div>

        <div>
          <Link to="/hot_deals">
            <i className="fa-solid fa-fire-flame-curved pe-2 text-danger"></i>
            Hot Deals
          </Link>
        </div>

        <div>
          <Link to="/trending">
            <i className="fa-solid fa-arrow-trend-up pe-1 ps-1 text-warning"></i>
            Trending
          </Link>
        </div>

        <div className="smallhide">
          <Link to="/new-arrivals">
            <i className="fa-solid fa-rocket pe-2"></i>New Arrivals
          </Link>
        </div>

        <div className="smallhide">
          <Link to="/blog">
            <i className="fa-solid fa-blog pe-2"></i>Blog
          </Link>
        </div>

        <div className="smallhide">
          <Link to="/services">
            <i className="fa-solid fa-gear pe-2"></i>Services
          </Link>
        </div>

        <div className="smallhide">
          <Link to="/contact_us">
            <i className="fa-solid fa-address-book pe-2"></i>Contact Us
          </Link>
        </div>

        <div className="dropdown dropdown2">
          <button
            className="categorybtn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More
            <i className="fa-solid fa-angle-down ps-2 more2"></i>
          </button>
          <ul
            className="dropdown-menu dropdown-menucustom"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <Link to="/all_product">
                <i className="fa-solid fa-store pe-2"></i>All Products
              </Link>
            </li>
            <li>
              <Link to="/new-arrivals">
                <i className="fa-solid fa-rocket pe-2"></i>New Arrivals
              </Link>
            </li>

            <li>
              <Link to="/blog">
                <i className="fa-solid fa-blog pe-2"></i>Blog
              </Link>
            </li>
            <li>
              <Link to="/services">
                <i className="fa-solid fa-gear pe-2"></i>Services
              </Link>
            </li>
            <li>
              <Link to="/contact_us">
                <i className="fa-solid fa-address-book pe-2"></i>Contact Us
              </Link>
            </li>
            <li>
            <Link to="/login">
              <i className="fas fa-user pe-2"></i>Login/Signup
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
