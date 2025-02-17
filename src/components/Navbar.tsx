// src/components/Navbar.tsx
// Responsive Navbar.tsx - Desktop & Mobile, Adjusted Logo Spacing & Sizing for All Devices - COMPLETE CODE

"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

const navigationData = {
  topNavigation: [
    {
      label: "About Us",
      href: "#",
      dropdown: [
        { label: "Department Info", href: "/department-info" },
        { label: "Faculty", href: "/about" },
        { label: "Values & Impact", href: "/values-impact" },
      ],
    },
    {
      label: "Our Community",
      href: "#",
      dropdown: [
        { label: "Alumni", href: "/contributors/alumni" },
        { label: "Contributors", href: "/contributors/all" },
        { label: "Organizers", href: "/contributors/organizers" },
        { label: "Partners", href: "/contributors/partners" },
      ],
    },
    { label: "Events", href: "/events" },
    {
      label: "Nomination & Registration",
      href: "#",
      dropdown: [
        { label: "Register", href: "/cyber-colloquy-4.0" },
        { label: "Industry Attendies", href: "/industry-professional" },
        { label: "Project Expo", href: "/project-expo" },
        { label: "Call for sponsors", href: "/sponsor" },
        { label: "Award Ceremony", href: "/awards" },
      ],
    },
  ],
  bottomNavigationItems: [
    {
      label: "Initiatives & Research",
      href: "#",
      dropdown: [
        { label: "Projects", href: "/projects" },
        { label: "Publications", href: "/publications" },
        { label: "Patents", href: "/patents" },
      ],
    },
    { label: "Achievements", href: "/achievements" },
    { label: "News", href: "https://www.sakec.ac.in/cyse/cyse-announcements/" },
    {
      label: "Play a game",
      href: "#",
      dropdown: [
        { label: "CTF", href: "https://www.hacktheway.com/" },
        { label: "Phishing", href: "/phishing" },
      ],
    },
    {
      label: "Knowledge Hub",
      href: "#",
      dropdown: [
        { label: "Articles", href: "/knowledge-hub/articles" },
        { label: "Cybersecurity guide", href: "/knowledge-hub/cybersecurity-guide" },
        { label: "White papers", href: "/knowledge-hub/white-papers" },
        { label: "Advisories", href: "/knowledge-hub/advisories" },
        { label: "Tools & Resources", href: "/knowledge-hub/tools-resources" },
      ],
    },
    {
      label: "Contact & FAQ",
      href: "#",
      dropdown: [
        { label: "General Inquiries", href: "/inquiries" },
        { label: "Contact", href: "#contact" },
        { label: "FAQs", href: "/faq" },
        { label: "Feedback", href: "/contact/feedback" },
      ],
    },
  ],
};

