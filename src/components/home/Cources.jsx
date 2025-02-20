"use client";
import { CoursesData } from "@/constants/data";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../shared/Heading";

const Cources = () => {
  const categories = Object.keys(
    CoursesData.reduce((acc, item) => ({ ...acc, ...item }), {})
  );

  const [activeTab, setActiveTab] = useState(categories[0]);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoveredImage, setHoveredImage] = useState("");

  // Find active courses
  const activeCourses =
    CoursesData.find((item) => item[activeTab])?.[activeTab] || [];

  return (
    <div className="bg-bgColor flex justify-center md:py-20 py-8 z-30">
      <div className="max-w-[1900px] w-[90%] flex justify-center flex-col lg:gap-10 gap-4 z-30">
        <Heading label="Courses we offers" />

        {/* Tabs Section */}
        <div className="flex flex-col lg:gap-16 md:gap-10 gap-6">

          {/* Dropdown for small screens */}
          <div className="md:hidden w-full">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full px-4 py-2 border-b-4 border-primary bg-transparent outline-none font-medium text-lg text-primary "
            >
              {categories.map((category) => (
                <option key={category} value={category} className="text-[#9F937F]">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Tab buttons for larger screens */}
          <div className="hidden md:flex justify-between w-full gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 border-b-4 xl:text-2xl text-lg transition ${activeTab === category
                    ? "border-primary text-primary font-bold"
                    : "border-[#E0D8CB] text-[#9F937F] font-normal"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="flex gap-10">
            {/* Left Image Section */}
            <div className="w-[32%] md:flex hidden">
              <img
                src={hoveredImage || activeCourses[0]?.image}
                alt="Course"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Cards Section */}
            <div className="flex-1 grid lg:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
              {activeCourses.map((course) => (
                <div
                  key={course.id}
                  onMouseEnter={() => {
                    setHoveredCourse(course.id);
                    setHoveredImage(course.image);
                  }}
                  onMouseLeave={() => {
                    setHoveredCourse(null);
                    setHoveredImage("");
                  }}
                  className="relative bg-transparent md:p-6 p-4 rounded-2xl flex flex-col gap-4 transition hover:-rotate-2 hover:bg-white border border-primary"
                >
                  <img
                    src={course.icon}
                    alt={course.title}
                    className="w-8 h-8"
                  />

                  {/* Show vector1.png only when hovered */}
                  {hoveredCourse === course.id && (
                    <div className="absolute top-[-10px] right-[-10px] rounded-full bg-primary md:p-4 p-3">
                      <Image
                        src="/images/vector1.png"
                        alt="vector"
                        width={20}
                        height={20}
                        className="md:w-auto md:h-auto w-4 h-4"
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-1">
                    <div className="font-semibold md:text-2xl text-base">{course.title}</div>
                    <div className="text-[#666666] md:flex hidden font-normal text-sm">{course.description}</div>
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

export default Cources;
