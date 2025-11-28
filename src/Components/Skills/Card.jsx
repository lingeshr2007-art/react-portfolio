import React from "react";
import { motion } from "framer-motion";
function Card({ text, index, image }) {
  return (
    <motion.div
      className="card w-72 h-40 flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 m-4 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 transform hover:scale-105 transition-transform duration-300 ease-in-out"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      
      <img src={image} alt={text} className="w-16 h-16 mb-4 rounded-full object-cover" />

   
      <p className="card-text text-xl text-white font-semibold">{text}</p>
    </motion.div>
  );
}

export default Card;