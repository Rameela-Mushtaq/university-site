"use client";
import React, { useState } from "react";
import Heading from "../shared/Heading";
import { FaqData } from "@/constants/data";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center md:py-20 py-10">
      <div className="max-w-[1900px] w-[90%] flex flex-col md:gap-16 gap-8">
        <Heading label="FAQs" />

        <div className="bg-[#F6F6F6] rounded-lg lg:py-12 sm:py-6 py-4 lg:px-16 sm:px-10 px-4">
          {FaqData.map((item, index) => (
            <div key={index} className="border-b border-[#0807081A] last:border-b-0 sm:py-4 py-2">
              <div
                className="w-full cursor-pointer flex justify-between items-center py-4 text-left lg:text-2xl md:text-lg text-sm font-semibold text-secondary"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                {openIndex === index ? (
                  <FiMinus className="text-[#A06C2E]" />
                ) : (
                  <FiPlus className="text-[#A06C2E]" />
                )}
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className=" md:text-lg text-sm text-[#666666] pb-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
