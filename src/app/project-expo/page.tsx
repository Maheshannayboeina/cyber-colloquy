"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { FaLightbulb, FaCalendarAlt, FaQuestionCircle, FaArrowRight } from 'react-icons/fa'; // Import icons - CalendarAlt and QuestionCircle

const registrationForm = {
  title: "Project Expo Registration",
  description: "Register your project for the upcoming Project Expo.",
  link: "https://forms.gle/L5XDXJVVuGaJxTjN8",
};

const ProjectExpoPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Annual Showcase"
        title="Cyber Security Project Expo"
        align="center"
        className="text-purple-700 dark:text-purple-500"
      >
        Discover innovation, network with experts, and celebrate the best projects in Cyber Security.
      </SectionTitle>

      <motion.div
        className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl mb-12 max-w-screen-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Welcome Section (Info Card Content) */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }} // Removed animation from the container, will animate children individually
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex items-center space-x-6 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <FaLightbulb className="text-purple-500 dark:text-purple-400 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Showcase Your Innovation at Project EXPO!
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Showcase your creativity, innovation, and technical expertise at Project EXPO, where students present groundbreaking projects across various domains! Whether it's cybersecurity, AI, IoT, software development, robotics, or any other field, this is your platform to shine.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center space-x-2">
              <FaQuestionCircle className="text-purple-500" /> {/* Why Participate Icon */}
              <span>Why Participate?</span>
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Display your project to a wider audience</li>
              <li>Gain valuable feedback from experts</li>
              <li>Network with like-minded innovators and industry professionals</li>
              <li>Get recognized for your ideas and problem-solving skills</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center space-x-2">
              <FaCalendarAlt className="text-purple-500" /> {/* Date & Venue Icon */}
              <span>Date & Venue</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 space-y-2">
              📅 Date: 21st March - 24th March <br/>
              📍 Venue: 7th floor Auditorium SAKEC
            </p>
          </motion.div>

          <motion.p
            className="text-gray-600 dark:text-gray-400 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
          >
            Be a part of an event that celebrates innovation and technological advancements! Don’t miss the chance to showcase your project and make an impact. 🚀
          </motion.p>

        </motion.div>

        {/* Submit Project Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }} // Increased delay for button
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Ready to Showcase Your Project?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Submit your project and gain recognition at the Project Expo!
          </p>
          <a
            href={registrationForm.link}
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            Register Your Project <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ProjectExpoPage;