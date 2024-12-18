// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import EventDetailsPage from './components/EventDetailsPage';
import Navbar from './components/Navbar';
import EventDetailsDisplayPage from './components/EventDetailsDisplayPage';
import ContactUsPage from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/event-details" element={<EventDetailsPage />} />
        <Route path="/event-details-display" element={< EventDetailsDisplayPage/>} />
        <Route path="/contact" element={< ContactUsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
