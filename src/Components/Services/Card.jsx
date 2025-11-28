import { motion } from 'framer-motion';

const Card = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group w-full h-full"
    >
      {/* Animated Border Background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>

      {/* Main Card Content */}
      <div className="relative h-full bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center border border-gray-800 shadow-xl">
        <div className="mb-4 transform group-hover:scale-110 transition duration-300 p-3 rounded-full bg-gray-800/50 border border-gray-700 group-hover:border-white/20">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;