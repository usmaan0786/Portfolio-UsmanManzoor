import React from "react";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-[5rem] bg-[#170b31] flex items-center justify-center p-[2rem] py-[3rem]">
      <p>Usman Manzoor  © {new Date().getFullYear()}</p>
      <div className="list-none hidden  sm:flex flex-row gap-10">
          <a href="#" target="_blank" rel="noopener noreferrer" className="">
            <FaGithub className=" text-[#e4e4e4] hover:text-white text-[2rem] cursor-pointer" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="">
            <FaGithub className=" text-[#e4e4e4] hover:text-white text-[2rem] cursor-pointer" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="">
            <FaGithub className=" text-[#e4e4e4] hover:text-white text-[2rem] cursor-pointer" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="">
            <FaGithub className=" text-[#e4e4e4] hover:text-white text-[2rem] cursor-pointer" />
          </a>
        </div>
    </div>
  );
};

export default Footer;
