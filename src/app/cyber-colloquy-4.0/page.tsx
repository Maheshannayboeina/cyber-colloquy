"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

const cyberColloquyForm = {
  title: "Cyber Colloquy 4.0 Registration",
  description: "Register for Cyber Colloquy 4.0 event.",
  link: "https://docs.google.com/forms/d/1vnzfI_CtaqPpMxWMifcgMYV99nZMCfjeMoMuFP7dzMY/edit?usp=sharing_eil&ts=67aaf11f",
};

const CyberColloquy4Page: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Join the Conversation"
        title="Cyber Colloquy 4.0"
        align="center"
        className="text-indigo-700 dark:text-indigo-500"
      >
        Engage in insightful discussions and explore the latest trends in cyber security at Cyber Colloquy 4.0.
      </SectionTitle>

      <motion.div
        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8 max-w-screen-md mx-auto animate-fade-in-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Introduction to Cyber Colloquy 4.0 Section */}
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
            Welcome to Cyber Colloquy 4.0
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            Cyber Colloquy is our flagship annual event, bringing together experts, professionals, students, and enthusiasts to discuss and delve into critical topics within the cyber security landscape. Cyber Colloquy 4.0 promises to be an engaging and informative event, featuring insightful talks, interactive sessions, and networking opportunities.
            {/* Add a more detailed introduction to Cyber Colloquy 4.0 - theme, focus, what makes it special, target audience etc. */}
          </p>
          {/* You could add a tagline or a brief highlight of this year's colloquy here. */}
        </motion.div>

        {/* Event Highlights Section (Example - Customize based on your event) */}
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
            What to Expect at Cyber Colloquy 4.0
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Cyber Colloquy 4.0 will feature a range of activities and sessions, including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
            <li><strong>Keynote Presentations:</strong> Hear from leading experts in the field of cyber security. [Mention Keynote Speaker Names/Topics if available]</li> तैयारी
            <li><strong>Panel Discussions:</strong> Engage with thought leaders on current and emerging cyber security challenges. [Mention Panel Topics if available]</li>
            <li><strong>Workshops & Technical Sessions:</strong>  Gain hands-on knowledge and practical skills. [Mention Workshop Topics if available]</li>
            <li><strong>Networking Opportunities:</strong> Connect with peers, professionals, and potential collaborators.</li>
            <li><strong>Student Project Showcase:</strong> Discover innovative projects from our students. [If applicable]</li>
            {/* Add specific highlights and features of Cyber Colloquy 4.0 */}
          </ul>
        </motion.div>

        {/* Why Attend Cyber Colloquy 4.0 Section */}
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
            Why You Should Attend Cyber Colloquy 4.0
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
            <li>Stay updated with the latest trends and challenges in cyber security.</li>
            <li>Gain insights from industry experts and thought leaders.</li>
            <li>Expand your professional network and connect with peers.</li>
            <li>Enhance your knowledge and skills through workshops and sessions.</li>
            <li>Be a part of the conversation shaping the future of cyber security.</li>
            {/* Add more compelling reasons to attend Cyber Colloquy 4.0 */}
          </ul>
        </motion.div>


        {/* Registration Section for Cyber Colloquy 4.0 */}
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
            Register for Cyber Colloquy 4.0
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Don't miss out on this premier cyber security event! Register now to secure your spot at Cyber Colloquy 4.0 and be a part of the discussion. Click the button below to access the registration form.
            {/* Add information about registration deadlines, fees (if any), what registration includes, etc. */}
          </p>
          <a
            href={cyberColloquyForm.link}
            className="inline-block bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            target="_blank" rel="noopener noreferrer"
          >
            Register for Cyber Colloquy 4.0
          </a>
        </motion.div>

      </motion.div>
    </Container>
  );
};

export default CyberColloquy4Page;