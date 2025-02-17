//src/components/VideoCarousel.tsx
"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";

interface VideoItem {
  videoId: string;
  title?: string;
  description?: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const currentVideo = videos[currentVideoIndex];

  const videoOptions = {
    width: "100%", // Make the video responsive within its container
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8">
      {/* Video Container */}
      <div className="w-full aspect-video overflow-hidden rounded-lg relative">
        <div className="absolute inset-0">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <YouTube
              videoId={currentVideo.videoId}
              opts={videoOptions}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10">
        <button
          onClick={prevVideo}
          className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10">
        <button
          onClick={nextVideo}
          className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Optional: Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentVideoIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentVideoIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
