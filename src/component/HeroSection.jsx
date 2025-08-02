import React from 'react';

// HeroSection Component
function HeroSection() {
  const handleRegisterClick = () => {
    // Replace with your actual registration link
    window.open('https://www.whatsapp.com/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-700 text-white flex flex-col items-center justify-center p-4">
      {/* Top Banner */}
      <div className="text-green-400 text-lg font-semibold mb-4 text-center">
        1000 + People Already Registered ❤️
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        1 Hour Exclusive <span className="text-green-400">Live Webinar</span> By Nasreen Fatima Mam
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-8">
        Join this webinar to master the process and strategies of <span className="font-semibold">Work From Home</span> by Social Media Platforms, leveraging trending and in-demand skills for success!
      </p>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 max-w-4xl w-full">
        {/* Left Section - Webinar Details */}
        <div className="flex flex-col space-y-4 w-full lg:w-1/2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            Exclusive 1 Hour Live Webinar
          </button>

          <div className="flex items-center text-gray-800">
            <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="font-medium">Date:</span> Join WhatsApp Group to Know
          </div>

          <div className="flex items-center text-gray-800">
            <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-medium">Time:</span> Join WhatsApp Group to Know
          </div>

          <div className="flex items-center text-gray-800">
            <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-2c0-.134-.01-.265-.03-.394m0 0a2.005 2.005 0 01-2.004-2.004V8.004a2.005 2.005 0 012.004-2.004h.01m-6 0h-.01M7 10a2.005 2.005 0 012.004 2.004v.01m-6 0h-.01"></path>
            </svg>
            <span className="font-medium">4,000+ Students Mentored</span>
          </div>

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 mt-4"
            onClick={handleRegisterClick}
          >
            Register & Avail it FREE
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="https://placehold.co/400x250/000000/FFFFFF?text=Webinar+Image"
            alt="Webinar Presenters"
            className="rounded-lg shadow-md max-w-full h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/CCCCCC/000000?text=Image+Not+Found'; }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection