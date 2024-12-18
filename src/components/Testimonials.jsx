// src/components/TestimonialPage.js

import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    event: 'Wedding',
    feedback: 'The event was perfectly organized! Everything went smoothly and exceeded our expectations. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    event: 'Corporate Gala',
    feedback: 'Our corporate event was a huge success thanks to the amazing planning and coordination. Thank you for making it memorable!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Mark Williams',
    event: 'Birthday Party',
    feedback: 'Thank you for the incredible birthday party. You handled every detail with precision, and we had a blast!',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Emily Johnson',
    event: 'Conference',
    feedback: 'The event was flawless! The team was professional and ensured everything went according to plan.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Michael Brown',
    event: 'Anniversary Celebration',
    feedback: 'We couldn’t have asked for a better anniversary celebration. The attention to detail was fantastic!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Sarah Lee',
    event: 'Charity Event',
    feedback: 'A big thank you for organizing our charity event! The whole process was smooth, and our guests had a wonderful time.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
];

const TestimonialPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">What Our Clients Are Saying</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-600"
                />
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-4">{testimonial.name}</p>
              <p className="text-sm text-gray-500 italic mb-4">Event: {testimonial.event}</p>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
