import React from "react";
import {Link } from "react-router-dom";
import "../Css/categoryhome.css";

import doorhandle from "../Images/categoryhome/homeappliances/doorhandle.jpg";
import metalbar from "../Images/categoryhome/homeappliances/metalbar.jpg";
import mixergrinder from "../Images/categoryhome/homeappliances/mixergrinder.jpg";
import waterfilter from "../Images/categoryhome/homeappliances/waterfilter.jpg";

import lipstick from "../Images/categoryhome/cosmatic/lipstick.jpg";
import Moussefoundation from "../Images/categoryhome/cosmatic/Moussefoundation.jpg";
import nailart from "../Images/categoryhome/cosmatic/nailart.jpg";
import nailpolish from "../Images/categoryhome/cosmatic/nailpolish.jpg";

import headphones from "../Images/categoryhome/mobileaccessories/headphones.jpg";
import powerbank from "../Images/categoryhome/mobileaccessories/powerbank.jpg";
import smarphones from "../Images/categoryhome/mobileaccessories/smarphones.jpg";
import smartwatch from "../Images/categoryhome/mobileaccessories/smartwatch.jpg";

import girlshat from "../Images/categoryhome/stylewomen/girlshat.jpg";
import googles from "../Images/categoryhome/stylewomen/googles.jpg";
import shoes from "../Images/categoryhome/stylewomen/shoes.jpg";
import watches from "../Images/categoryhome/stylewomen/watches.jpg";

