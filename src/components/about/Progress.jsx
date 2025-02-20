"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "../shared/Heading";
import { ProgressData } from "@/constants/data";
import { Vector } from "@/svgs/vector";

const images = [
  "/images/program1.png", // Image for vector 1
  "/images/program2.png", // Image for vector 2
  "/images/program3.png", // Image for vector 3
];

const Progress = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-bgColor md:py-24 py-8 flex justify-center relative">
      <div className="md:flex hidden flex-col max-w-[1900px] w-[90%] relative">
        <div className="flex flex-col justify-end items-end gap-3">
          <div className="text-secondary font-bold lg:text-[64px] md:text-4xl text-3xl leading-[40px] md:leading-[50px] lg:leading-[75px] xl:leading-[80px] lg:w-[50%]">
            Students Progress {""}
            Cycle
          </div>
          <div className="lg:text-2xl md:text-lg text-sm w-[50%]">
            At Marwadi University, the student progress cycle starts from
            enrollment to graduation and beyond. From creating an optimal
            learning environment in their academic years to ultimately landing
            plum jobs or starting their entrepreneurial journey
          </div>
        </div>

        {/* Vector 2 */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-6 w-[30%]">
          <div className="relative flex">
              <Vector color={activeStep === 1 ? "#00A4BB" : "#8C8C8C"} />
              <div className="absolute top-1/2 left-[18%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[64px] text-white">
                02
              </div>
            </div>
            <div className="flex flex-col gap-1 text-secondary">
              <div className="font-bold lg:text-4xl md:text-2xl text-xl text-[#6C4327]">
                Training & Assessment
              </div>
              <div className="lg:text-2xl md:text-base text-sm text-[#3D3D3D]">
                Support services providing guidance to prepare students for
                successful careers.
              </div>
            </div>
          </div>
        </div>

        {/* Vector 1 */}
        <div className="flex flex-col gap-6 w-[30%] absolute top-[10%]">
        <div className="relative flex">
              <Vector color={activeStep === 0 ? "#00A4BB" : "#8C8C8C"} />
              <div className="absolute top-1/2 left-[18%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[64px] text-white">
                01
              </div>
            </div>
          <div className="flex flex-col gap-1 text-secondary">
            <div className="font-bold lg:text-4xl md:text-2xl text-xl text-[#6C4327]">
              LEARNING
            </div>
            <div className="lg:text-2xl md:text-base text-sm text-[#3D3D3D]">
              Support services providing guidance to prepare students for
              successful careers.
            </div>
          </div>
        </div>

        {/* Vector 3 */}
        <div className="flex justify-end items-end -mt-20">
          <div className="flex flex-col gap-6 w-[30%]">
            <div className="relative flex">
              <Vector color={activeStep === 2 ? "#00A4BB" : "#8C8C8C"} />
              <div className="absolute top-1/2 left-[18%] transform -translate-x-1/2 -translate-y-1/2 font-bold text-[64px] text-white">
                03
              </div>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="font-bold lg:text-4xl md:text-2xl text-xl text-[#6C4327]">
                INTERNSHIP
              </div>
              <div className="lg:text-2xl md:text-base text-sm text-[#3D3D3D]">
                Support services providing guidance to prepare students for
                successful careers.
              </div>
            </div>
          </div>
        </div>

        <div className="absolute xl:left-[12%] lg:left-[18%] xl:top-0 lg:top-[10%] md:left-[20%] md:top-[6%]">
          <img
            src="/images/path.png"
            alt="path"
            className="xl:h-full xl:w-full lg:w-[300px] md:w-[200px]"
          />
        </div>

        <div className="absolute xl:right-[20%] lg:right-[15%] xl:top-[28%] lg:top-[35%] md:right-[14%] md:top-[30%]">
          <img
            src="/images/path.png"
            alt="path"
            className="xl:h-full xl:w-full lg:w-[300px] md:w-[200px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 md:flex hidden">
        <motion.img
          src={images[activeStep]}
          alt="program"
          className="xl:w-[513px] xl:h-[543px] lg:h-[500px] md:h-[400px]"
          animate={{ opacity: [0, 1], scale: [0.8, 1] }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* mobile view */}
      <div className="md:hidden flex flex-col max-w-[1900px] w-[90%] gap-6">
        <div className="flex flex-col  gap-3">
          <Heading label="Student Progress Cycle" />
          <div className="sm:text-lg text-sm">
            At Marwadi University, the student progress cycle starts from
            enrollment to graduation and beyond. From creating an optimal
            learning environment in their academic years to ultimately landing
            plum jobs or starting their entrepreneurial journey
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="grid sm:grid-cols-2 grid-cols-1  justify-center items-center gap-6">
            {ProgressData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-8 rounded-lg border border-primary sm:w-[300px] w-full"
              >
                <img
                  src={item.icon}
                  alt="one"
                  className="object-cover h-[260px] sm:w-[327px] w-full rounded-lg"
                />
                <div className="flex flex-col gap-1 px-4 pb-4">
                  <div className="font-bold lg:text-4xl md:text-2xl text-xl text-[#6C4327]">
                    {item.title}
                  </div>
                  <div className="lg:text-2xl md:text-base text-sm text-[#3D3D3D]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
