"use client";
import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-gray-900 text-white text-sm px-4 py-2 hidden lg:block">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <Link
            href="tel:+919876543210"
            className="hover:text-green-600 transition"
          >
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-xs" />
              <span>+91 9876543210</span>
            </div>
          </Link>{" "}
          |
          <Link
            href="mailto: support@example.com"
            className="hover:text-green-600 transition"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-xs" />
              <span>support@example.com</span>
            </div>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <Link href="#" className="hover:text-green-600 transition">
            <div className="border border-white rounded-full p-1">
              <FaFacebookF className="text-xs" />
            </div>
          </Link>
          <Link href="#" className="hover:text-green-600 transition">
            <div className="border border-white rounded-full p-1">
              <FaTwitter className="text-xs" />
            </div>
          </Link>
          <Link href="#" className="hover:text-green-600 transition">
            <div className="border border-white rounded-full p-1">
              <FaLinkedinIn className="text-xs" />
            </div>
          </Link>
          <Link href="#" className="hover:text-green-600 transition">
            <div className="border border-white rounded-full p-1">
              <FaInstagram className="text-xs" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
