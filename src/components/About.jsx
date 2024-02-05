import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../Database/Data";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <div className="lg:mx-[20rem]">
        <div className="px-[1rem] lg:px-0">
          <motion.div variants={textVariant()} className="">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.heroHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-[1rem]"
          >
            I am a Skilled software Developer with Experience in typescript and
            javascript Experience in frameworks like react, nodejs and three.js
            i am a quick learner and collaborate coselly with clients to create
            efficent scalbale user friendly solution that solve real worls
            probelms let's work together to bring your idea to life.
          </motion.p>
        </div>

        <div className="mt-[2rem] flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => {
            return (
              <Tilt key={service.title}>
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                  className="p-[1px] rounded-[1rem] green-pink-gradient"
                >
                  <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="rounded-[1rem] lg:py-5 lg:px-12 px-[1rem] py-[1rem] flex  flex-wrap justify-center items-center"
                  >
                    <p className="text-white text-[1.3rem] lg:text-[1.5rem] font-bold text-center w-[10rem] my-[2rem]">
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
