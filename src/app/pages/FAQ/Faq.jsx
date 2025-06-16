"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OurExpert from "./OurExpert";

const faqData = {
  "Getting Started": [
    {
      question: "How can I start nutrition diet?",
      answer:
        "To start a nutrition diet, consult our experts and choose a plan that suits your lifestyle.",
    },
    {
      question: "What documents do I need to begin?",
      answer:
        "Just your basic health info and dietary preferences are enough to get started.",
    },
  ],
  "Nutrition Consultation": [
    {
      question: "What fees do you charge?",
      answer: "We charge a flat consultation fee of ₹500.",
    },
    {
      question: "How long is each consultation?",
      answer: "Each consultation session lasts about 30 to 45 minutes.",
    },
  ],
  "Meal Plans": [
    {
      question: "How does your weight loss program work?",
      answer:
        "It’s based on calorie tracking, personalized meals, and weekly check-ins.",
    },
    {
      question: "Are meal plans customizable?",
      answer: "Yes, all plans are fully tailored to your taste and goals.",
    },
  ],
  Delivery: [
    {
      question: "When will I get my meals delivered?",
      answer:
        "We deliver every morning between 7 AM and 9 AM, including weekends.",
    },
  ],
  Payments: [
    {
      question: "What payment methods are accepted?",
      answer: "We accept UPI, cards, net banking, and cash on delivery.",
    },
  ],
  Discounts: [
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer 10% discount with valid student ID.",
    },
  ],
  Assistance: [
    {
      question: "How can I contact support?",
      answer: "Call 1800-123-456 or email support@example.com",
    },
  ],
};

const Faq = () => {
  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white py-12 px-4 md:px-16">
        {/* Heading */}
        <div className="relative z-10 text-center mb-12 px-4">
          <div className="section-title-6 text-center pt-5">
            <span className="uppercase text-sm text-gray-500 tracking-wider">
              FAQ
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Frequently asked questions
            </h2>
          </div>
        </div>

        {/* Tab Layout */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Tabs */}
          <div className="md:col-span-1 relative z-10">
            {/* Decorative Circle */}
            <div className="absolute -top-10 -left-20 w-[500px] h-[500px] border-80 border-green-100 rounded-full -z-10 opacity-50" />
            <div className="space-y-3 bg-green-50 rounded-xl p-4 shadow">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenIndex(null);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-green-200 text-green-900 font-semibold"
                      : "bg-white text-gray-700 hover:bg-green-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Content */}
          <div className="md:col-span-3 space-y-4 z-10">
            {(faqData[activeTab] || []).map((item, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden border transition-all ${
                  openIndex === index
                    ? "bg-yellow-100 border-yellow-300"
                    : "bg-green-200 border-green-200"
                }`}
              >
                <button
                  className={`flex justify-between  cursor-pointer items-center w-full px-6 py-4 text-left text-base font-medium focus:outline-none transition-colors ${
                    openIndex === index ? "text-black" : "text-black"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span className="ml-4">
                    {openIndex === index ? (
                      <FaChevronUp className="text-lg" />
                    ) : (
                      <FaChevronDown className="text-lg" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="bg-white px-6 py-4 text-gray-700 text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <OurExpert />
    </>
  );
};

export default Faq;
