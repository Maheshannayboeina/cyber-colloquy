//src/app/contributors/partners/page.tsx
"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion"; // Import
import {
  FaHandshake,
  FaBuilding,
  FaStar,
  FaArrowRight,
  FaWrench,
} from "react-icons/fa";
import Image from "next/image";

interface Partner {
  name: string;
  description?: string;
  imageUrl?: string;
}

const partners: Partner[] = [
  {
    name: "Partner 1",
    description: "A leading tech company.",
    imageUrl: "/img/partners/partner1.jpg",
  },
  {
    name: "Partner 2",
    description: "Specializes in network security.",
    imageUrl: "/img/partners/partner2.jpg",
  },
  { name: "Partner 3", imageUrl: "/img/partners/partner2.jpg" },
];

const PartnersPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Partners"
        title="Strategic Alliances"
        align="center"
        className="text-blue-500"
      >
        Showcase the organizations and institutions that partner with us.
      </SectionTitle>

      <motion.div
        className="bg-gray-800 p-10 rounded-2xl shadow-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Partners List */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center space-x-2">
            <FaBuilding className="text-blue-500" />
            <span>Our Partners</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }} // Initial state for animation
                animate={{ opacity: 1, y: 0 }} // Animate to this state
                transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered delay
              >
                {partner.imageUrl && (
                  <Image
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {partner.name}
                </h3>
                {partner.description && (
                  <p className="text-gray-300">{partner.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }} // Delay after cards
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
            <FaStar className="text-blue-500" />
            <span>Partnership Benefits</span>
          </h3>
          <ul className="list-disc pl-8 text-gray-300 space-y-2">
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
          </ul>
        </motion.div>

        {/* Become a Partner */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }} // Further delay
        >
          <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center justify-center space-x-2">
            <FaHandshake className="text-blue-500" />
            <span>Become a Partner</span>
          </h3>
          <p className="text-gray-300 mb-6">
            Interested in partnering with us? Contact us to explore
            collaboration opportunities.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default PartnersPage;
