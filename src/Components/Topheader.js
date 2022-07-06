import React, { useState } from "react";
import Typed from "react-typed";
import "../Css/topheader.css";

export default function Topheader(props) {
  const [btntext, setBtnText] = useState(<i className="ps-2 far fa-sun"></i>);

  const modetext = () => {
    if (props.mode === "light") {
      setBtnText(<i className="ps-2 far fa-sun"></i>);
    } else {
      setBtnText(<i className="ps-2 far fa-moon"></i>);
    }
  };

  return (
    <div className="topheaderbody d-flex align-items-center">
      <div className="container  d-flex justify-content-between">
        <div className="d-flex justify-content-start">
          <Typed
            className="typed-text downloadourapp"
            strings={[
              "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
              "Download Our Mobile App !",
              "20% offer off latest arrival !",
              "Check Our Latest Arrival !",
              "Flash Sale On Friday !",
            ]}
            typeSpeed={60}
            backDelay={3000}
            backSpeed={30}
            loop
          />

        </div>

        <div className="form-check form-switch d-flex justify-content-end ">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={() => {
              props.toggleMode();
              modetext();
            }}
          />
          <label
            className="form-check-label text-light"
            htmlFor="flexSwitchCheckDefault"
          >
            {btntext}
          </label>
        </div>
      </div>
    </div>
  );
}
