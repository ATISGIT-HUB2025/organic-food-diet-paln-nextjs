import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Classic Diet",
    image: "/img/meal-plan/m1.jpg",
    link: "diet",
    price: "Starting from AED92/day",
    desc: "Simple meals made Awesome! Enjoy a Classic diet plan with wholesome global cuisine.",
    tailoredFor: ["Weight Loss", "Balanced Diet", "Continental Cuisine"],
  },
  {
    title: "Indian Fusion Diet Non-Vegetarian",
    image: "/img/meal-plan/m2.jpg",
    link: "diet",
    price: "Starting from AED98/day",
    desc: "Indulge in the flavoursome goodness of Indian spices whilst journeying through rich culinary heritage.",
    tailoredFor: ["Balanced Diet", "Muscle Gain", "Weight Loss"],
  },
  {
    title: "Indian Fusion Diet Vegetarian",
    image: "/img/meal-plan/m3.jpg",
    link: "diet",
    price: "Starting from AED88/day",
    desc: "Indulge in the spicy goodness of Indian vegetarian flavours. A fusion meal plan that caters to a rich-Indian palate.",
    tailoredFor: ["Balanced Diet", "Vegetarian", "Continental Cuisine"],
  },
  {
    title: "Keto Diet",
    image: "/img/meal-plan/m5.jpg",
    link: "diet",
    price: "Starting from AED111/day",
    desc: "Stay in ketosis, and achieve weight loss faster. Keto diet plans got your cravings covered without the carbs!",
    tailoredFor: ["Weight Loss", "Ketosis", "Low Carb"],
  },
  {
    title: "Vegetarian Diet Plan",
    image: "/img/meal-plan/m5.jpg",
    link: "diet",
    price: "Starting from AED111/day",
    desc: "Delight in a fresh, no meat and protein rich vegetarian diet. Perfect for individuals preferring plant-based gains!",
    tailoredFor: ["Vegetarian", "Balanced Diet", "Weight Loss"],
  },
];

const MealCards = () => {
  return (
    <>
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-md overflow-hidden card-style8 h-full flex flex-col transition hover:shadow-lg"
            >
              {/* Image Block */}
              <div className="relative group overflow-hidden h-48 md:h-56 lg:h-50">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={100}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow z-20">
                  {service.price}
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#57aa46]/50 rounded-b-md scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10 pointer-events-none" />
              </div>

              {/* Content Block */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{service.desc}</p>

                  {/* Tailored For Section */}
                  <div className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold text-gray-800 block mb-1">
                      Tailored For:
                    </span>
                    <ul className="flex gap-1">
                      {service.tailoredFor.map((item, i) => (
                        <li
                          key={i}
                          className="text-black bg-green-100 border border-green-200 rounded px-2 list-none text-xs py-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-end m-4 mt-auto flex gap-1">
                <Link
                  href="meal-plan-details"
                  className="inline-block px-5 py-2 rounded-full border border-[#57aa46] text-xs font-semibold text-white bg-green-600 hover:bg-[#fff] hover:text-[#57aa46] transition duration-300 ease-in-out cursor-pointer"
                >
                  Customise Meal plan
                </Link>
                <Link
                  href="/img/meal-plan/diet-pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-full border border-[#57aa46] text-xs font-semibold text-[#57aa46] hover:bg-[#57aa46] hover:text-white transition duration-300 ease-in-out cursor-pointer"
                >
                  View Sample Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MealCards;
