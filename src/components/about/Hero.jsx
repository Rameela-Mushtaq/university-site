"use client";
import { RecruiterData1 } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center md:pt-20 py-8 bg-about-bg bg-no-repeat bg-cover bg-center">
      <div className="max-w-[1900px] w-[90%] flex flex-col md:gap-20 gap-10">
        {/* upper div */}
        <div className="w-full flex flex-col justify-start lg:gap-6 md:gap-20 gap-16 z-30">
          <div className="text-white w-fit bg-[#00000066] p-6 font-bold lg:text-[64px] md:text-4xl text-3xl leading-[40px] md:leading-[50px] lg:leading-[75px] xl:leading-[80px]">
            Forge your{" "}
            <span className="text-white bg-[#00548D] px-2 w-fit">Future</span>{" "}
          </div>
          <div>
            <Image
              src="/images/down-arrow2.png"
              alt="arrow"
              width={16}
              height={149}
            />
          </div>
        </div>

        {/* lower div */}
        <div className="flex items-center justify-between w-full">
          <div className="lg:w-[90%] md:w-[89%] w-[85%]">
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
          </div>

          <div className="flex-1 flex justify-end">
            <Image
              src="/images/vector.png"
              alt="vector"
              width={169}
              height={190}
              className="lg:w-[169px] lg:h-[130px] md:w-[120px] md:h-[90px] sm:h-[60px] h-[40px] w-[90px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
