import React from 'react';

function StickyFooter() {
  const handleBookSlotClick = () => {
    // Replace with your actual booking link
    window.open("https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!", '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-center items-center shadow-lg z-50">
      <button
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300 shadow-lg
                   transform hover:scale-105 animate-pulse flex flex-col items-center"
        onClick={handleBookSlotClick}
      >
        <span>BOOK YOUR SLOT NOW</span>
        <span className="text-sm font-normal mt-1">Only 51 seats left! Hurry!</span>
      </button>
    </div>
  );
}

export default StickyFooter;
