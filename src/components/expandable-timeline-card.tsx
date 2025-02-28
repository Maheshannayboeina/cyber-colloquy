//src/components/expandable-timeline-card.ts
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import styles from "./expandable-timeline-card.module.css";
import { Activity } from "@/components/data";

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
  const [isExpanded, setIsExpanded] = useState(false); // Back to useState
  const cardRef = useRef<HTMLDivElement>(null);
  const hasExpanded = useRef(false); // Track if the card has *ever* expanded


  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasExpanded.current) {
          // Only expand if it hasn't expanded before
          setIsExpanded(true);
          hasExpanded.current = true; // Set the flag
          observerRef.current?.unobserve(entry.target);
        }
      });
    },
    []
  ); // Empty dependency array

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-50px 0px",
      threshold: 0.1,
    });

    if (cardRef.current) {
      observerRef.current.observe(cardRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersect]);


  const cardInnerStyle = cn(
    styles.cardInner,
    styles[`cardInner_${event.status}`],
    isExpanded ? styles.cardInner_expanded : "",
    "group"
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
      ref={cardRef}
      className={cn(
        styles.cardContainer,
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
        <motion.p
          layout
          className={cn(styles.cardDescription, "group-hover:text-gray-100")}
        >
          {event.description}
        </motion.p>

        {/* Expanded Content - Back to simpler animation */}
        <motion.div
          className={styles.activitiesGrid}
          style={{
            height: isExpanded ? "auto" : 0, // Directly control height
            opacity: isExpanded ? 1 : 0,     // Directly control opacity
            overflow: "hidden", // Important for smooth height animation
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {isExpanded && ( // Only render children when expanded
            <>
              {event.activities.map((activity, index) => (
                <div key={index} className={styles.activityItem}>
                  <div className={styles.activityContent}>
                    {(activity.time || activity.date) && (
                      <p
                        className={cn(
                          styles.activityTime,
                          "text-sm md:text-base"
                        )}
                      >
                        {activity.time || activity.date}
                      </p>
                    )}
                    <p
                      className={cn(
                        styles.activityDescription,
                        "text-sm md:text-base"
                      )}
                    >
                      {activity.description} - {activity.title}
                      {activity.speakerId && " (Speaker details here)"}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}