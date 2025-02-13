"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

const registrationForm = { // Renamed to registrationForm to clarify its purpose
  title: "Project Expo Registration", // Keep title for button text and potential sub-heading
  description: "Register your project for the upcoming Project Expo.", // Keep description for registration section
  link: "https://docs.google.com/forms/d/1UvQmlhxpkJmMn2L0PZ0c8SdATgTg1wLljtbF0MQeKVY/edit?usp=sharing_eil&ts=67aaf27f",
};

const ProjectExpoPage: React.FC = () => { // Renamed component to ProjectExpoPage
  return (
    <Container>
      <SectionTitle
        preTitle="Annual Showcase"
        title="Cyber Security Project Expo" // More general title for the Expo Page
        align="center"
        className="text-indigo-700 dark:text-indigo-500"
      >
        Discover innovation, network with experts, and celebrate the best projects in Cyber Security.
        {/* General description of the Project Expo event */}
      </SectionTitle>

      <motion.div
        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8 max-w-screen-md mx-auto animate-fade-in-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Introduction to Project Expo Section (Moved to the top) */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center animate-form-item"
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0 * 0.07,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.99 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
            Welcome to the Cyber Security Project Expo!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            The Cyber Security Project Expo is our premier annual event dedicated to showcasing outstanding projects from students, researchers, and professionals in the field. It's a unique opportunity to witness cutting-edge innovations, engage with creators, and explore the future of cyber security.
            {/* Add more general descriptive content about the expo here: overall purpose, highlights, target audience for visitors, etc. */}
          </p>
          {/* You could add key highlights of the expo here, like keynote speakers, workshops, networking events etc. */}
        </motion.div>

        {/* Explore Inspiring Projects Section (Keep this section) */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center animate-form-item"
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1 * 0.07,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.99 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Discover Project Highlights
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Browse through a selection of featured projects from past expos and get a glimpse of the innovation and talent within our community.
            {/* Replace with actual project highlights - use a list, grid, or carousel. */}
            [Project Highlight 1 Title and Short Description] <br/>
            [Project Highlight 2 Title and Short Description] <br/>
            [Project Highlight 3 Title and Short Description] <br/>
            {/* ... more project highlights ... */}
          </p>
        </motion.div>

        {/* Why Attend Section (New Section - Focus on visitors/attendees) */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center animate-form-item"
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.2 * 0.07,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.99 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Why Attend the Project Expo?
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
            <li>Witness the latest innovations in Cyber Security.</li>
            <li>Network with leading experts and professionals.</li>
            <li>Discover potential collaborations and partnerships.</li>
            <li>Learn about emerging trends and technologies.</li>
            <li>Support and celebrate the achievements of our community.</li>
            {/* Add more reasons for people to ATTEND the expo as visitors */}
          </ul>
        </motion.div>


        {/* Call for Project Submissions / Registration Section (Moved Registration here) */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center animate-form-item"
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.3 * 0.07,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.99 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Submit Your Project to the Expo
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Are you working on an exciting Cyber Security project?  Showcase your work at the Project Expo!  Submit your project for a chance to gain recognition, receive valuable feedback, and connect with the community.
            {/* Add information about project submission guidelines, deadlines, eligibility criteria etc. */}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
             {registrationForm.description} {/* Re-using the original description */}
          </p>
          <a
            href={registrationForm.link}
            className="inline-block bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            target="_blank" rel="noopener noreferrer"
          >
            Register Your Project Here
          </a>
        </motion.div>

      </motion.div>
    </Container>
  );
};

export default ProjectExpoPage;