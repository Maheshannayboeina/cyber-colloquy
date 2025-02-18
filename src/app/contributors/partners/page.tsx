//src/app/contributors/partners/page.tsx
"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { FaHandshake, FaBuilding, FaStar } from "react-icons/fa"; // Removed unused FaArrowRight, FaWrench
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
    imageUrl: "",
  },
  {
    name: "Partner 2",
    description: "Specializes in network security.",
    imageUrl: "",
  },
  { name: "Partner 3", imageUrl: "" },
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
        className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl mb-8 sm:mb-10 md:mb-12" // Responsive padding and margin
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Partners List */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          {/* Responsive margin */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 sm:mb-6 flex items-center space-x-2">
            {/* Responsive heading and margin */}
            <FaBuilding className="text-blue-500" />
            <span>Our Partners</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Responsive grid and gap */}
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg" // Responsive padding
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {partner.imageUrl && (
                  <div className="relative aspect-w-1 aspect-h-1 rounded-md overflow-hidden mb-2 sm:mb-4">
                    {/* Aspect ratio container for image */}
                    <Image
                      src={partner.imageUrl}
                      alt={partner.name}
                      fill
                      className="object-cover" // Use object-cover
                      style={{objectFit:"cover"}}
                    />
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-1 sm:mb-2">
                  {/* Responsive heading and margin */}
                  {partner.name}
                </h3>
                {partner.description && (
                  <p className="text-gray-300 text-sm sm:text-base">
                    {/* Responsive text */}
                    {partner.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10" // Responsive margin
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 sm:mb-4 flex items-center space-x-2">
            {/* Responsive heading and margin */}
            <FaStar className="text-blue-500" />
            <span>Partnership Benefits</span>
          </h3>
          <ul className="list-disc pl-8 text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
            {/* Responsive text and spacing */}
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
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2 sm:mb-4 flex items-center justify-center space-x-2">
            {/* Responsive heading and margin */}
            <FaHandshake className="text-blue-500" />
            <span>Become a Partner</span>
          </h3>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
            {/* Responsive text and margin */}
            Interested in partnering with us? Contact us to explore
            collaboration opportunities.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default PartnersPage;