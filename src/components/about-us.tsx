//src/components/about-us.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import InteractiveHoverButton from "@/components/InteractiveHoverButton";

const AboutUs: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mb-16 px-8 py-4" // Keep padding, remove background
    >
      <div className="max-w-3xl mx-auto">
        {/* Removed the inner h2 heading */}

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-200">
            Cyber Colloquy is a premier cybersecurity event that brings together
            students, professionals, and industry leaders to discuss the latest
            trends, innovations, and challenges in the cyber world. Designed to foster
            knowledge exchange and meaningful discussions, Cyber Colloquy serves as a
            platform for aspiring cybersecurity enthusiasts to engage with experts and
            gain insights into the evolving digital landscape.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            With thought-provoking panel discussions, expert sessions, and an
            exclusive Award Ceremony, the event aims to bridge the gap between
            academia and industry while promoting a secure digital future.
          </p>

          <p className="text-lg leading-relaxed text-center">
            <span className="text-yellow-400">🚀</span> Join us in shaping the next generation of cybersecurity! <span className="text-yellow-400">🚀</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <InteractiveHoverButton
            buttonColor="#007bff"
            textColor="#ffffff"
            onClick={() => (window.location.href = "/department-info")}
            aria-label="Learn More About Our Department"
          >
            Know More
          </InteractiveHoverButton>
          <InteractiveHoverButton
            buttonColor="#28a745"
            textColor="#ffffff"
            onClick={() => (window.location.href = "/events")}
            aria-label="Explore Our Events"
          >
            Check Out Our Events
          </InteractiveHoverButton>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;