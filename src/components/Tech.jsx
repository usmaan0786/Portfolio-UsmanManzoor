import React from "react";
import { technologies } from "../Database/Data";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  console.log(technologies);
  return (
    <>
      <div className="lg:mx-[20rem] mt-[10rem]">
        <div className="px-[1rem] lg:px-0">
          <motion.div variants={textVariant()} className="">
            <p className={styles.sectionSubText}>technologies</p>
            <h2 className={styles.heroHeadText}>Skills.</h2>
          </motion.div>
          <div className="text-[1.4rem] flex flex-wrap items-center justify-center gap-[3rem] mt-[2rem]">
            {technologies.map((iter) => {
              return (
                <div key={iter.name} className="flex flex-col items-center gap-y-1 hover:shadow-lg shadow-[#ccc] ">
                  <img src={iter.icon} className="w-[3rem]" />
                  <p className="text-white font-thin">{iter.name}</p>
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
