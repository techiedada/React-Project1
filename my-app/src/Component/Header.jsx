import React from 'react';
import { FaHeadphonesSimple } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-gray-300 shadow-md p-2">
      <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:space-x-10 text-sm md:text-base">
        <span>
          Start Your IT Career with Internships and Live Projects – Become a Developer!
        </span>
        <span className="font-bold mt-2 md:mt-0">
          <FaHeadphonesSimple className="inline pb-1 text-[18px] mr-1" />
          +91 7350833682
        </span>
      </div>
    </header>
  );
};

export default Header;