export default function Categoryhome(props) {
  return (
    <div className="container Categoryhome">
      <div className="row">

        <div className="col-lg-6 col-xl-6 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
            {" "}
            <h5 className="fw-bold" style={{color:props.mode==='dark'?'black':'white'}}>Home Appliances</h5>
            <Link to="/products/furniture">
              <span style={{color:props.mode==='dark'?'blue':'white'}}>more &gt;&gt;</span>
            </Link>
          </div>

          <div className="row mt-3">
            <div className="col-6 textgray d-flex justify-content-center">
              <Link to="/products/furniture">
                <img src={doorhandle} alt="Italian Trulli"></img><br/>
                <Link to="/products/furniture" style={{color:props.mode==='dark'?'black':'white'}}>Door Handle</Link>
              </Link>
            </div>
            <div className="col-6 textgray d-flex justify-content-center">
              <Link to="/products/furniture">
                <img src={metalbar} alt="Italian Trulli"></img><br/>
                <Link to="/products/furniture" style={{color:props.mode==='dark'?'black':'white'}}>Metal Bar</Link>
              </Link>
            </div>

            <div className="row"></div>
            <div className="col-6 textgray d-flex justify-content-center">
              <Link to="/products/furniture">
                <img src={mixergrinder} alt="Italian Trulli"></img><br/>
                <Link to="/products/furniture" style={{color:props.mode==='dark'?'black':'white'}}>Mixer Grinder</Link>
              </Link>
            </div>
            <div className="col-6 textgray d-flex justify-content-center">
              <Link to="/products/furniture">
                <img src={waterfilter} alt="Italian Trulli"></img><br/>
                <Link to="/products/furniture" style={{color:props.mode==='dark'?'black':'white'}}>Water Filter</Link>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-xl-6 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
          
            <h5 className="fw-bold" style={{color:props.mode==='dark'?'black':'white'}}>Cosmatic</h5>
            <Link to="/products/cloths">
              <span style={{color:props.mode==='dark'?'blue':'white'}}>more &gt;&gt;</span>
            </Link>
          </div>
          <div className="row mt-3">
          <div className="col-6 textgray d-flex justify-content-center">
            <Link to="/products/cloths">
              <img src={lipstick} alt="Italian Trulli"></img><br/>
              <Link to="/products/cloths" style={{color:props.mode==='dark'?'black':'white'}}>Googles</Link>
            </Link>
          </div>
          <div className="col-6 textgray d-flex justify-content-center ">
            <Link to="/products/cloths">
              <img src={Moussefoundation} alt="Italian Trulli"></img><br/>
              <Link to="/products/cloths" style={{color:props.mode==='dark'?'black':'white'}}>Mousse Foundation</Link>
            </Link>
          </div>

          <div className="row"></div>
          <div className="col-6 textgray d-flex justify-content-center ">
            <Link to="/products/cloths">
              <img src={nailart} alt="Italian Trulli"></img><br/>
              <Link to="/products/cloths" style={{color:props.mode==='dark'?'black':'white'}}>Nail Art</Link>
            </Link>
          </div>
          <div className="col-6 textgray d-flex justify-content-center ">
            <Link to="/products/cloths">
              <img src={nailpolish} alt="Italian Trulli"></img><br/>
              <Link to="/products/cloths" style={{color:props.mode==='dark'?'black':'white'}}>Nail Polish</Link>
            </Link>
          </div>
        </div>
        </div>

        <div className="col-lg-6 col-xl-6 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
            
            <h5 className="fw-bold" style={{color:props.mode==='dark'?'black':'white'}}>Mobile Accessories</h5>
            <Link to="/products/electronics">
              <span style={{color:props.mode==='dark'?'blue':'white'}}>more &gt;&gt;</span>
            </Link>
            
          </div>
          <div className="row mt-3">
          <div className="col-6 textgray d-flex justify-content-center">
            <Link to="/products/electronics">
              <img src={headphones} alt="Italian Trulli"></img><br/>
              <Link to="/products/electronics" style={{color:props.mode==='dark'?'black':'white'}}>Headphones</Link>
            </Link>
          </div>
          <div className="col-6 textgray d-flex justify-content-center">
            <Link to="/products/electronics">
              <img src={powerbank} alt="Italian Trulli"></img><br/>
              <Link to="/products/electronics" style={{color:props.mode==='dark'?'black':'white'}}>Power Bank</Link>
            </Link>
          </div>

          <div className="row"></div>
          <div className="col-6 textgray d-flex justify-content-center">
            <Link to="/products/electronics">
              <img src={smarphones} alt="Italian Trulli"></img><br/>
              <Link to="/products/electronics" style={{color:props.mode==='dark'?'black':'white'}}>Smartphones</Link>
            </Link>
          </div>
          <div className="col-6 textgray d-flex justify-content-center">
            <Link to="/products/electronics">
              <img src={smartwatch} alt="Italian Trulli"></img><br/>
              <Link to="/products/electronics" style={{color:props.mode==='dark'?'black':'white'}}>Smart Watch</Link>
            </Link>
          </div>
        </div>
        </div>

        <div className="col-lg-6 col-xl-6 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
           
            <h5 className="fw-bold "style={{color:props.mode==='dark'?'black':'white'}} >Women's Fasion</h5>
            <Link to="/products/cloths">
              <span style={{color:props.mode==='dark'?'blue':'white'}}>more &gt;&gt;</span>
            </Link>
          </div>
          <div className="row mt-3">
          <div className="col-6 textgray d-flex justify-content-center">
            <Link to="/products/cloths">
              <img src={girlshat} alt="Italian Trulli"></img><br/>
              <Link to="/products/cloths" style={{color:props.mode==='dark'?'black':'white'}}>Girls Hat</Link>
            </Link>
          </div>
          <div className="col-6 textgray d-flex justify-content-center">
            <Link to="/products/cloths">
              <img src={googles} alt="Italian Trulli"></img><br/>
              <Link to="/products/cloths" style={{color:props.mode==='dark'?'black':'white'}}>Googles</Link>
            </Link>
          </div>

          <div className="row"></div>
          <div className="col-6 textgray d-flex justify-content-center">
            <Link to="/products/cloths">
              <img src={shoes} alt="Italian Trulli"></img><br/>
              <Link to="/products/cloths" style={{color:props.mode==='dark'?'black':'white'}}>Shoes</Link>
            </Link>
          </div>
          <div className="col-6 textgray d-flex justify-content-center ">
            <Link to="/products/cloths">
              <img src={watches} alt="Italian Trulli"></img><br/>
              <Link to="/products/cloths" style={{color:props.mode==='dark'?'black':'white'}}>Watches</Link>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
