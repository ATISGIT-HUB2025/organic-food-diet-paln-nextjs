import Link from "next/link";
import React from "react";
import { FaClock, FaMapMarkerAlt, FaBox } from "react-icons/fa";

const OrderSummary = () => {
  return (
    <div className="min-h-screen  py-12 px-4">
      {/* Heading */}
      <div className="relative z-10 text-center mb-12 px-4">
        <div className="section-title-6 text-center pt-5">
          <span className="uppercase text-sm text-gray-500 tracking-wider">
            Order Summary
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
            Order Summary
          </h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-6 md:p-8 rounded-3xl shadow-lg">
        {/* Left Side: Delivery and Meal Plan */}
        <div className="space-y-6">
          {/* Delivery Info */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Delivery Information
            </h3>
            <div className="flex items-start gap-3 text-sm text-gray-700">
              <div className="mt-1 text-green-600">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="font-semibold">Abu Dhabi Mall – Abu Dhabi</p>
                <p>
                  79/2, Sanskar Niwas Siddharthnagar, Panchgani, Tal –
                  Mahabaleshwar, District – Satara , 412805, 2121
                </p>
                <div className="flex items-center mt-1 text-gray-500">
                  <FaClock className="mr-1" />
                  <span>3:00am – 7:00am</span>
                </div>
              </div>
              <Link
                href="meal-plan-details"
                className="ml-auto text-green-600 font-semibold cursor-pointer"
              >
                Edit
              </Link>
            </div>
          </div>

          <hr />

          {/* Meal Plan Info */}
          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Meal Plan Information
            </h3>
            <div className="flex items-start gap-3 text-sm text-gray-700">
              <div className="mt-1 text-green-600">
                <FaBox size={20} />
              </div>
              <div>
                <p className="font-semibold">Keto Diet – Non Vegetarian</p>
                <p className="text-gray-500">
                  1000kcal – 1200kcal • 4 Weeks • 6 Days
                </p>
                <p className="text-gray-600">Lunch, Dinner</p>
              </div>
              <Link
                href="meal-plan-details"
                className="ml-auto text-green-600 font-semibold cursor-pointer"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Payment Summary */}
        <div className="bg-green-50 p-6 rounded-3xl shadow-inner">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Payment Summary
          </h3>

          <div className="bg-yellow-100 rounded-full text-center py-2 font-semibold text-yellow-800 mb-4">
            NO CODE APPLIED! 😳
          </div>

          {/* Coupon Input */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full border-b border-gray-400 outline-none bg-transparent py-1"
            />
            <button className="theme_btn">Apply</button>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Plan Amount:</span>
              <span className="font-semibold">AED 2659.30</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span className="font-semibold">0%</span>
            </div>
            <div className="flex justify-between">
              <span>Savings:</span>
              <span className="font-semibold">AED 0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Plan Total:</span>
              <span className="font-semibold">AED 2659.30</span>
            </div>
            <div className="flex justify-between">
              <span>VAT:</span>
              <span className="font-semibold">AED 132.97</span>
            </div>
            <div className="flex justify-between">
              <span>Sub Total:</span>
              <span className="font-semibold">AED 2792.27</span>
            </div>
            <div className="flex justify-between">
              <span>Thermal Bag Deposit:</span>
              <span className="font-semibold">AED 200.00</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-bold text-lg">
              <span>Grand Total:</span>
              <span>AED 2992.27</span>
            </div>
          </div>

          {/* Pay Button */}
          <Link href="my-profile" className="theme_btn w-full mt-4">
            Pay AED 2992.27
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
