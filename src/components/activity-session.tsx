//src/components/activity-session.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ActivityCard } from './activity-card'

interface Activity {
  image: string
  description: string
  date: string
}

interface ActivitiesSectionProps {
  activities: Activity[]
}

export function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  const [selectedDay, setSelectedDay] = useState("21st March")
  const days = ["21st March", "22nd March", "23rd March", "24th March"]

  return (
    <div className="space-y-8">
      {/* Day Selection Tabs */}
      <div className="flex flex-wrap gap-4 justify-center">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gray-800 text-gray-400 hover:bg-gray-700"
          >
            {day}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {activities
          .filter((activity) => activity.date === selectedDay)
          .map((activity, index) => (
            <motion.div
              key={`${activity.description}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ActivityCard
                image={activity.image}
                description={activity.description}
                isActive={true}
              />
            </motion.div>
          ))}
      </motion.div>

      {/* Empty State */}
      {activities.filter((activity) => activity.date === selectedDay).length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-gray-400">
            No activities scheduled for this day
          </div>
        </motion.div>
      )}
    </div>
  )
}