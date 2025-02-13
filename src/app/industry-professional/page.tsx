"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

const industryProfessionalForm = {
  title: "Industry Professional Registration", // Keep full title for form context
  description: "Industry professionals can register here to connect with our department.",
  link: "https://docs.google.com/forms/d/1_hIOg7-UGJT47wJ4uxl2zFF0xepSSLQyDwqxrulrPao/edit?usp=sharing_eil&ts=67aaf15e",
};

const IndustryProfessionalPage: React.FC = () => { // Component name shortened
  return (
    <Container>
      <SectionTitle
        preTitle="Connect with Us"
        title="Industry Professional Registration" // Keeping full title for clarity in heading
        align="center"
        className="text-indigo-700 dark:text-indigo-500"
      >
        Join our network of industry professionals and collaborate with our Cyber Security Department.
      </SectionTitle>

      <motion.div
        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8 max-w-screen-md mx-auto animate-fade-in-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Introduction for Industry Professionals Section */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center animate-form-item"
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0 * 0.07,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.99 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
            Engage with Future Cyber Security Leaders
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            Our department is dedicated to fostering the next generation of cyber security experts. We invite industry professionals like you to connect with our students, faculty, and research initiatives. Your expertise and insights are invaluable to our community.
          </p>
        </motion.div>

        {/* Benefits of Registration for Industry Professionals Section */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center animate-form-item"
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1 * 0.07,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.99 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Benefits of Joining Our Industry Network
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
            <li>Access to a pool of talented and motivated cyber security students.</li>
            <li>Opportunities to participate in guest lectures, workshops, and mentorship programs.</li>
            <li>Early access to research findings and innovative projects from our department.</li>
            <li>Networking events and forums to connect with faculty and other industry professionals.</li>
            <li>Potential to shape curriculum and research directions to align with industry needs.</li>
          </ul>
        </motion.div>

        {/* Areas of Collaboration (Example Section - Adapt based on your department's focus) */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center animate-form-item"
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.2 * 0.07,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.99 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Potential Areas for Collaboration
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We are open to collaboration in various areas, including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
            <li>Project sponsorships and research partnerships.</li>
            <li>Internship and co-op opportunities for our students.</li>
            <li>Curriculum development and industry-relevant course content.</li>
            <li>Guest speaking and industry seminars.</li>
            <li>Joint workshops and training programs.</li>
          </ul>
        </motion.div>


        {/* Call to Action - Register as Industry Professional Section */}
        <motion.div
          className="mb-8 flex flex-col items-center text-center animate-form-item"
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.3 * 0.07,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.02, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.99 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            Register to Connect with Our Department
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Take the first step to partner with us!  Register as an industry professional to stay informed about our activities and explore collaboration opportunities. Click the button below to access the registration form.
          </p>
          <a
            href={industryProfessionalForm.link}
            className="inline-block bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            target="_blank" rel="noopener noreferrer"
          >
            Register as Industry Professional {/* Shortened button text */}
          </a>
        </motion.div>

      </motion.div>
    </Container>
  );
};

export default IndustryProfessionalPage; // Component name shortened