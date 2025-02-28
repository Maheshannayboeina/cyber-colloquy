//src/app/events/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import InteractiveHoverButton from "@/components/InteractiveHoverButton";

import { Container } from "@/components/Container";
import { events, speakerData } from "@/components/data";
import { SectionTitle } from "@/components/SectionTitle";
import { Sponsors } from "@/components/Sponsors";
import Timeline from "@/components/Timeline"; //Original Timeline component.
import { TimelineEvent } from "@/components/expandable-timeline-card"; // Keep for type
import { Speaker } from "@/components/speakers-data";

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

  // Normalize activities (Keep the original normalization)
  const normalizedActivities =
    event.activities || event.colloquyDetails?.activities || [];

// Build timeline events (Keep original logic, but without image handling)
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
          description: `Activities for ${activityDate}`, // Keep original description
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
      {/* HERO BANNER (No changes) */}
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

      {/* MAIN CONTENT */}
      <Container className="text-gray-300">
        {/* EVENT TITLE & DATE (No changes) */}
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

          {event.id === 4 && (
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
                <InteractiveHoverButton buttonColor="#10B981" textColor="#FFFFFF">
                  Register Now
                </InteractiveHoverButton>
              </Link>
            </motion.div>
          )}
        </motion.section>

        {/* SPONSORS (No changes) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full my-8 bg-gray-900 p-6 rounded-lg"
        >
          <Sponsors />
        </motion.div>

        {/* DESCRIPTION & TOPICS (NEW UI) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-8"  // Removed text-center
        >
          <SectionTitle preTitle="" title={event.description} />
          {event.colloquyDetails?.speakers && (
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-emerald-400 mb-4 text-center">
                Speakers & Topics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.colloquyDetails.speakers.map((colloquySpeaker, index) => {
                  const speaker = speakerData.find(
                    (s: Speaker) => s.id === colloquySpeaker.speakerId
                  );
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }} // Staggered delay
                      className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                      <Link href={`/speakers/${speaker?.id}`}>
                          <div className="flex items-center">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                                <Image
                                    src={speaker?.imageUrl || '/img/speakers/placeholder.jpg'} // Fallback image
                                    alt={speaker?.name || 'Speaker'}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div>
                              <p className="text-emerald-400 font-semibold text-lg">
                                {speaker?.name}
                              </p>
                              <p className="text-gray-300 text-sm">
                                {speaker?.title}
                              </p>
                            </div>
                          </div>
                      </Link>

                      <p className="mt-3 text-gray-100">
                        <span className="font-medium">Topic:</span>{" "}
                        {colloquySpeaker.topic}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.section>

        {/* TIMELINE (Reverted UI, but no images) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="my-8"
        >
           <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Event Timeline
          </h3>
          {/* Use original Timeline component */}
          <div>
            <Timeline events={timelineEvents} />
          </div>
        </motion.section>
      </Container>
    </>
  );
}