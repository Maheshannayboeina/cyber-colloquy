"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { FaUserCog, FaCode, FaPencilAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

interface Contributor {
  name: string;
  role: string;
  description?: string;
  imageUrl?: string;
  linkedinUrl: string;
}

const contributors: Contributor[] = [
  {
    name: "Dr. Bhavesh Patel",
    role: "Principal, Shah and Anchor Kutchhi Engg College, Mumbai",
    imageUrl: "/img/bhavesh-patel.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/profbhaveshpatel/",
  },
  {
    name: "Dr. Nilakshi Jain",
    role: "Professor & Head of Cyber Security Department, SAKEC",
    imageUrl: "/img/faculty/Nilakshi-jain.jpg",
    linkedinUrl: "https://www.linkedin.com/in/dr-nilakshi-jain-7593a264/",
  },
  {
    name: "Major Vineet Kumar",
    role: "Founder & Global President CyberPeace",
    imageUrl: "/img/board-members/vineet-kumar.png",
    linkedinUrl: "https://www.linkedin.com/in/major-vineet-kumar-0b1b1b1b/",
  },
  {
    name: "Mr. Ritesh Bhatia",
    role: "Founding Director, V4Web",
    imageUrl: "/img/board-members/ritesh-bhatia.png",
    linkedinUrl: "https://www.linkedin.com/in/v4web/",
  },
  {
    name: "Gaurav Batra",
    role: "Founder at CyberFrat",
    imageUrl: "/img/gaurav-batra.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/gauvbatra/",
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
        className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Contributors List */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 sm:mb-6 flex items-center space-x-2">
            <FaUserCog className="text-blue-500" />
            <span>Our Contributors</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-700 rounded-lg shadow-md transition duration-300 hover:shadow-lg overflow-hidden h-96"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {contributor.imageUrl && (
                  <Link // Added Link component here
                    href={contributor.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-0" // Make Link cover the entire image area
                  >
                    <Image
                      src={contributor.imageUrl}
                      alt={contributor.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-white bg-opacity-25"> {/* Text at bottom, white bg overlay */}
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2"> {/* Text color black */}
                    {contributor.name}
                  </h3>
                  <p className="text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base text-black"> {/* Role text color black */}
                    {contributor.role}
                  </p>
                  {contributor.description && (
                    <p className="text-gray-600 text-sm sm:text-base text-black"> {/* Description text color black */}
                      {contributor.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default ContributorsPage;