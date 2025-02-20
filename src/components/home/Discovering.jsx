"use client";
import { DiscoverData } from "@/constants/data";
import React from "react";

const Discovering = () => {
  return (
    <div className="flex justify-center md:py-20 py-8">
      <div className="max-w-[1900px] w-[90%] flex lg:flex-row flex-col lg:gap-12 gap-6">
        {/* heading */}
        <div className="flex flex-col lg:gap-9 gap-4 lg:w-[30%]">
          <div className="text-secondary font-bold lg:text-[64px] md:text-4xl text-3xl leading-[40px] md:leading-[50px] lg:leading-[75px] xl:leading-[80px]">
            Discovering Wisdom with TED Talks
          </div>

          <div className="flex text-[#A06C2E] items-center gap-4 md:text-2xl text-lg font-semibold">
            View TEDx
            <img src="/images/arrow-up.png" alt="arrow-up" className="md:w-[30px] md:h-[37px] w-[15px] h-[17px]"/>
          </div>
        </div>
        {/* left div */}
        <div className="flex-1 sm:flex hidden flex-col">
          {/* upper images */}
          <div className="flex justify-between items-end w-full">
            <div className="flex flex-col items-start gap-2.5 ml-12">
              <img src="/images/talk1.png" alt="talk" className="rounded-lg" />
              <div className="font-semibold text-[#89560A] text-center w-fit">
                Hlubi Mboya-Arnold
              </div>
            </div>

            <div className="flex flex-col items-start lg:gap-8 gap-4">
              <div className="flex items-start xl:ml-[-150px] ml-[-70px]">
                <div className="flex flex-col items-start gap-2.5">
                  <img
                    src="/images/talk2.png"
                    alt="talk"
                    className="rounded-lg"
                  />
                  <div className="font-semibold text-[#89560A] text-center w-fit">
                    Dr Mylswamy Annadurai
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-end justify-end w-full">
                <div className="flex flex-col items-start gap-2.5">
                  <img
                    src="/images/talk4.png"
                    alt="talk"
                    className="rounded-lg"
                  />
                  <div className="font-semibold text-[#89560A] text-center w-fit">
                    Om Satani
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5">
                  <img
                    src="/images/talk5.png"
                    alt="talk"
                    className="rounded-lg"
                  />
                  <div className="font-semibold text-[#89560A] text-center w-fit">
                    Dr Rupinder Singh Sodhi
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:text-2xl text-lg font-semibold w-full h-[90px] flex justify-center items-center">
            <div className="w-[35%]">
              TED Members make our mission possible by supporting global access
              to inspiring ideas.
            </div>
          </div>

          {/* lower images */}
          <div className="flex justify-between gap-5 w-full">
            <div className="flex flex-col items-start gap-2.5">
              <img src="/images/talk3.png" alt="talk" className="rounded-lg" />
              <div className="font-semibold text-[#89560A] text-center w-fit">
                Rajesh Srivastava
              </div>
            </div>

            <div className="flex gap-4 items-end justify-end w-full">
              <div className="flex flex-col items-start gap-2.5">
                <img
                  src="/images/talk6.png"
                  alt="talk"
                  className="rounded-lg"
                />
                <div className="font-semibold text-[#89560A] text-center w-fit">
                  Dr Rupinder Singh Sodhi
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5">
                <img
                  src="/images/talk7.png"
                  alt="talk"
                  className="rounded-lg"
                />
                <div className="font-semibold text-[#89560A] text-center w-fit">
                  Shruti Chaturvedi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile cards */}
        <div className="sm:hidden grid grid-cols-2 gap-4">
          {DiscoverData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2.5 "
            >
              <img
                src={item.icon}
                alt="talk"
                className="rounded-lg w-[110px] h-[130px]"
              />
              <div className="font-semibold text-[#89560A] text-sm text-center w-fit">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* mobile text */}
        <div className="sm:hidden flex text-lg font-semibold">
          TED Members make our mission possible by supporting global access to
          inspiring ideas.
        </div>
      </div>
    </div>
  );
};

export default Discovering;
