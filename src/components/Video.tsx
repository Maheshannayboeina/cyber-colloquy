"use client";
import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!videoId) return; // Exit early if no videoId

    const intervalId = setInterval(() => {
      setPlayVideo(true);
      clearInterval(intervalId);
    }, 5000);

    autoplayIntervalRef.current = intervalId;

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [videoId]);

  if (!videoId) return null;

  return (
    <Container>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700 group">
        {!playVideo && (
          <button
            onClick={() => {
              setPlayVideo(true);
              if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
              }
            }}
            className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2 focus:outline-none" // Added focus:outline-none
            aria-label="Play Video" // Added aria-label
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16  lg:w-28 lg:h-28 transition-transform duration-300 ease-out group-hover:scale-110 group-focus:scale-110" // Added hover/focus scale animation
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Play Video</span>
          </button>
        )}
        {playVideo && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1`}
            title="Video Player" // Improved title
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full aspect-video"
          ></iframe>
        )}
      </div>
    </Container>
  );
}