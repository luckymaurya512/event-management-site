// src/components/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate for programmatic redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually validate and authenticate the user

    // For now, we'll just log in and navigate to the event details page
    console.log('User logged in with:', email, password);
    navigate('/event-details'); // Redirect to the event details page after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
