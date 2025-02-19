//src/app/industry-professional/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaHandshake, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const industryProfessionalForm = {
  title: "Ready to Connect?",
  description:
    "Register to connect with our department and explore collaboration opportunities.",
  link: "https://forms.gle/KuWNQjPX2KypN7Kt5",
};

const IndustryProfessionalPage: React.FC = () => {
  // Calculate the aspect ratio (height / width).  Replace with your image's actual aspect ratio.
  const aspectRatio = 33.33; // Example: 3:1 aspect ratio (width:height)

  return (
    <div>
      {/* Banner Image */}
      <div className="relative w-full" style={{ paddingTop: `${aspectRatio}%` }}>
        <Image
          src="/img/registration/industry_R.png"
          alt="Industry Professional Banner"
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
            {/* Introduction Section */}
            <motion.div
              className="mb-10 flex items-center space-x-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <FaBuilding className="text-yellow-500 text-4xl" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                  Engage with Future Cyber Security Leaders
                </h2>

              </div>

            </motion.div>
            <motion.div className="bg-gray-1000 rounded-2xl shadow-xl mb-12 w-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}>
              <div>
                <p className="text-gray-100">
                  Connect with our students, faculty, and research initiatives.
                  Your expertise is invaluable to our community.
                </p>
              </div>
            </motion.div>
            {/* Benefits Section */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-yellow-500 mb-4 flex items-center space-x-2">
                <FaUsers className="text-yellow-500" />
                <span>Benefits of Joining Our Industry Network</span>
              </h3>
              <ul className="list-disc pl-8 text-gray-300 space-y-2">
                <li>Access to talented cyber security students.</li>
                <li>Guest lectures, workshops, and mentorship opportunities.</li>
                <li>Early access to research findings.</li>
                <li>Networking events with faculty and industry peers.</li>
                <li>Shape curriculum to align with industry needs.</li>
              </ul>
            </motion.div>

            {/* Collaboration Areas Section */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            >

              <h3 className="text-xl font-semibold text-yellow-500 mb-4 flex items-center space-x-2">
                <FaHandshake className="text-yellow-500" />
                <span>Potential Areas for Collaboration</span>
              </h3>
              <ul className="list-disc pl-8 text-gray-300 space-y-2">
                <li>Project sponsorships and research partnerships.</li>
                <li>Internships and co-op opportunities.</li>
                <li>Curriculum development.</li>
                <li>Guest speaking and seminars.</li>
                <li>Joint workshops and training programs.</li>
              </ul>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                {industryProfessionalForm.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {industryProfessionalForm.description}
              </p>
              <a
                href={industryProfessionalForm.link}
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register as Industry Professional
                <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div> {/* End of padding div */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IndustryProfessionalPage;