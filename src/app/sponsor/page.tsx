"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { FaHandshake, FaStar, FaChartLine, FaArrowRight } from 'react-icons/fa'; // Import icons

const sponsorForm = {
  title: "Sponsor Form",
  description: "Become a sponsor and support our events.",
  link: "https://docs.google.com/forms/d/1eI9PeUE_Ig2i4Du9p7anCp-Hu5kD8X0ffFjDbbw4ltY/edit?usp=sharing_eil&ts=67aaf1b0",
};

const SponsorPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Support Our Initiatives"
        title="Become a Sponsor"
        align="center"
        className="text-blue-700 dark:text-blue-500" // Updated color
      >
        Partner with us to empower cyber security innovation and education.
      </SectionTitle>

      <motion.div
        className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl mb-12 max-w-screen-lg mx-auto" // Updated styling
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Why Sponsor Section */}
        <motion.div
          className="mb-10 flex items-center space-x-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <FaHandshake className="text-blue-500 dark:text-blue-400 text-4xl" /> {/* Icon */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Why Sponsor Our Events?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Demonstrate your commitment to cyber security and foster the next generation of professionals.
            </p>
          </div>
        </motion.div>

        {/* Sponsorship Levels Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center space-x-2">
            <FaStar className="text-blue-500" /> {/* Icon */}
            <span>Explore Sponsorship Levels</span>
          </h3>
          <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2">
            <li><b>Gold Sponsor:</b> Prominent logo placement, speaking opportunity, etc.</li>
            <li><b>Silver Sponsor:</b> Logo placement, booth at event, etc.</li>
            <li><b>Bronze Sponsor:</b> Logo listing, mention in materials, etc.</li>
            <li><b>Custom Packages:</b> We tailor packages to meet your goals.</li>
          </ul>
        </motion.div>

        {/* Benefits for Sponsors Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center space-x-2">
            <FaChartLine className="text-blue-500" /> {/* Icon */}
            <span>Key Benefits for Sponsors</span>
          </h3>
          <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Enhance brand visibility.</li>
            <li>Demonstrate social responsibility.</li>
            <li>Network with future employees.</li>
            <li>Showcase products to a targeted audience.</li>
            <li>Gain positive PR.</li>
          </ul>
        </motion.div>

        {/* Become a Sponsor Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Ready to Become a Sponsor?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Support cyber security excellence! Click the button below to register your interest.
          </p>
          <a
            href={sponsorForm.link}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            Become a Sponsor <FaArrowRight className="ml-2" /> {/* Icon */}
          </a>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default SponsorPage;