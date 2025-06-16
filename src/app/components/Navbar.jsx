"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaCaretDown,
  FaHome,
  FaBlog,
  FaDice,
  FaAdjust,
  FaFilePdf,
} from "react-icons/fa";
import Topbar from "./Topbar";
import Logo from "./Logo";

const mealPlans = [
  {
    title: "Classic Diet",
    desc: "A variety of continental cuisine for a balanced diet",
    image: "/img/cat/Meal-Plan-Image-1.webp",
    url: "meal-plan-details",
  },
  {
    title: "Indian Fusion Diet – Non Veg",
    desc: "A rich fusion of Indian spices and flavors, crafted for non-vegetarians.",
    image: "/img/cat/Meal-Plan-Image-2.webp",
    url: "meal-plan-details",
  },
  {
    title: "Indian Fusion Diet – Veg",
    desc: "Savor authentic Indian vegetarian flavors with a healthy twist.",
    image: "/img/cat/Meal-Plan-Image-3.webp",
    url: "meal-plan-details",
  },
  {
    title: "Keto Diet",
    desc: "Low-carb, high-fat meals to support ketosis and satisfy cravings.",
    image: "/img/cat/Meal-Plan-Image-4.webp",
    url: "meal-plan-details",
  },
  {
    title: "Vegetarian Diet",
    desc: "Plant-based, protein-rich meals for a wholesome vegetarian lifestyle.",
    image: "/img/cat/Meal-Plan-Image-5.webp",
    url: "meal-plan-details",
  },
  {
    title: "Gluten & Dairy Free Diet",
    desc: "Savor delicious meals without gluten or dairy for a clean, allergen-free lifestyle.",
    image: "/img/cat/Meal-Plan-Image-6.webp",
    url: "meal-plan-details",
  },
  {
    title: "Custom Diet",
    desc: "Tailor-made meals to fit your unique health goals, preferences, and lifestyle.",
    image: "/img/cat/Meal-Plan-Image-7.webp",
    url: "meal-plan-details",
  },
];

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <>
      <Topbar />
      {/* Backdrop Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 p-4 shadow-2xl transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-green-600">Menu</h2>
          <FaTimes
            onClick={() => setDrawerOpen(false)}
            className="cursor-pointer text-xl text-gray-700"
          />
        </div>

        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="hover:text-green-600 font-semibold border-b border-dotted border-gray-400 pb-2 text-xs"
          >
            <div className="flex items-center gap-2">
              <FaHome /> Home
            </div>
          </Link>
          <Link
            href="about-us"
            className="hover:text-green-600 font-semibold border-b border-dotted border-gray-400 pb-2 text-xs"
          >
            <div className="flex items-center gap-2">
              <FaFilePdf /> About Us
            </div>
          </Link>
          <Link
            href="blog"
            className="hover:text-green-600 font-semibold border-b border-dotted border-gray-400 pb-2 text-xs"
          >
            <div className="flex items-center gap-2">
              <FaBlog /> Blog
            </div>
          </Link>

          <div>
            <h3 className="hover:text-green-600 font-semibold border-b border-dotted border-gray-400 pb-2 text-xs">
              <div className="flex items-center gap-2">
                <FaDice /> Our Meal Plan
              </div>
            </h3>
            {mealPlans.map((item, index) => (
              <Link href={item.url} key={index}>
                <div className="border-b border-dotted border-green-600">
                  <div className="flex gap-3 mb-3 p-2 rounded-lg hover:bg-green-200 transition ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-bold text-xs text-gray-800 mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="contact-us" className="theme_btn">
            GET IN TOUCH
          </Link>
        </nav>
      </div>

      {/* Main Navbar */}
      <header className="shadow-sm bg-white z-30 relative p-3 lg:p-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 relative">
            <Link href="/" className="hover:text-green-600 font-semibold">
              Home
            </Link>
            <Link
              href="about-us"
              className="hover:text-green-600 font-semibold"
            >
              About Us
            </Link>
            <Link href="blog" className="hover:text-green-600 font-semibold">
              Blog
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 font-semibold hover:text-green-600">
                Our Meal Plan <FaCaretDown className="text-xs mt-0.5" />
              </button>

              <div
                className={`scrollbar-hide absolute top-full left-0 mt-3 bg-white shadow-xl rounded-xl w-96 p-4 z-20 max-h-[300px] overflow-y-auto space-y-2  transition-all duration-200 ${
                  isDropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {mealPlans.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <div className="border-b border-dotted border-green-600">
                      <div className="flex gap-3 mb-3 p-2 rounded-lg hover:bg-green-200 transition ">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-bold text-xs text-gray-800 mb-1">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="contact-us"
              className="hover:text-green-600 font-semibold"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <FaBars
              onClick={() => setDrawerOpen(true)}
              className="text-xl cursor-pointer text-gray-800"
            />
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="contact-us" className="theme_btn">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
