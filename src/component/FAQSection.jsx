import React, { useState } from 'react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can Students and Housewives join the WorkShop ?",
      answer: "Yes, this workshop is designed to benefit both students and housewives, providing flexible strategies and skills for earning from home.",
    },
    {
      question: "Can We Really Earn money after WorkShop ?",
      answer: "Absolutely! The workshop provides practical, actionable strategies and in-demand skills that you can immediately apply to start earning money.",
    },
    {
      question: "How much can we earn after Joining this WorkShop ?",
      answer: "Earning potential varies based on effort and application, but the workshop equips you with the knowledge to generate significant income through various online platforms.",
    },
    {
      question: "What are the Benefits of Joining this WorkShop ?",
      answer: "Benefits include learning new skills, achieving financial stability, gaining flexibility, personal growth, discovering new opportunities, and working on your own terms.",
    },
    {
      question: "What are the main Purpose of this WorkShop ?",
      answer: "The main purpose is to empower individuals to master work-from-home strategies using social media platforms, leveraging trending skills for success and financial independence.",
    },
    {
      question: "Is it Important to Join this WorkShop ?",
      answer: "Yes, if you're looking to gain valuable skills, achieve financial freedom, and build a flexible career from home, this workshop is highly beneficial.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-600 text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{index + 1}. {faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-base pr-8">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
