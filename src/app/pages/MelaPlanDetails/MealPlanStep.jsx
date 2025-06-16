import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const MealPlanStep = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [duration, setDuration] = useState(null);
  const [calories, setCalories] = useState(null);
  const [meals, setMeals] = useState([]);
  const [deliveryDays, setDeliveryDays] = useState(null);
  const [offDays, setOffDays] = useState(null);

  const [allergyOptions] = useState([
    "Gluten",
    "Peanuts",
    "Dairy",
    "Shellfish",
    "Eggs",
    "Soy",
    "Tree Nuts",
    "Wheat",
  ]);

  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-gray-50 rounded-xl shadow">
      <div className="text-xl font-semibold text-gray-800 text-center">
        {step === 1 && "Sign up below"}
        {step === 2 && "Step 2/5: Building your meal plan"}
        {step === 3 && "Step 3/5: Customising your meal plan"}
        {step === 4 && "Step 4/5: Personalising your meal plan"}
        {step === 5 && "Step 5/5: Almost done..."}
      </div>

      {step === 1 && (
        <>
          {/* Fitness Goal */}
          <div>
            <label className="block font-medium mb-2 text-xs">
              Select your fitness goal
            </label>
            <div className="flex gap-2 flex-wrap">
              {["Weight Loss", "Stay Fit", "Muscle Gain"].map((goal) => (
                <button
                  key={goal}
                  onClick={() => setSelectedGoal(goal)}
                  className={`flex-1 cursor-pointer px-4 py-2 border border-gray-300 rounded-full text-xs font-semibold ${
                    selectedGoal === goal
                      ? "bg-green-600 text-white border border-gray-300-green-600"
                      : "bg-green-100 text-gray-600 border border-gray-300-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* Height & Weight */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-xs font-medium mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                defaultValue={172}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                defaultValue={70}
              />
            </div>
          </div>

          {/* Activity Level */}
          <div className="mt-4">
            <label className="block font-medium mb-2 text-xs">
              Select your activity level
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {[
                {
                  level: "Sedentary",
                  range: "0-1 hrs",
                  icon: "/img/meal-plan-details/1.svg",
                },
                {
                  level: "Low Activity",
                  range: "1-3 hrs",
                  icon: "/img/meal-plan-details/2.svg",
                },
                {
                  level: "Active",
                  range: "4-5 hrs",
                  icon: "/img/meal-plan-details/3.svg",
                },
                {
                  level: "Very Active",
                  range: "6-8 hrs",
                  icon: "/img/meal-plan-details/4.svg",
                },
                {
                  level: "Highly Active",
                  range: "9+ hrs",
                  icon: "/img/meal-plan-details/5.svg",
                },
              ].map(({ level, range, icon }) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSelectedActivity(level)}
                  className={`flex cursor-pointer flex-col items-center justify-center border border-gray-300 rounded p-3 text-center transition ${
                    selectedActivity === level
                      ? "bg-green-600 text-white border border-gray-300-green-600"
                      : "bg-green-100 text-gray-600 border border-gray-300-gray-300"
                  }`}
                >
                  <Image
                    src={icon}
                    alt={level}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <div className="font-semibold text-xs">{level}</div>
                  <div className="text-xs">{range} per week</div>
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button onClick={nextStep} className="theme_btn w-full">
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label className="block font-medium mb-4 text-lg">
              Create your fitness profile
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300   rounded px-3 py-2 text-xs"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                placeholder="Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Nationality
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                placeholder="Indian"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">
                Select Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Gender</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex items-start gap-2 mt-2">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-xs text-gray-700">
              I agree to the{" "}
              <Link
                href="terms-conditions"
                className="text-green-600 underline"
              >
                Terms & Conditions
              </Link>
            </label>
          </div>

          <button onClick={nextStep} className="theme_btn w-full">
            Next
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <div>
            <label className="block font-medium mb-2 text-xs">
              Choose your plan duration
            </label>
            <div className="flex gap-2 flex-wrap">
              {["1 Week", "4 Weeks", "8 Week", "12 Weeks"].map((goal) => (
                <button
                  key={goal}
                  onClick={() => setDuration(goal)}
                  className={`flex-1 px-4 py-2 border border-gray-300 rounded-full cursor-pointer text-xs font-semibold ${
                    duration === goal
                      ? "bg-green-600 text-white border border-gray-300-green-600"
                      : "bg-green-100 text-gray-600 border border-gray-300-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-medium mb-2 text-xs">
              Choose your portion size (kcal)
            </label>
            <div className="flex gap-2 flex-wrap">
              {["1200 - 1600", "1600 - 2000", "2000 - 2400", "2400 - 3000"].map(
                (goal) => (
                  <button
                    key={goal}
                    onClick={() => setCalories(goal)}
                    className={`flex-1 px-4 py-2 border border-gray-300 rounded-full font-semibold text-xs cursor-pointer ${
                      calories === goal
                        ? "bg-green-600 text-white border border-gray-300-green-600"
                        : "bg-green-100 text-gray-600 border border-gray-300-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {goal}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-medium mb-2 text-xs">
              Choose your meals (Minimum 2)
            </label>
            <div className="flex gap-2 flex-wrap">
              {["Breakfast", "Lunch", "Dinner", "Snacks", "Drink"].map(
                (meal) => {
                  const isSelected = meals.includes(meal);
                  return (
                    <button
                      key={meal}
                      onClick={() => {
                        setMeals((prev) =>
                          isSelected
                            ? prev.filter((m) => m !== meal)
                            : [...prev, meal]
                        );
                      }}
                      className={`flex-1 px-4 py-2 border border-gray-300 rounded-full text-xs cursor-pointer font-semibold ${
                        isSelected
                          ? "bg-green-600 text-white border border-gray-300-green-600"
                          : "bg-green-100 text-gray-600 border border-gray-300-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {meal}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {[
                {
                  level: "Recommended Calories",
                  range: "2827.36 kcal per day",
                },
                {
                  level: "Current Daily Calories",
                  range: "1050kcal - 1300kcal",
                },
              ].map(({ level, range }) => (
                <div
                  key={level}
                  className=" rounded p-4 text-center bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                >
                  <div className="font-semibold">{level}</div>
                  <div>{range}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              if (meals.length < 2) {
                alert("Please select at least 2 meals.");
                return;
              }
              nextStep();
            }}
            className="theme_btn w-full"
          >
            Next
          </button>
        </>
      )}

      {step === 4 && (
        <>
          <div>
            <label className="block font-medium mb-2 text-xs">
              Choose your delivery days
            </label>
            <div className="flex gap-2 flex-wrap">
              {["5 Days", "6 Days", "7 Days"].map((goal) => (
                <button
                  key={goal}
                  onClick={() => setDeliveryDays(goal)}
                  className={`flex-1 px-4 py-2 border border-gray-300 rounded-full text-xs cursor-pointer font-semibold ${
                    deliveryDays === goal
                      ? "bg-green-600 text-white border border-gray-300-green-600"
                      : "bg-green-100 text-gray-600 border border-gray-300-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-medium mb-2 text-xs">
              Choose your off day(s)
            </label>
            <div className="flex gap-2 flex-wrap">
              {["Friday & Saturday", "Saturday & Sunday"].map((goal) => (
                <button
                  key={goal}
                  onClick={() => setOffDays(goal)}
                  className={`flex-1 px-4 py-2 border border-gray-300 rounded-full text-xs cursor-pointer font-semibold ${
                    offDays === goal
                      ? "bg-green-600 text-white border border-gray-300-green-600"
                      : "bg-green-100 text-gray-600 border border-gray-300-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-medium mb-2 text-xs">
              Choose your starting date
            </label>
            <div className="flex gap-2 flex-wrap">
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                placeholder="John"
              />
            </div>
          </div>
          <div className="mt-4 relative">
            <label className="block font-medium mb-2 text-xs">
              Select your allergies (Maximum 5)
            </label>

            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs cursor-pointer bg-white"
            >
              {selectedAllergies.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedAllergies.map((item) => (
                    <span
                      key={item}
                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAllergies((prev) =>
                          prev.filter((a) => a !== item)
                        );
                      }}
                    >
                      {item}{" "}
                      <span className="text-red-500 cursor-pointer">×</span>
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-gray-400">Select allergies</span>
              )}
            </div>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow mt-1 max-h-48 overflow-y-auto">
                {allergyOptions.map((option) => {
                  const isSelected = selectedAllergies.includes(option);
                  return (
                    <div
                      key={option}
                      onClick={() => {
                        setSelectedAllergies((prev) => {
                          if (isSelected) {
                            return prev.filter((item) => item !== option);
                          } else if (prev.length < 5) {
                            return [...prev, option];
                          } else {
                            alert("You can select up to 5 allergies.");
                            return prev;
                          }
                        });
                      }}
                      className={`px-4 py-2 text-xs cursor-pointer hover:bg-gray-100 ${
                        isSelected
                          ? "bg-green-100 text-green-700 font-medium"
                          : ""
                      }`}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (meals.length < 2) {
                alert("Please select at least 2 meals.");
                return;
              }
              nextStep();
            }}
            className="theme_btn w-full"
          >
            Next
          </button>
        </>
      )}

      {step === 5 && (
        <>
          {/* Address Type Selection */}
          <div>
            <label className="block font-medium mb-2 text-xs">
              Choose your address type
            </label>
            <div className="flex gap-2 flex-wrap">
              {["Apartment", "Villas", "Hotel", "Office"].map((goal) => (
                <button
                  key={goal}
                  onClick={() => setDuration(goal)}
                  className={`flex-1 px-4 py-2 border border-gray-300 rounded-full text-xs cursor-pointer font-semibold ${
                    duration === goal
                      ? "bg-green-600 text-white border border-gray-300-green-600"
                      : "bg-green-100 text-gray-600 border border-gray-300-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* City & Area Dropdowns - 1 Line */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2 text-xs">City</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-xs">
                <option value="">Select city</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2 text-xs">Area</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-xs">
                <option value="">Select area</option>
                <option value="area1">Area 1</option>
                <option value="area2">Area 2</option>
                <option value="area3">Area 3</option>
              </select>
            </div>
          </div>

          {/* Full Width Address */}
          <div className="mt-4">
            <label className="block font-medium mb-2 text-xs">Address</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
              placeholder="Enter full address"
            />
          </div>

          {/* Pincode & Slot - 1 Line */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2 text-xs">Pincode</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2 text-xs"
                placeholder="e.g. 560001"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-xs">
                Delivery Slot
              </label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-xs">
                <option value="">Select slot</option>
                <option value="8-10">8 AM - 10 AM</option>
                <option value="10-12">10 AM - 12 PM</option>
                <option value="6-8">6 PM - 8 PM</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <Link href="order-summary" className="theme_btn w-full">
            Checkout
          </Link>
        </>
      )}

      {/* You can continue similar JSX blocks for steps 2–5 */}
      {step > 1 && (
        <button
          onClick={prevStep}
          className="text-xs text-green-600 underline font-bold cursor-pointer flex gap-1 items-center"
        >
          <FaArrowAltCircleLeft /> Go Back
        </button>
      )}
    </div>
  );
};

export default MealPlanStep;
