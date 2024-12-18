// src/components/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';
import bg1 from '../assets/bg1.webp'
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.webp'
import card4 from '../assets/card4.webp'

const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section
  className="relative text-white h-screen flex items-center justify-center"
  style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container text-center relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-4">Making Your Events Unforgettable</h1>
          <p className="text-lg mb-8">Expert planning for weddings, parties, corporate events, and more.</p>
          <Link to="/login" className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-400 transition duration-300">
            Get Started
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg text-gray-700">
            At [Your Company Name], we specialize in organizing unforgettable events. From weddings to corporate galas, we handle every detail to ensure your event is seamless and memorable. Our experienced team works closely with you to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <p className="text-lg text-gray-700 mb-12">We offer a wide range of event management services designed to cater to your needs.</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Weddings</h3>
              <p className="text-gray-700">We’ll help you plan your dream wedding with every detail in mind, from the venue to the decor.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Corporate Events</h3>
              <p className="text-gray-700">Planning your corporate conference, meeting, or gala has never been easier with our expert team.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Birthday Parties</h3>
              <p className="text-gray-700">From intimate gatherings to grand celebrations, we ensure your birthday party is a hit.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
      <div className="container text-center px-6">
      <h2 className="text-3xl font-semibold mb-6 items-center">Gallery</h2>
      </div>
      <div className='flex flex-start justify-evenly'>
        <div>
            <img className='h-52 rounded-md' src={card1}/>
        </div>
        <div>
            <img className='h-52 rounded-md' src={card2}/>
        </div>
        <div>
            <img className='h-52 rounded-md' src={bg1}/>
        </div>
        <div>
            <img className='h-52 rounded-md' src={card4}/>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Chauhan & Sons. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;