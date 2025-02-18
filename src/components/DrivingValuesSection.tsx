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
          <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-700 flex flex-col h-full justify-between">
            {/* Responsive padding */}
            {iconSrc && (
              <div className="mb-4 sm:mb-6 flex justify-center">
                {/* Responsive margin */}
                <Image
                  src={iconSrc}
                  alt={iconAlt || title}
                  width={60}  
                  height={60} 
                  className="group-hover:scale-110 transition-transform duration-200"
                />
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-50 text-center group-hover:text-indigo-400 transition-colors duration-200">
              {/* Responsive font size */}
              {title}
            </h3>
            {description && (
              <p className="mt-2 sm:mt-3 text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base">
                {/* Responsive font size and margin */}
                {description}
              </p>
            )}
          </div>
        </div>
      ) : (
        <Link
          href={href}
          className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full"
        >
          <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-700 flex flex-col h-full justify-between">
            {/* Responsive padding */}
            {iconSrc && (
              <div className="mb-4 sm:mb-6 flex justify-center">
                {/* Responsive margin */}
                <Image
                  src={iconSrc}
                  alt={iconAlt || title}
                  width={60}
                  height={60} 
                  className="group-hover:scale-110 transition-transform duration-200"
                />
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-50 text-center group-hover:text-indigo-400 transition-colors duration-200">
              {/* Responsive font size */}
              {title}
            </h3>
            {description && (
              <p className="mt-2 sm:mt-3 text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base">
                 {/* Responsive font size and margin */}
                {description}
              </p>
            )}
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
    <div className="py-8 sm:py-12">
      {/* Responsive padding */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          {/* Responsive margin */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-50">
            {/* Responsive font size */}
            Driving Values and Impact
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
             {/* Responsive font size */}
            Making India a global hub for Cybersecurity and Privacy
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Responsive grid and gap */}
          <ValueCard
            title="Executive Team"
            href="/executive-team"
            description="Meet the leaders driving our cybersecurity initiatives. This description is intentionally a bit longer to test card height equalization."
          />
          <ValueCard
            title="Board of Studies Members"
            description="Explore our esteemed Board of Studies Members"
            href="/board-of-studies-members"
          />
          <ValueCard
            title="Centres of Excellence"
            href="/centres-of-excellence"
            description="Discover our specialized centers pushing the boundaries of cybersecurity knowledge."
          />
          <ValueCard
            title="Contributions to the community"
            href="/community-contributions"
            description="Learn about our community engagement and contributions to the cybersecurity field. This is another longer description to test height."
          />
        </div>
      </div>
    </div>
  );
};

export default DrivingValuesSection;