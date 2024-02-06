import React from "react";
import { styles } from "../styles";
import usman from "../Images/UsmanHeroPic.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[10rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-x-2">
          <div className="lg:mt-[3rem]">
            <h1 className={`${styles.heroHeadText} text-[#ffffff]`}>
              Hi, I'm
              <span className={`${styles.heroHeadText} text-[#52a3ff] ml-[.5rem] text-[1.7rem]`}>
                Usman Manzoor
              </span>
            </h1>

            <p
              className={`${styles.heroSubText} mt-2 text-[#ffffff] text-justify`}
            >
              As a freshman with a BS in Computer Science from the FAST National
              University of Computer and Emerging Sciences.I am a quick learner
              with strong basics. Currently, I am actively seeking job
              opportunities with my keen interest in Web Development.
            </p>
          </div>
          <Tilt>
            <motion.div
              variants={fadeIn("right", "spring", 0, 0.75)}
              className="duration-150"
            >
              <div
                options={{ max: 45, scale: 1, speed: 450 }}
                className="rounded-[1rem] lg:py-5 lg:px-12 px-[1rem] py-[1rem]"
              >
                <img
                  src={usman}
                  alt="UsmanPic"
                  className="lg:w-[80rem] w-[15rem] mt-[2rem] lg:mt-0 hover:scale-105 duration-200"
                />
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Hero;
