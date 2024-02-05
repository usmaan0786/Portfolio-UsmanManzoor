import React from "react";
import { styles } from "../styles";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[10rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex justify-center items-center mt-5 gap-x-2">
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              <span className="text-[#915eff]">. </span>Hi, I'm{" "}
              <span className="text-[#52a3ff]">Usman Manzoor</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              As  a freshman with a BS in Computer
              Science from the FAST National University of Computer and Emerging
              Sciences.I am a quick learner with strong basics. Currently, I am
              actively seeking job opportunities with my keen interest in Web
              Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
