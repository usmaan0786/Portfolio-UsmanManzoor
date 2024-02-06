import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import logo from "../Images/logo.png";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { navLinks } from "../Database/Data";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-screen flex items-center py-5 fixed top-0 z-10 bg-transparent`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
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
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#ff9b9bcc]" : "text-[#ffffff]"
              } hover:text-[#52a3ff] duration-100 text-[1rem] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex justify-between items-center">
          {toggle ? (
            <IoIosClose
              className="text-[2rem] object-contain cursor-pointer"
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
              !toggle
                ? "hidden"
                : "flex flex-col items-center justify-center gap-[5rem]"
            } p-6 bg-[#170b31] border-[#ffffff] border-[.1rem] absolute top-20 right-[.5rem]  mx-4 my-2 w-max h-max rounded-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-[2rem]">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
