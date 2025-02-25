// src/components/Speakers.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { speakerData } from '@/components/speakers-data';

export const Speakers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {speakerData.map((speaker) => (
        <Link href={`/speakers/${speaker.id}`} key={speaker.id} passHref>
          <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            {/* Image Overlay (Animated) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-gradient"></div>

            {/* Content Container */}
            <div className="relative p-6">
              {/* Circular Image Container */}
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-100 text-center mb-2">{speaker.name}</h3>
              <p className="text-gray-300 text-center mb-3">{speaker.title}</p>
            </div>

            {/* Animated Border (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};