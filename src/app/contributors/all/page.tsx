//src/app/contributors/all/page.tsx
"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion"; // Import
import { FaUserCog, FaCode, FaPencilAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface Contributor {
  name: string;
  role: string;
  description?: string; // Optional description
  imageUrl?: string;
}

// Sample contributor data
const contributors: Contributor[] = [
  {
    name: "Contributor 1",
    role: "Lead Developer",
    description: "Specializes in backend systems.",
    imageUrl: "/img/contributors/contributor1.jpg",
  },
  {
    name: "Contributor 2",
    role: "UI/UX Designer",
    description: "Focuses on user experience.",
    imageUrl: "/img/contributors/contributor2.jpg",
  },
  {
    name: "Contributor 3",
    role: "Content Writer",
    imageUrl: "/img/contributors/contributor2.jpg",
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
        className="bg-gray-800 p-10 rounded-2xl shadow-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Contributors List */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center space-x-2">
            <FaUserCog className="text-blue-500" /> {/* Icon */}
            <span>Our Contributors</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
              >
                {contributor.imageUrl && (
                  <Image
                    src={contributor.imageUrl}
                    alt={contributor.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {contributor.name}
                </h3>
                <p className="text-gray-400 mb-2">{contributor.role}</p>
                {contributor.description && (
                  <p className="text-gray-300">{contributor.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contribution Guidelines */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }} // Delay after cards
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
            <FaCode className="text-blue-500" /> {/* Icon */}
            <span>Contribution Guidelines</span>
          </h3>
          <ul className="list-disc pl-8 text-gray-300 space-y-2">
            <li>[Guideline 1]</li>
            <li>[Guideline 2]</li>
          </ul>
        </motion.div>

        {/* Become a Contributor */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }} // Further delay
        >
          <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center justify-center space-x-2">
            <FaPencilAlt className="text-blue-500" />
            <span>Become a Contributor</span>
          </h3>
          <p className="text-gray-300 mb-6">
            Want to contribute? Get in touch with us!
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ContributorsPage;
