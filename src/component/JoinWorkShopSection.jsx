import React from 'react';

function JoinWorkshopSection() {
  const handleJoinWorkshopClick = () => {
    // Replace with your actual workshop join link
    window.open('https://example.com/join-workshop', '_blank');
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
          Register Before <span className="font-bold">11th January</span> To Unlock Bonuses Worth <span className="font-bold">₹10,000/-</span>
        </p>
      </div>
    </div>
  );
}

export default JoinWorkshopSection;
