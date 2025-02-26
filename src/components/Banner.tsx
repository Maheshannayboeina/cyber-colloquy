"use client";

import React, { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden w-full">
      {/* Banner Image */}
      <div className="text-white flex justify-center items-center">
        <img
          src="/img/top-banner.png" // Replace with your actual banner path
          alt="Banner Image"
          className="w-full h-auto block object-cover"
        />
      </div>

      {/* Close Button (top-right) */}
      <button
        onClick={handleClose}
        className="absolute z-10 top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 focus:outline-none"
        aria-label="Close Banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
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