import Link from "next/link";
import React from "react";
import Consultation from "./Consultation";

const FreeNutrition = () => {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h6 className="text-sm font-semibold text-green-600 mb-2 bg-green-100 inline-block rounded-full px-4 py-1">
                #1 MEAL PLAN COMPANY
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                NUTRITIONIST CONSULTATION
              </h2>

              <p className="text-gray-600 mb-6">
                Being aware of your nutritional needs is crucial for your health
                journey. However, it is completely natural to not be in touch
                with your body and its needs. This is where we come to your aid.
                By consulting with our in-house nutritionists, you can provide
                the exact nutritional supply your body needs in terms of meals
                in the form of a customisable meal plans.
              </p>

              <Link href="meal-plans" className="theme_btn">
                View Meal Plans
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full image-hover ">
              <img
                src="/img/free-neutration/1.png"
                alt="Our Experts"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Consultation />
    </>
  );
};

export default FreeNutrition;
