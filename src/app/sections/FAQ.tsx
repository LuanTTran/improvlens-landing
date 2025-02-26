'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How do guests join an event?",
    answer: "Guests can join by downloading the ImprovLens app and entering the unique event code provided by the host. Alternatively, hosts can share a direct link that opens the app and joins the event automatically."
  },
  {
    question: "Is there a limit to how many photos guests can take?",
    answer: "There is no limit to the number of photos guests can take within an event. However, the host can set moderation options to approve photos before they appear in the shared gallery if desired."
  },
  {
    question: "How long are photos stored?",
    answer: "Photos are stored for 30 days after the event by default. Hosts can extend storage by upgrading to a premium plan, or can download all photos at any time to keep them permanently."
  },
  {
    question: "Can I download all photos at once?",
    answer: "Yes, the host can download all photos from an event as a single zip file. Individual guests can download photos they've taken as well as any photos the host has approved for the shared gallery."
  },
  {
    question: "Is the app free to use?",
    answer: "Yes, ImprovLens is free to download and use for basic features. Premium features like extended storage, removal of watermarks, and advanced editing tools are available through subscription plans."
  },
  {
    question: "How is privacy maintained?",
    answer: "ImprovLens takes privacy seriously. Events are private by default and only accessible to those with the event code. Hosts have full control over which photos are shared. Additionally, all data is encrypted and securely stored."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container-section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently <span className="gradient-text">Asked Questions</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Everything you need to know about ImprovLens.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white/5 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              aria-expanded={activeIndex === index}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
