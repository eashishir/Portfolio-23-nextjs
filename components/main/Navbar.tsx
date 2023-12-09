import { Socials } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Picsart_22-12-23_03-43-30-381 (1).ico"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Eftakhar_Ahmed_Dev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer sm:text-sm ">
              About
            </a>
            <a href="#skills" className="cursor-pointer sm:text-sm ">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer sm:text-sm ">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
        <a href="https://www.facebook.com/Eftekhar.Ahmed20" className="cursor-pointer   ">
              <img src="/facebook.svg" alt="" />
            </a>
        <a href="https://www.instagram.com/ea_shishir/" className="cursor-pointer    ">
              <img src="/instagram.svg" alt="" />
            </a>
        <a href="https://www.facebook.com/Eftekhar.Ahmed20" className="cursor-pointer h-6 w-6  ">
              <img src="/discord.svg" alt="" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
