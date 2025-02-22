//src/app/project-expo/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCalendarAlt,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

const registrationForm = {
  title: "Ready to Showcase Your Project?",
  description: "Submit your project and gain recognition at the Project Expo!",
  link: "https://forms.gle/L5XDXJVVuGaJxTjN8",
};

const ProjectExpoPage: React.FC = () => {
  //  REPLACE WITH ACTUAL WIDTH from your image file
  const imageWidth = 1920;
    //  REPLACE WITH ACTUAL HEIGHT from your image file
  const imageHeight = 480;

  return (
    <div>
      {/* Banner Image */}
      <div className="relative w-full">
        <Image
          src="/img/nomination_banners/project_expo.png"
          alt="Cyber Security Project Expo Banner"
          width={imageWidth}
          height={imageHeight}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>

      <motion.div>
        <motion.div
          className="bg-gray-1000 rounded-2xl shadow-xl w-full overflow-hidden" // Removed mb-12
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-10">
            {/* ... (rest of your content) ... */}
            <motion.div className="mb-10">
              <motion.div
                className="flex items-center space-x-6 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <FaLightbulb className="text-purple-400 text-4xl" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                    Showcase Your Innovation at Project EXPO!
                  </h2>

                </div>
              </motion.div>
              <motion.div
                className="mb-10"  //removed duplicate and unnessary div and bg classes
                initial={{ opacity: 0,x:-50 }} // added initial, animate, transition
                animate={{ opacity: 1, x:0 }}
                transition={{ duration: 0.4, ease:"easeInOut" }}
              >
                <div><p className="text-gray-100">
                  Showcase your creativity, innovation, and technical
                  expertise at Project EXPO, where students present
                  groundbreaking projects across various domains! Whether it&apos;s
                  cybersecurity, AI, IoT, software development, robotics, or
                  any other field, this is your platform to shine.
                </p></div>
              </motion.div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3 flex items-center space-x-2">
                  <FaQuestionCircle className="text-purple-500" />
                  <span>Why Participate?</span>
                </h3>
                <ul className="list-disc pl-5 text-gray-100 space-y-2">
                  <li>Display your project to a wider audience</li>
                  <li>Gain valuable feedback from experts</li>
                  <li>
                    Network with like-minded innovators and industry professionals
                  </li>
                  <li>Get recognized for your ideas and problem-solving skills</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3 flex items-center space-x-2">
                  <FaCalendarAlt className="text-purple-500" />
                  <span>Date & Venue</span>
                </h3>
                <p className="text-gray-100 space-y-2">
                  📅 Date: 21st March - 24th March <br />
                  📍 Venue: 7th floor Auditorium SAKEC
                </p>
              </motion.div>

              <motion.p
                className="text-gray-100 mt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
              >
                Be a part of an event that celebrates innovation and
                technological advancements! Don’t miss the chance to showcase
                your project and make an impact. 🚀
              </motion.p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                {registrationForm.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {registrationForm.description}
              </p>
              <a
                href={registrationForm.link}
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Your Project <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectExpoPage;