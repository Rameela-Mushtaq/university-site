"use client";
import Image from 'next/image'
import React from 'react'

const Excellence = () => {
  return (
    <div className='flex justify-center lg:py-32 md:py-20 py-10 bg-excellence-bg bg-no-repeat bg-cover'>
       <div className='max-w-[1900px] w-[90%] flex sm:flex-row flex-col sm:gap-20 gap-6'>
          <div className='sm:w-[30%] flex justify-center items-center relative'>
             <Image 
             src="/images/excellenceVector.png"
             alt="excellence"
             width={297}
             height={326}
             className='absolute z-10 bottom-1/2 translate-y-1/2 left-0 sm:block hidden'
             />

             <div className='z-20 md:pl-6 lg:text-[64px] md:text-5xl sm:text-4xl text-3xl font-bold text-white sm:text-start text-center'>Center of Excellence</div>
          </div>

          <div className='flex-1 font-normal lg:text-xl md:text-sm text-xs text-white sm:text-start text-center flex items-center'>
          The Government of Gujarat has awarded the University with a status of “Centre of Excellence”. This status has elevated the University as one among the top seven Institutes of Gujarat. This distinction bestowed upon the University showcases that Quality Education, Excellent Research, Innovative Teaching Methodologies, Quality of Extension Services, High Employability and Entrepreneurship are being imparted. Other Institutes receiving Centre of Excellence status are Pandit Deendayal Energy University (PDEU), Nirma University, Ahmedabad University, CEPT, Charusat and DA-IICT.
          </div>
       </div>
    </div>
  )
}

export default Excellence
