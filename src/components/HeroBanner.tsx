// src/components/HeroBanner.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BoxReveal } from "@/components/BoxReveal";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl = "/img/events/cybercolloquy4.0_banner.png", // Provide a default image URL
  title,
  description,
}) => {
  return (
    <div className="relative w-full">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title || "Banner Image"} // Provide alt text
          width={1920}
          height={400}
          className="object-cover w-full"
        />
        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent flex items-start justify-between"> {/* Aligned items to start */}
          <div>
            <BoxReveal>
              <h1 className="text-7xl font-extrabold text-white mb-2">{title}</h1> {/* Increased size and weight */}
            </BoxReveal>
            <BoxReveal duration={0.75}>
              <p className="text-lg text-gray-300 mb-4">UI library for Design Engineers</p> {/* Added Subtitle style and margin*/}
              <p className="text-base text-gray-300 leading-relaxed"> {/* Added descriptions style */}
              → 20+ free and open-source animated components built with React, Typescript, Tailwind CSS, and Motion.
              <br/>
              → 100% open-source, and customizable.
              </p>
            </BoxReveal>
            <Link
              href="/explore"
              className="px-6 py-3 text-white bg-indigo-600 rounded-xl mt-6 inline-block" //Styled button
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;