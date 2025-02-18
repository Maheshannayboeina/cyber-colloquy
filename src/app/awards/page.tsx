"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaClipboardCheck, FaBullhorn, FaArrowRight } from 'react-icons/fa';
import Image from "next/image";

const nominationForm = {
  title: "Ready to Nominate?", // Updated title to match CyberColloquy style
  description: "Recognize the cyber security champions! Click the button below to submit your nominations.", // Updated description
  link: "https://forms.gle/amn4gTt5gaR7py53A",
};

const AwardCeremonyPage: React.FC = () => {
  return (
    <div>
      {/* Banner Image */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/img/registration/award.png"
          alt="Award Ceremony Banner"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <motion.div>
        <motion.div
          className="bg-gray-1000 rounded-2xl shadow-xl mb-12 w-full overflow-hidden" // Styling from CyberColloquy page
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-10"> {/* Padding for content moved inside */}
            {/* About the Award Ceremony Section */}
            <motion.div
              className="mb-10 flex items-center space-x-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <FaAward className="text-yellow-400 text-4xl" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                  About the Colloquy 4.0 Award Ceremony
                </h2>
                
              </div>
            </motion.div>
            <motion.div
              className="mb-10 flex items-center space-x-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div><p className="text-gray-100">
                  We are excited to host the Award Ceremony at Colloquy 4.0, recognizing individuals and teams who have made significant contributions to the field of cyber security.
                </p></div>
              </motion.div>
            {/* Nomination Categories Section */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center space-x-2">
                <FaClipboardCheck className="text-yellow-500" />
                <span>Nomination Categories</span>
              </h3>
              <ul className="list-disc pl-8 text-gray-100 space-y-2">
                <li><b>Cyber Security Professional of the Year:</b> Recognizing outstanding contributions to the industry.</li>
                <li><b>Emerging Talent Award:</b> For promising students or newcomers in cyber security.</li>
                <li><b>Innovation in Cyber Security Award:</b> Celebrating groundbreaking projects and ideas.</li>
                <li><b>Community Contribution Award:</b> Acknowledging efforts in cyber security education and outreach.</li>
                {/* Add more categories as needed */}
              </ul>
            </motion.div>

            {/* How to Nominate Section */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center space-x-2">
                <FaBullhorn className="text-yellow-500" />
                <span>How to Nominate</span>
              </h3>
              <ol className="list-decimal pl-8 text-gray-100 space-y-2">
                <li><b>Review Categories:</b> Familiarize yourself with the award categories.</li>
                <li><b>Prepare Nomination:</b> Gather information about your nominee and their achievements.</li>
                <li><b>Submit Form:</b> Click the button below to access the nomination form and complete it.</li>
                <li><b>Deadline:</b> Ensure your nomination is submitted before the deadline [Insert Deadline Date].</li> {/* Add Deadline Date */}
              </ol>
            </motion.div>

            {/* Nominate Now Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                {nominationForm.title}
              </h3>
              <p className="text-gray-100 mb-6">
                {nominationForm.description}
              </p>
              <a
                href={nominationForm.link}
                className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                Nominate Now <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>{/* End of padding div */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AwardCeremonyPage;