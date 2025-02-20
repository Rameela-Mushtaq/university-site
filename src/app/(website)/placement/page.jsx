import Contact from '@/components/about/Contact'
import Hero from '@/components/about/Hero'
import Overview from '@/components/about/Overview'
import Program from '@/components/about/Program'
import Progress from '@/components/about/Progress'
import Faq from '@/components/home/Faq'

import Story from "@/components/home/Story"
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Story />
      <Progress />
      <Program />
      <Contact />
      <Faq />
    </div>
  )
}

export default page
