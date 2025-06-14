"use client";
import React from "react";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Choose your meal plan",
    desc: "Pick from the best meal plans that always guarantee a nutrient-dense & delicious dish.",
    icon: "/img/how-work-meal/2.svg",
  },
  {
    id: "02",
    title: "Design your meal plan",
    desc: "Customise your healthy meal plan according to your fitness goal, or your taste buds.",
    icon: "/img/how-work-meal/3.svg",
  },
  {
    id: "03",
    title: "Enjoy your meal plan",
    desc: "Dig into your favourites with fresh & fabulous dishes from your hassle-free meal plan delivery.",
    icon: "/img/how-work-meal/4.svg",
  },
];

const HowWorkMealPlan = () => {
  return (
    <section className="py-16 bg-white text-center px-4">
      {/* Heading */}

      <div className="relative z-10 text-center mb-12 px-4">
        <div className="section-title-6 text-center pt-5">
          <span className="uppercase text-sm text-gray-500 tracking-wider">
            meal plans work
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            How VMeals meal plans work?
          </h2>
        </div>
      </div>

      {/* Illustration */}
      <div className="mb-12">
        <Image
          src="/img/how-work-meal/1.svg"
          alt="Eating Illustration"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg p-6 rounded-2xl border border-green-100 hover:shadow-xl hover:bg-green-200 cursor-pointer transition"
          >
            <div className="flex justify-center mb-4 relative">
              <div className="bg-white p-3 rounded-xl border shadow-md">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={32}
                  height={32}
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gray-900 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
                {step.id}
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h4>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorkMealPlan;
