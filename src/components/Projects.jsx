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

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const handleClick = (iter, index) => {
    setSelectedProject(iter);
    setSelectedProjectIndex(index);

    document.body.style.overflow = "hidden";

    setRead(!read);
  };

  const handleBackgroundClick = () => {
    document.body.style.overflow = "auto";

    setRead(false);
  };

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
            className="mt-4 lg:text-[1rem] text-[.9rem] text-justify"
          >
            The following projects provide a demonstration of my skills and
            technological growth.
          </motion.p>
        </div>
      </div>
      <div className="mt-[2rem] flex flex-wrap lg:gap-10 justify-center lg:mx-[10rem]">
        {projects.map((iter, index) => {
          return (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              key={iter.name}
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                // bg-[#170b31] p-2 rounded-xl m-[2rem] lg:m-0 lg:w-[23rem] w-[21rem] h-[32rem] lg:h-[30rem] border-[.1rem] border-[#f4c7ff]
                className={`p-2 rounded-xl m-[2rem] lg:m-0 lg:w-[23rem] w-[21rem] h-[32rem] lg:h-[30rem] border-[.1rem] ${
                      iter.category === "MERN"
                    ? ` bg-gradient-to-b  from-[#52a3ff]  to-transparent`
                    : iter.category === "AI/ML"
                    ? `bg-gradient-to-b  from-[#896eff]  to-transparent`
                    : `bg-gradient-to-b  from-[#5bffce]  to-transparent` }`}
              >
                <div className="relative w-full">
                  <a
                    href={iter.source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="absolute text-[#646464] hover:text-[#161616] bg-white rounded-full right-1 top-1 lg:text-[2.3rem] text-[2rem] cursor-pointer" />
                  </a>
                  <div className="flex items-center justify-center">
                    <img
                      src={iter.images[0].src}
                      alt="images"
                      className="rounded-xl h-[12rem] "
                    />
                  </div>

                  <p className="absolute lg:right-2 my-[.5rem] font-medium text-[#ffea2b]">
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
                    onClick={() => handleClick(iter, index)}
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
                      <h1 className="text-[1.3rem] font-bold">
                        {selectedProject.name}
                      </h1>
                      <div className="flex lg:flex-row flex-col-reverse justify-between">
                        <p className="mt-[.7rem] lg:mt-0 lg:w-[50rem] text-justify">
                          Tech Stack :{" "}
                          <span className="italic  ">
                            {selectedProject.TechStack}
                          </span>{" "}
                        </p>
                        <p className="font-medium">
                          {selectedProject.Duration}
                        </p>
                      </div>

                      <ul className="list-disc ml-[1rem]">
                        {selectedProject.bullets.map((temp, index) => {
                          return (
                            <li className="my-[.3rem] text-justify">
                              {temp.point}
                            </li>
                          );
                        })}
                      </ul>

                      <h1 className="font-bold">Project Images</h1>
                      <div className="mt-[1rem]">
                        <Splide
                          className=""
                          options={{
                            perPage: 1,
                            gap: ".1rem",
                            grag: "free",
                            arrows: true,
                          }}
                        >
                          {selectedProject.images.map((currElem) => {
                            return (
                              <SplideSlide
                                key={currElem.id}
                                className="w-[20rem] lg:h-[25rem] flex justify-center"
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
                          href={selectedProject.source_code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center items-center gap-x-4 mt-[1rem]"
                        >
                          <p className="text-[.9rem] lg:text-[1rem]">
                            Project Code Link :{" "}
                          </p>
                          <FaGithub className=" text-[#414141] hover:text-[#000000] text-[2rem] cursor-pointer" />
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
