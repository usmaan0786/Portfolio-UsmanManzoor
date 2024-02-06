import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import logo from "../Images/logo.png";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const { active, setActive } = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed py-5 top-0 z-20 bg-transparent`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-1"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className="w-[4rem] object-contain" />
          <p className="text-[1.3rem] font-bold cursor-pointer">
            Usman Manzoor <span className="sm: hidden"> | Web Developer</span>
          </p>
        </Link>
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

        <div className="sm:hidden flex felx-1 justify-end items-center">
          {toggle ? (
            <IoIosClose
              className="text-[2rem] oject-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <HiMenu
              className="text-[2rem] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex flex-col items-center justify-center gap-y-[3rem]"
            } p-6 bg-[#161616] border-[#ffffffcc] border-[.1rem] absolute top-20 right-3 mx-4 my-2 w-max h-max rounded-lg`}
          >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub className=" text-[#e4e4e4] hover:text-white text-[2rem] cursor-pointer" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub className=" text-[#e4e4e4] hover:text-white text-[2rem] cursor-pointer" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub className=" text-[#e4e4e4] hover:text-white text-[2rem] cursor-pointer" />
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
