"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MealPlanStep from "./MealPlanStep";
import MealPlanInfo from "./MealPlanInfo";
import ContactBanner from "../Hero/ContactBanner";
import HowWorkMealPlan from "../Hero/HowWorkMealPlan";

const MelaPlanDetails = () => {
  const images = [
    "/img/meal-plan-details/1.webp",
    "/img/meal-plan-details/2.webp",
    "/img/meal-plan-details/3.webp",
    "/img/meal-plan-details/4.webp",
    "/img/meal-plan-details/5.webp",
    "/img/meal-plan-details/6.webp",
    "/img/meal-plan-details/7.webp",
    "/img/meal-plan-details/8.webp",
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <>
      <section className="py-16 bg-white text-center px-4">
        {/* Heading */}
        <div className="relative z-10 text-center mb-12 px-4">
          <div className="section-title-6 text-center pt-5">
            <span className="uppercase text-sm text-gray-500 tracking-wider">
              meal plans
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Meal Plan Details
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-start p-6 md:p-10 max-w-6xl mx-auto">
          {/* Left: Diet Info */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Indian Fusion Diet{" "}
              <span className="text-green-600">Vegetarian</span>
            </h1>

            <p className="text-sm text-gray-600 leading-relaxed">
              Our team of chefs and nutritionists collaborate to build this
              masterful meal plan, blending the nutritional benefits of quality
              ingredients with vibrant Indian flavours! We understand the
              challenge of eating healthy, hence we’ve built this Indian Fusion
              Vegetarian Meal Plan particularly for customers accustomed to the
              Indian Flavours!
            </p>

            <div className="flex justify-between">
              {/* Sample Menu Button */}
              <Link
                href="/pdf/sample-menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="theme_btn"
              >
                Sample Menu
              </Link>

              {/* Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <Image
                    src="/img/meal-plan-details/u1.jpg"
                    alt="user1"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/img/meal-plan-details/u2.jpg"
                    alt="user2"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  <span className="text-green-600 font-semibold">★ 4.8</span>{" "}
                  (650 reviews)
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-200 shadow">
              <Image
                src={selectedImg}
                alt="Selected meal"
                width={640}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 flex-wrap">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(img)}
                  className={`w-14 h-14 rounded-md overflow-hidden border-2 ${
                    selectedImg === img
                      ? "border-green-600"
                      : "border-gray-200 hover:border-green-400"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`meal-${i}`}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Form Area */}
          <div className="space-y-6">
            <MealPlanStep />
          </div>
        </div>
      </section>

      <MealPlanInfo />
      <ContactBanner />
      <HowWorkMealPlan />
    </>
  );
};

export default MelaPlanDetails;
