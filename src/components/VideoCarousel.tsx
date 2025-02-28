"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev' | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const playerRefs = useRef<Array<YouTube | null>>([]);

  const nextVideo = useCallback(() => {
    setTransitionDirection('next');
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }, [videos.length]);

  // Function to clear autoplay interval
  const clearAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Function to start autoplay interval
  const startAutoplay = useCallback(() => {
    if (!isHovered && !isPlaying) {
      clearAutoplay(); // Clear existing interval first
      intervalRef.current = setInterval(nextVideo, 5000);
    }
  }, [isHovered, isPlaying, nextVideo, clearAutoplay]);

  const prevVideo = useCallback(() => {
    setTransitionDirection('prev');
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  }, [videos.length]);

  const handleDotClick = useCallback((index: number) => {
    if (index === currentVideoIndex) return;
    
    setTransitionDirection(index > currentVideoIndex ? 'next' : 'prev');
    setCurrentVideoIndex(index);
  }, [currentVideoIndex]);

  // Handle video state changes
  useEffect(() => {
    playerRefs.current.forEach((player, index) => {
      if (player?.getInternalPlayer() && index !== currentVideoIndex) {
        try {
          player.getInternalPlayer().pauseVideo();
        } catch (error) {
          console.error('Error pausing video:', error);
        }
      }
    });
    setIsPlaying(false);
    startAutoplay();
  }, [currentVideoIndex, startAutoplay]);

  // Initialize and cleanup autoplay
  useEffect(() => {
    startAutoplay();
    return clearAutoplay;
  }, [startAutoplay, clearAutoplay]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    clearAutoplay();
  }, [clearAutoplay]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    startAutoplay();
  }, [startAutoplay]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    clearAutoplay();
  }, [clearAutoplay]);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    startAutoplay();
  }, [startAutoplay]);

  const videoOptions = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      controls: 1,
    },
  };

  // Early return if no videos
  if (!videos.length) {
    return <div>No videos available</div>;
  }

  return (
    <div
      className="relative w-full max-w-4xl mx-auto my-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full aspect-video overflow-hidden rounded-lg relative">
  {videos.map((video, index) => (
    <div
      key={`${video.videoId}-${index}`} // Changed to combine videoId and index
      className={`absolute inset-0 transition-all duration-700 ease-in-out
        ${index === currentVideoIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full pointer-events-none'}
        ${transitionDirection === 'prev' && index === (currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1) ? '-translate-x-full' : ''}
        ${transitionDirection === 'next' && index === (currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1) ? 'translate-x-full' : ''}
      `}
    >
      <YouTube
        videoId={video.videoId}
        opts={videoOptions}
        className="w-full h-full"
        onPlay={handlePlay}
        onPause={handlePause}
        ref={(ref: YouTube | null) => {
          playerRefs.current[index] = ref;
        }}
      />
    </div>
  ))}
</div>

      {/* Navigation controls */}
      {videos.length > 1 && (
        <>
          <button
            onClick={prevVideo}
            className="absolute top-1/2 transform -translate-y-1/2 left-2 z-20 bg-gray-700/80 hover:bg-gray-600 rounded-full p-2 transition-colors duration-300"
            aria-label="Previous Video"
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextVideo}
            className="absolute top-1/2 transform -translate-y-1/2 right-2 z-20 bg-gray-700/80 hover:bg-gray-600 rounded-full p-2 transition-colors duration-300"
            aria-label="Next Video"
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors duration-300 
                  ${index === currentVideoIndex ? "bg-blue-500" : "bg-gray-400 hover:bg-gray-500"}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to video ${index + 1}`}
                aria-current={index === currentVideoIndex ? "true" : "false"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoCarousel;