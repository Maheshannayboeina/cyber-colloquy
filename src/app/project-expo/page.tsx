"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { FaLightbulb, FaMicrochip, FaUsers, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'; // Import icons

const registrationForm = {
  title: "Project Expo Registration",
  description: "Register your project for the upcoming Project Expo.",
  link: "https://docs.google.com/forms/d/1UvQmlhxpkJmMn2L0PZ0c8SdATgTg1wLljtbF0MQeKVY/edit?usp=sharing_eil&ts=67aaf27f",
};

const ProjectExpoPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Annual Showcase"
        title="Cyber Security Project Expo"
        align="center"
        className="text-blue-700 dark:text-blue-500" // Updated Color
      >
        Discover innovation, network with experts, and celebrate the best projects in Cyber Security.
      </SectionTitle>

      <motion.div
        className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl mb-12 max-w-screen-lg mx-auto" // Updated Styles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Welcome Section */}
        <motion.div
          className="mb-10 flex items-center space-x-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <FaLightbulb className="text-blue-500 dark:text-blue-400 text-4xl" /> {/* Icon */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Welcome to the Cyber Security Project Expo!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Witness cutting-edge innovations, engage with creators, and explore the future of cyber security.
            </p>
          </div>
        </motion.div>

        {/* Project Highlights Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center space-x-2">
            <FaMicrochip className="text-blue-500" /> {/* Icon */}
            <span>Discover Project Highlights</span>
          </h3>
          <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2">
            <li><b>[Project 1 Title]:</b> [Short Description].</li>
            <li><b>[Project 2 Title]:</b> [Short Description].</li>
            <li><b>[Project 3 Title]:</b> [Short Description].</li>
          </ul>
        </motion.div>

        {/* Why Attend Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center space-x-2">
            <FaUsers className="text-blue-500" /> {/* Icon */}
            <span>Why Attend the Project Expo?</span>
          </h3>
          <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Witness the latest innovations.</li>
            <li>Network with leading experts.</li>
            <li>Discover potential collaborations.</li>
            <li>Learn about emerging trends.</li>
            <li>Support the Cyber Security community.</li>
          </ul>
        </motion.div>

        {/* Submit Project Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Ready to Showcase Your Project?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Submit your project and gain recognition at the Project Expo!
          </p>
          <a
            href={registrationForm.link}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
            target="_blank" rel="noopener noreferrer"
          >
            Register Your Project <FaArrowRight className="ml-2" /> {/* Icon */}
          </a>
        </motion.div>

         {/* Expo Date and Location Section */}
         <motion.div
          className="mb-10 flex items-center space-x-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <FaCalendarAlt className="text-blue-500 dark:text-blue-400 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Expo Date and Location
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
             Date: 21st to 24th March <br/>
              Location: Seminar Hall
              {/* Add actual location, date, time here */}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ProjectExpoPage;