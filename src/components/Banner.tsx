"use client";

import React, { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className="text-white flex justify-center items-center" // Adjusted classes for image banner
      >
        <img
          src="/img/colloquy4.0.png" // Replace with your image path
          alt="Banner Image"
          className="w-full h-auto block" // Make image responsive and block
        />
      </div>
      <button
        onClick={handleClose}
        className="text-white hover:text-gray-300 absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5"
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