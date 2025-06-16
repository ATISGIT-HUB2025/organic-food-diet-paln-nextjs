import Link from "next/link";
import React from "react";

const OurExpert = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h6 className="text-sm font-semibold text-green-600 mb-2">
              {" "}
              OUR EXPERTS
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              TALK TO OUR QUALIFIED NUTRITIONIST
            </h2>
            <h4 className="text-2xl font-semibold text-green-800 mb-2">
              Free Nutritionist Consultation
            </h4>
            <p className="text-gray-600 mb-6">
              Take advantage of our healthy diet plans to improve your life. You
              can consult with one of our trained and experienced nutritionists
              if you need help determining which food plan in Dubai to select.
              We can support and assist you in selecting the appropriate meal
              plan.
            </p>
            <h4 className="text-2xl font-semibold text-green-800 mb-2">
              Personalised Diet Meal Plan
            </h4>
            <p className="text-gray-600 mb-6">
              Numerous health problems can result from improper or uncontrolled
              eating habits. In addition to assisting with health issues, a
              balanced diet can support increased activity, strength, and
              vitality. With our personalised meal plans, you can accelerate the
              process of accomplishing your fitness goals.
            </p>

            <Link
              href="free-nutrition-and-diet-consultation"
              className="theme_btn"
            >
              Get Started
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full image-hover ">
            <img
              src="/img/faq/1.jpg"
              alt="Our Experts"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpert;
