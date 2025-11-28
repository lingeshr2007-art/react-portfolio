import React, { useState } from "react";
import logo from "../../assets/logo1.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 shadow-lg">
      <div className="flex justify-between items-center h-20">

        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full mr-3"
          />
          <h1 className="text-lg font-bold">DevWithLingesh</h1>
        </div>

        <ul className="hidden md:flex flex-1 justify-center space-x-8 text-sm lg:text-base">
          <li className="hover:text-green-400 hover:scale-110 hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-green-400 hover:scale-110 hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 cursor-pointer">
            <Link to="/about-me">About</Link>
          </li>
          <li className="hover:text-green-400 hover:scale-110 hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 cursor-pointer">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-green-400 hover:scale-110 hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 cursor-pointer">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-green-400 hover:scale-110 hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 cursor-pointer">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="hover:text-green-400 hover:scale-110 hover:shadow-[0_0_10px_#00ff00] transition-all duration-300 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>


        <div className="hidden md:block">
          <button className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-green-500 hover:text-black hover:scale-105 hover:shadow-[0_0_15px_#00ff00] transition-all duration-300 text-sm lg:text-base font-bold border-2 border-transparent hover:border-black">
            Hire Me
          </button>
        </div>


        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-gray-800 text-white py-6 px-4 rounded-lg shadow-lg">
          <ul>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </li>
          </ul>


          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Close Menu
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
