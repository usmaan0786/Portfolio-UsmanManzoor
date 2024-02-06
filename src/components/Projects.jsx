import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../Database/Data";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [read, setRead] = useState(false);

  const handleClick = () => {
    setRead(!read);
  };

  const handleBackgroundClick = () => {
    setRead(false);
  };

  console.log("Projects = ", projects);

  return (
    <>
      <div className="lg:mx-[20rem] mt-[10rem]">
        <div className="px-[1rem] lg:px-0">
          <motion.div variants={textVariant()} className="">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.heroHeadText}>Projects.</h2>
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
      </div>
      <div className="mt-[2rem] flex flex-wrap gap-10 justify-center mx-[10rem]">
        {projects.map((iter, index) => {
          return (
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-[#170b31] p-2 rounded-xl m-[2rem] lg:m-0 lg:w-[23rem] w-[24rem] h-[32rem] lg:h-[30rem] border-[.1rem] border-[#f4c7ff]"
              >
                <div className="relative w-full">
                  <a
                    href={iter.source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="absolute text-[#414141] hover:text-[#000000] right-1 top-1 text-[2.3rem] cursor-pointer" />
                  </a>
                  <img
                    src={iter.images[0].src}
                    alt="images"
                    className="rounded-xl "
                  />
                  <p className="absolute right-2 my-[.5rem] font-light text-[#ffb157]">{iter.category}</p>
                </div>

                <div className="mt-[.5rem]">
                  <h3 className="text-white font-bold text-[1.4rem]">
                    {iter.name}
                  </h3>
                  <p className="mt-[.5rem] text-[1rem] font-light">
                    {iter.description}
                  </p>

                  <p
                    className="underline mt-[.5rem] cursor-pointer"
                    onClick={handleClick}
                  >
                    Read More
                  </p>
                </div>
              </Tilt>
              <div>
                {read ? (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-black opacity-50"
                      onClick={handleBackgroundClick}
                    ></div>
                    <div className="z-10 h-[50rem] w-[50rem] bg-slate-400 p-8 rounded-lg m-2 lg:m-0">
                      {/* Your popup content goes here */}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
