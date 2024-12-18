// src/components/EventFormPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventFormPage = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDate: '',
    venue: '',
    description: '',
    attendees: '',
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect to the event details page and pass event data as state
    navigate('/event-details', { state: eventDetails });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Event Details Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={eventDetails.eventName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={eventDetails.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Venue</label>
          <input
            type="text"
            name="venue"
            value={eventDetails.venue}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Description</label>
          <textarea
            name="description"
            value={eventDetails.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Number of Attendees</label>
          <input
            type="number"
            name="attendees"
            value={eventDetails.attendees}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded mt-4">
          Submit Event Details
        </button>
      </form>
    </div>
  );
};

export default EventFormPage;
