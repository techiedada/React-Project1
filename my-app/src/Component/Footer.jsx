import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      
      {/* Navigation and Social Icons Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 space-y-4 md:space-y-0">

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center text-[22px]">
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="text-blue-500 hover:text-blue-400 bg-white rounded-full p-[2px]" />
          </a>
          <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 hover:text-blue-600 bg-white rounded-full p-[2px]" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <IoLogoYoutube className="text-red-600 hover:text-red-500 bg-white rounded-full p-[2px]" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className="text-pink-600 hover:text-pink-500 bg-white rounded-full p-[2px]" />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <p className="text-sm text-center mt-4 px-4">&copy; 2025 | All rights reserved by MERN Infotech.</p>
    </footer>
  );
};

export default Footer;