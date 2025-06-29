import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi2";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* NAVBAR */}
      <div className="flex justify-between items-center my-2 py-0 px-4 md:p-4">
        <Link to="/" className="font-bold text-2xl text-indigo-600 ">
          Kuwait
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-indigo-600 hover:duration-150"><Link to='/'>Home</Link></li>
          <li className="hover:text-indigo-600 hover:duration-150"><Link to='#about'>About</Link></li>
          <li className="hover:text-indigo-600 hover:duration-150"><Link to='#team'>Our Team</Link></li>
          <li className="hover:text-indigo-600 hover:duration-150"><Link to='#pricing'>Pricing</Link></li>
          <li className="hover:text-indigo-600 hover:duration-150"><Link to='#contact'>Contact Us</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex ites-center gap-10">
          <button className=" hover:text-indigo-600 hover:duration-150 cursor-pointer">sign up</button>
              <button className="bg-indigo-600 cursor-pointer text-white py-1.5 px-6 rounded-full hover:bg-gray-200 hover:text-indigo-600 transition duration-300">
                    Log in
                </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="cursor-pointer" aria-label="Open sidebar">
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* SIDEBAR OVERLAY - MOBILE ONLY */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-opacity duration-300 ${isOpen ? "bg-black/40 " : "pointer-events-none opacity-0"
          }`}
      >

        {/* SLIDING SIDEBAR */}
        <div
          ref={sidebarRef}
          className={
            `fixed top-0 -0 h-full w-64 bg-white shadow-md py-6 px-3 z-50 transform transition-transform duration-300",
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`
          }
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 cursor-pointer"
            aria-label="Close sidebar"
          >
            <FiX size={24} />
          </button>

          <ul className="space-y-4 mt-10">
            <li className="hover:bg-indigo-600 hover:rounded-sm hover:text-white cursor-pointer text-black py-1.5 px-3 transition-all duration-150">
              <a href="#home" className="inline-flex items-center gap-2">
                <HiOutlineHome className="h-4 w-4" />
                Home
              </a>
            </li>
            <li className="hover:bg-indigo-600 hover:rounded-sm hover:text-white cursor-pointer text-black py-1.5 px-3 transition-all duration-150">
              <a href="#about">About</a>
            </li>
            <li className="hover:bg-indigo-600 hover:rounded-sm hover:text-white cursor-pointer text-black py-1.5 px-3 transition-all duration-150">
              <a href="#team">Our Team</a>
            </li>
            <li className="hover:bg-indigo-600 hover:rounded-sm hover:text-white cursor-pointer text-black py-1.5 px-3 transition-all duration-150">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="hover:bg-indigo-600 hover:rounded-sm hover:text-white cursor-pointer text-black py-1.5 px-3 transition-all duration-150">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          <div className="mt-6 space-y-2">
            <button className="w-full hover:text-indigo-600 hover:duration-150">sign up</button>
            <button className="w-full bg-indigo-700 hover:bg-indigo-600 hover:duration-150 text-white py-2 rounded">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
