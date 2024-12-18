// src/components/EventDetailsDisplayPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EventDetailsDisplayPage = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // Example: Initially load some sample events (this could be fetched from a server)
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  // Handle adding a new event
  const handleAddMore = () => {
    navigate('/event-details'); // Navigate to the EventDetailsPage to add a new event
  };

  // Handle editing an event
  const handleEdit = (event) => {
    navigate('/event-details', { state: event }); // Pass the event details to edit
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">All Event Details</h2>

        {/* Display events list */}
        {events.length > 0 ? (
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="border p-4 rounded-md shadow-md">
                <p><strong>Event Name:</strong> {event.eventName}</p>
                <p><strong>Event Date:</strong> {event.eventDate}</p>
                <p><strong>Venue:</strong> {event.venue}</p>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Number of Attendees:</strong> {event.attendees}</p>

                {/* Edit Button */}
                <div className="flex justify-between mt-4">
                  <button 
                    onClick={() => handleEdit(event)} 
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No events available. Add new events!</p>
        )}

        {/* Add More Events Button */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={handleAddMore} 
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500">
            Add More Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsDisplayPage;
