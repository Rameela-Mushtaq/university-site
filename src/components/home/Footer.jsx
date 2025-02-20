"use client";
import React from 'react'
import Heading from '../shared/Heading'
import { FooterData } from '@/constants/data'

const Footer = () => {
  return (
    <div className='flex justify-center  md:py-9 py-6 bg-bgColor'>
       <div className='max-w-[1900px] w-[90%] flex flex-col lg:gap-14 gap-8'>
           <div className='flex justify-start'><Heading label="Take the Next Step"/></div>

           <div className='flex md:flex-nowrap flex-wrap justify-between gap-6 w-full'>
            {FooterData.map((item, index) => (
                <div key={index} className='group hover:bg-heading rounded-2xl bg-transparent w-full flex justify-between items-center gap-6 border border-[#CDA452] md:py-6 py-4 md:px-8 px-5'>
                    <div className='flex gap-4 lg:text-[26px] md:text-lg text-base font-bold text-[#A06C2E] group-hover:text-white '>
                      {item.icon("currentColor")}
                        <div>{item.title}</div>
                    </div>
                    <div className='text-[#6C7278] group-hover:text-white text-2xl'>
                    {item.icon2("currentColor")}
                    </div>
                </div>
            ))}
           </div>
       </div>
    </div>
  )
}

export default Footer
