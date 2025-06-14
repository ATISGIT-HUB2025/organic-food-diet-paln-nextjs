"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      {/* Custom pagination container */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 swiper-custom-pagination" />

      <Swiper
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="w-full "
      >
        {[1, 2].map((_, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 text-white"
              style={{
                backgroundImage: "url('/img/banner-04.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-0" />

              {/* Left content */}
              <div className="z-10 max-w-xl text-center lg:text-left w-full">
                <div className="mt-4 mb-4 w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto lg:mx-0">
                  <img
                    src="/img/animation1.png"
                    alt="Animation"
                    className="animate-pulse w-full h-full object-contain"
                  />
                </div>

                <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                  Keeping Your Body <br />
                  <span className="text-white/90">at its Best.</span>
                </h1>

                <p className="text-base md:text-lg text-white/80 mb-6">
                  Our nutrition team loves the benefits of exercise and healthy
                  food.
                  <br className="hidden md:block" />
                  You have the ability to make your own schedule.
                </p>

                <div className="flex  md:flex-row gap-4">
                  <Link href="/meal-plans" className="theme_btn ">
                    Order Now
                  </Link>
                  <Link href="/free-consultation" className="theme_btn ">
                    Free Consultation
                  </Link>
                </div>

                <div className="mt-6 w-[80px] h-[80px] md:w-[100px] md:h-[100px] mx-auto lg:mx-0">
                  <img
                    src="/img/animation2.png"
                    alt="Animation 2"
                    className="animate-pulse w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right animation */}
              <div className="z-10 w-[80px] h-[80px] md:w-[100px] md:h-[100px] mt-8 lg:mt-0">
                <img
                  src="/img/animation3.png"
                  alt="Animation 3"
                  className="animate-pulse w-full h-full object-contain hidden lg:block"
                />
              </div>

              {/* Bottom Wave */}
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 hidden lg:block">
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className="w-full h-[80px] md:h-[100px]"
                >
                  <path
                    d="M0.00,49.98 C150.00,150.00 349.92,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{ stroke: "none", fill: "#fff" }}
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
