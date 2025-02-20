"use client";
import { NavbarData } from "@/constants/data";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { CgMenu } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" top-0 left-0 w-full z-50">
      <div className="bg-bgColor py-4 ">
        <div className="max-w-[1900px] w-[90%] mx-auto flex md:gap-6 gap-4 md:pr-24 justify-end items-center">
          <button className="bg-btnBg px-3 py-1 rounded-full text-white md:text-sm text-[10px] font-semibold whitespace-nowrap">
            Apply Now
          </button>
          <div className="flex flex-wrap sm:gap-6 gap-2 md:text-sm text-[10px] font-semibold">
            <div>Students</div>
            <div>Parents</div>
            <div>Faculty & Staff</div>
            <div>Alumni</div>
          </div>
          <div className="text-2xl">
            <IoMdSearch />
          </div>
        </div>
      </div>
      <div className="bg-navBg md:py-6 py-4">
        <div className="max-w-[1900px] w-[90%] mx-auto flex justify-between gap-4">
          <a href="/placement" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={225}
              height={64}
              className="lg:w-auto w-[150px]"
            />
          </a>

          {/*  (Hamburger Icon) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <CgMenu className="w-6 h-6" />
            </button>
          </div>

          {/* nav items */}
          <div className="lg:flex hidden items-center xl:gap-6 gap-4" ref={dropdownRef}>
            {NavbarData.map((item, index) => (
              <div key={index} className="relative ">
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center gap-1 font-semibold xl:text-base text-sm cursor-pointer"
                >
                  <span>{item.label}</span>
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                </div>
                {item.dropdown && openDropdown === index && (
                  <div className="absolute z-40 top-1/2 translate-x-1/2 right-24 mt-12 w-auto p-5 flex flex-col gap-6 text-lg font-normal whitespace-nowrap bg-[#EEE8DF] text-[#170F49] border">
                    {item.dropdown.map((subItem, subIndex) => (
                      <div key={subIndex}>{subItem.label}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu (Dropdown for Small Screens) */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-6 px-4 py-6 ">
            {NavbarData.map((item, index) => (
              <div key={index} className="relative">
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center justify-between gap-1 font-semibold xl:text-base text-sm cursor-pointer"
                >
                  <span>{item.label}</span>
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                </div>
                {item.dropdown && openDropdown === index && (
                  <div className="">
                    {item.dropdown.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="block px-4 pt-3 text-[#170F49]"
                      >
                        {subItem.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;