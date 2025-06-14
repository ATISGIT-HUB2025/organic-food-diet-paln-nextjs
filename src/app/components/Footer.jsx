"use client";

import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaUser,
  FaLocationArrow,
  FaPhoneAlt,
  FaFax,
  FaFileAlt,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            About Company name
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            We have been most trusted health care nutrition for 25 years.
          </p>
          <div className="flex gap-3 mt-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <Link key={i} href="#" passHref>
                  <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-green-400 transition cursor-pointer">
                    <Icon size={16} />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            Contact Us
          </h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-start gap-2">
              <FaLocationArrow className="text-white" />
              <span>
                <strong className="text-white">Address:</strong> 66 Guild Street
                512B, Great North Town.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaUser className="text-white" />
              <span>
                <strong className="text-white">Mail:</strong> addyour@email
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              <span>
                <strong className="text-white">Phone:</strong> (+44) 123 456 789
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaFax className="text-white" />
              <span>
                <strong className="text-white">Fax ID:</strong> (+1) 523-567-987
              </span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            Legal Information
          </h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-center gap-2">
              <FaFileAlt className="text-white" />
              <Link href="/terms-conditions" className="hover:text-green-400">
                Terms & Conditions
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt className="text-white" />
              <Link href="/privacy-policy" className="hover:text-green-400">
                Privacy Policy
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaUndo className="text-white" />
              <Link href="/refund-policy" className="hover:text-green-400">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-800 py-6 ">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            copyright &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold">Company Name</span> All Rights
            Reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="about-us" className="hover:text-green-400">
              About Us
            </a>
            <a href="diet" className="hover:text-green-400">
              Diet Plan
            </a>
            <a href="contact-us" className="hover:text-green-400">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6">
        <button
          className="w-10 h-10 bg-green-400 text-white rounded-full shadow-lg hover:bg-black cursor-pointer transition z-50 flex items-center justify-center"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          title="Scroll to top"
          type="button"
          id="scroll-to-top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
