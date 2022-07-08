import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Css/brandslider.css";

import bimage1 from "../Images/brandlogos/adidas.png"
import bimage2 from "../Images/brandlogos/honda.png"
import bimage3 from "../Images/brandlogos/loreal.png"
import bimage4 from "../Images/brandlogos/puma.png"
import bimage5 from "../Images/brandlogos/rolex.png"
import bimage6 from "../Images/brandlogos/samsung.png"
import bimage7 from "../Images/brandlogos/walton.png"
import bimage8 from "../Images/brandlogos/xiaomi.png"






const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 200 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      bimage1
  },
  {
    url:
      bimage2
  }, {
    url:
      bimage3
  }, {
    url:
      bimage4
  }, {
    url:
      bimage5
  }, {
    url:
      bimage6
  }, {
    url:
      bimage7
  }, {
    url:
      bimage8
  }
];
const Brandslider = () => {
  return (
    <div className="parent container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListclassName="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} className="brandlogoimg" alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Brandslider;
