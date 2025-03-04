//src/app/cyber-colloquy-4.0/page.tsx
"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCalendarAlt,
  FaMicrophone,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa"; // Import icons
import Image from "next/image"; // Import Image component

const cyberColloquyForm = {
  title: "Cyber Colloquy 4.0 Registration",
  description: "Register for Cyber Colloquy 4.0 event.",
  link: "https://forms.gle/PKJUsn61ran1Q7tH6",
};

const CyberColloquy4Page: React.FC = () => {
  //  REPLACE WITH ACTUAL WIDTH from your image file
  const imageWidth = 1920;
    //  REPLACE WITH ACTUAL HEIGHT from your image file
  const imageHeight = 480;

  return (
    <div>
      {/* Banner Image */}
      <div className="relative w-full">
        <Image
          src="/img/nomination_banners/register.png"
          alt="Cyber Colloquy 4.0 Banner"
          width={imageWidth}
          height={imageHeight}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>

      <motion.div
        className="bg-gray-1000 rounded-2xl shadow-xl mb-12 w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-10">
          {/* Welcome Section */}
          <motion.div
            className="mb-10 flex items-center space-x-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <FaShieldAlt className="text-blue-400 text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                Welcome to Cyber Colloquy 4.0!
              </h2>

            </div>
          </motion.div>
          <motion.div
            className="mb-10"   //removed flex items-center space-x-6
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div><p className="text-gray-100">
                Your Gateway to Cyber Security Insights and Networking.
              </p></div>
          </motion.div>
          {/* Event Highlights Section */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
              <FaCalendarAlt className="text-blue-500" />
              <span>Event Highlights</span>
            </h3>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>
                <b>Keynote Presentations:</b> Leading experts sharing valuable
                insights.
              </li>
              <li>
                <b>Panel Discussions:</b> Engaging dialogues on critical
                challenges.
              </li>
              <li>
                <b>Networking:</b> Connect with professionals, and students.
              </li>
              <li>
                <b>Student Showcase:</b> Discover projects and innovation.
              </li>
            </ul>
          </motion.div>

          {/* What You'll Gain Section */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
              <FaMicrophone className="text-blue-500" />
              <span>What You&apos;ll Gain at Cyber Colloquy 4.0</span>
            </h3>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>Stay Updated: Learn the latest in cyber security.</li>
              <li>Expert Insights: From industry leaders.</li>
              <li>
                Expand Network: Connect with professionals and fellow students.
              </li>
              <li>Be Informed: Shape of the future of cyber security.</li>
            </ul>
          </motion.div>

          {/* Who Should Attend Section */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
              <FaUsers className="text-blue-500" />
              <span>Who Should Attend?</span>
            </h3>
            <ul className="list-disc pl-8 text-gray-300 space-y-2">
              <li>Cybersecurity Students</li>
              <li>Industry Professionals</li>
              <li>Researchers</li>
              <li>Cybersecurity Enthusiasts</li>
              <li>Anyone interested in learning</li>
            </ul>
          </motion.div>

          {/* Registration Section for Cyber Colloquy 4.0 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-4">
              Ready to Join Cyber Colloquy 4.0?
            </h3>
            <p className="text-gray-300 mb-6">
              Don&apos;t miss out! Register to secure your spot and be part of the
              conversation.
            </p>
            <a
              href={cyberColloquyForm.link}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for Cyber Colloquy 4.0 <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div> {/* End of padding div */}
      </motion.div>
    </div>
  );
};

export default CyberColloquy4Page;