export const Navbar = ({ setGetStartedModalOpen }: { setGetStartedModalOpen: () => void }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const logoStyle = {
    maxWidth: "100%", // Let container control max width
    maxHeight: "100%", // Let container control max height
  };

  const MenuBarContent = () => {
    const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

    const handleMobileDropdownToggle = (label: string) => {
      setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
    };

    return (
      <div className="flex justify-end w-full items-center">
        <button className="text-gray-50 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.859l-4.242 4.243-1.414-1.414 4.242-4.243-4.242-4.243 1.414-1.414 4.242 4.243 4.243 4.242 1.414 1.414-4.243-4.242 4.243 4.242 1.414 1.414-4.242-4.243z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-0 right-0 h-screen bg-gray-900 z-30 overflow-y-auto w-[300px] shadow-xl">
            <div className="p-4 flex justify-end">
              <button
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.859l-4.242 4.243-1.414-1.414 4.242-4.243-4.242-4.243 1.414-1.414 4.242 4.243 4.243 4.242 1.414 1.414-4.243-4.242 4.243 4.242 1.414 1.414-4.242-4.243z"
                  />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <ul className="space-y-4">
                <li className="font-bold text-xl mb-2 text-gray-100">
                  Top Navigation
                </li>
                {navigationData.topNavigation.map((item, index) => (
                  <li key={`top-mobile-${index}`}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleMobileDropdownToggle(item.label)}
                          className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-md w-full text-left"
                        >
                          {item.label}
                        </button>
                        {mobileOpenDropdown === item.label && (
                          <ul className="ml-4 space-y-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex}>
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                                >
                                  {dropdownItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full text-left"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 h-[1px] mx-4 my-2" />
            <div className="px-6 py-4">
              <ul className="space-y-4">
                <li className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">
                  Bottom Navigation
                </li>
                {navigationData.bottomNavigationItems.map((item, index) => (
                  <li key={`bottom-mobile-${index}`}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleMobileDropdownToggle(item.label)}
                          className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full text-left"
                        >
                          {item.label}
                        </button>
                        {mobileOpenDropdown === item.label && (
                          <ul className="ml-4 space-y-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex}>
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                                >
                                  {dropdownItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full text-left"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full shadow">
      <nav
        className={`text-gray-50 relative flex flex-col lg:flex-row lg:items-center p-1 xl:px-10 w-full`}
        style={{ backgroundColor: "#111827" }}
      >
        <div className="flex flex-row items-center justify-between w-full lg:w-auto">
          {/* Logo */}
          <div className="lg:mr-2 mb-4 lg:mb-0 w-[120px] h-[36px] lg:w-[200px] lg:h-[60px] overflow-hidden">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-medium text-white"
            >
              <Image
                src="/img/favicon4.png"
                width={210}
                height={63}
                alt="Cyber Colloquy"
                className="hover:scale-105 transition-transform duration-300 ease-in-out object-contain"
                style={logoStyle}
              />
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <MenuBarContent />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-col lg:items-start lg:flex-grow">
          {/* Top Navigation */}
          <div className="text-center lg:flex lg:items-center mb-1 lg:mb-0 pb-1 ">
            <ul className="items-center justify-start flex-none pt-1 list-none lg:pt-2 lg:flex lg:items-center">
              {navigationData.topNavigation.map((item, index) => (
                <li
                  className="mr-8 nav__item relative"
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.label !== "Events" && item.dropdown ? (
                    <button className="group inline-block text-[1.7rem] font-bold text-gray-50 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-300">
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="group inline-block text-[1.7rem] font-bold text-gray-50 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-300"
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {/* Generic Dropdown Render */}
                  {item.dropdown && openDropdown === item.label && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 z-10 mt-2 min-w-[200px] transform origin-top scale-y-100 transition-transform duration-300 ease-out rounded-md shadow-lg bg-white dark:bg-gray-800 p-2"
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:outline-none transition-colors duration-300 hover:scale-105 hover:outline hover:outline-gray-700 dark:hover:outline-gray-500"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Navigation (Desktop) */}
          <div
            className="hidden text-center lg:flex lg:items-center lg:flex-grow"
            style={{ backgroundColor: "#0D5EDF" }}
          >
            <ul className="items-center justify-start flex-none pt-1 pb-0 list-none lg:pt-0 lg:flex">
              {navigationData.bottomNavigationItems.map((item, index) => (
                <li
                  className="mr-12 nav__item relative"
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.label === "Achievements" || item.label === "News" || !item.dropdown ? (
                    <Link
                      href={item.href}
                      className="group inline-block text-xl font-normal text-gray-50 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-400"
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button className="group inline-block text-xl font-normal text-gray-50 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-400">
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </button>
                  )}

                  {/* Generic Dropdown Render for Bottom Nav */}
                  {item.dropdown && openDropdown === item.label && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 z-10 mt-2 min-w-[200px] transform origin-top scale-y-100 transition-transform duration-300 ease-out rounded-md shadow-lg bg-white dark:bg-gray-800 p-2"
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:outline-none transition-colors duration-300 hover:scale-105 hover:outline hover:outline-gray-700 dark:hover:outline-gray-500"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;