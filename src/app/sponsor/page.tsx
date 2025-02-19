//src/app/sponsor/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaCalendarAlt,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

const sponsorForm = {
  title: "Ready to Become a Sponsor?", // Updated title to match CyberColloquy style
  description: "Support cyber security excellence! Click the button below to register your interest.", // Updated description
  link: "https://forms.gle/opzReb4DrVhvGBbv7",
};

const pitchDeckLink =
  "https://drive.google.com/file/d/1Uk4YyneIlUnPVrylcn3q8FfGOWFjhKhN/view";

const SponsorPage: React.FC = () => {
  // Calculate the aspect ratio (height / width).  Replace with your image's actual aspect ratio.
  const aspectRatio = 33.33; // Example: 3:1 aspect ratio (width:height)

  return (
    <div>
      {/* Banner Image */}
      <div className="relative w-full" style={{ paddingTop: `${aspectRatio}%` }}>
        <Image
          src="/img/registration/sponsor_R.png"
          alt="Become a Sponsor Banner"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }} // Added objectPosition
          priority
        />
      </div>

      <motion.div>
        <motion.div
          className="bg-gray-1000 rounded-2xl shadow-xl mb-12 w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-10">
            {/* Welcome Section (Condensed Info Card Content) */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center space-x-6 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <FaHandshake className="text-blue-400 text-4xl" />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                    Partner with Cyber Colloquy 4.0
                  </h2>

                </div>
              </motion.div>
              <motion.div
                className="bg-gray-1000 rounded-2xl shadow-xl mb-12 w-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div> <p className="text-gray-100">
                  Join us in making Cyber Colloquy 4.0 a grand success! We invite
                  esteemed organizations and brands to collaborate with us as
                  sponsors for this premier cybersecurity conclave. By partnering
                  with us, you get the opportunity to enhance brand visibility,
                  engage with a tech-savvy audience, and support the future of
                  cybersecurity.
                </p></div>
              </motion.div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center space-x-2">
                  <FaQuestionCircle className="text-blue-500" />
                  <span>Why Sponsor?</span>
                </h3>
                <ul className="list-disc pl-5 text-gray-100 space-y-2">
                  <li>
                    Gain exposure among students, professionals, and industry
                    leaders
                  </li>
                  <li>
                    Branding opportunities through event promotions, banners, and
                    digital media
                  </li>
                  <li>
                    Direct interaction with aspiring cybersecurity professionals and
                    tech enthusiasts
                  </li>
                  <li>
                    Showcase your company’s commitment to innovation and
                    cybersecurity awareness
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center space-x-2">
                  <FaCalendarAlt className="text-blue-500" />
                  <span>Date & Venue</span>
                </h3>
                <p className="text-gray-300 space-y-2">
                  📅 Date: 21st March - 24th March <br />
                  📍 Venue: 7th floor Auditorium SAKEC
                </p>
              </motion.div>

              <motion.p
                className="text-gray-100 mt-6 mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
              >
                Let's collaborate to create an impactful and memorable event! 🚀
              </motion.p>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35, ease: "easeInOut" }}
              >
                <a
                  href={pitchDeckLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pitch Deck
                </a>
              </motion.p>
            </motion.div>

            {/* Become a Sponsor Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                {sponsorForm.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {sponsorForm.description}
              </p>
              <a
                href={sponsorForm.link}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Sponsor <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>{/* End of padding div */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SponsorPage;