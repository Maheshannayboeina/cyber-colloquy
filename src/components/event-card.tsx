// src/components/event-card.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  description: string;
  year: number;
  image?: string;
  conductedBy?: string;
}

export function EventCard({
  id,
  title,
  date,
  description,
  year,
  image,
  conductedBy,
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="group relative h-[400px] w-full rounded-xl overflow-hidden bg-gray-900"
      >
        {/* Image and Gradient Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain object-center transition-transform duration-500"
              style={{
                objectFit: "contain",
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900" />
          )}
          {/* Multiple gradient layers for better text visibility */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="relative h-full p-4 flex flex-col justify-between z-10">
          {/* Top Content */}
          <div className="flex justify-between items-start mb-2">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
              {year}
            </span>
            <span className="text-gray-400 text-sm">{date}</span>
          </div>

          {/* Bottom Content */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>

            <p className="text-gray-300 line-clamp-2 text-sm">
              {description}
            </p>

            {conductedBy && (
              <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-400">Conducted by:</span>
                <span className="text-white">{conductedBy}</span>
              </div>
            )}

            {/* Call to action */}
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
              <span>Learn More</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </motion.div>
    </Link>
  );
}