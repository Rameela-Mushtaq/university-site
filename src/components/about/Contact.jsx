import React from "react";
import Heading from "../shared/Heading";
import { ContactData } from "@/constants/data";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-bgColor md:py-16 py-8 flex justify-center">
      <div className="flex md:flex-row flex-col-reverse  max-w-[1900px] w-[90%]">
        {/* Text & Cards Section */}
        <div className="flex flex-col lg:gap-16 gap-2 w-full justify-center md:w-[65%] md:-mr-32 -mt-32 z-20">
          <div className="md:flex hidden justify-start">
            <Heading label="Contact Us" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ContactData.map((item, index) => (
              <div
                key={index}
                className="group hover:bg-heading hover:border-headingBg md:p-10 p-6 hover:-rotate-2 bg-white rounded-xl shadow-md border border-[#A06C2E] flex flex-col justify-center items-center lg:gap-16 gap-8 transition-all duration-500 ease-in-out delay-100"
              >
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="text-[#CDA452] group-hover:text-white transition-colors duration-500 ease-in-out delay-100">
                    {item.icon("currentColor")}
                  </div>
                  <div className="flex justify-center">
                    <div className="md:text-2xl text-lg lg:w-[60%] text-center font-semibold text-secondary group-hover:text-white transition-colors duration-500 ease-in-out delay-100">
                      {item.title}
                    </div>
                  </div>
                  <p className="text-[#666666] group-hover:text-white md:text-base text-sm text-center transition-colors duration-500 ease-in-out delay-100">
                    {item.description}
                  </p>
                </div>
                <div className="flex  items-center gap-4 text-[#A06C2E] font-semibold md:text-2xl text-base group-hover:text-white transition-colors duration-500 ease-in-out delay-100">
                  {item.text}
                  <div className="text-[#A06C2E] group-hover:text-white transition-colors duration-500 ease-in-out delay-100">
                    {item.icon2("currentColor")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full flex flex-col gap-6 md:flex-1 z-10">
          <div className="flex md:hidden justify-start">
            <Heading label="Contact Us" />
          </div>
          <img
            src="/images/contact.png"
            alt="Contact Us Image"
            className="rounded-2xl object-cover w-full md:h-full h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
