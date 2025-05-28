import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 bottom-0 w-full">

      <div className="space-x-6 pb-2">
    <a href="/" className="text-white-700 hover:text-blue-500">Home</a>
    <a href="/about" className="text-white-700 hover:text-blue-500">About</a>
    <a href="/contact" className="text-white-700 hover:text-blue-500">Contact</a>
    <div className='flex gap-4 justify-center mt-1 text-[22px] '>
    <a href="https://x.com/" target='auto_blank'><FaSquareXTwitter className='inline text-blue-500 hover:text-blue-400 bg-white rounded-full p-[2px]'/> </a>
    <a href="https://in.linkedin.com/" target='auto_blank'><FaLinkedin className='inline text-blue-700 hover:text-blue-600 bg-white rounded-full p-[2px] '/></a>
    <a href="https://www.youtube.com/" target='auto_blank'><IoLogoYoutube className='inline text-red-600 hover:text-red-500 bg-white rounded-full p-[2px]'/></a>
    <a href="https://www.instagram.com/" target='auto_blank'><FaInstagramSquare className='inline text-pink-600 hover:text-pink-500 bg-white rounded-full p-[2px]'/></a>
    </div>
    </div>
      <p className="text-sm text-center">&copy; 2025 ! All rights reserved by MERN Infotech.</p>
    </footer>
    </div>
  )
}

export default Footer
