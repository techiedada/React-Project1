import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <h3 className='mt-20 mb-6 text-xl text-blue-800 font-bold '>CONTACT US</h3>

    <div className=" bg-white flex space-x-8  p-4 overflow-x-auto justify-center">

<div className="w-64 bg-orange-200 shadow-lg rounded-lg p-6 mb-16">
 <h2 className="text-1.2xl font-bold mb-2 text-purple-800"><IoMdMail className='text-[25px] mx-auto mb-2'/>EMAIL ADDRESS</h2>
 <h4 className='mt-6'>info@merninfotech.com</h4>
 <h4 className='mt-6'>hr@merninfotech.com</h4>
 </div>
<div className="w-64 bg-orange-200 shadow-lg rounded-lg p-6 mb-16">
 <h2 className="text-1.2xl font-bold mb-2 text-purple-800"><FaPhoneSquareAlt className='text-[25px] mx-auto mb-2' />MOBILE NUMBER</h2>
 <h4 className='mt-6'>+91 7350833682</h4>
 <h4 className='mt-6'>+91 9850618558</h4>
 </div>
 <div className="w-64 bg-orange-200 shadow-lg rounded-lg p-6 mb-16">
 <h2 className="text-1.2xl font-bold mb-2 text-purple-800"><IoLocationSharp className='inline text-[20px] mr-1'/>ADDRESS</h2>
 <h4>MERN Infotech, <br />Banglore Bypass, Bhumkar Wasti Rd, near Jaguar Showroom, Chowk, Wakad, Mumbai, Pune, Maharashtra 411057</h4>
 </div>
</div>
    </div>
  )
}

export default Contact
