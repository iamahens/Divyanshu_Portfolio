import React, { useState, useEffect } from 'react';

function TestimonialSection() {
  // Array of placeholder image URLs for WhatsApp screenshots
  const testimonials = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3; // Number of slides to show at once

  // Automatic carousel movement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        // Move to the next "group" of slides, looping back if at the end
        (prevIndex + 1) % (testimonials.length - slidesToShow + 1)
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [testimonials.length, slidesToShow]);

  return (
    <div className="w-full bg-gray-800 py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
        What Our Students Say
      </h2>

      <div className="relative w-full max-w-6xl overflow-hidden rounded-lg shadow-xl"> {/* Increased max-w for more space */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
        >
          {testimonials.map((image, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex-shrink-0 flex justify-center items-center p-4" // Adjusted width for 3 slides
            >
              <img
                src={image}
                alt={`Testimonial ${index + 1}`}
                className="max-w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x600/CCCCCC/000000?text=Image+Not+Found'; }}
              />
            </div>
          ))}
        </div>

        {/* Navigation dots - adjusted for groups of slides */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {Array.from({ length: testimonials.length - slidesToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
