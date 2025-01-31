'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import Image from 'next/image'

export interface Activity {
  time?: string
  date?: string
  description: string
  image: string
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
  status: 'completed' | 'current' | 'upcoming'
  activities: Activity[]
}

interface ExpandableTimelineCardProps {
  event: TimelineEvent
  isEven: boolean
}

export function ExpandableTimelineCard({ event, isEven }: ExpandableTimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsExpanded(true);
    }, 200); // Delay of 200ms, you can adjust this value
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
      setIsExpanded(false);
  };

  return (
    <motion.div
      layout
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative cursor-pointer",
        isEven ? "text-right" : "text-left"
      )}
    >
      <motion.div
        layout
        className={cn(
          "bg-gray-800 rounded-lg p-6 shadow-lg border-l-4",
          event.status === 'completed' ? 'border-green-500' :
          event.status === 'current' ? 'border-blue-500' :
          'border-gray-500',
          isExpanded ? "mb-4" : ""
        )}
      >
        <motion.div layout className="flex items-center justify-between mb-2">
          <div className={cn("text-sm font-medium", 
            event.status === 'completed' ? 'text-green-400' :
            event.status === 'current' ? 'text-blue-400' :
            'text-gray-400'
          )}>
            {event.date}
          </div>
          <div className={cn("text-xs px-2 py-1 rounded-full", 
            event.status === 'completed' ? 'bg-green-500/20 text-green-400' :
            event.status === 'current' ? 'bg-blue-500/20 text-blue-400' :
            'bg-gray-500/20 text-gray-400'
          )}>
            {event.status}
          </div>
        </motion.div>
        <motion.h3 layout className="text-xl font-bold mb-2 text-white">{event.title}</motion.h3>
        <motion.p layout className="text-gray-300">{event.description}</motion.p>
      </motion.div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
        >
          {event.activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg overflow-hidden"
            >
              <div className="relative h-40">
                <Image
                  src={activity.image}
                  alt={activity.description}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                {(activity.time || activity.date) && (
                  <p className="text-xs text-gray-400 mb-1">{activity.time || activity.date}</p>
                )}
                <p className="text-sm text-gray-300">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}