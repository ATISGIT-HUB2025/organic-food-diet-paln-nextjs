"use client";
import React from "react";
import CountUp from "react-countup";
import { FaStar, FaUtensils, FaSmile, FaHandshake } from "react-icons/fa";

const stats = [
  {
    icon: <FaStar className="text-green-600 text-2xl mb-2" />,
    end: 650,
    suffix: "+",
    label: "Google Reviews",
  },
  {
    icon: <FaUtensils className="text-green-600 text-2xl mb-2" />,
    end: 1200,
    suffix: "+",
    label: "Unique Meals",
  },
  {
    icon: <FaSmile className="text-green-600 text-2xl mb-2" />,
    end: 10000,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <FaHandshake className="text-green-600 text-2xl mb-2" />,
    end: 4,
    suffix: "+",
    label: "Years Helping People",
  },
];

const Counter = () => {
  return (
    <section className="bg-gray-900 border p-6 md:p-12 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {stat.icon}
            <h3 className="text-3xl font-bold text-white">
              <CountUp end={stat.end} duration={2.5} />
              {stat.suffix}
            </h3>
            <p className="text-sm text-gray-200 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
