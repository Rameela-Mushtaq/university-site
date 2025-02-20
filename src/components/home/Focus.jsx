"use client";
import React from "react";
import Heading from "../shared/Heading";
import { FocusData } from "@/constants/data";

const Focus = () => {
  return (
    <div className="flex justify-center md:py-20 py-8 bg-bgColor">
      <div className="max-w-[1900px] w-[90%] flex flex-col md:gap-12 gap-8">
        <Heading label="In Focus" />

        <div className="flex md:flex-row flex-col items-center gap-7">
          {/* left side */}
          <div className="grid md:grid-cols-2 grid-cols-1 item-center md:gap-7 gap-5 md:w-[70%]">
            {FocusData.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 md:p-4 relative">
                {/* Conditionally render the image if it exists */}
                <div className=" rounded-lg overflow-hidden">
                {item.image && (
                  <img src={item.image} alt="Focus"  className="rounded-lg border-2 w-full border-[#A06C2E]  transition-transform duration-300 hover:scale-110"/>
                )} 
                </div>

                {/* Conditionally render the icon if it exists */}
                {item.icon && (
                  <img
                    src={item.icon}
                    alt="Icon"
                    className="absolute top-[-15px] left-[-16px] md:w-[73px] md:h-[73px] w-[50px]"
                  />
                )}

                <div className="flex flex-col md:gap-4 gap-1">
                  {/* Conditionally render the title */}
                  {item.title && (
                    <div className="font-semibold lg:text-[26px] md:text-xl text-lg">
                      {item.title}
                    </div>
                  )}

                  {/* Conditionally render the description */}
                  {item.description && (
                    <p className="lg:text-2xl md:text-xl text-sm">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Conditionally render the button */}
                {item.btn && (
                  <div className="font-bold lg:text-2xl md:text-lg text-sm text-[#6C4327] lg:mt-16">
                    {item.btn}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* right side */}
          <div className="flex-1 flex flex-col md:gap-16 gap-8 h-full w-full">
            <div className="flex flex-col justify-between lg:p-10 p-6 gap-2 lg:h-[300px] md:h-[200px] h-[150px] rounded-lg bg-bg-focus md:mt-5">
              <div className="md:text-2xl text-sm text-[#6C4327]">
                News & Events
              </div>
              <div className="flex justify-between">
                <div className="text-[#6C4327] font-semibold lg:text-4xl md:text-2xl text-lg">
                  Find out More
                </div>
                <img
                  src="/images/focus3.png"
                  alt="focus"
                  className="lg:w-[80px] lg:h-[96px] w-[40px] h-[45px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 relative">
              <div className=" rounded-lg overflow-hidden">
              <img src="/images/focus1.png" alt="focus" className="rounded-lg border-2 border-[#A06C2E] w-full  transition-transform duration-300 hover:scale-110"/>
              </div>
              <img
                src="/images/focus.png"
                alt="icon"
                className="absolute top-[-15px] left-[-16px] md:w-[73px] md:h-[73px] w-[50px] "
              />
              <div className="flex flex-col md:gap-4 gap-1">
                <div className="font-semibold lg:text-[26px] md:text-xl text-lg">
                  Monthly Cultural Events celebrating diversity at MU
                </div>
                <div className="lg:text-2xl md:text-xl text-sm">
                  Explore our online courses tailored for working professionals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
