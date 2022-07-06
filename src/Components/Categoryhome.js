import React from "react";
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
        <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
            {" "}
            <h5 className="fw-bold" style={{color:props.mode==='dark'?'black':'white'}}>Home Appliances</h5>
            <a href="url">
              <span style={{color:props.mode==='dark'?'blue':'white'}}>more &gt;&gt;</span>
            </a>
          </div>

          <div className="row mt-3">
            <div className="col-6 textgray d-flex justify-content-center">
              <a href="url">
                <img src={doorhandle} alt="Italian Trulli"></img><br/>
                <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Door Handle</a>
              </a>
            </div>
            <div className="col-6 textgray d-flex justify-content-center">
              <a href="url">
                <img src={metalbar} alt="Italian Trulli"></img><br/>
                <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Metal Bar</a>
              </a>
            </div>

            <div className="row"></div>
            <div className="col-6 textgray d-flex justify-content-center">
              <a href="url">
                <img src={mixergrinder} alt="Italian Trulli"></img><br/>
                <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Mixer Grinder</a>
              </a>
            </div>
            <div className="col-6 textgray d-flex justify-content-center">
              <a href="url">
                <img src={waterfilter} alt="Italian Trulli"></img><br/>
                <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Water Filter</a>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
          
            <h5 className="fw-bold" style={{color:props.mode==='dark'?'black':'white'}}>Cosmatic</h5>
            <a href="url">
              <span style={{color:props.mode==='dark'?'blue':'white'}}>more &gt;&gt;</span>
            </a>
          </div>
          <div className="row mt-3">
          <div className="col-6 textgray d-flex justify-content-center">
            <a href="url">
              <img src={lipstick} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Googles</a>
            </a>
          </div>
          <div className="col-6 textgray d-flex justify-content-center ">
            <a href="url">
              <img src={Moussefoundation} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Mousse Foundation</a>
            </a>
          </div>

          <div className="row"></div>
          <div className="col-6 textgray d-flex justify-content-center ">
            <a href="url">
              <img src={nailart} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Nail Art</a>
            </a>
          </div>
          <div className="col-6 textgray d-flex justify-content-center ">
            <a href="url">
              <img src={nailpolish} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Nail Polish</a>
            </a>
          </div>
        </div>
        </div>

        <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
            
            <h5 className="fw-bold" style={{color:props.mode==='dark'?'black':'white'}}>Mobile Accessories</h5>
            <a href="url">
              <span style={{color:props.mode==='dark'?'blue':'white'}}>more &gt;&gt;</span>
            </a>
            
          </div>
          <div className="row mt-3">
          <div className="col-6 textgray d-flex justify-content-center">
            <a href="url">
              <img src={headphones} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Headphones</a>
            </a>
          </div>
          <div className="col-6 textgray d-flex justify-content-center">
            <a href="url">
              <img src={powerbank} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Power Bank</a>
            </a>
          </div>

          <div className="row"></div>
          <div className="col-6 textgray d-flex justify-content-center">
            <a href="url">
              <img src={smarphones} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Smartphones</a>
            </a>
          </div>
          <div className="col-6 textgray d-flex justify-content-center">
            <a href="url">
              <img src={smartwatch} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Smart Watch</a>
            </a>
          </div>
        </div>
        </div>

        <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
           
            <h5 className="fw-bold" >Women's Fasion</h5>
            <a href="url">
              <span style={{color:props.mode==='dark'?'blue':'white'}}>more &gt;&gt;</span>
            </a>
          </div>
          <div className="row mt-3">
          <div className="col-6 textgray d-flex justify-content-center">
            <a href="url">
              <img src={girlshat} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Girls Hat</a>
            </a>
          </div>
          <div className="col-6 textgray d-flex justify-content-center">
            <a href="url">
              <img src={googles} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Googles</a>
            </a>
          </div>

          <div className="row"></div>
          <div className="col-6 textgray d-flex justify-content-center">
            <a href="url">
              <img src={shoes} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Shoes</a>
            </a>
          </div>
          <div className="col-6 textgray d-flex justify-content-center ">
            <a href="url">
              <img src={watches} alt="Italian Trulli"></img><br/>
              <a href="url" style={{color:props.mode==='dark'?'black':'white'}}>Watches</a>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
