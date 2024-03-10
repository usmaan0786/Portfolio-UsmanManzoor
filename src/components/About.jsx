import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../Database/Data";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <div className="lg:mx-[20rem] mt-[8rem] lg:mt-0">
        <div className="px-[1rem] lg:px-0">
          <motion.div variants={textVariant()} className="">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.heroHeadText}>Overview.</h2>
          </motion.div>
        </div>

        <div className="mt-[2rem] flex flex-wrap lg:gap-10 gap-5 mx-[.5rem] lg:mx-0 justify-center">
          {services.map((service, index) => {
            return (
              <Tilt key={service.title}>
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                  className="rounded-[.5rem] green-pink-gradient flex"
                >
                {/* green-pink-gradient */}
                  <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="rounded-[1rem] lg:py-5 lg:px-12 px-[1rem] py-[1rem] flex flex-wrap justify-center w-[9rem] lg:w-[15rem] h-[7rem] lg:h-[10rem] items-center"
                  >
                    <p className="text-white text-[.9rem] lg:text-[1.3rem] font-bold text-center w-[10rem] ">
                      {service.title}
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
