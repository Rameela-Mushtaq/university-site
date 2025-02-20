"use client";
import React, { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StoryData } from "@/constants/data";
import Heading from "../shared/Heading";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = Object.keys(
    StoryData.reduce((acc, item) => ({ ...acc, ...item }), {})
  );

  const [activeTab, setActiveTab] = useState(categories[0]);

  // Find active stories
  const activeStories =
    StoryData.find((item) => item[activeTab])?.[activeTab] || [];

  return (
    <div className="flex justify-center md:py-20 py-8">
      <div className="max-w-[1900px] w-[90%] flex flex-col justify-center items-center md:gap-12 gap-6">
        <Heading label="Stories of Excellence" />

        <div className="relative flex flex-col lg:gap-16 md:gap-10 gap-6 justify-center items-center">
          {/* Dropdown for small screens */}
          <div className="md:hidden w-full">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full px-4 py-2 border-b-4 border-primary bg-transparent outline-none font-medium text-lg text-primary"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="text-[#9F937F]">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Tab buttons for larger screens */}
          <div className="hidden md:flex justify-between gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 border-b-4 xl:text-2xl text-lg transition ${
                  activeTab === category
                    ? "border-primary text-primary font-bold"
                    : "border-[#E0D8CB] text-[#9F937F] font-normal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Content Section */}
          {activeStories.length > 0 ? (
            <div className="grid sm:grid-cols-3 grid-cols-1 items-center gap-4 w-full">
              {/* Left Image */}
              <div className="sm:flex hidden justify-center items-center">
                <Image
                  src={activeStories[currentSlide].leftImage}
                  alt="Left Student"
                  width={315}
                  height={356}
                  className="rounded-lg h-auto"
                />
              </div>

              {/* Center Card with Background Image */}
              <div
                className="relative bg-[#004f6f] text-white md:p-10 sm:p-4 p-8 rounded-2xl bg-cover h-auto bg-center shadow-lg"
                style={{
                  backgroundImage: `url(${activeStories[currentSlide].centerImage})`,
                }}
              >
                {/* Overlay for readability */}
                <div className="bg- flex flex-col md:gap-8 gap-4 rounded-lg w-full">
                  <div className="xl:text-lg text-xs font-semibold">
                    {activeStories[currentSlide].text}
                  </div>
                  <div className="lg:flex md:hidden flex flex-col md:gap-4 gap-2">
                    <div className="flex gap-2 flex-wrap">
                      {activeStories[currentSlide].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="font-medium md:text-3xl text-xl">
                          {activeStories[currentSlide].name}
                        </div>
                        <p className="md:text-base text-sm">
                          {activeStories[currentSlide].course}
                        </p>
                      </div>
                      <Image
                        src={activeStories[currentSlide].flag}
                        alt="Country Flag"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="sm:flex hidden justify-center items-center">
                <Image
                  src={activeStories[currentSlide].rightImage}
                  alt="Right Student"
                  width={315}
                  height={356}
                  className="rounded-lg h-auto"
                />
              </div>
            </div>
          ) : (
            <div className="text-lg font-semibold text-gray-500">No Data Yet</div>
          )}
        </div>

        {/* Custom Arrows */}
        {activeStories.length > 0 && (
          <div className="flex items-center justify-center md:mt-6 gap-4">
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + activeStories.length) % activeStories.length
                )
              }
              className="p-3 text-[#A06C2E]"
            >
              <IoArrowBack className="text-2xl" />
            </button>
            {/* Dots Indicator */}
            <div className="flex gap-2 items-center">
              {activeStories.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-[#A06C2E] scale-125"
                      : "bg-[#E3D0AF] w-2 h-2"
                  }`}
                ></div>
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % activeStories.length)
              }
              className="p-3 text-[#A06C2E] rounded-full"
            >
              <IoArrowForward className="text-2xl"/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
