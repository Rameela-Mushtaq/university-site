"use client";
import { FacilityDate } from "@/constants/data";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../shared/Heading";

const Facility = () => {
  const [hoveredFacility, setHoveredFacility] = useState(null);

  return (
    <div className="flex justify-center md:py-20 py-10 overflow-hidden">
      <div className="max-w-[1900px] w-[90%] flex flex-col gap-6 text-center relative">
        <Heading label="Facility on Campus" />

        {/* Facilities List */}
        <div className="relative flex flex-wrap justify-center w-full md:pt-52 md:gap-y-10 gap-4 gap-x-2">
          {FacilityDate.map((facility, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredFacility(facility.name)}
              onMouseLeave={() => setHoveredFacility(null)}
            >
              {/* Hovered Image - Appears above the item */}
              <div
                className={`absolute lg:-top-80 md:-top-52  -top-24 transition-opacity duration-300  ${
                  hoveredFacility === facility.name ? "opacity-100 z-40" : "opacity-0"
                }`}
              >
                <Image
                  src={facility.image}
                  alt={facility.name}
                  width={297}
                  height={309}
                  className="z-40 lg:w-[297px] md:w-[200px] w-[100px] lg:h-[309px] md:h-[200px] h-[100px] pointer-events-none object-contain"
                />
              </div>

              {/* Facility Name */}
              <div
                className={`xl:text-[46px] md:text-4xl text-2xl gap-4 px-3 flex font-semibold transition-all cursor-pointer z-20 ${
                  hoveredFacility === facility.name
                    ? "text-[#5D3926]"
                    : "text-[#D6B86E]"
                }`}
              >
                {facility.name}
                {facility.dot && (
                  <span className="text-[#B89450] ml-2 md:flex hidden">
                    {facility.dot}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Background Vector Image */}
        <div className="absolute top-[52%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img
            src="/images/facilityVector.png"
            alt="facility"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Facility;
