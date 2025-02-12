"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

interface FormItem {
  title: string;
  description: string;
  link: string;
}

const formItems: FormItem[] = [
  {
    title: "Project Expo Registration",
    description: "Register your project for the upcoming Project Expo.",
    link: "https://docs.google.com/forms/d/1UvQmlhxpkJmMn2L0PZ0c8SdATgTg1wLljtbF0MQeKVY/edit?usp=sharing_eil&ts=67aaf27f",
  },
  {
    title: "Sponsor Form",
    description: "Become a sponsor and support our events.",
    link: "https://docs.google.com/forms/d/1eI9PeUE_Ig2i4Du9p7anCp-Hu5kD8X0ffFjDbbw4ltY/edit?usp=sharing_eil&ts=67aaf1b0",
  },
  {
    title: "Industry Professional Registration",
    description: "Industry professionals can register here to connect with our department.",
    link: "https://docs.google.com/forms/d/1_hIOg7-UGJT47wJ4uxl2zFF0xepSSLQyDwqxrulrPao/edit?usp=sharing_eil&ts=67aaf15e",
  },
  {
    title: "Cyber Colloquy 4.0 Registration",
    description: "Register for Cyber Colloquy 4.0 event.",
    link: "https://docs.google.com/forms/d/1vnzfI_CtaqPpMxWMifcgMYV99nZMCfjeMoMuFP7dzMY/edit?usp=sharing_eil&ts=67aaf11f",
  },
  // ... more form items ...
];

const NominationsPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Register Here"
        title="Nominations and Registrations"
        align="center"
        className="text-indigo-700 dark:text-indigo-500"
      >
        Please find the registration forms below for various events and opportunities.
      </SectionTitle>

      {/* Centered container for all form sections - Mimicking the Section style from about/page.tsx */}
      {/* Added max-w-screen-md, mx-auto for centering, and animation classes */}
      <motion.div
        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8 max-w-screen-md mx-auto animate-fade-in-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >

        {/* Form Sections - Using motion.div for animations and centering content */}
        {formItems.map((form, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-col items-center text-center animate-form-item"
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.07,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.99 }}
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              {form.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {form.description}
            </p>
            <a
              href={form.link}
              className="inline-block bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              target="_blank" rel="noopener noreferrer"
            >
              Register Here
            </a>
          </motion.div>
        ))}

      </motion.div> {/* End of form sections container - motion.div */}

    </Container>
  );
};

export default NominationsPage;