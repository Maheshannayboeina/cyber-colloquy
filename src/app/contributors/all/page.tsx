"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { FaUserCog, FaCode, FaPencilAlt } from "react-icons/fa"; // Removed unused FaArrowRight
import Image from "next/image";

interface Contributor {
  name: string;
  role: string;
  description?: string;
  imageUrl?: string;
}

const contributors: Contributor[] = [
  {
    name: "Contributor 1",
    role: "Lead Developer",
    description: "Specializes in backend systems.",
    imageUrl: "",
  },
  {
    name: "Contributor 2",
    role: "UI/UX Designer",
    description: "Focuses on user experience.",
    imageUrl: "",
  },
  {
    name: "Contributor 3",
    role: "Content Writer",
    imageUrl: "",
  },
  {
    name: "Contributor 4",
    role: "Researcher",
    description: "Expert in AI security.",
  },
];

const ContributorsPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Contributors"
        title="Meet the Team"
        align="center"
        className="text-blue-500"
      >
        Acknowledge and appreciate the individuals who contribute to our
        projects and initiatives.
      </SectionTitle>

      <motion.div
        className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl mb-8 sm:mb-10 md:mb-12" // Responsive padding and margin
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Contributors List */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          {/* Responsive margin */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 sm:mb-6 flex items-center space-x-2">
            {/* Responsive heading and margin */}
            <FaUserCog className="text-blue-500" />
            <span>Our Contributors</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Responsive grid and gap */}
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg" // Responsive padding
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {contributor.imageUrl && (
                   <div className="relative h-40 sm:h-48 mb-2 sm:mb-4 rounded-md overflow-hidden">
                  <Image
                    src={contributor.imageUrl}
                    alt={contributor.name}
                    fill
                    className="object-cover" // Use object-cover for better image handling

                  />
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-1 sm:mb-2">
                  {/* Responsive heading and margin */}
                  {contributor.name}
                </h3>
                <p className="text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">
                  {/* Responsive text and margin */}
                  {contributor.role}
                </p>
                {contributor.description && (
                  <p className="text-gray-300 text-sm sm:text-base">
                    {/* Responsive text */}
                    {contributor.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contribution Guidelines */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10" // Responsive margin
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 sm:mb-4 flex items-center space-x-2">
            {/* Responsive heading and margin */}
            <FaCode className="text-blue-500" />
            <span>Contribution Guidelines</span>
          </h3>
          <ul className="list-disc pl-8 text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
            {/* Responsive text and spacing */}
            <li>[Guideline 1]</li>
            <li>[Guideline 2]</li>
          </ul>
        </motion.div>

        {/* Become a Contributor */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2 sm:mb-4 flex items-center justify-center space-x-2">
            {/* Responsive heading and margin */}
            <FaPencilAlt className="text-blue-500" />
            <span>Become a Contributor</span>
          </h3>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
            {/* Responsive text and margin */}
            Want to contribute? Get in touch with us!
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ContributorsPage;