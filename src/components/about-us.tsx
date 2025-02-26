//src/components/about-us.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import InteractiveHoverButton from "@/components/InteractiveHoverButton";

const AboutUs: React.FC = () => {
  const aboutUsContent = (
    <>
      Cyber Colloquy is a premier cybersecurity event that brings together
      students, professionals, and industry leaders to discuss the latest
      trends, innovations, and challenges in the cyber world. Designed to foster
      knowledge exchange and meaningful discussions, Cyber Colloquy serves as a
      platform for aspiring cybersecurity enthusiasts to engage with experts and
      gain insights into the evolving digital landscape.
      <br />
      <br />
      With thought-provoking panel discussions, expert sessions, and an
      exclusive Award Ceremony, the event aims to bridge the gap between
      academia and industry while promoting a secure digital future.
      <br />
      <br />
      🚀 Join us in shaping the next generation of cybersecurity! 🚀
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-12"  // Removed "text-center" so content is left-aligned
    >
      <div className="text-xl text-gray-200">{aboutUsContent}</div>
      <div className="mt-6 flex space-x-4 text-center justify-center">
        <InteractiveHoverButton onClick={() => window.location.href = "/department-info"}>
          Know More
        </InteractiveHoverButton>
        <InteractiveHoverButton onClick={() => window.location.href = "/events"}>
          Check Out Our Events
        </InteractiveHoverButton>
      </div>
    </motion.div>
  );
};

export default AboutUs;