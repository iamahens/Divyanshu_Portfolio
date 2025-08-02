import React from 'react';

function MeetYourMentorSection() {
    return (
        <div className="w-full bg-yellow-100 py-12 px-4 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
                Meet Your Mentor
            </h2>

            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 p-6 md:p-8"> {/* Removed bg-white, rounded-lg, and shadow-xl */}
                {/* Left Section - Image/Video Placeholder */}
                <div className="w-full lg:w-1/2 flex justify-center  items-center">
                    <img
                        src="/gallery9.jpg"
                        alt="Nasreen Fatima Mam"
                        className="rounded-lg shadow-md max-w-full h-auto"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x300/CCCCCC/000000?text=Image+Not+Found'; }}
                    />
                </div>

                {/* Right Section - Mentor Details */}
                <div className="w-full lg:w-1/2 text-gray-800">
                    <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">Divyanshu Verma</h3>
                    <p className="mb-4 text-base leading-relaxed">
                        Divyanshu Verma is an internet personality and entrepreneur, known for building multiple successful income streams and generating consistent 6-figure monthly earnings by the age of 22. By this age, he had already empowered over 1,000 students to start earning online and take control of their financial future.
                    </p>
                    <p className="mb-4 text-base leading-relaxed">


                        In just 10 months he generated ₹3 million in revenue, with ₹2.5 million in profit all by sharing real, practical skills that deliver results.

                        This is not about theories or empty promises. It’s about raw experience, proven strategies, and results that speak for themselves. That’s what Divyanshu delivers raw, real, and truly effective. </p>
                    <p className="text-green-600 font-semibold text-lg mt-4">
                        4000+ Students Mentored Across India
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MeetYourMentorSection;
