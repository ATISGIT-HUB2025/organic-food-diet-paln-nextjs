"use client";
import React from "react";
import Image from "next/image";

const featuresLeft = [
  {
    title: "Nutrition Strategies",
    icon: "/img/why-choose/2.png",
  },
  {
    title: "Individual Support",
    icon: "/img/why-choose/3.png",
  },
  {
    title: "Excercise Daily",
    icon: "/img/why-choose/4.png",
  },
];

const featuresRight = [
  {
    title: "Healthy Diets",
    icon: "/img/why-choose/5.png",
  },
  {
    title: "Workout Routines",
    icon: "/img/why-choose/6.png",
  },
  {
    title: "Better Immune System",
    icon: "/img/why-choose/7.png",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="section-title-6 text-center pt-5">
          <span>Why Choose Us</span>
          <h2>Why should you choose VMeals?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-10">
            {featuresLeft.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 text-right ${
                  index === 1 ? "mx-0 md:-mx-8 w-full" : ""
                }`}
              >
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm">
                    Our nutrition team love the benefits of exercise and healthy
                    food.
                  </p>
                </div>
                <div className="bg-green-400 p-3 rounded-full">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image
              src="/img/why-choose/1.jpg" // replace with your actual image path
              alt="Healthy Food"
              width={800}
              height={600}
              className="rounded-full object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-10">
            {featuresRight.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 text-left ${
                  index === 1 ? "mx-0 md:mx-8 w-full" : ""
                }`}
              >
                <div className="bg-green-400 p-3 rounded-full">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm">
                    Our nutrition team love the benefits of exercise and healthy
                    food.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8 mr-3">
        <Image
          src="/img/why-choose/animation4.png"
          alt=""
          width={80}
          height={80}
          className="animate-pulse"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
