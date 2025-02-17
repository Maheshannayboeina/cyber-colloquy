"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => ( // ADDED RENDER PROP FUNCTION HERE
                <div>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What types of cyber events are listed on this website?",
    answer:
      "This website provides information about various cyber-related events, including workshops, conferences, webinars, CTF challenges, and more.",
  },
  {
    question: "How can I register for a cyber event?",
    answer:
      "Registration details are provided on each individual event page. Look for the 'Register Now' button and follow the instructions.",
  },
  {
    question: "Are there any fees for attending the cyber events?",
    answer:
      "The fees vary for each event. Some events may be free, while others may have an entry fee, the pricing will be listed on each event.",
  },
  {
    question: "Will I receive a certificate after attending an event?",
    answer:
      "Certificates are usually provided for some workshops and training events, and you will need to check specific event pages for more information about certificates.",
  },
  {
    question: "How can I contact the organizers for a specific event?",
    answer:
      "Contact information is usually listed with the details for the specific events. Otherwise you can also use the contact us page.",
  },
  {
    question: "Where can I find information about the speakers for the events?",
    answer:
      "Speaker information can be found on the details pages for each event. This will give you details about the experts that are presenting in these events.",
  },
];