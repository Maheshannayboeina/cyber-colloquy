'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../../lib/utils'

interface ExpandableAchievementCardProps {
  id: number
  name: string
  date: string
  achievement: string
  details: string
  link?: string
  banner?: string
}

export function ExpandableAchievementCard({
  id,
  name,
  date,
  achievement,
  details,
  link,
  banner
}: ExpandableAchievementCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "group cursor-pointer overflow-hidden rounded-xl bg-gray-900",
        isExpanded ? "row-span-2" : "row-span-1"
      )}
    >
      <motion.div
        layout
        className="relative h-full w-full"
      >
        {/* Image and Gradient Overlay */}
        <div className="absolute inset-0">
          {banner ? (
            <Image
              src={banner}
              alt={achievement}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div className="relative p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
              {name}
            </span>
            <span className="text-emerald-400 text-xs">{date}</span>
          </div>

          <motion.h3 
            layout
            className="text-lg font-semibold text-white mb-2 line-clamp-2"
          >
            {achievement}
          </motion.h3>

          <AnimatePresence>
            {isExpanded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1"
              >
                <p className="text-gray-300 text-sm mb-4">{details}</p>
                {link && (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                )}
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-400 text-sm line-clamp-2"
              >
                {details}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}
