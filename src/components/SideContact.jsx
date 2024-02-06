import React from 'react'
import LinkedIn from "../Images/ContactMe/linkedin.png";
import Github from "../Images/ContactMe/github.png";
import Insta from "../Images/ContactMe/instagram.png";

const SideContact = () => {
  return (
    <div className="flex flex-col ml-[1rem] gap-9 justify-center items-center">
        <a
          href="https://github.com/usmaan0786"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img
            src={Github}
            alt="Github"
            className="w-[2.5rem] "
          />
        </a>

        <a
          href="https://www.linkedin.com/in/usman-manzoor-a4b89827a/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="w-[2.5rem] "
          />
        </a>
        <a
          href="    https://www.instagram.com/usman_.28/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img
            src={Insta}
            alt="instagram"
            className="w-[2.5rem] "
          />
        </a>
      </div>
  )
}

export default SideContact