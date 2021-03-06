import React, { useEffect, useState } from "react";
import "../Css/navbar.css";
import mainlogo from "../Images/mainlogo.png";
import {Link } from "react-router-dom";


export default function Navbar(props) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user-info'));
    if (items) {
     setItems(items);
    }
  }, []);
 
var name;

  if(items.name==null){

     name='Login/Signup  '
   
  }
   
else
name=items.name



  return (
    <div className="navbarbody d-flex align-items-center sticky-top">
      <div className="container d-flex justify-content-between align-items-center">

        <div>
        <Link to="/home"><img src={mainlogo} className="nav-logo" alt="Thunder S"/></Link>
        </div>

        <div className=" d-flex  middleobject ">

        <Link to="/home" className="me-2 mt-1 home-btnmob"><i className="fa fa-home"></i></Link>


          <select className="select-category">
            <option value="All">All </option>
            <option value="Accessories">Accessories</option>
            <option value="Air Conditioners">Air Conditioners</option>
            <option value="Audios & Theaters">Audios & Theaters</option>
            <option value="Audio & Video">Audio & Video</option>
            <option value="Babies & Moms">Babies & Moms</option>
            <option value="Bags">Bags</option>
            <option value="Books & Office">Books & Office</option>
            <option value="Cars & Motocycles">Cars & Motocycles</option>
            <option value="Clothing & Apparel">Clothing & Apparel</option>
            <option value="Computers & Technologies">
              Computers & Technologies
            </option>
            <option value="Desktop PC">Desktop PC</option>
            <option value="Kid Fashion">Kid Fashion</option>
            <option value="Mens">Mens</option>
            <option value="Shoes">Shoes</option>
            <option value="Sunglasses">Sunglasses</option>
            <option value="Womens">Womens</option>
            <option value="Laptop">Laptop</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Consumer Electrics">Consumer Electrics</option>
            <option value="Type Hanging Cell">Type Hanging Cell</option>
            <option value="Headphone">Headphone</option>
            <option value="Home Theater System">Home Theater System</option>
            <option value="Speakers">Speakers</option>
            <option value="Car Electronics">Car Electronics</option>
            <option value="Car Security">Car Security</option>
            <option value="Radar Detector">Radar Detector</option>
            <option value="Vehicle GPS">Vehicle GPS</option>
            <option value="Office Electronics">Office Electronics</option>
            <option value="Printers">Printers</option>
            <option value="Projectors">Projectors</option>
            <option value="Scanners">Scanners</option>
            <option value="Store & Business">Store & Business</option>
            <option value="Refrigerators">Refrigerators</option>
            <option value="TV Televisions">TV Televisions</option>
            <option value="4K Ultra HD TVs">4K Ultra HD TVs</option>
            <option value="LED TVs">LED TVs</option>
            <option value="OLED TVs">OLED TVs</option>
            <option value="Washing Machines">Washing Machines</option>
            <option value="Garden & Kitchen">Garden & Kitchen</option>
            <option value="Cookware">Cookware</option>
            <option value="Decoration">Decoration</option>
            <option value="Furniture">Furniture</option>
            <option value="Garden Tools">Garden Tools</option>
            <option value="Home Improvement">Home Improvement</option>
            <option value="Powers And Hand Tools">Powers And Hand Tools</option>
            <option value="Utensil & Gadget">Utensil & Gadget</option>
            <option value="Health & Beauty">Health & Beauty</option>
            <option value="Equipments">Equipments</option>
            <option value="Hair Care">Hair Care</option>
            <option value="Perfumer">Perfumer</option>
            <option value="Wine Cabinets">Wine Cabinets</option>
          </select>
          <input
            type="text"
            id="search-product"
            placeholder="enter keywords"
            name="fname"
          />
          <button type="submit" id="buttonid" title="Search Now">
            Search
          </button>
        </div>


        <div className="d-flex  linksnav">
        <Link to="/cart" className="p-2"><i className="fas fa-shopping-bag"><span className="counterproduct">0</span></i><br></br><span>Cart</span></Link>
        <Link to="/under-development" className="p-2"><i className="fa-solid fa-heart"><span className="counterproduct">0</span></i><br></br><span>Wishlist</span></Link>
        <Link to="/login" className="p-2"><i className="fas fa-user"></i><br></br><span id="profile">{name}</span></Link>

        
        </div>
      </div>
    </div>
  );
}
