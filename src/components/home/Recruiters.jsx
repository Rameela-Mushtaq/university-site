"use client";
import React from "react";
import Heading from "../shared/Heading";
import { RecruiterData1, RecruiterData2 } from "@/constants/data";

const Recruiters = () => {
  return (
    <div className="bg-bgColor flex justify-center md:py-20 py-8">
      <div className="max-w-[1900px] w-full flex flex-col justify-center lg:gap-16 md:gap-10 gap-8">
        <Heading label="Our Recruiters" />

        <div className="flex flex-col  overflow-hidden lg:gap-12 gap-8 w-full">
          {/* First Row: Moves Left to Right */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-12 animate-recruiter">
              {[...RecruiterData1, ...RecruiterData1].map((item, index) => (
                <div key={index} className="">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="max-w-[240px] lg:w-[240px] w-[140px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row: Moves Right to Left */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-12 animate-recruiter-reverse">
              {[...RecruiterData2, ...RecruiterData2].map((item, index) => (
                <div key={index} className="">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="max-w-[240px] lg:w-[240px] w-[140px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;
