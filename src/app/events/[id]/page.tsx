//src/app/events/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import InteractiveHoverButton from "@/components/InteractiveHoverButton";
import { useState } from "react"; // useState is already imported

import { Container } from "@/components/Container";
import { events, speakerData, Activity } from "@/components/data";
import { SectionTitle } from "@/components/SectionTitle";
import { Sponsors } from "@/components/Sponsors";
import { Speaker } from "@/components/speakers-data";

export default function EventDetailsPage() {
  const { id } = useParams();
  const eventId = id as string;
  const event = events.find((ev) => ev.id === eventId);

  // useState Hooks *must* be at the top level, before any returns
  const [activeActivity, setActiveActivity] = useState<{
    date: string;
    index: number;
  } | null>(null);

  // Now it's safe to have the conditional return
  if (!event) {
    return (
      <Container>
        <SectionTitle title="Event Not Found" />
        <p className="text-gray-300">Event not found.</p>
      </Container>
    );
  }

  const currentDate = new Date();
  const eventYear = new Date(event.date).getFullYear();
  const isUpcoming = eventYear >= currentDate.getFullYear();
  const accentColor = isUpcoming ? "text-blue-500" : "text-emerald-500"; // Define accent color
  const hoverColor = isUpcoming
    ? "hover:text-blue-400"
    : "hover:text-emerald-400"; // Define hover color
  const dotActiveColor = isUpcoming ? "bg-blue-700" : "bg-emerald-700";
  const dotInactiveColor = isUpcoming
    ? "bg-blue-500 hover:bg-blue-600 focus:bg-blue-600"
    : "bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700";

  const groupedActivities =
    event.colloquyDetails?.activities.reduce(
      (acc: { [key: string]: Activity[] }, activity) => {
        const date = activity.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(activity);
        return acc;
      },
      {}
    ) ?? {};

  const handleDotClick = (date: string, index: number) => {
    setActiveActivity((prev) => {
      if (prev && prev.date === date && prev.index === index) {
        return null; // Toggle off
      }
      return { date, index }; // Toggle on
    });
  };

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
        </div>
      </motion.div>

      <Container>
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
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${
              isUpcoming ? "text-blue-500" : "text-emerald-500"
            } mb-2`} // Title color
          >
            {event.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
          >
            <p
              className={`text-base md:text-lg ${
                isUpcoming ? "text-blue-400" : "text-emerald-400"
              }`} // Date color
            >
              {event.date}
            </p>
            <span className="hidden md:block">•</span>
            <p className="text-base md:text-lg text-gray-300">
              CYSE Department
            </p>
          </motion.div>
          {/* "Upcoming" Status (for colloquy4.0) */}
          {eventId === "colloquy4.0" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className={`text-base md:text-lg font-semibold ${
                isUpcoming ? "text-blue-500" : "text-emerald-500"
              }`} // Status color
            >
              Upcoming
            </motion.p>
          )}

          {eventId === "colloquy4.0" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdYuWWmDu1T3Z2hQG3Kgd6EFZjFqp4yM0hC__ITg4cWiGgSmA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton
                  buttonColor="#10B981"
                  textColor="#FFFFFF"
                >
                  Register Now
                </InteractiveHoverButton>
              </Link>
            </motion.div>
          )}
        </motion.section>

        {/* DESCRIPTION & TOPICS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-8"
        >
          <SectionTitle preTitle="" title={event.description} />
          {event.colloquyDetails?.speakers && (
            <div className="mt-6">
              <h4
                className={`text-xl font-semibold mb-4 text-center ${accentColor}`}
              >
                Speakers & Topics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.colloquyDetails.speakers.map(
                  (colloquySpeaker, index) => {
                    const speaker = speakerData.find(
                      (s: Speaker) => s.id === colloquySpeaker.speakerId
                    );
                    return (
                      // Wrap the entire card with Link
                      <Link key={index} href={`/speakers/${speaker?.id}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer" // Added cursor-pointer
                        >
                          <div className="flex items-center">
                            {/* Larger image container */}
                            <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4">
                              <Image
                                src={
                                  speaker?.imageUrl ||
                                  "/img/speakers/placeholder.jpg"
                                }
                                alt={speaker?.name || "Speaker"}
                                fill
                                className="object-cover"
                                priority
                              />
                            </div>
                            <div>
                              <p
                                className={`font-semibold text-lg ${accentColor}`} // Speaker name color
                              >
                                {speaker?.name}
                              </p>
                              <p className="text-gray-300 text-sm">
                                {speaker?.title}
                              </p>
                            </div>
                          </div>

                          <p className="mt-3 text-gray-300">
                            <span className={`font-medium ${accentColor}`}>
                              Topic:
                            </span>{" "}
                            {colloquySpeaker.topic}
                          </p>
                        </motion.div>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </motion.section>

        {/* TIMELINE (Vertical Timeline - Fully Responsive) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="my-8"
        >
          <h3 className={`text-3xl font-bold text-center mb-8 ${accentColor}`}>
            Event Timeline
          </h3>
          <div className="relative">
            {/* Vertical Line (Hidden on Small Screens) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full hidden md:block"></div>

            <div className="container mx-auto px-4">
              {Object.entries(groupedActivities).map(([date, activities]) => (
                <div key={date} className="mb-10">
                  {/* Date Marker (Sticky on Large Screens) */}
                  <h4
                    className={`text-xl font-semibold mb-4 sticky top-12 bg-gray-900 py-2 z-10 text-center
                                    md:relative md:top-0 md:bg-transparent md:py-0 md:text-left md:ml-8 ${accentColor}`}
                  >
                    {date}
                  </h4>

                  {/* Activities (Grid on Small, Alternating on Large) */}
                  <div className="relative">
                    {activities.map((activity, index) => (
                      <div
                        key={index}
                        className="mb-8 last:mb-0 md:flex md:items-start"
                      >
                        {/* Dot and Connector (Hidden on Small Screens) */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -mt-1 hidden md:block">
                          <button
                            onClick={() => handleDotClick(date, index)}
                            className={`w-6 h-6 rounded-full transition-colors duration-300
                                                        ${
                                                          activeActivity?.date ===
                                                            date &&
                                                          activeActivity?.index ===
                                                            index
                                                            ? dotActiveColor // Active dot color
                                                            : `${dotInactiveColor} focus:outline-none` // Inactive dot color
                                                        }`}
                            aria-label={`View details for ${activity.title}`}
                          ></button>
                          {/* Vertical Connector (Conditional) */}
                          {index < activities.length - 1 && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full"></div>
                          )}
                        </div>

                        {/* Content (Stacked on Small, Alternating on Large) */}
                        <div
                          className={`relative rounded-lg p-4
                                                        md:flex-1  ${
                                                          index % 2 === 0
                                                            ? "md:text-left md:pl-16"
                                                            : "md:text-right md:pr-16"
                                                        }
                                                        ${
                                                          activeActivity?.date ===
                                                            date &&
                                                          activeActivity?.index ===
                                                            index
                                                            ? "bg-gray-800 shadow-md"
                                                            : ""
                                                        }`}
                        >
                          {/* Content */}
                          <p className="text-gray-300 font-medium">
                            {activity.time}
                          </p>
                          <p className={`font-semibold ${accentColor}`}>
                            {activity.title}
                          </p>
                          {activity.description && (
                            <p className="text-gray-400 mt-1">
                              {activity.description}
                            </p>
                          )}
                          {/* Speaker Link */}
                          {activity.speakerId && (
                            <Link href={`/speakers/${activity.speakerId}`}>
                              <span className={`${hoverColor} block mt-1`}>
                                {
                                  speakerData.find(
                                    (s: Speaker) => s.id === activity.speakerId
                                  )?.name
                                }
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* SPONSORS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full my-4 p-3 rounded-lg"
        >
          <Sponsors />
        </motion.div>
      </Container>
    </>
  );
}
