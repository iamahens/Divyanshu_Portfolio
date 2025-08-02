import React from 'react';

function WhatYouWillLearnSection() {
  const learningPoints = [
    "Learn New Skills",
    "Work From Home",
    "Financial Stability",
    "Flexible Schedule",
    "Personal Growth",
    "Discover Opportunities",
    "Pursue Passion",
    "Grow Your Income",
    "Explore New Opportunities",
    "Work on Your Own Terms",
  ];

  return (
    <div className="w-full bg-yellow-100 py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        What will you learn in this <span className="text-green-600">1 Hour Exclusive Live Webinar</span>
      </h2>

      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="bg-pink-500 text-white text-center py-3 text-xl font-semibold">
          1 Hour Session
        </div>
        <ul className="p-6 space-y-3">
          {learningPoints.map((point, index) => (
            <li key={index} className="flex items-center text-white text-lg">
              <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WhatYouWillLearnSection;
