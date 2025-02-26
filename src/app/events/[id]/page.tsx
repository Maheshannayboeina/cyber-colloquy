"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/Container";
import { events } from "@/components/data";
import { SectionTitle } from "@/components/SectionTitle";
import { Sponsors } from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import { TimelineEvent } from "@/components/expandable-timeline-card";

export default function EventDetailsPage() {
  const { id } = useParams();
  const eventId = parseInt(id as string, 10);
  const event = events.find((ev) => ev.id === eventId);

  // Handle missing event
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

  // Normalize the activities array so it works for both "event.activities" and "event.colloquyDetails.activities"
  const normalizedActivities =
    event.activities || event.colloquyDetails?.activities || [];

  // Build timeline events from activities
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
      {/* HERO BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full shadow-lg"
      >
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[2/1] lg:aspect-[2.5/1] overflow-hidden">
          {event.images && event.images.length > 0 && (
            <div className="relative w-full h-full md:h-auto">
              <Image
                src={event.images[0]}
                alt={event.title}
                sizes="(max-width: 768px) 100vw, 100vw"
                priority
                className="object-cover md:object-contain md:max-w-full mx-auto"
                width={1920}
                height={1080}
              />
            </div>
          )}
          {/* Reduced overlay to let the banner image shine through */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30" /> */}
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <Container className="text-gray-300">
        {/* EVENT TITLE & DATE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center my-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
          >
            {event.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
          >
            <p className="text-base md:text-lg">{event.date}</p>
            <span className="hidden md:block">•</span>
            <p className="text-base md:text-lg">CYSE Department</p>
          </motion.div>

          {/* **CONDITIONAL REGISTER BUTTON** */}
          {event.id === 4 && ( //  <-- Conditional rendering here
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full px-6 py-3">
                Register Now
              </button>
            </motion.div>
          )}
        </motion.section>

        {/* SPONSORS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full my-8 bg-gray-900 p-6 rounded-lg" // Added background and padding here
        >
          <Sponsors />
        </motion.div>

        {/* DESCRIPTION & TOPICS */}
        {/* DESCRIPTION & TOPICS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-8 text-center"
        >
          <SectionTitle preTitle="" title={event.description} />{" "}
          {/* Keep Section Title for Description */}
          {event.colloquyDetails?.topics && (
            <div className="mt-6">
              {" "}
              {/* Changed from space-y-4 to mt-6 for spacing */}
              <h4 className="text-xl font-semibold text-emerald-400 mb-4">
                {" "}
                {/* Adjusted margin */}
                Topics
              </h4>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-2">
                {" "}
                {/* Flex wrap for badges */}
                {event.colloquyDetails.topics.map((topic, index) => (
                  <motion.div // Changed from <li> to <div> for badge styling
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }} // More subtle animation
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }} // Slightly adjusted delay
                    className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-full text-sm font-medium" // Badge styling
                  >
                    {topic}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* TIMELINE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="my-8"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Event Timeline
          </h3>
          {/* Subtle background for the timeline */}
          <div>
            <Timeline events={timelineEvents} />
          </div>
        </motion.section>
      </Container>
    </>
  );
}