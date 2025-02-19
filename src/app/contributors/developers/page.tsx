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
  role: string; // Now consistently "Full Stack Alchemist"
  imageUrl: string;
  linkedinUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  websiteUrl?: string;
  description: string;
  skills?: string[];
}

const developers: Developer[] = [
  {
    name: "Mahesh Annayboeina",
    role: "Full Stack Alchemist", // Consistent role
    imageUrl: "/img/executive-team/mahesh-annayboeina.png",
    linkedinUrl: "https://www.linkedin.com/in/mahesh-annayboeina-06536428b/",
    githubUrl: "https://github.com/Maheshannayboeina",  // Replace
    description: "In realms of code, where logic takes flight,<br>Mahesh weaves wonders, both day and night.<br>From frontend's grace to backend's might,<br>A full-stack alchemist, shining bright.<br>With React's dance and Node's command,<br>He crafts digital landscapes, close at hand.", // Poetic, project links
    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS","Flask","SQL"], // Expanded skills
  },
  {
    name: "Saahil Sawant",
    role: "Full Stack Alchemist", // Consistent role
    imageUrl: "/img/executive-team/saahil-sawant.png",
    linkedinUrl: "https://www.linkedin.com/in/saahil-sawant-9b88b6302/",
    githubUrl: "https://github.com/Saahil-23",  // Replace
    description: "A coder of visions, Saahil by name,<br>Transforms the mundane, ignites the flame.<br>Full-stack mastery, his artful claim,<br>From server's whisper to user's acclaim.<br>He conjures databases, APIs strong,<br>Ensuring the digital heartbeat plays along.", // Poetic, project links
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JavaScript", "TypeScript", "React"], // Expanded skills
  },
  {
    name: "Sayee Patil",
    role: "Full Stack Alchemist", // Consistent role
    imageUrl: "/img/executive-team/sayee-patil.png",
    linkedinUrl: "https://www.linkedin.com/in/sayee-p-79b0b828b/",
    githubUrl: "https://github.com/Say-Ee", // Replace
    description: "With keyboard as brush and screen as the stage,<br>Sayee paints solutions, turning every page.<br>A full-stack artist, wise and sage,<br>Bridging the digital divide, in every age.<br>From user interface, sleek and refined,<br>To backend structures, elegantly designed.", // Poetic, project links
    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Python", "Django", "JavaScript",], // Expanded Skills
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
        preTitle="The Code Alchemists" // More poetic pre-title
        title="Meet the Digital Bards"  // More poetic title
        align="center"
        className="text-blue-500"
      >
        Behold the architects of this digital realm.
      </SectionTitle>

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {developers.map((developer, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full">
              <Image
                src={developer.imageUrl}
                alt={developer.name}
                width={300}
                height={400}
                style={{ objectFit: "cover", width: '100%', height: 'auto' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="p-4 bg-black/70 text-white">
              <h3 className="text-xl font-semibold mb-1 text-blue-400">{developer.name}</h3>
              <p className="text-gray-300 mb-2">{developer.role}</p> {/* Consistent role display */}

              {developer.skills && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {developer.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-sm text-gray-400 mb-4" dangerouslySetInnerHTML={{ __html: developer.description }} />

              <div className="flex items-center space-x-4">
                <Link href={developer.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${developer.name}'s LinkedIn`}>
                  <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-400 transition-colors" />
                </Link>
                {developer.githubUrl && (
                  <Link href={developer.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${developer.name}'s GitHub`}>
                    <FaGithub className="text-2xl hover:text-gray-400 transition-colors" />
                  </Link>
                )}
                {developer.twitterUrl && (
                  <Link href={developer.twitterUrl} target="_blank" rel="noopener noreferrer" aria-label={`${developer.name}'s Twitter`}>
                    <FaTwitter className="text-2xl text-blue-400 hover:text-blue-300 transition-colors" />
                  </Link>
                )}
                {developer.websiteUrl && (
                  <Link href={developer.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${developer.name}'s Website`}>
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