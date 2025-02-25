// src/app/about-us/page.tsx
"use client";
import React from "react";
import { TextSection } from "@/components/TextSection"; // Import the new TextSection component
import { motion } from "framer-motion"; // Import motion - still needed for the call to action animation
import { Container } from "@/components/Container"; // Import Container for the call to action section

const AboutUsPage: React.FC = () => {
  const aboutUsContent = (
    <>
      Cyber Colloquy is a premier cybersecurity event that brings together students, professionals, and industry leaders to discuss the latest trends, innovations, and challenges in the cyber world. Designed to foster knowledge exchange and meaningful discussions, Cyber Colloquy serves as a platform for aspiring cybersecurity enthusiasts to engage with experts and gain insights into the evolving digital landscape.
      <br /><br />
      With thought-provoking panel discussions, expert sessions, and an exclusive Award Ceremony, the event aims to bridge the gap between academia and industry while promoting a secure digital future.
      <br /><br />
      🚀 Join us in shaping the next generation of cybersecurity! 🚀
    </>
  );
  return (
    <>
      <TextSection
        preTitle="About"
        title="Cyber Colloquy"
        textContent={aboutUsContent}
      />
      <Container> {/*  Container for the call to action section */}
        <motion.section
          className="mt-8 text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {/* <p className="text-gray-400 text-xl font-semibold text-left text-xl">
          </p> */}
        </motion.section>
      </Container>
    </>
  );
};
export default AboutUsPage;