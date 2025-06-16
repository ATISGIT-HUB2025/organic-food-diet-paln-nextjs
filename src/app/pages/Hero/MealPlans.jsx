"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const services = [
  {
    title: "Classic Diet",
    image: "/img/meal-plan/m1.jpg",
    link: "meal-plan-details",
    price: "Starting from AED92/day",
    desc: "Simple meals made Awesome! Enjoy a Classic diet plan with wholesome global cuisine.",
  },
  {
    title: "Indian Fusion DietNon Vegetarian",
    image: "/img/meal-plan/m2.jpg",
    link: "meal-plan-details",
    price: "Starting from AED98/day",
    desc: "Indulge in the flavoursome goodness of Indian spices whilst journeying through rich culinary heritage.",
  },
  {
    title: "Indian Fusion Diet Vegetarian",
    image: "/img/meal-plan/m3.jpg",
    link: "meal-plan-details",
    price: "Starting from AED88/day",
    desc: "Indulge in the spicy goodness of Indian vegetarian flavours. A fusion meal plan that caters to a rich-Indian palate.",
  },
  {
    title: "Keto Diet",
    image: "/img/meal-plan/m5.jpg",
    link: "meal-plan-details",
    price: "Starting from AED111/day",
    desc: "Stay in ketosis, and achieve weight loss faster. Keto diet plans got your cravings covered without the carbs!",
  },
  {
    title: "Vegetarian",
    image: "/img/meal-plan/m5.jpg",
    link: "meal-plan-details",
    price: "Starting from AED111/day",
    desc: "Delight in a fresh, no meat and protein rich vegetarian diet. Perfect for individuals preferring plant-based gains!",
  },
];

const MealPlans = () => {
  return (
    <section className="relative bg-gray-100 pt-20 pb-0 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute -top-1 left-0 w-full z-0 pointer-events-none">
        <Image
          src="/img/meal-plan/bottom-bg-shape.png"
          alt="Top Wave"
          width={1920}
          height={100}
          className="w-full h-auto rotate-180"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12 px-4">
        <div className="section-title-6 text-center pt-5">
          <span className="uppercase text-sm text-gray-500 tracking-wider">
            meal plans
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Healthy meal plans by VMeals
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="relative z-10 px-4 md:px-8 xl:px-32">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="!pb-8"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link href={service.link}>
                <div className="bg-white rounded shadow-md overflow-hidden card-style8 h-full flex flex-col transition hover:shadow-lg">
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

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {service.title.slice(0, 20)}...
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.desc.slice(0, 100)}...
                    </p>
                  </div>

                  <div className="text-end m-2">
                    <button className="inline-block px-5 py-1 rounded-full border border-[#57aa46] text-xs font-semibold text-[#57aa46] hover:bg-[#57aa46] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                      View Meal Plan
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animated Decoration */}
      <div className="relative z-10 flex justify-start items-center mt-10 px-4 md:px-8">
        <Image
          src="/img/about/animation5.png"
          alt="Decoration"
          width={80}
          height={80}
          className="animate-pulse"
        />
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <Image
          src="/img/meal-plan/bottom-bg-shape.png"
          alt="Bottom Wave"
          width={1920}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default MealPlans;
