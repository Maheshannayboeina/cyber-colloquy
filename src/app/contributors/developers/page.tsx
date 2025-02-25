//src/app/contributors/developers/page.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

interface Developer {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
}

const developers: Developer[] = [
  {
    name: "Mahesh Annayboeina",
    role: "Frontend and Backend Developer", // More standard role
    imageUrl: "/img/executive-team/mahesh-annayboeina.png",
    linkedinUrl: "https://www.linkedin.com/in/mahesh-annayboeina-06536428b/",
    githubUrl: "https://github.com/Maheshannayboeina",
  },
  {
    name: "Saahil Sawant",
    role: "Frontend and Backend Developer", // More standard role
    imageUrl: "/img/executive-team/saahil-sawant.png",
    linkedinUrl: "https://www.linkedin.com/in/saahil-sawant-9b88b6302/",
    githubUrl: "https://github.com/Saahil-23",
  },
  {
    name: "Sayee Patil",
    role: "Frontend Developer", // More standard role
    imageUrl: "/img/executive-team/sayee-patil.png",
    linkedinUrl: "https://www.linkedin.com/in/sayee-p-79b0b828b/",
    githubUrl: "https://github.com/Say-Ee",
  },
  {
    name: "Kashyap Gohil",
    role: "Graphic Designer", // More standard role
    imageUrl: "/img/executive-team/kashyap-gohil.png",
    linkedinUrl: "https://www.linkedin.com/in/kashyap-gohil-750153323/",
    githubUrl: "https://github.com/Kashyap290",
  },
];

const DevelopersPage: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <SectionTitle
        preTitle="Our Team" // More standard pre-title
        title="Meet the Developers" // More standard title
        align="center"
        className="text-blue-500"
      >
        These are the developers who built this website.
      </SectionTitle>

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
      >
        {developers.map((developer, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full pb-[133%]">
              <Image
                src={developer.imageUrl}
                alt={developer.name}
                fill
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="p-4 bg-black/70 text-white">
              <h3 className="text-xl font-semibold mb-1 text-blue-400">
                {developer.name}
              </h3>
              <p className="text-gray-300 mb-4">{developer.role}</p>
              <div className="flex items-center space-x-4">
                <Link
                  href={developer.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${developer.name}'s LinkedIn`}
                >
                  <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-400 transition-colors" />
                </Link>
                {developer.githubUrl && (
                  <Link
                    href={developer.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${developer.name}'s GitHub`}
                  >
                    <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
                  </Link>
                )}
                {developer.twitterUrl && (
                  <Link
                    href={developer.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${developer.name}'s Twitter`}
                  >
                    <FaTwitter className="text-2xl text-blue-400 hover:text-blue-300 transition-colors" />
                  </Link>
                )}
                {developer.websiteUrl && (
                  <Link
                    href={developer.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${developer.name}'s Website`}
                  >
                    <FaGlobe className="text-2xl text-green-500 hover:text-green-400 transition-colors" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default DevelopersPage;
