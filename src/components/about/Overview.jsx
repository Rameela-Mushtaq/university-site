"use client";
import React from "react";
import Heading from "../shared/Heading";
import { OverviewData, OverviewImages } from "@/constants/data";

const Overview = () => {
  return (
    <div className="flex justify-center md:py-16 py-8 bg-bgColor relative overflow-hidden">
      <div className="flex flex-col max-w-[1900px] w-[90%] md:gap-12 gap-6 z-20">
        <Heading label="Placement Overview" />

        <div className="flex md:flex-row flex-col-reverse md:gap-12 gap-8 items-center">
          {/* left side */}
          <div className="md:w-[40%] flex">
            {OverviewImages[0].members.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`User ${index + 1}`}
                className="-ml-[71%]  first:ml-0 "
                style={{ zIndex: OverviewImages[0].members.length - index }}
              />
            ))}
          </div>

          {/* right side */}
          <div className="flex-1 justify-start items-start flex flex-col md:gap-10 gap-6">
            <div className="lg:text-[28px] md:text-base text-sm">
              A brief summary of Placements 2022-23 Batch
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6 w-full">
              {OverviewData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col  gap-4 text-secondary md:pt-3 pt-1"
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="absolute top-0 left-0 transform lg:w-16 lg:h-16  w-10 h-10 z-10"
                  />

                  <div className="font-extrabold xl:text-5xl lg:text-4xl text-2xl z-20 ">
                    {item.number}
                  </div>
                  <div className="z-20 xl:text-2xl lg:text-lg md:text-base text-sm font-semibold ">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            <button className="border-[#CDA452] border bg-bg-focus rounded-lg font-bold lg:text-2xl md:text-base text-sm text-[#6C4327] py-4 px-5">
              LEARN MORE ABOUT OUR VISION
            </button>
          </div>

          <div className="absolute  top-[52%] left-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="/images/overviewVector.png"
              alt="facility"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
