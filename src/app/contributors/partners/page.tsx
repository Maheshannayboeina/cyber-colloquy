"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";

interface Partner {
  name: string;
  description?: string;
  imageUrl?: string;
}

const partners: Partner[] = [
  {
    name: "CyberFrat",
    description: "A leading tech company.",
    imageUrl: "/img/cyberfrat.png",
  },
  {
    name: "V4WEB",
    description: "Specializes in network security.",
    imageUrl: "/img/v4web.png",
  },
  {
    name: "COE",
    description: "A leading tech company.",
    imageUrl: "/img/coe.png",
  },
  {
    name: "CyberBaap",
    description: "A leading tech company.",
    imageUrl: "/img/cyberbaap.png",
  },
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
        className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Partners List */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 sm:mb-6 flex items-center space-x-2">
            <FaBuilding className="text-blue-500" />
            <span>Our Partners</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {partner.imageUrl && (
                  <div className="relative w-full h-48 rounded-md overflow-hidden mb-2 sm:mb-2">
                    <Image
                      src={partner.imageUrl}
                      alt={partner.name}
                      fill
                      className="rounded-2xl object-cover"
                      priority
                    />
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-1 sm:mb-2">
                  {partner.name}
                </h3>
                {partner.description && (
                  <p className="text-gray-300 text-sm sm:text-base">
                    {partner.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default PartnersPage;
