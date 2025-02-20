"use client";
import { WhyUsData } from '@/constants/data'
import React from 'react'
import Heading from '../shared/Heading'

const WhyUs = () => {
  return (
    <div className='flex justify-center md:py-20 py-10 bg-bgColor'>
    <div className='max-w-[1900px] w-[90%] flex justify-center flex-col md:gap-16 gap-8'>
       <Heading label="Why Us" />

        <div className='grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-6'>
         {WhyUsData.map((item, index) => (
            <div key={index} className='relative flex flex-col items-center justify-center gap-4 text-secondary md:pt-4 pt-1'>
               <img src={item.icon} alt="icon" className='absolute top-0 left-[40%] transform lg:w-16 lg:h-16  w-10 h-10 z-10'/>
            
               <div className='font-extrabold xl:text-[84px] lg:text-6xl text-4xl z-20  text-center'>{item.number}</div>
               <div className='z-20 xl:text-[26px] lg:text-lg md:text-base text-sm font-semibold lg:w-[50%] w-[25%] text-center'>{item.title}</div>
            </div>    
         ))
         }
        </div>
    </div>
 </div>
  )
}

export default WhyUs
