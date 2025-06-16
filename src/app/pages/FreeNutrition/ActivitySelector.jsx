import React, { useState } from "react";

const ActivitySelector = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activityLevels = [
    {
      label: "Sedentary Lifestyle",
      short: "Low Activity",
      color: "bg-green-500",
    },
    { label: "Lightly Active", short: "", color: "bg-lime-400" },
    { label: "Active Lifestyle", short: "", color: "bg-yellow-400" },
    { label: "Very Active Lifestyle", short: "", color: "bg-orange-400" },
    {
      label: "Highly Active Lifestyle",
      short: "Very Active Lifestyle",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="text-center ">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">
        Select Your Metrics
      </h3>

      {/* Height and Weight Inputs */}
      <div className="flex flex-col md:flex-row justify-center gap-6  mb-8">
        <div className="flex flex-col items-start">
          <label className="font-semibold text-xs mb-2 text-gray-700">
            Height (cm)
          </label>
          <input
            type="number"
            placeholder="Enter your Height (cm)..."
            className="border-2 border-green-500 rounded-full px-6 py-3 w-[280px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="font-semibold text-xs mb-2 text-gray-700">
            Weight (kg)
          </label>
          <input
            type="number"
            placeholder="Enter your Weight (kg)..."
            className="border-2 border-green-500 rounded-full px-6 py-3 w-[280px] focus:outline-none"
          />
        </div>
      </div>

      {/* Fitness Activity Section */}
      <div className="space-y-10 max-w-5xl mx-auto">
        <h4 className="text-2xl font-bold text-gray-800">
          SELECT YOUR FITNESS ACTIVITY
        </h4>

        {/* Top Labels */}
        <div className="flex justify-between px-6 text-sm font-semibold text-gray-800">
          {activityLevels.map((activity, i) => (
            <button
              key={i}
              onClick={() => setSelectedActivity(i)}
              className={`transition-all px-4 py-2 rounded-full shadow-md text-center text-xs  mx-2 w-[150px] ${
                selectedActivity === i
                  ? "bg-green-600 text-white scale-105 ring-2 ring-offset-2 ring-green-600"
                  : "bg-white text-green-600 hover:bg-gray-100"
              }`}
            >
              {activity.label}
            </button>
          ))}
        </div>

        {/* Gradient Bar */}
        <div className="relative h-6 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 mx-6 mt-8">
          <div className="absolute top-1/2 left-0 w-full flex justify-between transform -translate-y-1/2 px-2">
            {activityLevels.map((activity, i) => (
              <button
                key={i}
                onClick={() => setSelectedActivity(i)}
                className={`w-4 h-8 rounded-full transition-all duration-200 ${
                  selectedActivity === i
                    ? "bg-white border-2 border-gray-800 scale-125 shadow-lg"
                    : "bg-white shadow-md"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySelector;
