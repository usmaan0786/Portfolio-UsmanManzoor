import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../Database/Data";
import { styles } from "../styles";
import logo from "../Images/logo.png";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import {animateScroll as scroll } from "react-scroll";

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
          className="flex items-center gap-2"
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
        <ul className="list-none hidden  sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-[#bdbdbd]"
                  }
                hover:text-white hover:scale-105  text-[1rem] font-medium cursor-pointer duration-100`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
            );
          })}
        </ul>

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
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#5c29ca] border-[#ffffffcc] border-[.1rem] absolute top-20 right-3 mx-4 my-2 w-[10rem] rounded-lg`}
          >
            {" "}
            <ul className="list-none flex items-start flex-col gap-7">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : ""
                    } hover:text-white text-[.9rem] font-medium cursor-pointer duration-100`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
