// src/components/Banner.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-sky-700  text-white py-3 px-4 flex items-center justify-center gap-4 relative">
      <p className="text-sm">Join us for Cyber Colloquy 4.0!</p>
      <Link
        href="/events/4"
        className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors duration-200"
      >
        Know More
      </Link>
      <Link
        href="/register"
        className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors duration-200"
      >
        Register
      </Link>
      <button
        onClick={handleClose}
        className="text-white hover:text-gray-300 absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Banner;
