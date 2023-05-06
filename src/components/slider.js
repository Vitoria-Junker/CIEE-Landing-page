import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false, 
            dots: true, 
          },
        },
      ],
    };
    return (
      <Slider {...settings} className=" h-screen w-full">
        <div className="h-screen w-full">
          <img
            src="/images/undraw1.svg"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-screen w-full ">
          <img
            src="/images/undraw2.svg"
            className="h-screen w-full object-contain"
          />
        </div>
        <div className="h-screen w-full">
          <img
            src="/images/undrow3.svg"
            className="h-screen  w-full object-contain"
          />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;