// src/components/EventDetailsPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EventDetailsPage = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDate: '',
    venue: '',
    description: '',
    attendees: 0
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  // Set initial state from the passed location state if available (for editing)
  useEffect(() => {
    if (location.state) {
      setEventDetails(location.state); // Pre-fill the form with the event being edited
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the current events from local storage, or create a new list if none exists
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    
    // Add the new event to the events array
    storedEvents.push(eventDetails);

    // Save the updated events back to local storage
    localStorage.setItem('events', JSON.stringify(storedEvents));

    // Redirect to the event display page
    navigate('/event-details-display');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Event Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="eventName" className="block text-gray-700 mb-2">Event Name</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={eventDetails.eventName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="eventDate" className="block text-gray-700 mb-2">Event Date</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={eventDetails.eventDate}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="venue" className="block text-gray-700 mb-2">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={eventDetails.venue}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={eventDetails.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="attendees" className="block text-gray-700 mb-2">Number of Attendees</label>
            <input
              type="number"
              id="attendees"
              name="attendees"
              value={eventDetails.attendees}
              onChange={handleChange}
              required
              min="0"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500">
            Submit Event Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetailsPage;
