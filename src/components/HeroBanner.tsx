// src/components/HeroBanner.tsx
import React, { useEffect } from "react";
import Image from "next/image";
import InteractiveHoverButton from "@/components/InteractiveHoverButton";
import { motion, useAnimation } from "framer-motion";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  tagline: string;
  dateWithLocation: string;
  button1Text: string;
  button1Href: string;
  button2Text: string;
  button2Href: string;
  isVisible: boolean;
}

// Animation Variants (no changes here, but kept for completeness)
const titleVariants = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const taglineVariants = {
  hidden: { opacity: 0, y: -160 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

const dateVariants = {
  hidden: { opacity: 0, y: -120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
  },
};

export const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl = "/img/events/cybercolloquy4.0_banner.png",
  title,
  tagline,
  dateWithLocation,
  button1Text = "Register Now",
  button1Href = "https://example.com/google-form", // Placeholder!
  button2Text = "Learn More",
  button2Href = "/explore",
  isVisible,
}) => {
  const [firstWord, ...restOfTitle] = title.split(" ");
  const restTitle = restOfTitle.join(" ");

  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const match = dateWithLocation.match(/(.+?)\s*\|\s*(.+)/);
  const datePart = match ? match[1] : dateWithLocation;
  const locationPart = match ? match[2] : "";

  return (
    <div
      className="relative w-full h-full"
      role="img"
      aria-label={title || "Hero Banner Image"}
    >
      <div className="relative h-full">
        <Image
          src={imageUrl}
          alt={title || "Cyber Colloquy Event Banner"}
          fill
          sizes="100vw" // Corrected sizes attribute
          className="object-cover w-full h-full"
          priority
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          placeholder="blur"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          <div className="p-4 sm:p-6 md:p-8  w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl relative z-10">
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate={controls}
              className="w-full"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#00BFFF] mb-1 text-center">
                {firstWord}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700] text-center">
                {restTitle}
              </div>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-2 text-center shadow-md" // White with text shadow
              variants={taglineVariants}
              initial="hidden"
              animate={controls}
            >
              {tagline}
            </motion.p>

            <motion.div
              className="bg-black px-4 py-2 rounded mb-4"
              variants={dateVariants}
              initial="hidden"
              animate={controls}
            >
              <p className="text-sm sm:text-base md:text-lg text-[#00BFFF] text-center">
                {datePart}
                {locationPart && (
                  <span className="text-[#FFD700] ml-1">| {locationPart}</span>
                )}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-row flex-wrap justify-center gap-4"
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
            >
              <InteractiveHoverButton
                buttonColor="#00008B"
                textColor="#ffffff"
                onClick={() => {
                  if (button1Href) {
                    window.location.href = button1Href;
                  }
                }}
                aria-label={button1Text}
              >
                {button1Text}
              </InteractiveHoverButton>
              <InteractiveHoverButton
                buttonColor="#00008B"
                textColor="#ffffff"
                onClick={() => {
                  if (button2Href) {
                    window.location.href = button2Href;
                  }
                }}
                aria-label={button2Text}
              >
                {button2Text}
              </InteractiveHoverButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
