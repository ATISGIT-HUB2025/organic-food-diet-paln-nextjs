import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Corner animated circle component
const Circle = ({ position, color, className = "" }) => {
  const positions = {
    topLeft: "top-0 left-0",
    topRight: "top-0 right-0",
    bottomLeft: "bottom-0 left-0",
    bottomRight: "bottom-0 right-0",
  };

  return (
    <div
      className={`absolute ${positions[position]} ${color} opacity-30 rounded-full blur-3xl animate-float-slow ${className}`}
    />
  );
};

const steps = [
  {
    id: "01",
    title: "MISSION",
    description:
      "Our Mission is to make each individual healthier by providing customised meal plans delivered to the doorsteps. We ensure your meals are prepared keeping in mind your eating habits, portion size, calorie requirements, allergies, and other preferences.",
    image: "/img/about/1.svg",
  },
  {
    id: "02",
    title: "VISION",
    description:
      "Our Vision is to make the world better by providing proper nutrition. Food plays a vital role in keeping the body healthy. A healthy and energetic body can perform well, do more and achieve more. It is a blessing for individuals and society.",
    image: "/img/about/2.svg",
  },
  {
    id: "03",
    title: "VALUE",
    description:
      "We are committed to providing nutrition-rich fresh meals that can keep the body healthy. Many health challenges are because of the lack of proper nutrients. A well balanced meal can fulfil this gap and provide proper nourishment to the body.",
    image: "/img/about/3.svg",
  },
  {
    id: "04",
    title: "GOALS",
    description:
      "Our Goal is to make the world healthy. The entire world needs help with the right eating and proper body functioning. We are here to help each individual with nutritional gaps by providing the necessary nutrients. Be healthy for yourself and the entire world.",
    image: "/img/about/4.svg",
  },
];

const Mission = () => {
  return (
    <section className="relative py-16 px-4 md:px-16 overflow-hidden bg-white">
      {/* Animated background circles */}
      <Circle position="topLeft" color="bg-green-500" className="w-72 h-72" />
      <Circle position="topRight" color="bg-yellow-200" className="w-60 h-60" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <div className="section-title-6 text-center pt-5">
          <span className="uppercase text-sm text-gray-500 tracking-wider">
            OUR PURPOSE
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            ORGANIZATIONAL ODYSSEY
          </h2>
        </div>
      </div>

      {/* Step Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {steps.map((step, index) => (
          <div key={index} className="text-center relative">
            <div className="relative mb-4">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-green-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                {step.id}
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              {step.title}
            </h4>
            <p className="text-sm text-gray-500 mt-1">{step.description}</p>

            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-16 right-[-32px]">
                <Image
                  src="/img/about/arrow.png"
                  alt="Arrow"
                  width={32}
                  height={32}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
