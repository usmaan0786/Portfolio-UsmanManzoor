import React from "react";
import { styles } from "../styles";
import usman from "../Images/UsmanHeroPic.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import fastaLogo from "../Images/fastLogo.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[5rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start gap-x-2]">
          <div className="flex  flex-col gap-y-6">
            <div className="">
              <h1 className={`${styles.heroHeadText} text-[#ffffff]`}>
                Hi, I'm
                <span
                  className={`${styles.heroHeadText} text-[#52a3ff] ml-[.5rem] text-[1.7rem]`}
                >
                  Usman Manzoor
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} mt-2 text-[#ffffff] text-justify lg:w-[45rem]`}
              >
                As a full stack web developer with a knowledge in software
                development industry, Strong communication and problem-solving
                skills with a bachelor's degree focused on computer science. I
                am a quick learner with strong foundation in programming. Client
                satisfaction and providing professional service are my top
                priorities. I am confident that I can fulfill your expectations
              </p>
            </div>

            <div className="flex justify-between items-center mt-[-1rem]">
              <h1 className="font-medium text-[#ffffff] lg:text-[1.3rem] text-[1rem] uppercase tracking-wider">
                Education
              </h1>
              <img
                src={fastaLogo}
                className="bg-white rounded-full w-[5rem] h-[5rem]"
                alt="Fast Logo"
              />
            </div>
            <div className="text-[#ffffff] flex">
              <div className="flex flex-col gap-y-2 lg:w-[45rem]">
                <p className="font-light text-[1.3rem] lg:mt-[-2rem] mt-[-1rem] ">
                  Bachelor's in Computer Science
                </p>
                <div className="flex lg:justify-between lg:items-center font-light lg:flex-row flex-col gap-y-2 lg:gap-y-2">
                  <p className="text-[1.1rem] text-[#52a3ff] font-bold">
                    Fast - national university of computer and emerging sciences{" "}
                  </p>
                  <p>Peshawar Campus</p>
                </div>
                <div className="flex justify-between items-start">
                  <p>3.02</p>
                  <p>2019 - 2023</p>
                </div>
              </div>
            </div>
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
                  className="lg:w-[80rem] w-[12rem] lg:mt-0 hover:scale-105 duration-200 rounded-full"
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
