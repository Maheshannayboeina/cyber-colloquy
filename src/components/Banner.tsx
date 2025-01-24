"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [gradientPosition, setGradientPosition] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const duration = 20000; // Defined as a constant

  // Using useCallback for memoized function
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
    [duration] // duration is now a dependency, although it doesn't change
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
        className="text-white py-3 px-4 flex items-center justify-center gap-4"
      >
        <p className="text-sm">Join us for Cyber Colloquy 4.0!</p>
        <Link
          href="/events/4"
          className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-100"
        >
          Know More
        </Link>
        <Link
          href="/register"
          className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-100"
        >
          Register
        </Link>
      </div>
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
