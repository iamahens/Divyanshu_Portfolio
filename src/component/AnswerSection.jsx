import React from 'react';

function AnswerSection() {
  const answerCards = [
    {
      image: "https://placehold.co/300x200/FFD700/000000?text=Learn+New+Skills",
      alt: "Learn New Skills",
      title: "Learn New Skills",
      description: "Learning new skills opens doors to endless possibilities, fostering growth and adaptability. Embrace the challenge to unlock your true potential.",
    },
    {
      image: "https://placehold.co/300x200/A9A9A9/000000?text=Work+From+Home",
      alt: "Work From Home",
      title: "Work From Home",
      description: "Work from home offers flexibility & comfort, empowering you to balance productivity. It's the modern way to achieve professional success.",
    },
    {
      image: "https://placehold.co/300x200/ADD8E6/000000?text=Financial+Stability",
      alt: "Financial Stability",
      title: "Financial Stability",
      description: "Financial stability provides peace of mind and the freedom to pursue your dreams. It's the foundation of a secure and fulfilling life.",
    },
  ];

  return (
    <div className="w-full bg-gray-700 py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
        What if you get all the <span className="text-green-400">Answers of these Questions?</span>
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {answerCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" // Added hover effects
          >
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/CCCCCC/000000?text=Image+Not+Found'; }}
            />
            <div className="p-6 flex flex-col flex-grow">
              <div className="w-12 h-1 bg-orange-500 rounded mb-4"></div> {/* Orange line */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-base flex-grow">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnswerSection;
