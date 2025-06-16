"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ActivitySelector from "./ActivitySelector";
import InformationForm from "./InformationForm";

const steps = [
  "Fitness Goal",
  "Body Metrics",
  "Personal Information",
  "Diet Plan",
];

const Consultation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Select Your Goal</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
              {[
                { name: "Weight Loss", icon: "/img/free-neutration/1.svg" },
                { name: "Stay Fit", icon: "/img/free-neutration/2.svg" },
                { name: "Muscle Gain", icon: "/img/free-neutration/3.svg" },
              ].map((goal) => (
                <button
                  key={goal.name}
                  onClick={() => setSelectedGoal(goal.name)}
                  className={`flex flex-col items-center px-6 py-6 rounded-lg border transition-all ${
                    selectedGoal === goal.name
                      ? "bg-green-600 text-white border-green-700"
                      : "bg-green-100 text-gray-700 hover:bg-green-200"
                  }`}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white shadow-2xs rounded-full mb-2">
                    <Image
                      src={goal.icon}
                      alt={goal.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="font-bold">{goal.name}</span>
                </button>
              ))}
            </div>

            {/* Terms checkbox */}
            <div className="mt-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span className="text-sm">
                  I agree to the{" "}
                  <Link
                    href="terms-conditions"
                    className="underline text-green-600"
                  >
                    terms & conditions
                  </Link>
                </span>
              </label>
            </div>
          </div>
        );
      case 1:
        return <ActivitySelector />;
      case 2:
        return <InformationForm />;
      case 3:
        return (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">
              Select Your Diet Preference
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
              {[
                { name: "No preference", icon: "/img/free-neutration/4.svg" },
                { name: "Gluten Free", icon: "/img/free-neutration/5.svg" },
                { name: "Dairy Free ", icon: "/img/free-neutration/6.svg" },
                { name: "Vegetarian ", icon: "/img/free-neutration/7.svg" },
                { name: "Vegan ", icon: "/img/free-neutration/8.svg" },
                { name: "Ketosis ", icon: "/img/free-neutration/9.svg" },
                { name: "Seafood ", icon: "/img/free-neutration/10.svg" },
              ].map((goal) => (
                <button
                  key={goal.name}
                  onClick={() => setSelectedGoal(goal.name)}
                  className={`flex flex-col items-center px-6 py-6 rounded-lg border transition-all ${
                    selectedGoal === goal.name
                      ? "bg-green-600 text-white border-green-700"
                      : "bg-green-100 text-gray-700 hover:bg-green-200"
                  }`}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white shadow-2xs rounded-full mb-2">
                    <Image
                      src={goal.icon}
                      alt={goal.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="font-bold">{goal.name}</span>
                </button>
              ))}
            </div>

            {/* ✅ Done Button */}
            <button onClick={() => setCompleted(true)} className="theme_btn">
              Done
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4">
      {completed ? (
        // ✅ Success Message
        <div className="text-center max-w-xl mx-auto bg-green-50 border border-green-200 p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🎉 Submission Successful!
          </h2>
          <p className="text-lg text-green-800 font-semibold">
            OUR TEAM WILL GET IN TOUCH WITH YOU SHORTLY!
          </p>
        </div>
      ) : (
        <>
          {/* Heading */}
          <div className="text-center mb-10">
            <span className="uppercase text-sm text-gray-500 tracking-wider">
              Consultation
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Start Your Consultation
            </h2>
          </div>

          {/* Stepper Header */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {steps.map((step, index) => (
              <button
                key={step}
                onClick={() => setCurrentStep(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  index === currentStep
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 hover:bg-green-100"
                }`}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center border border-current text-sm">
                  {index + 1}
                </span>
                <span className="text-sm">{step}</span>
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-xl shadow-md">
            {renderStepContent()}

            {/* Navigation Buttons */}
            {currentStep < steps.length - 1 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 ${
                    currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Back
                </button>

                <button
                  onClick={handleNext}
                  className={`theme_btn ${
                    currentStep === steps.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Consultation;
