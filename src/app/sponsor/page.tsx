"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

const sponsorForm = {
  title: "Sponsor Form",
  description: "Become a sponsor and support our events.",
  link: "https://docs.google.com/forms/d/1eI9PeUE_Ig2i4Du9p7anCp-Hu5kD8X0ffFjDbbw4ltY/edit?usp=sharing_eil&ts=67aaf1b0",
};

const SponsorPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Support Our Initiatives"
        title="Become a Sponsor"
        align="center"
        className="text-indigo-700 dark:text-indigo-500"
      >
        Partner with us to empower cyber security innovation and education.
      </SectionTitle>

      <motion.div
        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8 max-w-screen-md mx-auto animate-fade-in-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Introduction to Sponsorship Section */}
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
            Why Sponsor Our Events?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            Sponsoring our events and initiatives is a powerful way to demonstrate your organization's commitment to cyber security, innovation, and talent development. By partnering with us, you directly contribute to fostering the next generation of cyber security professionals and advancing the field.
            {/* Add more details about the benefits of sponsoring - impact, reach, alignment with values etc. */}
          </p>
          {/* You could add statistics about event reach, audience demographics, etc. to highlight value to sponsors */}
        </motion.div>

        {/* Sponsorship Packages Section (Example - Customize based on your packages) */}
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
            Explore Sponsorship Levels
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We offer various sponsorship levels to suit different budgets and objectives. Each level provides unique benefits and recognition opportunities.
            {/* Describe your sponsorship packages here. You can use a list or a more structured table. */}
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
            <li><strong>Gold Sponsor:</strong> [Benefits of Gold Sponsorship - e.g., prominent logo placement, speaking opportunity, etc.]</li>
            <li><strong>Silver Sponsor:</strong> [Benefits of Silver Sponsorship - e.g., logo placement, booth at event, etc.]</li>
            <li><strong>Bronze Sponsor:</strong> [Benefits of Bronze Sponsorship - e.g., logo listing, mention in materials, etc.]</li>
            {/* Add more sponsorship levels as needed and detail the benefits for each */}
            <li><strong>Custom Sponsorship Packages:</strong> We are also happy to discuss custom sponsorship packages to meet your specific marketing and engagement goals.</li>
          </ul>
        </motion.div>

        {/* Benefits of Sponsorship Section */}
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
            Key Benefits for Sponsors
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
            <li>Enhance your brand visibility and reach within the cyber security community.</li>
            <li>Demonstrate corporate social responsibility and support for education.</li>
            <li>Network with potential future employees and industry leaders.</li>
            <li>Showcase your products or services to a targeted audience.</li>
            <li>Gain positive public relations and media coverage.</li>
            {/* Add more benefits relevant to sponsors */}
          </ul>
        </motion.div>


        {/* Call to Action - Become a Sponsor Section */}
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
            Ready to Become a Sponsor?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Join us in supporting cyber security excellence!  Click the button below to access the sponsor registration form and indicate your interest. We will get in touch with you to discuss sponsorship details and tailor a package that meets your needs.
            {/* Add a contact email or link to more sponsorship information if available */}
          </p>
          <a
            href={sponsorForm.link}
            className="inline-block bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            target="_blank" rel="noopener noreferrer"
          >
            Become a Sponsor - Register Here
          </a>
        </motion.div>

      </motion.div>
    </Container>
  );
};

export default SponsorPage;