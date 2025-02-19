"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { events } from "@/components/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { Sponsors } from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";
import { TimelineEvent } from "@/components/expandable-timeline-card";

export default function EventDetailsPage() {
  const { id } = useParams();
  const eventId = parseInt(id as string, 10);
  const event = events.find((event) => event.id === eventId);

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  if (!event) {
    return (
      <Container>
        <SectionTitle title="Event Not Found" />
        <p className="text-gray-300">
          The event with the id {eventId} could not be found.
        </p>
      </Container>
    );
  }

  const currentDate = new Date();
  const eventYear = new Date(event.date).getFullYear();

  // Normalize activities data structure
  const normalizedActivities =
    event.activities || event.colloquyDetails?.activities || [];

  // Convert activities to timeline events
  const timelineEvents: TimelineEvent[] = normalizedActivities.reduce(
    (acc: TimelineEvent[], activity) => {
      const activityDate = activity.date || event.date.split(",")[0];
      const existingEvent = acc.find((e) => e.date === activityDate);

      if (existingEvent) {
        existingEvent.activities.push(activity);
      } else {
        acc.push({
          date: activityDate,
          title: `Day ${acc.length + 1}`,
          description: `Activities for ${activityDate}`,
          status:
            eventYear < currentDate.getFullYear()
              ? "completed"
              : eventYear > currentDate.getFullYear()
              ? "upcoming"
              : new Date(activityDate) < currentDate
              ? "completed"
              : new Date(activityDate).toDateString() ===
                currentDate.toDateString()
              ? "current"
              : "upcoming",
          activities: [activity],
        });
      }
      return acc;
    },
    []
  );

  return (
    <>
      {/* Hero Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-video overflow-hidden" // Using aspect-video for 16:9 ratio
        style={{ marginTop: `${navbarHeight}px` }}
      >
        <div className="absolute inset-0">
          {event.images && event.images.length > 0 && (
            <Image
              src={event.images[0]}
              alt={event.title}
              fill
              className="object-cover object-center transition-transform duration-500"
            />
          )}
        </div>
        {/* Gradient overlay for visual effect */}
        <div className="absolute inset-0 bg-gradient-to-t to-transparent" />
      </motion.div>

      {/* Event Title & Details Section (moved below banner) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          {event.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-gray-300"
        >
          <p className="text-sm md:text-lg">{event.date}</p>
          <span className="hidden md:block">•</span>
          <p className="text-sm md:text-lg">CYSE Department</p>
        </motion.div>
      </motion.section>

      {/* Sponsors Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-4xl mx-auto mb-16 px-4"
      >
        <Sponsors />
      </motion.div>

      {/* Description & Topics Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-16 text-center max-w-3xl mx-auto px-4"
      >
        <SectionTitle preTitle="" title={event.description} />
        <div className="space-y-4 mt-6">
          <h4 className="text-xl font-semibold text-emerald-400">Topics</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {event.colloquyDetails?.topics.map((topic, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-gray-200 text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {topic}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-16 px-4"
      >
        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          Event Timeline
        </h3>
        {/* Wrap timeline in a responsive container:
            On mobile: allow horizontal scroll,
            On larger screens: display normally */}
        <div className="overflow-x-auto md:overflow-visible">
          <Timeline events={timelineEvents} />
        </div>
      </motion.div>
    </>
  );
}
