import React, { useState, useEffect } from 'react';

function WorkshopInfoSection() {
  // Countdown Timer State
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the target date for the countdown (e.g., 2 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // Set to 2 days from now for demonstration

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setMinutes(0);
        setSeconds(0);
      } else {
        const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleJoinWorkshopClick = () => {
    // Replace with your actual workshop join link
    window.open('https://example.com/join-workshop', '_blank');
  };

  return (
    <div className="w-full bg-gray-900 flex flex-col items-center p-4"> {/* Removed min-h-screen and bg-gray-900, adjusted padding */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between bg-gray-800 p-6 rounded-lg shadow-xl text-white">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg text-gray-300">
            <span className="font-bold text-white">1,000+</span> People Already Joined
          </p>
        </div>

        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 bg-gray-700 px-3 py-1 rounded">
              {String(minutes).padStart(2, '0')}
            </div>
            <p className="text-sm text-gray-400">Minutes</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 bg-gray-700 px-3 py-1 rounded">
              {String(seconds).padStart(2, '0')}
            </div>
            <p className="text-sm text-gray-400">Seconds</p>
          </div>
        </div>

        <div className="text-center md:text-right mb-4 md:mb-0">
          <p className="text-lg text-gray-300">
            Webinar Price: <span className="line-through">₹999</span>
          </p>
          <p className="text-2xl font-bold text-green-400">
            Grab for Free
          </p>
        </div>

        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 shadow-lg"
          onClick={handleJoinWorkshopClick}
        >
          Join The Workshop Now
        </button>
      </div>

      {/* Bonus Text */}
      <div className="mt-4 text-center text-lg text-green-400 font-semibold"> {/* Removed pb-8 */}
        Register Before 11th January To Unlock Bonuses Worth ₹10,000/-
      </div>
    </div>
  );
}

export default WorkshopInfoSection;
