import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/EarthCanvas";

const Contact = () => {
  const email = "usmanmanzoor1000@gmail.com";
  return (
    <>
      <div
        className={`flex mt-[5rem] xl:flex-row lg:flex-col-reverse overflow-hidden justify-center`}
      >
        <div className="ml-[20rem]">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-[#170b31] p-[2rem] rounded-2xl"
          >
            <div className="">
              <p className={styles.sectionSubText}>Get in touch</p>
              <h2 className={styles.heroHeadText}>Contact Us.</h2>
              <form
                action="https://formspree.io/f/mvojkoqg"
                method="POST"
                className="flex flex-col gap-y-[1rem]"
              >
                <label>Your Name</label>
                <input
                  className=" p-3 rounded-lg text-white bg-[#281947]"
                  type="text"
                  placeholder="Your good name"
                  name="userName"
                  required
                  autoComplete="on"
                />
                <label>To</label>
                <input
                  className=" p-3 rounded-lg text-white bg-[#281947]"
                  value={email}
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  autoComplete="off"
                />
                <label>From</label>
                <input
                  className=" p-3 rounded-lg text-white bg-[#281947]"
                  type="email"
                  placeholder="Enter your web address"
                  name="fromEmail"
                  required
                  autoComplete="off"
                />
                <label>Your Message</label>
                <textarea
                  className=" p-3 rounded-lg text-white bg-[#281947]"
                  name="textarea"
                  placeholder="Enter your Message"
                  cols={"50"}
                  rows={"4"}
                  required
                />
                <button className="bg-gradient-to-b  from-[#67c2ff] to-[rgb(198,11,255)] w-max p-[1rem] rounded-xl px-[1.5rem] text-[1.2rem] font-medium hover:from-[#8faf54] hover:to-[rgb(121,182,41)] duration-200">Send</button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
