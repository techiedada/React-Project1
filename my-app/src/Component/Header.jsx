import React from 'react'
import { FaHeadphonesSimple } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <header className="bg-gray-300 shadow-md p-2  text-center ">
      <span>Start Your IT Career with Internships and Live Projects – Become a Developer!</span> 
      <span className='ml-14 font-bold'> <FaHeadphonesSimple className='inline pb-1 text-[20px] mr-1'/>+91 7350833682</span>
      </header>
    </div>
  )
}

export default Header
