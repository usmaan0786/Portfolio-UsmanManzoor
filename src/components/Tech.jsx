import React from "react";
import { technologies } from "../Database/Data";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <div className="lg:mx-[20rem] mt-[5rem] lg:mt-[7rem]">
        <div className="px-[1.5rem] lg:px-0">
          <motion.div variants={textVariant()} className="">
            <p className={styles.sectionSubText}>technologies</p>
            <h2 className={styles.heroHeadText}>Skills.</h2>
          </motion.div>
          <div className="lg:text-[1rem] text-[.8rem] flex flex-wrap items-center justify-center lg:gap-[2rem] gap-[1rem] mt-[2rem]">
            {technologies.map((iter) => {
              return (
                <div
                  key={iter.name}
                  className=" flex justify-center items-center cursor-pointer"
                >
                  <div className="text-[#ffffff] font-light flex flex-col items-center justify-center gap-y-2">
                    <img src={iter.icon} className="lg:w-[2.6rem] w-[2.5rem] rounded-[.2rem] " />
                    <p className="">{iter.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
