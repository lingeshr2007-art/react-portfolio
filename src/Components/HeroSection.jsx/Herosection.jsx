import { motion } from "framer-motion";
import resume from "../../assets/lingesh resumee.pdf";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import img from "../../assets/bg .jpg";

const Herosection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = resume;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-800 via-purple-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -50, 50],
            y: [0, -50, 50],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [50, 0, -50],
            y: [-50, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative flex flex-col items-center justify-center h-screen px-6 md:px-20 text-center">
        <motion.div
          className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={img}
            alt="Profile"
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
          />
        </motion.div>

        <h1 className="mt-8 text-3xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-500">
          Welcome to My Universe 🌌
        </h1>

        <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
          A passionate developer turning ideas into innovative and interactive
          experiences. Let’s embark on this digital journey together.
        </p>

        <div className="mt-10 flex gap-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(250, 204, 21, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            className="relative px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-lg overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative z-10">Download CV</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg overflow-hidden group transition-all duration-300"
          >
            <Link to="/contact" className="relative z-10 flex items-center justify-center w-full h-full">
              <span className="absolute inset-0 w-full h-full bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              Contact Me
            </Link>
          </motion.button>
        </div>

        <div className="mt-12 flex gap-6">
          {[
            { Icon: FaGithub, link: "https://github.com/lingeshr2007-art" },
            {
              Icon: FaLinkedin,
              link: "https://www.linkedin.com/in/lingesh-ramesh-44890833a",
            },
            { Icon: FaTwitter, link: "https://twitter.com/your-handle" },
            { Icon: FaInstagram, link: "https://instagram.com/your-handle" },
            { Icon: FaFacebook, link: "https://facebook.com/your-profile" },
          ].map(({ Icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                color: "#0ff",
                textShadow: "0 0 10px cyan",
              }}
              className="text-3xl hover:text-yellow-400 transition-all"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[10rem] font-extrabold text-gray-600 opacity-10">
          DREAM BIG
        </h1>
      </motion.div>
    </div>
  );
};

export default Herosection;
