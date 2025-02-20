"use client";
import React from "react";
import Heading from "../shared/Heading";
import { CampusData1, CampusData2 } from "@/constants/data";

const Campus = () => {

    return (
        <div className="flex justify-center md:py-20 py-10 bg-bgColor">
            <div className="max-w-[1900px] w-[90%] flex flex-col items-center justify-center md:gap-16 gap-8">
                <Heading label="Life on Campus" />

                <div className="flex sm:flex-row flex-col  gap-4">
                    {/* left image */}
                    <div className="relative xl:w-[25%] sm:w-[35%] xl:h-[570px] md:h-[350px] sm:h-[250px] h-[220px] object-cover overflow-hidden w-full rounded-lg border border-[#A06C2E]">
                        <img
                            src="/images/campus.png"
                            alt="campus"
                            className="z-10 rounded-lg w-full h-full object-cover"
                        />
                        {/* <div
                            className="absolute w-full h-full top-0 left-0 z-30 rounded-lg bg-[linear-gradient(180deg, rgba(24, 59, 86, 0.0001) 0%, rgba(22, 49, 70, 0.2) 45.38%, rgba(21, 37, 50, 0.9) 100%)]"
                        ></div> */}

                        <div className="absolute text-center font-semibold lg:text-2xl md:text-lg  text-sm bottom-[5%] -translate-x-1/2 left-[46%] z-30 text-[#BA8938] w-full">
                            MU Fest
                        </div>
                    </div>

                    {/* right image */}
                    <div className="flex-1 flex justify-between gap-4 flex-col">
                        {/* upper images */}
                        <div className="flex sm:flex-row flex-col gap-4">
                            {CampusData1.map((item, index) => (
                                <div key={index} className="relative border border-[#A06C2E] rounded-lg">
                                    <img
                                        src={item.image}
                                        alt="icon"
                                        className="z-10 rounded-lg sm:h-auto h-[220px] object-fit w-full"
                                    />

                                    <div className="absolute text-center font-semibold lg:text-2xl md:text-lg bottom-[5%] -translate-x-1/2 left-[50%] z-20 text-[#BA8938] block">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* bottom images */}
                        <div className="flex sm:flex-row flex-col gap-4">
                            {CampusData2.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden border border-[#A06C2E] rounded-lg"
                                >
                                    <img
                                        src={item.image}
                                        alt="icon"
                                        className="z-10 rounded-lg w-full sm:h-auto h-[220px] object-fit"
                                    />

                                    <div className="absolute text-center font-semibold lg:text-2xl md:text-lg  bottom-[5%] -translate-x-1/2 left-[50%] z-20 text-[#BA8938]">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campus;
