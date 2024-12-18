import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">
          <img className='h-12 w-12 rounded-lg cursor-pointer' src={logo}/>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-300">Gallery</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">Contact Us</a>
            </li>
            {/* Login Button */}
            <li>
              <Link to="/login" className="hover:text-gray-300 text-yellow-500 font-semibold">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-4">
          <ul className="space-y-4 px-6">
            <li>
              <a href="#home" className="block hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#about" className="block hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="#services" className="block hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#gallery" className="block hover:text-gray-300">Gallery</a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-gray-300">Contact Us</a>
            </li>
            {/* Login Button */}
            <li>
              <Link to="/login" className="block hover:text-gray-300 text-yellow-500 font-semibold">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
