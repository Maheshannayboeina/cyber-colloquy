"use client";

import { useState, useRef, useEffect } from "react"; // Import useEffect
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import Image from "next/image";
import styles from "./expandable-timeline-card.module.css"; // Import CSS Module

export interface Activity {
  time?: string;
  date?: string;
  description: string;
  image: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  activities: Activity[];
}

interface ExpandableTimelineCardProps {
  event: TimelineEvent;
  isEven: boolean;
}

export function ExpandableTimelineCard({
  event,
  isEven,
}: ExpandableTimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Use the same breakpoint as CSS media query
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Check on window resize

    return () => {
      window.removeEventListener("resize", checkMobile); // Cleanup listener
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      // Only handle hover if not mobile
      hoverTimeout.current = setTimeout(() => {
        setIsExpanded(true);
      }, 200); // Delay of 200ms
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      // Only handle mouse leave if not mobile
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
        hoverTimeout.current = null;
      }
      setIsExpanded(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      // Only handle click if mobile
      setIsExpanded(!isExpanded); // Toggle expanded state on click (for mobile)
    }
  };

  const cardInnerStyle = cn(
    styles.cardInner,
    styles[`cardInner_${event.status}`],
    isExpanded ? styles.cardInner_expanded : ""
  );

  const statusTextStyle = cn(
    styles.statusText,
    styles[`statusText_${event.status}`]
  );

  const statusBadgeStyle = cn(
    styles.statusBadge,
    styles[`statusBadge_${event.status}`]
  );

  return (
    <motion.div
      layout
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Add onClick handler
      className={cn(
        styles.cardContainer,
        styles.mobileClickable, // Add a class for mobile styling if needed
        isEven ? styles.cardContainer_even : ""
      )}
    >
      <motion.div layout className={cardInnerStyle}>
        <motion.div layout className={styles.statusContainer}>
          <div className={statusTextStyle}>{event.date}</div>
          <div className={statusBadgeStyle}>{event.status}</div>
        </motion.div>
        <motion.h3 layout className={styles.cardTitle}>
          {event.title}
        </motion.h3>
        <motion.p layout className={styles.cardDescription}>
          {event.description}
        </motion.p>
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
                  <p className={styles.activityTime}>
                    {activity.time || activity.date}
                  </p>
                )}
                <p className={styles.activityDescription}>
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
