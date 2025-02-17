"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion"; // Import
import {
  FaGraduationCap,
  FaUsers,
  FaBriefcase,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa"; // Import icons
import Image from "next/image";

// Interface for Alumni
interface Alumni {
  name: string;
  title: string;
  description?: string;
  imageUrl?: string; // Optional image URL
}

const alumniData: Alumni[] = [
  {
    name: "Alumni Name 1",
    title: "Software Engineer",
    description: "Working at a leading tech company.",
    imageUrl: "",
  }, //Use correct path
  {
    name: "Alumni Name 2",
    title: "Cybersecurity Analyst",
    description: "Protecting critical infrastructure.",
    imageUrl: "",
  },
  {
    name: "Alumni Name 3",
    title: "Data Scientist",
    imageUrl: "",
  },
  {
    name: "Alumni Name 4",
    title: "Researcher",
    description: "Focused on AI security.",
  },
];

const AlumniPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Alumni Network"
        title="Stay Connected"
        align="center"
        className="text-blue-500"
      >
        Connect with fellow alumni and stay updated on department news and
        events.
      </SectionTitle>

      <motion.div
        className="bg-gray-800 p-10 rounded-2xl shadow-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Alumni Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center space-x-2">
            <FaGraduationCap className="text-blue-500" />
            <span>Alumni Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniData.map((alumnus, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
              >
                {alumnus.imageUrl && (
                  <Image
                    src={alumnus.imageUrl}
                    alt={alumnus.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {alumnus.name}
                </h3>
                <p className="text-gray-400 mb-2">{alumnus.title}</p>
                {alumnus.description && (
                  <p className="text-gray-300">{alumnus.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alumni Registration/Login */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }} // Delay after cards
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
            <FaUsers className="text-blue-500" />
            <span>Register/Login</span>
          </h3>
          <p className="text-gray-300 mb-4">
            Alumni can register or log in to access exclusive content, connect
            with others, and stay updated.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }} // Further delay
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-500" />
            <span>Upcoming Events</span>
          </h3>
          {/* Add event cards/list here */}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }} // Even further delay
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
            <FaBriefcase className="text-blue-500" />
            <span>Success Stories</span>
          </h3>
        </motion.div>

        {/* Contact/Stay Connected */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }} // Final delay
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center justify-center space-x-2">
            <FaEnvelope className="text-blue-500" />
            <span>Stay Connected</span>
          </h3>
          <p className="text-gray-300 mb-4">
            Follow us on social media or contact us directly.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default AlumniPage;
