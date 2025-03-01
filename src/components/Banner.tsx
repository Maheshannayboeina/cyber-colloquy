//src/components/Banner.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [gradientPosition, setGradientPosition] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const duration = 20000;

  const animateGradient = useCallback(
    (timestamp: number) => {
      const startTime =
        animationFrameRef.current === null
          ? timestamp
          : animationFrameRef.current;
      const progress = (timestamp - startTime) / duration;
      const position = progress % 1;
      setGradientPosition(position);
      animationFrameRef.current = requestAnimationFrame(animateGradient);
    },
    [duration]
  );

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && bannerRef.current) {
      animationFrameRef.current = requestAnimationFrame(animateGradient);
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible, animateGradient]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(270deg, #7F00FF ${
      gradientPosition * 100
    }%, #00BFFF)`,
    backgroundSize: "200% 200%",
    backgroundPosition: `${gradientPosition * 100}% 50%`,
    transition: "background-position 0.1s linear",
  } as React.CSSProperties;

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative overflow-hidden" ref={bannerRef}>
      <div
        style={gradientStyle}
        className="text-white py-2 px-2 sm:py-3 sm:px-4 flex items-center justify-center gap-1 sm:gap-4 flex-wrap sm:flex-nowrap" // Responsive adjustments here
      >
        <p className="text-sm text-center sm:text-left">
          Join us for Cyber Colloquy 4.0!
        </p>
        <div className="flex gap-1 sm:gap-4"> {/* Container for buttons */}
          <Link
            href="/events/colloquy4.0"
            className="bg-white text-gray-800 px-2 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 whitespace-nowrap" // whitespace-nowrap added
          >
            Know More
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYuWWmDu1T3Z2hQG3Kgd6EFZjFqp4yM0hC__ITg4cWiGgSmA/viewform"
            className="bg-white text-gray-800 px-2 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 whitespace-nowrap" // whitespace-nowrap added
          >
            Register
          </Link>
        </div>
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