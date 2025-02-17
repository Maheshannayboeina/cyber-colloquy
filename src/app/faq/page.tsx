//src/app/faq/page.tsx
"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion"; // Import motion
import { FaQuestionCircle } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

const faqdata: FaqItem[] = [
  {
    question: "What types of cyber events are listed on this website?",
    answer:
      "This website provides information about various cyber-related events, including workshops, conferences, webinars, CTF challenges, and more. We aim to be a comprehensive resource for all things cyber.",
  },
  {
    question: "How can I register for a cyber event?",
    answer:
      "Registration details are provided on each individual event page. Look for the 'Register Now' button or a direct link to the registration form. Make sure to register early, as spaces may be limited!",
  },
  {
    question: "Are there any fees for attending the cyber events?",
    answer:
      "The fees vary for each event. Some events may be free (often webinars or community events), while others may have an entry fee. The pricing will always be clearly listed on each event page.",
  },
  {
    question: "Will I receive a certificate after attending an event?",
    answer:
      "Certificates are usually provided for some workshops and training events. Check the specific event page for information about certificates.",
  },
  {
    question: "How can I contact the organizers for a specific event?",
    answer:
      "Contact information is usually listed with the details for the specific events. Otherwise, you can also use the contact us page, providing as much detail about the event in question.",
  },
  {
    question: "Where can I find information about the speakers for the events?",
    answer:
      "Speaker information can be found on the details pages for each event. This will give you details about the experts that are presenting in these events, including their bios and expertise.",
  },
  {
    question: "How often is the website updated with new events?",
    answer:
      "We strive to update the website daily with new events, projects and information. Check back regularly to discover exciting new opportunities!",
  },
  {
    question: "Can I submit my event to be listed on this website?",
    answer:
      "Yes! Please contact us through the contact page with details about your event, and we'll review it for inclusion on the platform.",
  },
  {
    question: "What kind of projects can I expect to see highlighted here?",
    answer:
      "We showcase a wide range of cyber security related projects, from cutting-edge research to innovative student projects and community initiatives. Expect to be inspired!",
  },
  {
    question: "Is there a community forum or platform for discussions?",
    answer:
      "We are currently exploring options for adding a community forum. Stay tuned for future announcements!",
  },
];

const FaqPage: React.FC = () => {
  return (
    <Container>
      <motion.div // Apply animation to the SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <SectionTitle
          preTitle="Need More Information?"
          title="Frequently Asked Questions"
          align="center"
          className="text-blue-500" // Changed color
        >
          Find answers to common queries about our platform, events, and
          community.
        </SectionTitle>
      </motion.div>

      <motion.div // Add a motion.div for container animation
        className="bg-gray-800 p-10 rounded-2xl shadow-xl max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {faqdata.map((item, index) => (
          <Disclosure key={item.question}>
            {({ open }) => (
              <motion.div // Animate each Disclosure
                className="mb-6"
                initial={{ opacity: 0, y: 10 }} // Individual initial state
                animate={{ opacity: 1, y: 0 }} // Animate in
                transition={{ duration: 0.3, delay: index * 0.05 }} // Staggered animation
              >
                <DisclosureButton className="flex items-center justify-between w-full px-6 py-4 text-lg text-left text-gray-200 rounded-xl bg-gray-700 hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span className="flex items-center space-x-2">
                    <FaQuestionCircle className="text-blue-500" />
                    <span>{item.question}</span>
                  </span>
                  <motion.span // Animate the Chevron icon (REMOVED ANMATION)
                    className="relative overflow-hidden h-5 w-5 text-blue-500"
                  >
                    <ChevronUpIcon className="absolute inset-0 w-5 h-5" />
                  </motion.span>
                </DisclosureButton>
                <DisclosurePanel
                  className="px-6 pt-4 pb-4 text-gray-300 leading-relaxed"
                  static={false}
                  style={{
                    overflow: "hidden",
                    transition: "height 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  {item.answer}
                </DisclosurePanel>
              </motion.div>
            )}
          </Disclosure>
        ))}
      </motion.div>
    </Container>
  );
};

export default FaqPage;
