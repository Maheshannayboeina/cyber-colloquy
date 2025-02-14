"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion"; // Import
import { FaUserTie, FaUsers, FaCode, FaPencilAlt, FaArrowRight, FaWrench, FaUserGraduate } from 'react-icons/fa'; // Import icons

interface Organizer {
  name: string;
  role: string;
  description?: string;
  imageUrl?: string;  // Optional image
  socialLinks?: {  // Optional social links
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?:string;
  };
}

// Sample organizer data - Replace with your actual team data
const organizersData: Organizer[] = [
  {
    name: "Organizer 1",
    role: "Lead Organizer",
    description: "Experienced in event management and coordination.",
    imageUrl: "/img/organizers/organizer1.jpg",  // Replace with actual image path
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/organizer1/",
    }
  },
  {
    name: "Organizer 2",
    role: "Technical Lead",
    description: "Manages the technical aspects of the events.",
    imageUrl: "/img/organizers/organizer2.jpg",
  },
    {
    name: "Organizer 3",
    role: "Marketing Lead",
    imageUrl: "/img/organizers/organizer2.jpg",
  },
    {
    name: "Organizer 4",
    role: "Logistics Lead",
    imageUrl: "/img/organizers/organizer2.jpg",
  },
  // Add more organizers
];


const OrganizersPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Meet the Team"
        title="Our Organizers"
        align="center"
        className="text-blue-700 dark:text-blue-500"
      >
        The dedicated individuals behind our successful events and initiatives.
      </SectionTitle>

      <motion.div
        className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {organizersData.map((organizer, index) => (
          <motion.div
           key={index}
           className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
            >
             {organizer.imageUrl && (
              <img
                 src={organizer.imageUrl}
                 alt={organizer.name}
                 className="w-full h-48 object-cover rounded-md mb-4"
              />
             )}
           <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{organizer.name}</h3>
           <p className="text-gray-600 dark:text-gray-400 mb-2">{organizer.role}</p>
             {organizer.description && (
              <p className="text-gray-700 dark:text-gray-300 mb-4">{organizer.description}</p>
           )}

             {/* Social Links (Optional) */}
             {organizer.socialLinks && (
                <div className="flex space-x-4">
                {organizer.socialLinks.linkedin && (
                 <a href={organizer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                     <FaUserGraduate className="text-xl" /> {/* LinkedIn Icon */}
                 </a>
                 )}
                 {organizer.socialLinks.twitter && (
                   <a href={organizer.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      <FaUsers className="text-xl" /> {/* Twitter Icon */}
                   </a>
                 )}
                   {organizer.socialLinks.github && (
                    <a href={organizer.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
                    <FaCode className="text-xl" /> {/* GitHub Icon */}
                     </a>
                )}
                {organizer.socialLinks.website && (
                <a href={organizer.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                       <FaWrench className="text-xl" /> {/* Website Icon */}
                   </a>
              )}
            </div>
          )}
        </motion.div>
      ))}
      </div>

          {/* Call to Action (Optional) */}
           <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }} // Delay after cards
           >
             <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Interested in Joining the Team?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                 Contact us to learn about volunteer opportunities.
             </p>
               {/* Add link/email */}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default OrganizersPage;