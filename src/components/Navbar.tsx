"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Catalog" },
    { id: 3, text: "Places" },
    { id: 4, text: "Blog" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="bg-white w-full border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8 text-gray-900">
        {/* Left Section - Logo & Tagline */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF7F24] via-[#FF4500] to-[#CC3700] text-transparent bg-clip-text">
            BRITSOLS.
          </h1>
          <p className="hidden md:block text-xl sm:text-sm bg-gradient-to-r from-[#FF7F24] via-[#FF4500] to-[#CC3700] text-transparent bg-clip-text">
            Way towards Goals and Success
          </p>
        </div>

        {/* Middle Section - Desktop Navbar Items */}
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gradient-to-r from-[#FF7F24] via-[#FF4500] to-[#CC3700] rounded-lg cursor-pointer duration-300 hover:text-white"
              >
                {item.text}
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <form action="/search" method="GET" className="hidden sm:flex bg-gray-100 rounded-full px-3 py-1">
            <input
              type="text"
              name="query"
              placeholder="Search..."
              className="lg:w-[180px] w-[100px] h-[30px] text-[12px] bg-transparent outline-none placeholder-gray-600 text-black"
            />
            <button type="submit" className="text-gray-800 ml-2">
              <IoSearchOutline size={20} />
            </button>
          </form>

          {/* Icons */}
          <FaRegBell className="text-gray-600 cursor-pointer" size={22} />
          <CiSettings className="text-gray-600 cursor-pointer" size={22} />
        </div>

        {/* Right Section - Create Account Button */}
        <div className="hidden md:flex items-center">
          <button className="px-4 py-2 bg-gradient-to-r from-[#FF7F24] via-[#FF4500] to-[#CC3700] text-white font-semibold rounded-full transition duration-300 shadow-lg hover:shadow-orange-500/50">
            Create Account
          </button>
        </div>

        {/* Mobile Menu Toggle and Icons */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Search Bar (Mobile) */}
          <form action="/search" method="GET" className="flex bg-gray-100 rounded-full px-3 py-1">
            <input
              type="text"
              name="query"
              placeholder="Search..."
              className="w-[100px] h-[30px] text-[12px] bg-transparent outline-none placeholder-gray-600 text-black"
            />
            <button type="submit" className="text-gray-800 ml-2">
              <IoSearchOutline size={20} />
            </button>
          </form>

          {/* Icons */}
          <FaRegBell className="text-gray-600 cursor-pointer" size={22} />
          <CiSettings className="text-gray-600 cursor-pointer" size={22} />

          {/* Mobile Menu Toggle */}
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-gray-900 bg-gradient-to-r from-[#FF7F24] via-[#FF4500] to-[#CC3700] ease-in-out duration-500 p-6"
            : "fixed left-[-100%] w-[70%] ease-in-out duration-500 top-0 h-full"
        }`}
      >
        <h1 className="text-2xl font-bold text-white mb-6">BRITSOLS.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="text-white py-3 border-b rounded-lg hover:bg-white duration-300 hover:text-orange-500 cursor-pointer border-gray-600 px-4"
          >
            {item.text}
          </li>
        ))}

        {/* Create Account Button (Mobile) */}
        <div className="text-center mt-6">
          <button className="px-4 py-2 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-orange-500/50">
            Create Account
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
