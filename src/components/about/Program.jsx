"use client";
import React from "react";
import Heading from "../shared/Heading";
import { ProgramData } from "@/constants/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Program = () => {
    const slider = React.useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center md:py-20 py-10">
      <div className="flex flex-col w-full justify-center max-w-[1900px] gap-12">
        <div className="flex flex-col justify-center gap-6">
          <Heading label="Training Programs for students" />
          <div className="flex justify-center items-center">
            <div className="text-center lg:text-xl md:text-base text-sm text-[#666666] w-[80%]">
              Marwadi University not only focuses on imparting course specific
              knowledge to students but also makes sure that students become
              future-ready by training them with the right skill-set through
              different training programmes. Our top training programmes
              include- Soft Skills Development Programme, Personality
              Development Programme, Quantitative and Qualitative Aptitude
              Development Programmes...
            </div>
          </div>
        </div>

        <div className="w-full relative">
            {/* Slider arrows */}
          <div className="absolute md:flex hidden left-12 -translate-y-1/2 top-1/2 z-30">
            <button
              onClick={() => slider?.current?.slickPrev()}
              className="px-4 py-4 bg-[#CDA452] flex justify-center items-center rounded-full"
            >
              <GoArrowLeft className="text-4xl text-white text-contents " />
            </button>
          </div>
          <div className="absolute md:flex hidden right-12 translate-y-1/2 bottom-1/2 z-30">
            <button
              className=" px-4 py-4 flex justify-center bg-[#CDA452] items-center rounded-full"
              onClick={() => slider?.current?.slickNext()}
            >
              <GoArrowRight className="text-4xl text-contents text-white object-contain" />
            </button>
          </div>

          <Slider ref={slider} {...settings}>
            {ProgramData.map((item, index) => (
              <div key={index} className="px-2">
                {" "}
                {/* Add padding to create gap */}
                <div className="rounded-lg bg-bgColor md:py-12 py-8 md:px-8 px-4 border border-primary transition-all duration-1000 ease-in-out group flex flex-col gap-2">
                  <div className="font-bold lg:text-3xl md:text-xl text-lg">
                    {item.title}
                  </div>
                  <div className="lg:text-lg text-sm">{item.description}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Program;
