"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { BsDiscord, BsFacebook, BsInstagram, BsList, BsX } from 'react-icons/bs'

const style = {
  navLinks: ' ml-10 uppercase border-b border-white hover:border-[#F6B519] text-xl',
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const togglMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <nav>
        {/*Desktop menu */}
        <div className="flex items-center justify-around h-full px-4 w-full">
          <a href="/">
            <Image
              src="/Picsart_22-12-23_03-43-30-381 (1).ico"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>

          


          <div className="w-[800px] h-full hidden sm:flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer sm:text-sm ">
                About
              </a>
              <a href="#skills" className="cursor-pointer sm:text-sm ">
                Skills
              </a>
              <a href="#Projects" className="cursor-pointer sm:text-sm ">
                Projects
              </a>
            </div>
            <div className="flex flex-row gap-5 px-5 ">
              <a href="https://www.facebook.com/Eftekhar.Ahmed20" className="cursor-pointer h-6 w-6   ">
                <img src="/facebook.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/ea_shishir/" className="cursor-pointer h-6 w-6    ">
                <img src="/instagram.svg" alt="" />
              </a>
              <a href="https://www.facebook.com/Eftekhar.Ahmed20" className="cursor-pointer h-6 w-6  ">
                <img src="/discord.svg" alt="" />
              </a>
            </div>
          </div>

          {/*Mobile menu */}

          <div onClick={togglMenu} className="sm:hidden cursor-pointer pl:24">
            <BsList className='text-4xl text-white' />


          </div>
        </div>
        <div className={menuOpen ?
          " fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-violet-900 p-10 ease-in-out duration-500"
          : "fixed left-[100%] top-0 p-10 ease-in-out duration-500"} >

          <div onClick={togglMenu} className=" flex w-full items-center justify-end ">
            <div className="cursor-pointer">
              <BsX className="text-4xl text-white" />

            </div>

          </div>
          {/*Mobile menu */}
          <div className="flex items-center justify-between w-full h-auto   border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer sm:text-sm font-bold ">
                About
              </a>
              <a href="#skills" className="cursor-pointer sm:text-sm font-bold">
                Skills
              </a>
              <a href="#Projects" className="cursor-pointer sm:text-sm font-bold ">
                Projects
              </a>
            </div>
            <div className="mt-5 flex items-center justify-between w-full h-auto   border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">
              <a href="https://www.facebook.com/Eftekhar.Ahmed20" className=" cursor-pointer h-6 w-6   ">
                <img  src="/facebook.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/ea_shishir/" className=" cursor-pointer h-6 w-6    ">
                <img src="/instagram.svg" alt="" />
              </a>
              <a href="https://www.facebook.com/Eftekhar.Ahmed20" className="cursor-pointer h-6 w-6  ">
                <img src="/discord.svg" alt="" />
              </a>
            </div>
          {/*social media link */}



          <Image
            src="/Picsart_22-12-23_03-43-30-381 (1).ico"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

        </div>






      </nav>
    </div>









  );
};

export default Navbar;
