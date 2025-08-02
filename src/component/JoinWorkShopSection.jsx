import React from 'react';

function JoinWorkshopSection() {
  const handleJoinWorkshopClick = () => {
    // Replace with your actual workshop join link
    window.open("https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!", '_blank');
  };

  return (
    <div className="w-full bg-gray-900 py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 shadow-lg
                     transform hover:scale-105 hover:translate-y-1 animate-pulse" // Changed to animate-pulse for continuous subtle movement
          onClick={handleJoinWorkshopClick}
        >
          Join The Workshop Now
        </button>

        <p className="text-lg text-green-400 text-center md:text-left">
          Register Before <span className="font-bold">11th August</span> To Unlock Bonuses Worth <span className="font-bold">₹10,000/-</span>
        </p>
      </div>
    </div>
  );
}

export default JoinWorkshopSection;
