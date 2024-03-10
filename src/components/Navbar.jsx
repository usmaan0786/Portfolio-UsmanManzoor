import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import logo from "../Images/wolf.png";

const Navbar = () => {

  return (
    <nav
      className={`${
        styles.paddingX
      } w-screen flex items-center py-5 top-0 z-10 bg-transparent`}
    >
      <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-1"
        >
          <img src={logo} className="w-[2.8rem] mr-2 object-contain" />
          <p className="text-[1.4rem] font-bold cursor-pointer">
            Usman Manzoor <span className="font-light text-[1.1rem]"> | Full Stack Developer</span>
          </p>
        </Link>
      </div> 
    </nav>
  );
};

export default Navbar;
