// src/components/TextSection.tsx
"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion"; // Import motion

interface TextSectionProps {
  preTitle: string;
  title: string;
  textContent: React.ReactNode; // Allow for JSX in text content
}

export const TextSection: React.FC<TextSectionProps> = ({ preTitle, title, textContent }) => {
  return (
    <Container className="text-left">
      <motion.div // Apply animation to the SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mb-8 text-left"
      >
        <SectionTitle
          preTitle={preTitle}
          title={title}
          align="left"
          className="text-blue-500 text-3xl md:text-4xl font-bold text-left"
        />
      </motion.div>

      <motion.div // Container for About Us content with animation - NO CARD BACKGROUND NOW
        className="mt-8 text-left"  // REMOVED max-w-5xl here!
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* About Content Section */}
        <motion.section
          className="mb-6 text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <hr className="border-t-2 border-gray-700 mb-4" /> {/* Separator line */}
          <p className="text-gray-300 leading-relaxed text-left text-lg"> {/* Increased font size to text-lg */}
            {textContent}
          </p>
        </motion.section>
      </motion.div>
    </Container>
  );
};