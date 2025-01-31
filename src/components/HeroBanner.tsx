// src/components/HeroBanner.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="relative w-full">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={1920}
          height={400}
          className="object-cover w-full"
        />
        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-gray-300">{description}</p>
          </div>
          {/* <Link
            href="/register"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md"
          >
            Register Now!
          </Link> */}
        </div>
      </div>
    </div>
  );
};