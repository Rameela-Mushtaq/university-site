"use client";
import React from "react";
import Slider from "react-slick";
import { DevData } from "@/constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Development = () => {
  const settings = {
    infinite: true, 
    speed: 5000, 
    slidesToShow: 4,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 1000, 
    cssEase: "linear", 
    arrows: false, 
    dots: false, 
    pauseOnHover: false, 
    draggable: true,
  };

  return (
    <div className="flex justify-center md:py-20 py-10">
      <div className="max-w-[1900px] w-full flex flex-col items-center md:gap-10 gap-4 relative">
        <div className="w-[90%] font-outfit flex justify-center lg:text-8xl md:text-6xl sm:text-4xl text-3xl text-heading font-bold">
          <div className="text-left md:w-[60%] w-[80%]">
            360° all rounded development
          </div>
        </div>

        {/* Auto-moving Infinite Slider */}
        <Slider {...settings} className="w-full">
          {DevData.map((item, index) => (
            <div key={index} className=" rounded-2xl">
             <div className="max-h-[387px] max-w-[538px] px-2 rounded-2xl">
             <img src={item.image} alt="image" className=" rounded-2xl xl:h-[287px] lg:h-[200px] md:h-[150px] h-[90px] w-[538px]  object-contain" />
             </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Development;
