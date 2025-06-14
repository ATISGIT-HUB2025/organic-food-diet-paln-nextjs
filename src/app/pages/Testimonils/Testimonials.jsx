"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Eliza Steele",
    role: "Dietician",
    image: "/img/testimonials/2.jpg",
    review:
      "Health and fitness is great. Health and fitness has got everything I need. Health and fitness should be nominated for service of the year. I would gladly pay over 600 dollars for health and fitness. It's all good.",
    rating: 5,
  },
  {
    name: "Carlos Evans",
    role: "Fitness Coach",
    image: "/img/testimonials/2.jpg",
    review:
      "VMeals changed the game for me. Their meals are clean, tasty, and perfect for my training regimen.",
    rating: 5,
  },
  {
    name: "Mina Kapoor",
    role: "Nutrition Consultant",
    image: "/img/testimonials/2.jpg",
    review:
      "The personalized diet plans are well-thought-out and effective. I highly recommend VMeals to anyone serious about their health.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0  -left-200">
        <Image
          src="/img/testimonials/bg.png"
          alt="Testimonials Background"
          fill
          className="object-contain w-full h-full opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Swiper: Testimonial Text */}
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    What Our Client Say
                  </h2>
                  <p className="text-lg text-gray-700 italic mb-6">
                    "{item.review}"
                  </p>

                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                      <div className="text-yellow-500 mt-1">
                        {"★".repeat(item.rating)}
                        <span className="text-gray-300">
                          {"★".repeat(5 - item.rating)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Image */}
        <div className="w-full image-hover">
          <Image
            src="/img/testimonials/1.jpg"
            alt="Client eating healthy"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
