import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white transition duration-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition duration-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white transition duration-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-white transition duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()}a All rights reserved.</p>
          <p className="mt-2">We provide top-notch services to bring your ideas to life. Contact us for collaboration or queries.</p>
        </div>

        <div className="mt-4">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition duration-300">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
