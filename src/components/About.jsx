import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../Database/Data";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <div className="lg:mx-[20rem] mt-[3rem] lg:mt-0">
        <div className="px-[1rem] lg:px-0">
          <motion.div variants={textVariant()} className="">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.heroHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 lg:text-[1rem] text-[.9rem]"
          >
            I am a Skilled software Developer with Experience in typescript and
            javascript Experience in frameworks like react, nodejs and three.js
            i am a quick learner and collaborate coselly with clients to create
            efficent scalbale user friendly solution that solve real worls
            probelms let's work together to bring your idea to life.
          </motion.p>
        </div>

        <div className="mt-[2rem] flex flex-wrap lg:gap-10 gap-5 mx-[.5rem] lg:mx-0 justify-center">
          {services.map((service, index) => {
            return (
              <Tilt key={service.title}>
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                  className="rounded-[1rem] green-pink-gradient flex"
                >
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
