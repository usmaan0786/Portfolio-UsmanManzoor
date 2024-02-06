import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../Database/Data";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
      <div className="lg:mx-[20rem] mt-[5rem] lg:mt-[7rem]">
        <div className="px-[1rem] lg:px-0">
          <motion.div variants={textVariant()} className="">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.heroHeadText}>Projects.</h2>
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
      </div>
      <div className="mt-[2rem] flex flex-wrap lg:gap-10 justify-center lg:mx-[10rem]">
        {projects.map((iter, index) => {
          return (
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-[#170b31] p-2 rounded-xl m-[2rem] lg:m-0 lg:w-[23rem] w-[21rem] h-[32rem] lg:h-[30rem] border-[.1rem] border-[#f4c7ff]"
              >
                <div className="relative w-full">
                  <a
                    href={iter.source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="absolute text-[#414141] hover:text-[#000000] right-1 top-1 lg:text-[2.3rem] text-[2rem] cursor-pointer" />
                  </a>
                  <img
                    src={iter.images[0].src}
                    alt="images"
                    className="rounded-xl h-[12rem] "
                  />
                  <p className="absolute lg:right-2 my-[.5rem] font-light text-[#ffb157]">
                    {iter.category}
                  </p>
                </div>

                <div className="lg:mt-[.5rem] mt-[2rem]">
                  <h3 className="text-white font-bold text-[1.4rem]">
                    {iter.name}
                  </h3>
                  <p className="mt-[.5rem] text-[.9rem] font-light">
                    {iter.description}
                  </p>

                  <p
                    className="underline mt-[.5rem] cursor-pointer text-[.9rem] hover:text-[#52a3ff] duration-100"
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
                      className="absolute inset-0 bg-black opacity-50 "
                      onClick={handleBackgroundClick}
                    ></div>
                    <div className=" overflow-y-auto z-10 h-[40rem] lg:h-[50rem] lg:w-[70rem] w-[22rem] bg-[#ffffff] text-[#111] flex flex-col p-4 rounded-lg m-2 lg:m-0 gap-y-[.5rem]">
                      <h1 className="text-[1.3rem] font-bold">{iter.name}</h1>
                      <div className="flex lg:flex-row flex-col-reverse justify-between">
                        <p className="mt-[.7rem] lg:mt-0">
                          Tech Stack :{" "}
                          <span className="italic ">{iter.TechStack}</span>{" "}
                        </p>
                        <p>{iter.Duration}</p>
                      </div>

                      <ul className="list-disc ml-[1rem]">
                        {iter.bullets.map((temp, index) => {
                          return <li className="my-[.3rem]">{temp.point}</li>;
                        })}
                      </ul>

                      <h1 className="font-bold">Project Images</h1>
                      <div className="mt-[2rem]">
                        <Splide
                          className=""
                          options={{
                            perPage: 1,
                            gap: ".1rem",
                            grag: "free",
                            arrows: true,
                          }}
                        >
                          {iter.images.map((currElem) => {
                            return (
                              <SplideSlide
                                key={currElem.id}
                                className="w-[20rem] flex justify-center items-center"
                              >
                                <img
                                  src={currElem.src}
                                  alt="projectImages"
                                  className="w-[45rem]"
                                />
                              </SplideSlide>
                            );
                          })}
                        </Splide>
                      </div>

                      <div>
                        <a
                          href={iter.source_code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center items-center gap-x-4 mt-[1rem]"
                        >
                           <p className="text-[.9rem] lg:text-[1rem]">Project Code Link : </p><FaGithub className=" text-[#414141] hover:text-[#000000] text-[2rem] cursor-pointer" />
                        </a>
                      </div>
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
