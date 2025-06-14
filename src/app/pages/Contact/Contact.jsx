import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Info with Background Circle */}
        <div className="relative">
          {/* Hollow Background Circle */}
          <div className="absolute -top-10 -left-20 w-[500px] h-[500px] border-80 border-green-100 rounded-full z-0 opacity-50" />

          {/* Content */}
          <div className="space-y-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              MORE INFORMATION
            </h2>

            <div className="flex items-start space-x-4">
              <FaClock className="text-green-600 text-xl mt-1" />
              <p>
                Sunday – Friday{" "}
                <span className="text-green-600 font-semibold">
                  10:00am – 6:00pm
                </span>
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-green-600 text-xl mt-1" />
              <p>info@vmeals.ae</p>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-green-600 text-xl mt-1" />
              <p>+971 56 511 4515</p>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
              <p>Business Bay, Dubai, U.A.E</p>
            </div>

            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="border border-green-600 text-green-700 px-4 py-2 rounded-full hover:bg-green-50 flex items-center gap-2"
              >
                <FaComments />
                Live Chat
              </Link>
              <Link
                href="faq"
                className="border border-green-600 text-green-700 px-4 py-2 rounded-full hover:bg-green-50 flex items-center gap-2"
              >
                <FaArrowRight />
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-green-50 rounded-3xl p-6 md:p-10 shadow-md">
          <h3 className="text-2xl font-bold text-green-700 mb-6">
            Let’s have a chat!
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter Your First Name..."
              className="border border-green-400 rounded-full px-4 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Enter Your Last Name..."
              className="border border-green-400 rounded-full px-4 py-2 outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              className="border border-green-400 rounded-full px-4 py-2 outline-none col-span-1 md:col-span-1"
            />
            <div className="flex items-center border border-green-400 rounded-full overflow-hidden">
              <span className="bg-green-100 px-3 py-2 text-sm flex items-center gap-1">
                🇦🇪 +971
              </span>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 px-2 py-2 outline-none"
              />
            </div>
            <select className="border border-green-400 rounded-full px-4 py-2 outline-none">
              <option>Select an option...</option>
              <option>General Inquiry</option>
              <option>Order Related</option>
            </select>
            <select className="border border-green-400 rounded-full px-4 py-2 outline-none">
              <option>Select an option...</option>
              <option>Email</option>
              <option>Phone Call</option>
            </select>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="col-span-2 border border-green-400 rounded-xl px-4 py-2 outline-none"
            />
            <button type="submit" className="theme_btn">
              Submit ↓
            </button>
          </form>
        </div>
      </div>

      {/* Optional: Map Section */}
      <div className="mt-12">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed"
          className="w-full h-72 rounded-xl border-none"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
