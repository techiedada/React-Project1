import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown when clicking outside could be added for polish, but omitted here for brevity

  return (
    <nav className="bg-zinc-100 shadow-md p-5 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-800">MERN Infotech</div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-10 mr-[30px] items-center">
        <a
          href="/"
          className="text-[16px] text-red-800 font-bold hover:text-blue-500"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-[16px] text-red-800 font-bold hover:text-blue-500"
        >
          About
        </a>
        <a
          href="/courses"
          className="bg-blue-800 p-1.5 shadow-md rounded text-md text-white font-bold hover:text-orange-500"
        >
          Courses
        </a>
        <a
          href="/events"
          className="text-[16px] text-red-800 font-bold hover:text-blue-500"
        >
          Events <sup className="text-[10px] text-blue-700">New</sup>
        </a>

        {/* Contact dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-[16px] text-red-800 font-bold hover:text-blue-500 flex items-center gap-1"
          >
            Contact <RxCaretDown className="inline text-[20px]" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
              <ul>
                <li>
                  <a
                    href="/contact"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/contact/careers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact/help"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open mobile menu"
      >
        <MdMenu />
      </button>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40">
          <section className="bg-white w-64 h-full p-6 flex flex-col gap-6 relative">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl self-end mb-4"
              aria-label="Close mobile menu"
            >
              <IoMdClose />
            </button>

            <a href="/" className="text-xl font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="/about" className="text-xl font-semibold" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="/courses" className="text-xl font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Courses
            </a>
            <a href="/events" className="text-xl font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Events
            </a>

            {/* Mobile Contact Dropdown */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-xl font-semibold"
              >
                Contact <RxCaretDown />
              </button>

              {dropdownOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  <li>
                    <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/contact/careers" onClick={() => setMobileMenuOpen(false)}>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/contact/help" onClick={() => setMobileMenuOpen(false)}>
                      Help
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </section>
        </div>
      )}
    </nav>
  );
};

export default Navbar;