import React from "react";
import Image from "next/image";
import Link from "next/link";
import { speakerData } from "@/components/speakers-data";
import { Container } from "@/components/Container"; // Import Container

export const Speakers = () => {
  return (
    <Container className="py-12">
      {" "}
      {/* Use Container for padding and responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakerData.map((speaker) => (
          <Link href={`/speakers/${speaker.id}`} key={speaker.id} passHref>
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900/80 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              {/* Image Overlay (Animated - Reduced Opacity for better readability) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient"></div>

              {/* Content Container - Adjusted Padding for smaller screens */}
              <div className="relative p-4 sm:p-6 flex flex-col items-center">
                {/* Circular Image Container - Slightly smaller on smaller screens */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 text-center mb-1 sm:mb-2">
                  {speaker.name}
                </h3>
                <p className="text-gray-300 text-center text-sm sm:text-base">
                  {speaker.title}
                </p>
              </div>

              {/* Animated Border (Bottom) -  Slightly thinner and faster transition */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};
