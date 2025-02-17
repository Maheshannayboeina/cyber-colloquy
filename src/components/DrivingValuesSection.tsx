//src/components/DrivingValuesSection.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ValueCardModal from "./ValueCardModal";

interface ValueCardProps {
  title: string;
  description?: string;
  href: string;
  iconSrc?: string;
  iconAlt?: string;
  modalContent?: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  href,
  iconSrc,
  iconAlt,
  modalContent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    if (modalContent) {
      setIsModalOpen(true);
    } else {
      window.location.href = href;
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {modalContent ? (
        <div
          onClick={handleCardClick}
          className="cursor-pointer rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full"
        >
          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-700 flex flex-col h-full justify-between">
            {iconSrc && (
              <div className="mb-6 flex justify-center">
                <Image
                  src={iconSrc}
                  alt={iconAlt || title}
                  width={70}
                  height={70}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
              </div>
            )}
            <h3 className="text-2xl font-semibold text-gray-50 text-center group-hover:text-indigo-400 transition-colors duration-200">
              {title}
            </h3>
            {description && (
              <p className="mt-3 text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-200">
                {description}
              </p>
            )}
            <div className="mt-auto">
              {" "}
              {/* Optional: Push description to the bottom if needed */}{" "}
            </div>
          </div>
        </div>
      ) : (
        <Link
          href={href}
          className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full"
        >
          <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-700 flex flex-col h-full justify-between">
            {iconSrc && (
              <div className="mb-6 flex justify-center">
                <Image
                  src={iconSrc}
                  alt={iconAlt || title}
                  width={70}
                  height={70}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
              </div>
            )}
            <h3 className="text-2xl font-semibold text-gray-50 text-center group-hover:text-indigo-400 transition-colors duration-200">
              {title}
            </h3>
            {description && (
              <p className="mt-3 text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-200">
                {description}
              </p>
            )}
            <div className="mt-auto">
              {" "}
              {/* Optional: Push description to the bottom if needed */}{" "}
            </div>
          </div>
        </Link>
      )}
      <ValueCardModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        content={modalContent || <p>No content available.</p>}
      />
    </>
  );
};

const DrivingValuesSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-50">
            Driving Values and Impact
          </h2>
          <p className="mt-2 text-gray-400">
            Making India a global hub for Cybersecurity and Privacy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          <ValueCard
            title="Executive Team"
            href="/executive-team" // Update hrefs to your dedicated pages
            // iconSrc="/img/icons/executive-team.svg"
            // iconAlt="Executive Team Icon"
            // modalContent={<p>Detailed information about the Executive Team will be displayed here. This is just example modal content.</p>}
            description="Meet the leaders driving our cybersecurity initiatives. This description is intentionally a bit longer to test card height equalization."
          />
          <ValueCard
            title="Board of Studies Members"
            description="Explore our esteemed Board of Studies Members"
            href="/board-of-studies-members" // Updated href to the new page URL
            // iconSrc="/img/icons/board-of-directors.svg"  // Keep or remove icon related props as you wish
            // iconAlt="Board of Directors Icon"
            // modalContent={<p>Detailed information about the Board of Directors will be displayed here.</p>} // REMOVE or COMMENT OUT modalContent prop
          />
          <ValueCard
            title="Centres of Excellence"
            href="/centres-of-excellence" // Update hrefs to your dedicated pages
            // iconSrc="/img/icons/centres-of-excellence.svg"
            // iconAlt="Centres of Excellence Icon"
            // modalContent={<p>Explore our Centres of Excellence and their contributions to cybersecurity innovation.</p>}
            description="Discover our specialized centers pushing the boundaries of cybersecurity knowledge."
          />
          <ValueCard
            title="Contributions to the community"
            href="/community-contributions" // Update hrefs to your dedicated pages
            // iconSrc="/img/icons/community-contributions.svg"
            // iconAlt="Community and Contributions Icon"
            description="Learn about our community engagement and contributions to the cybersecurity field. This is another longer description to test height."
          />
        </div>
      </div>
    </div>
  );
};

export default DrivingValuesSection;
