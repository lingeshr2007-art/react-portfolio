import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const CardComponent = ({ imageUrl, projectName, projectDesc, githubLink, liveLink }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group w-full max-w-sm mx-auto"
    >
      {/* Animated Border Background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>

      {/* Main Card Content */}
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800">
        <div className="relative group/image overflow-hidden">
          <img
            src={imageUrl}
            alt={projectName}
            className="w-full h-40 object-cover transition-transform duration-500 group-hover/image:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-lg tracking-wider border-2 border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
              View Project
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            {projectName}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {projectDesc}
          </p>

          <div className="flex items-center gap-4 pt-2 border-t border-gray-800">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group/link"
            >
              <FaGithub className="text-lg group-hover/link:text-purple-400 transition-colors" />
              <span>Code</span>
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group/link"
            >
              <FaExternalLinkAlt className="text-lg group-hover/link:text-cyan-400 transition-colors" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardComponent;