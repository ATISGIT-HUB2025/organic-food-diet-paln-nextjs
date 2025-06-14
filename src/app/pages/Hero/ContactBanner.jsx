"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 79%), rgb(0 0 0 / 63%)), url('/img/contact/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Left side images */}
        <div className="relative flex gap-6">
          {/* Left Image */}
          <div className="rounded-xl overflow-hidden w-56 h-72 shadow-lg translate-y-6 image-hover">
            <Image
              src="/img/contact/01.jpg"
              alt="Running"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Image with Play Button */}
          <div className="relative rounded-xl overflow-hidden w-56 h-72 shadow-lg">
            <Image
              src="/img/contact/02.jpg"
              alt="Fitness"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
            {/* Play Icon */}
            <button
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
            >
              <div className="bg-green-400 w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-pulse cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="max-w-xl text-white mt-10 md:mt-0 md:ml-12">
          <h1 className="text-3xl md:text-6xl  font-bold mb-6 leading-tight">
            Let`s create something new together.
          </h1>
          <Link href="/contact" className="theme_btn">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="bg-white p-4 rounded-lg z-50 max-w-3xl w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 z-20 cursor-pointer  w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              ✕
            </button>
            <div className="relative pt-[56.25%] w-full h-0">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <Image
          src="/img/contact/bottom-bg-shape.png"
          alt="Bottom Shape"
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default ContactBanner;
