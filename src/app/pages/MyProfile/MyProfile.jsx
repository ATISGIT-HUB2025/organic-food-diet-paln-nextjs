"use client";
import React, { useState } from "react";

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return <div className="text-gray-700">Your Order History</div>;
      case "address":
        return <div className="text-gray-700">Your Address Details</div>;
      case "password":
        return <div className="text-gray-700">Change Your Password</div>;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden px-4">
      {/* Animated Background Circle */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-red-200 rounded-full opacity-30 animate-pulse z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 bg-white shadow rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white border-r p-4">
          <h2 className="text-xl font-bold mb-6">My Profile</h2>
          <ul className="space-y-3">
            {[
              { key: "orders", label: "My Order History" },
              { key: "address", label: "Address" },
              { key: "password", label: "Change Password" },
            ].map((tab) => (
              <li
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`cursor-pointer px-3 py-2 rounded-lg transition-all ${
                  activeTab === tab.key
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-8 transition-all">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
