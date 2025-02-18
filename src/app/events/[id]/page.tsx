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
    const navbar = document.querySelector("nav"); // Adjust the selector to match your navbar
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  if (!event) {
    return (
      <Container>
        <SectionTitle title="Event Not Found" />
        The event with the id {eventId} could not be found.
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
      {/* Hero Section (Banner Image Only) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full h-[100px] md:h-[300px] mb-0 overflow-hidden"
        style={{ marginTop: `0px` }} // Set margin-top dynamically based on navbar height
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {event.images && event.images.length > 0 && (
            <Image
              src={event.images[0]}
              alt={event.title}
              fill
              className="object-contain object-center"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" /> {/* Keep gradient for visual effect if desired */}
      </motion.div>

      {/* Event Title and Date Section - Below Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 px-4" // Added mb-12 for spacing below text
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Cyber Colloquy 4.0: From compliance to confidence
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-gray-300"
        >
          <p className="text-lg">21st to 24th March</p>
          <span className="hidden md:block">•</span>
          <p>CYSE Department</p>
          <span className="hidden md:block">•</span>
          <p>Trusted by 500+ Students</p>
        </motion.div>
      </motion.section>

      {/* Sponsors Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center mb-16 px-4"
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
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-emerald-400">Topics</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.colloquyDetails?.topics.map((topic, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-gray-200"
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
        <Timeline events={timelineEvents} />
      </motion.div>
    </>
  );
}