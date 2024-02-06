import React from "react";
import { technologies } from "../Database/Data";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <div className="lg:mx-[20rem] mt-[10rem]">
        <div className="px-[1rem] lg:px-0">
          <motion.div variants={textVariant()} className="">
            <p className={styles.sectionSubText}>technologies</p>
            <h2 className={styles.heroHeadText}>Skills.</h2>
          </motion.div>
          <div className="lg:text-[1.1rem] flex flex-wrap items-center justify-center gap-[3rem] mt-[2rem]">
            {technologies.map((iter) => {
              return (
                <div
                  key={iter.name}
                  className="bg-gradient-to-b  from-[#67c2ff] to-[rgb(198,11,255)] hover:from-[#f6ff78] hover:to-[#beff0dcc] duration-200 rounded-full w-[8.1rem] h-[8.1rem] flex justify-center items-center "
                >
                  <div className="text-[#ffffff] font-light flex flex-col items-center justify-center gap-y-1 bg-[#170b31] w-[7.7rem] h-[7.7rem] rounded-full">
                    <img src={iter.icon} className="w-[3.4rem]" />
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
