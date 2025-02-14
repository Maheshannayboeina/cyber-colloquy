// src/components/HeroBanner.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BoxReveal } from "@/components/BoxReveal";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  description: string;
  subtitle?: string; // Optional subtitle prop
  buttonText?: string; // Optional button text prop
  buttonHref?: string; // Optional button link prop
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl = "/img/events/cybercolloquy4.0_banner.png", // Default image URL
  title,
  description,
  subtitle = "Your Gateway to Cybersecurity Insights", // Default subtitle
  buttonText = "Explore More", // Default button text
  buttonHref = "/explore", // Default button link
}) => {
  return (
    <div className="relative w-full">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title || "Cyber Colloquy Event Banner"} // More specific alt text
          width={1920}
          height={400}
          className="object-cover w-full"
        />
        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent flex items-start justify-between">
          <div>
            <BoxReveal>
              <h1 className="text-7xl font-extrabold text-white mb-2">{title}</h1>
            </BoxReveal>
            <BoxReveal duration={0.75}>
              <p className="text-lg text-gray-300 mb-4">{subtitle}</p> {/* Use subtitle prop */}
              <p className="text-base text-gray-300 leading-relaxed"> {/* Updated description style */}
                {description}
              </p>
            </BoxReveal>
            <Link
              href={buttonHref} // Use buttonHref prop
              className="px-6 py-3 text-white bg-indigo-600 rounded-xl mt-6 inline-block"
            >
              {buttonText} {/* Use buttonText prop */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;