//src/app/speakers/[id]/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { speakerData } from "@/components/speakers-data";
import { FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SpeakerPage({ params }: PageProps) {
  const { id } = await params;
  const speaker = speakerData.find((speaker) => speaker.id === id);

  if (!speaker) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Speaker Not Found
          </h1>
          <p className="text-gray-400">
            Sorry, the speaker you are looking for could not be found.
          </p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden"
      >
        <div className="md:flex">
          {/* Speaker Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 p-6 sm:p-8 flex items-center justify-center"
          >
            {/* Fixed heights for smaller screens ensure the container is never 0px tall */}
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={speaker.imageUrl}
                alt={speaker.name}
                fill
                className="rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* Speaker Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-3 sm:mb-4">
              {speaker.name}
            </h1>
            <h2 className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">
              {speaker.title}
            </h2>
            <p className="text-gray-200 leading-relaxed mb-5 sm:mb-6">
              {speaker.description}
            </p>
            {speaker.linkedinUrl && (
              <a
                href={speaker.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex max-w-max items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl transition transform hover:scale-105 duration-300"
                aria-label={`Connect with ${speaker.name} on LinkedIn`}
              >
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}
