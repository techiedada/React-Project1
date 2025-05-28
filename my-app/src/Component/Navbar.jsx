import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import Contact from './Contact';

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div>
    
      <nav className="bg-zinc-100 shadow-md p-5 flex justify-between items-center">
         <div className="text-xl font-bold text-blue-800">MERN Infotech</div>
         <div className="space-x-10 mr-[30px]">
         <a href="/" className=" text-[16px] text-red-800 font-bold hover:text-blue-500">Home</a>
         <a href="/about" className="text-[16px] text-red-800 font-bold hover:text-blue-500">About</a>
         <a href="/courses" className=" bg-blue-800 p-1.5 shadow-md rounded text-2md text-white font-bold hover:text-orange-500">Courses</a>
         <a href="/events" className="text-[16px] text-red-800 font-bold hover:text-blue-500">Events <sup className='text-[10px] text-blue-700'>New</sup></a>
         {/* <a href="/contact" className="text-2md text-red-800 font-bold hover:text-blue-500">Contact<RxCaretDown className='inline text-[20px] font-bold'/></a> */}
        <div className="relative inline-block">
         <button
        onClick={() => setOpen(!open)}
        className=" text-[16px] text-red-800 font-bold hover:text-blue-500"
      >
        Contact <RxCaretDown className='inline text-[20px] font-bold'/>
      </button>
      
    
      {/* Dropdown Items */}
      {open && (
        <div className="absolute mt-2  w-[120px] bg-white border border-gray-200 rounded shadow-lg mr-4">
          <ul className="py-2">
            <li>
              <a href="/contact" className="block px-2 py-1 hover:bg-gray-100">
                Contact
              </a>
            </li>
            <li>
              <a href="/contact/careers" className="block px-4 py-1 hover:bg-gray-100">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact/help" className="block px-4 py-1 hover:bg-gray-100">
                Help
              </a>
            </li>
          </ul>
        </div>
      )}
   </div>
   </div>
   </nav>
    </div>
    
  )
}

export default Navbar
