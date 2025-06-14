"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden">
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 max-w-md ">
        <div className="image-hover">
          <Image
            src="/img/about/1.jpg"
            alt="Healthy cooking"
            width={500}
            height={500}
            className="rounded-lg "
          />
        </div>

        {/* Circle inset image */}
        <div className="absolute bottom-[-30px] right-[-30px] w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <Image
            src="/img/about/2.jpg"
            alt="Nutritionist"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating fruit (decorative) */}
        <Image
          src="/img/about/3.png"
          alt="Decorative Fruits"
          width={80}
          height={80}
          className="absolute top-[-30px] left-[-80px] hidden md:block"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 max-w-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
          We advise you to prevent <br /> disease with{" "}
          <span className="text-[#4CAF50]">nutrition</span>
        </h2>
        <p className="text-gray-600 mb-6">
          We encourage you to fix and forestall illness with nourishment for
          carrying on with your life in a solid manner.
        </p>

        <ul className="space-y-2 text-gray-700 mb-6">
          <li className="flex items-center gap-2">✅ Nutritional assessment</li>
          <li className="flex items-center gap-2">
            ✅ Meal planning and analysis
          </li>
          <li className="flex items-center gap-2">✅ Weight assessment</li>
        </ul>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl font-bold text-[#4CAF50]">25+</span>
          <span className="text-gray-700">Years Experience</span>
        </div>

        <button className="theme_btn">READ MORE</button>
      </div>

      {/* Animated Decorative Image (bottom-right) */}
      <div className="absolute bottom-6 right-6">
        <Image
          src="/img/about/animation5.png"
          alt="Animated Fruit"
          width={80}
          height={80}
          className="animate-pulse"
        />
      </div>
    </section>
  );
};

export default About;
