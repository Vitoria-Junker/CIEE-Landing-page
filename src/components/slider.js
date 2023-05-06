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
      <Slider {...settings} className="h-screen w-full">
        <div className="h-screen w-full">
          <img
            src="/images/woman-phone.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-screen w-full">
          <img
            src="/images/rosa.jpg"
            className="h-screen w-full object-cover"
          />
        </div>
        <div className="h-screen w-full">
          <img
            src="/images/casa.jpg"
            className="h-screen  w-full object-cover"
          />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
