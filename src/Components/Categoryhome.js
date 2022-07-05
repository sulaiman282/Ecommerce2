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

export default function Categoryhome() {
  return (
    <div class="container Categoryhome">
      <div class="row">
        <div class="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
            {" "}
            <h5 className="fw-bold">Home Appliances</h5>
            <a href="url">
              <span>See More &gt;&gt;</span>
            </a>
          </div>

          <div className="row mt-3">
            <div className="col-6 textgray">
              <a href="url">
                <img src={doorhandle} alt="Italian Trulli"></img>
                <a href="url">Googles</a>
              </a>
            </div>
            <div className="col-6 textgray">
              <a href="url">
                <img src={metalbar} alt="Italian Trulli"></img>
                <a href="url">Googles</a>
              </a>
            </div>

            <div className="row"></div>
            <div className="col-6 textgray">
              <a href="url">
                <img src={mixergrinder} alt="Italian Trulli"></img>
                <a href="url">Googles</a>
              </a>
            </div>
            <div className="col-6 textgray">
              <a href="url">
                <img src={waterfilter} alt="Italian Trulli"></img>
                <a href="url">Googles</a>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
            {" "}
            <h5 className="fw-bold">Cosmatic</h5>
            <a href="url">
              <span>See More &gt;&gt;</span>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
            {" "}
            <h5 className="fw-bold">Mobile Accessories</h5>
            <a href="url">
              <span>See More &gt;&gt;</span>
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="col-12 blacktext d-flex justify-content-between">
            {" "}
            <h5 className="fw-bold">Women's Fasion</h5>
            <a href="url">
              <span>See More &gt;&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
