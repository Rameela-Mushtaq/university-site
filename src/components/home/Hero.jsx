"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const images = ["/images/hero1.png", "/images/hero2.png", "/images/hero3.png"];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center lg:py-16 py-8 relative bg-heroBg z-3-">
      <div className="w-[90%] max-w-[1900px] flex md:flex-row flex-col gap-6">
        <div className="xl:w-[1320px] lg:block hidden h-full absolute z-20 xl:top-12 top-28 right-0 ">
            <video autoPlay loop muted >
              <source src="/images/video.mp4" type="video/mp4" className="object-contain w-[1100px] z-20"/>
              Your browser does not support the video tag.
            </video>
          </div>
        {/* left side */}
        <div className="lg:w-[47%] w-full flex flex-col justify-start lg:gap-6 md:gap-20 gap-16 z-30">
          <div className="text-heading font-bold lg:text-[64px] md:text-4xl text-3xl leading-[40px] md:leading-[50px] lg:leading-[75px] xl:leading-[80px]">
            A{" "}
            <span className="text-white bg-headingBg px-2 w-fit">Holistic</span>{" "}
            {""}
            Approach To Your {""}
            <span className="text-white bg-headingBg w-fit px-2">
              Development
            </span>
          </div>
          <div>
            <Image
              src="/images/down-arrow.png"
              alt="arrow"
              width={16}
              height={149}
            />
          </div>

          <div className="lg:text-2xl md:text-lg text-sm font-semibold text-secondary md:w-[95%] w-[80%]">
            Empowering your academic, personal, and professional growth through
            comprehensive support and opportunities.
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 z-30">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={images[currentImage]}
              alt="hero"
              width={716}
              height={742}
              className=" absolute lg:bottom-0 md:bottom-[19%] bottom-[25%] lg:right-[15%] md:right-[30%] xl:h-auto lg:h-[550px] md:h-[350px] h-[280px] xl-w-auto lg:w-[550px] md:w-[350px] w-[280px] right-[5%]"
            />
          </motion.div>
          <div>
            <Image
              src="/images/vector.png"
              alt="vector"
              width={169}
              height={190}
              className="absolute sm:right-[5%] right-[3%] md:bottom-[10%] bottom-[3%] lg:w-auto lg:h-auto md:w-[120px] md:h-[120px] h-[80px] w-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
