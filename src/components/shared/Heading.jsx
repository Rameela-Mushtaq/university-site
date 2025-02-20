import React from 'react'

const Heading = ({label}) => {
  return (
    <div className="text-secondary lg:text-[64px] md:text-4xl text-3xl font-bold text-center">
          {label}
    </div>
  )
}

export default Heading
