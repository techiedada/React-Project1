import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="px-4">
      <h3 className="mt-20 mb-6 text-xl text-blue-800 font-bold text-center">CONTACT US</h3>

      <div className="bg-white flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-6 md:space-y-0 p-4 overflow-x-auto">
        
        {/* Email Card */}
        <div className="min-w-[16rem] md:w-64 bg-orange-200 shadow-lg rounded-lg p-6 mb-4 md:mb-16 text-center">
          <h2 className="text-xl font-bold mb-2 text-purple-800">
            <IoMdMail className="text-[18px] mx-auto mb-2" />
            EMAIL ADDRESS
          </h2>
          <h4 className="mt-6">info@merninfotech.com</h4>
          <h4 className="mt-6">hr@merninfotech.com</h4>
        </div>

        {/* Phone Card */}
        <div className="min-w-[16rem] md:w-64 bg-orange-200 shadow-lg rounded-lg p-6 mb-4 md:mb-16 text-center">
          <h2 className="text-xl font-bold mb-2 text-purple-800">
            <FaPhoneSquareAlt className="text-[18px] mx-auto mb-2" />
            MOBILE NUMBER
          </h2>
          <h4 className="mt-6">+91 7350833682</h4>
          <h4 className="mt-6">+91 9850618558</h4>
        </div>

        {/* Address Card */}
        <div className="min-w-[16rem] md:w-64 bg-orange-200 shadow-lg rounded-lg p-6 mb-4 md:mb-16 text-center">
          <h2 className="text-xl font-bold mb-2 text-purple-800">
            <IoLocationSharp className="inline text-[16px] mr-1" />
            ADDRESS
          </h2>
          <h4 className="mt-4">
            MERN Infotech,<br />
            Banglore Bypass, Bhumkar Wasti Rd,<br />
            near Jaguar Showroom, Chowk,<br />
            Wakad, Mumbai, Pune, Maharashtra 411057
          </h4>
        </div>

      </div>
    </div>
  );
};

export default Contact;