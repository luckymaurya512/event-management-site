// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom'; // If you want to add routing links to pages like Home, Services, etc.

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Top Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Chauhan & Sons</h2>
          <p className="text-lg mt-2">Your Trusted Event Management Partner</p>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center mb-6">
          <Link to="#home" className="mx-4 text-gray-400 hover:text-white">Home</Link>
          <Link to="#about" className="mx-4 text-gray-400 hover:text-white">About Us</Link>
          <Link to="#services" className="mx-4 text-gray-400 hover:text-white">Services</Link>
          <Link to="#gallery" className="mx-4 text-gray-400 hover:text-white">Gallery</Link>
          <Link to="#contact" className="mx-4 text-gray-400 hover:text-white">Contact Us</Link>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-2xl text-gray-400 hover:text-white"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl text-gray-400 hover:text-white"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl text-gray-400 hover:text-white"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-2xl text-gray-400 hover:text-white"></i>
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">&copy; 2024 Chauhan & Sons. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
