// src/components/event-card.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  id: string;
  title: string;
  date: string; // Now YYYY-MM-DD
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

  const currentDate = new Date();
  const eventDate = new Date(date); // Now correctly parses YYYY-MM-DD
  const isUpcoming = eventDate >= currentDate;  // Correct comparison


  return (
    <Link href={`/events/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative w-full rounded-xl overflow-hidden bg-gray-900 shadow-lg flex flex-col h-[450px] md:h-[500px]"
      >
        {/* Image Section */}
        <div className="relative w-full h-64 md:h-72 lg:h-80">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900" />
          )}
        </div>

        {/* Text Section */}
        <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium rounded-full">
                {year}
              </span>
              {/* Status: Upcoming/Completed */}
              <span className={`text-xs sm:text-sm ${isUpcoming ? 'text-blue-400' : 'text-emerald-400'}`}>
                {isUpcoming ? "Upcoming" : "Completed"}
              </span>
            </div>
            <h3 className={`text-lg sm:text-xl font-bold mb-1 line-clamp-1 ${isUpcoming? 'text-blue-500': 'text-emerald-500'}`}>
              {title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-2 line-clamp-2">
              {description}
            </p>
            {conductedBy && (
              <div className="flex items-center gap-1 text-xs sm:text-sm mb-2">
                <span className="text-gray-400">Conducted by:</span>
                <span className="text-white line-clamp-1">{conductedBy}</span>
              </div>
            )}
            {/* Date */}
            <span className="text-gray-400 text-xs sm:text-sm">{date}</span>
          </div>

          {/* "Learn More" - Ensure it's always visible */}
          <div className="mt-auto flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-medium">
            <span>Learn More</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
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
      </motion.div>
    </Link>
  );
}