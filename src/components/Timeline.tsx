//src/components/Timeline.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import {
  ExpandableTimelineCard,
  TimelineEvent,
} from "./expandable-timeline-card";

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export default function Timeline({ events, className }: TimelineProps) {
  if (!events?.length) {
    return null;
  }

  return (
    <div className={cn("relative py-8", className)}>
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.date}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={cn(
              "relative flex items-center",
              index % 2 === 0 ? "justify-start" : "justify-end"
            )}
          >
            {/* Dot */}
            <div
              className={cn(
                "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10",
                event.status === "completed"
                  ? "bg-green-500"
                  : event.status === "current"
                  ? "bg-blue-500"
                  : "bg-gray-500"
              )}
            />

            {/* Content */}
            <div
              className={cn(
                "w-full md:w-5/12", // w-full on mobile, md:w-5/12 on larger
                index % 2 === 0 ? "md:pr-8" : "md:pl-8" // md:pr-8/pl-8 only on larger
              )}
            >
              <ExpandableTimelineCard event={event} isEven={index % 2 !== 0} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
