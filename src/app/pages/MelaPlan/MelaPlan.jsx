import Image from "next/image";
import Link from "next/link";
import React from "react";
import MealCards from "./MealCards";
import HowWorkMealPlan from "../Hero/HowWorkMealPlan";
import Testimonials from "../Testimonils/Testimonials";

const MelaPlan = () => {
  return (
    <>
      <section className="bg-white py-12 px-4 md:px-16">
        {/* Heading */}
        <div className="relative z-10 text-center mb-12 px-4">
          <div className="section-title-6 text-center pt-5">
            <span className="uppercase text-sm text-gray-500 tracking-wider">
              Meal Plans
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Our Meal Plans
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p>
              Our meal plans are crafted with your{" "}
              <span className="text-green-700 font-bold">wellness in mind</span>
              . Each option is designed to meet your{" "}
              <span className="text-green-700 font-bold">dietary needs</span>{" "}
              with ease and taste.
            </p>
            <p>
              Discover a plan that fits your life. We make nutrition simple,
              delicious, and{" "}
              <span className="text-green-700 font-bold">
                perfectly tailored
              </span>{" "}
              for you.
            </p>
          </div>
          <div className="col-span-1">
            <div className="flex items-center gap-3 bg-gray-100 p-4">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-black">
                  Need help with finding the right meal plan?
                </p>
                <Link
                  href="free-nutrition-and-diet-consultation"
                  className="theme_btn shadow-2xs"
                >
                  Get Started
                </Link>
              </div>
              <div className="rounded-full">
                <Image
                  src="/img/faq/1.jpg"
                  alt="banner"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MealCards />
      <Testimonials />
      <HowWorkMealPlan />
    </>
  );
};

export default MelaPlan;
