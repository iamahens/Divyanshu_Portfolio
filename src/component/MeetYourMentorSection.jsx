import React from 'react';

function MeetYourMentorSection() {
  return (
    <div className="w-full bg-yellow-100 py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
        Meet Your Mentor
      </h2>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 p-6 md:p-8"> {/* Removed bg-white, rounded-lg, and shadow-xl */}
        {/* Left Section - Image/Video Placeholder */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="https://placehold.co/500x300/000000/FFFFFF?text=Mentor+Image"
            alt="Nasreen Fatima Mam"
            className="rounded-lg shadow-md max-w-full h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x300/CCCCCC/000000?text=Image+Not+Found'; }}
          />
        </div>

        {/* Right Section - Mentor Details */}
        <div className="w-full lg:w-1/2 text-gray-800">
          <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">Nasreen Fatima</h3>
          <p className="mb-4 text-base leading-relaxed">
            Nasreen Fatima is an inspiring mentor and advocate for personal and professional growth,
            with a strong focus on work-life balance, financial stability, and skill development. As a
            seasoned professional with extensive experience in guiding individuals toward success, she
            has empowered countless individuals to thrive in their careers and personal lives.
          </p>
          <p className="mb-4 text-base leading-relaxed">
            Nasreen specializes in creating actionable strategies for mastering remote work, achieving
            financial resilience, and acquiring new skills. Her unique approach blends practical insights
            with motivational guidance, making her an invaluable mentor for those navigating the
            challenges of modern professional life. Through her mentorship, Nasreen is committed to
            helping individuals unlock their potential and achieve sustainable success.
          </p>
          <p className="text-green-600 font-semibold text-lg mt-4">
            4000+ Students Mentored Across India
          </p>
        </div>
      </div>
    </div>
  );
}

export default MeetYourMentorSection;
