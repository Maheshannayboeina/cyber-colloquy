// src/components/HeroBanner.tsx
import React from "react";
import Image from "next/image";
import { BoxReveal } from "@/components/BoxReveal";
import InteractiveHoverButton from "@/components/InteractiveHoverButton";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  description: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl = "/img/events/cybercolloquy4.0_banner.png",
  title,
  description,
  subtitle = "Your Gateway to Cybersecurity Insights",
  buttonText = "Explore More",
  buttonHref = "/explore",
}) => {
  const [firstWord, ...restOfTitle] = title.split(" ");
  const restTitle = restOfTitle.join(" ");

  return (
    <div className="relative w-full h-full"> {/* Ensure NO mt-* or pt-* here */}
      <div className="relative h-full">
        <Image
          src={imageUrl}
          alt={title || "Cyber Colloquy Event Banner"}
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
          priority
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          placeholder="blur"
        />
        {/*  Slightly adjusted absolute positioning */}
        <div className="absolute inset-x-0 bottom-0  p-4 sm:p-6 md:p-8 w-full bg-gradient-to-t from-black to-transparent flex items-center justify-center text-center">
          <div className="sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full flex flex-col items-center">
            <BoxReveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 text-center">
                {firstWord} {restTitle}
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.75}>
              <p className="text-base sm:text-lg text-gray-300 mb-4 text-center">{subtitle}</p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center">
                {description}
              </p>
            </BoxReveal>
            <div className="mt-4 sm:mt-6 flex justify-center">
              <InteractiveHoverButton
                onClick={() => {
                  if (buttonHref) {
                    window.location.href = buttonHref;
                  }
                }}
              >
                {buttonText}
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;