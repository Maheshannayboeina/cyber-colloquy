'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import Image from 'next/image'
import styles from './expandable-timeline-card.module.css' // Import CSS Module

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

  const cardInnerStyle = cn(
    styles.cardInner,
    styles[`cardInner_${event.status}`], // Dynamic status-based border color
    isExpanded ? styles.cardInner_expanded : "" // Add margin when expanded
  );

  const statusTextStyle = cn(
    styles.statusText,
    styles[`statusText_${event.status}`] // Dynamic status-based text color
  );

  const statusBadgeStyle = cn(
    styles.statusBadge,
    styles[`statusBadge_${event.status}`] // Dynamic status-based badge color
  );

  return (
    <motion.div
      layout
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        styles.cardContainer,
        isEven ? styles.cardContainer_even : "" // Even/odd alignment using CSS Modules
      )}
    >
      <motion.div
        layout
        className={cardInnerStyle}
      >
        <motion.div layout className={styles.statusContainer}>
          <div className={statusTextStyle}>
            {event.date}
          </div>
          <div className={statusBadgeStyle}>
            {event.status}
          </div>
        </motion.div>
        <motion.h3 layout className={styles.cardTitle}>{event.title}</motion.h3>
        <motion.p layout className={styles.cardDescription}>{event.description}</motion.p>
      </motion.div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={styles.activitiesGrid}
        >
          {event.activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={styles.activityItem}
            >
              <div className={styles.activityImageContainer}>
                <Image
                  src={activity.image}
                  alt={activity.description}
                  fill
                  className={styles.activityImage}
                />
              </div>
              <div className={styles.activityContent}>
                {(activity.time || activity.date) && (
                  <p className={styles.activityTime}>{activity.time || activity.date}</p>
                )}
                <p className={styles.activityDescription}>{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}