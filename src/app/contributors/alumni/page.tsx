"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
} from "react-icons/fa";
import Image from "next/image";
import { alumniData } from "@/components/AluminiData"; // Import alumniData

// Interface for Alumni (no change needed if you already have this)
interface Alumni {
  name: string;
  title: string;
  description?: string;
  imageUrl?: string;
  year: string; // Add year to the interface
}

const AlumniPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Alumni Network"
        title="Stay Connected"
        align="center"
        className="text-blue-500"
      >
        Connect with fellow alumni and stay updated on department news and
        events.
      </SectionTitle>

      <motion.div
        className="bg-gray-1000 p-10 rounded-2xl shadow-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Alumni Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center space-x-2">
            <FaGraduationCap className="text-blue-500" />
            <span>Alumni</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {alumniData.map((alumnus, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {alumnus.imageUrl && (
                  <div className="relative h-48 mb-4 rounded-md overflow-hidden"> {/* Container for Image to manage aspect ratio */}
                    <Image
                      src={alumnus.imageUrl}
                      alt={alumnus.name}
                      fill={true} // Use fill and object-cover for responsive images
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {alumnus.name}
                </h3>
                <p className="text-gray-400 mb-2">{alumnus.title} ({alumnus.year})</p> {/* Display year here */}
                {alumnus.description && (
                  <p className="text-gray-300">{alumnus.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default AlumniPage;