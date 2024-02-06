import React from "react";
import { FaGithub } from "react-icons/fa";
import LinkedIn from "../Images/ContactMe/linkedin.png";
import Github from "../Images/ContactMe/github.png";
import Insta from "../Images/ContactMe/instagram.png";
const Footer = () => {
  return (
    <div className="mt-[5rem] bg-[#170b31] flex flex-col-reverse lg:flex-row items-center justify-center p-[2.5rem] gap-[2rem]">
      <p className="font-medium text-[1.1rem] ml-[.7rem] lg:ml-0">
        Usman Manzoor © {new Date().getFullYear()}
      </p>
      <div className="lg:hidden flex sm:flex flex-row gap-9 justify-center items-center">
        <a
          href="https://github.com/usmaan0786"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src={Github}
            alt="Github"
            className="w-[2.5rem] cursor-pointer opacity-80 hover:opacity-100 duration-150"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/usman-manzoor-a4b89827a/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="w-[2.5rem] cursor-pointer opacity-80 hover:opacity-100 duration-150"
          />
        </a>
        <a
          href="    https://www.instagram.com/usman_.28/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src={Insta}
            alt="instagram"
            className="w-[2.5rem] cursor-pointer opacity-80 hover:opacity-100 duration-150"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
