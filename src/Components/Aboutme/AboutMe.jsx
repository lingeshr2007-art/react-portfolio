import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/about.png"

const AboutMe = () => {
  return (
    <div className=" flex bg-transparent flex-col md:flex-row justify-center items-center min-h-screen overflow-hidden p-8 lg:p-24 xl:p-24">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 bg-black rounded-lg shadow-lg m-4"
      >
        <div className="p-6">
          <h2 className="text-5xl font-extrabold text-white mb-4">Who Am I?</h2>
          <hr className="border-t-2 mb-6" />
          <p className="text-white text-lg leading-relaxed">
            Hi, I’m <span className="text-yellow-300 font-semibold">Lingesh</span>!
            I’m a passionate web developer and open-source contributor with expertise in{" "}
            <span className="text-yellow-300 font-semibold">React</span>,{" "}
            <span className="text-yellow-300 font-semibold">Node.js</span>, and the{" "}
            <span className="text-yellow-300 font-semibold">HTML </span>. I thrive on solving
            real-world problems with creative coding solutions.
          </p>
          <p className="text-white text-lg mt-6 leading-relaxed">
            During the day, I work on building innovative web applications. In my spare time,
            I contribute to <span className="text-yellow-300 font-semibold">open-source projects</span>,
            explore new technologies, and refine my programming skills. I enjoy sharing knowledge,
            participating in <span className="text-yellow-300 font-semibold">hackathons</span>,
            and continuously learning to stay ahead in the tech world.
          </p>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 rounded-lg shadow-lg m-4 flex justify-center items-center"
      >
        <div className="p-6">
          <img
            src={img}
            alt="About Me"
            className="rounded-lg object-cover shadow-xl w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
