// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
  target?: string;
}

interface NavigationData {
  topNavigation: NavItem[];
  bottomNavigationItems: NavItem[];
}

const navigationData: NavigationData = {
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
        { label: "Executive Team", href: "/executive-team" },
        { label: "Partners", href: "/contributors/partners" },
        { label: "Developers", href: "/contributors/developers" },
        { label: "Centres of Excellence", href: "/centres-of-excellence" }, // new page
      ],
    },
    { label: "Events", href: "/events" },
    {
      label: "Nomination & Registration",
      href: "#",
      dropdown: [
        { label: "Register", href: "/cyber-colloquy-4.0" },
        { label: "Industry Attendees", href: "/industry-professional" },
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
        {
          label: "Publications",
          href: "https://www.sakec.ac.in/cyse/cyse-faculty-publications/",
          target: "_blank",
        },
        { label: "Patents", href: "/patents" },
        { label: "Copyrights", href: "/copyrights" },
      ],
    },
    { label: "Achievements", href: "/achievements" },
    {
      label: "Announcements",
      href: "https://www.sakec.ac.in/cyse/cyse-announcements/",
          target: "_blank",
    },
    {
      label: "Play a game",
      href: "#",
      dropdown: [
        {
          label: "CTF",
          href: "https://www.hacktheway.com/",
          target: "_blank",
        },
        { label: "Phishing", href: "/phishing" },
      ],
    },
    {
      label: "Knowledge Hub",
      href: "#",
      dropdown: [
        { label: "Articles", href: "https://www.cyberbaap.org/blog/" , target: "_blank" },
        { label: "Cybersecurity guide", href: "/cybersecurity-guide",target: "_blank" },
        {
          label: "Research papers",
          href: "https://www.sakec.ac.in/research/research-publications/",
          target: "_blank",
        },
      ],
    },
    {
      label: "Contact & FAQ",
      href: "#",
      dropdown: [
        { label: "General Inquiries", href: "/inquiries" },
        { label: "Contact", href: "#footer" },
        { label: "FAQs", href: "/faq" },
        { label: "Feedback", href: "/feedback" },
      ],
    },
  ],
};

export const Navbar = ({
  setGetStartedModalOpen,
}: {
  setGetStartedModalOpen: () => void;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  }, [pathname]);

  // --- Dropdown Hover Logic ---
  const handleMouseEnter = (label: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenDropdown(label);
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setHoveredItem(null);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handleDropdownMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setHoveredItem(null);
    }, 300);
  };
  // --- End Dropdown Hover Logic ---

  const handleMobileDropdownToggle = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  // --- Click Outside Logic ---
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setHoveredItem(null);
      }
      if (
        mobileMenuOpen &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown, mobileMenuOpen]);
  // --- End Click Outside Logic ---

  // --- Utility function for menu content ---
  const MenuBarContent = () => (
    <div className="flex justify-end w-full items-center">
      <button
        ref={menuButtonRef}
        className="text-blue-100 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
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
    </div>
  );
  // --- End utility function ---

  return (
    <div className="w-full shadow-md">
      <nav className="bg-black text-white relative flex flex-col xl:flex-row xl:items-center w-full">
        {/* Top Bar */}
        <div className="flex flex-row items-center justify-between w-full xl:w-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between w-full xl:w-auto xl:mr-2 xl:mb-0">
            <Link
              href="/"
              className="flex items-center justify-center w-full xl:w-auto xl:justify-start"
            >
              <Image
                src="/img/favicon_r.png"
                width={160}
                height={50}
                alt="Cyber Colloquy"
                className="hover:scale-105 transition-transform duration-300 ease-in-out object-contain max-h-[40px] sm:max-h-[60px]"
              />
            </Link>
          </div>
          <div className="xl:hidden">
            <MenuBarContent />
          </div>
        </div>

        {/* --- Desktop Navigation --- */}
        <div className="hidden xl:flex xl:flex-col xl:items-start xl:flex-grow">
          {/* Top Navigation */}
          <div className="text-center xl:flex xl:items-center mb-0 px-4 sm:px-6">
            <ul className="flex flex-col pt-2 xl:flex-row xl:items-center list-none">
              {navigationData.topNavigation.map((item, index) => (
                <li
                  key={index}
                  className={`mr-4 xl:mr-6 relative ${
                    hoveredItem === item.label ? "z-20" : "z-10"
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (openDropdown !== item.label) {
                          setOpenDropdown(item.label);
                        }
                      }}
                      className={`group inline-block text-base md:text-lg font-semibold text-blue-100 no-underline rounded-md transition-colors duration-300 hover:text-blue-200 ${
                        openDropdown === item.label ? "text-blue-200" : ""
                      }`}
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-blue-600 group-focus:bg-blue-600">
                        {item.label}
                        <svg
                          className="inline-block h-4 w-4 ml-1 transition-transform duration-200 transform group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.target}
                      className="group inline-block text-base md:text-lg font-semibold text-blue-100 no-underline rounded-md transition-colors duration-300 hover:text-blue-200"
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-blue-600 group-focus:bg-blue-600">
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && openDropdown === item.label && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-0 mt-0 min-w-[200px] origin-top transition-transform duration-300 ease-out rounded-md shadow-lg bg-blue-500"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          target={dropdownItem.target}
                          className="block px-4 py-2 text-sm font-medium text-blue-50 hover:bg-blue-600 rounded-md transition-colors duration-200"
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
          <div className="hidden text-center xl:flex xl:items-center xl:flex-grow px-4 sm:px-6 bg-blue-600 py-1 sm:py-2 rounded-md">
            <ul className="flex list-none">
              {navigationData.bottomNavigationItems.map((item, index) => (
                <li
                  key={index}
                  className={`mr-4 xl:mr-6 relative ${
                    hoveredItem === item.label ? "z-20" : "z-10"
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (openDropdown !== item.label) {
                          setOpenDropdown(item.label);
                        }
                      }}
                      className={`group inline-block text-base md:text-lg font-medium text-blue-100 no-underline rounded-md transition-colors duration-300 hover:text-blue-200 ${
                        openDropdown === item.label ? "text-blue-200" : ""
                      }`}
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-blue-700 group-focus:bg-blue-700">
                        {item.label}
                        <svg
                          className="inline-block h-4 w-4 ml-1 transition-transform duration-200 transform group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.target}
                      className="group inline-block text-base md:text-lg font-medium text-blue-100 no-underline rounded-md transition-colors duration-300 hover:text-blue-200"
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-blue-700 group-focus:bg-blue-700">
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && openDropdown === item.label && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-0 mt-0 min-w-[200px] origin-top transition-transform duration-300 ease-out rounded-md shadow-lg bg-blue-500"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          target={dropdownItem.target}
                          className="block px-4 py-2 text-sm font-medium text-blue-50 hover:bg-blue-600 rounded-md transition-colors duration-200"
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
        {/* --- End Desktop Navigation --- */}

        {/* --- Mobile Menu --- */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-0 right-0 h-screen bg-blue-900 z-30 overflow-y-auto w-full max-w-[300px] shadow-xl"
          >
            <div className="p-4 flex justify-end">
              <button
                className="text-blue-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.859l-4.242 4.243-1.414-1.414 4.242-4.243-4.242-4.243 1.414-1.414 4.242 4.243 4.243 4.242 1.414 1.414-4.243-4.242 4.243 4.242 1.414 1.414-4.242-4.243z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-4 sm:px-6 py-4">
              <ul className="space-y-4">
                <li className="font-bold text-xl mb-2 text-blue-100">
                  Top Navigation
                </li>
                {navigationData.topNavigation.map((item, index) => (
                  <li key={`top-mobile-${index}`}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleMobileDropdownToggle(item.label)}
                          className="block px-4 py-2 text-blue-200 hover:bg-blue-700 rounded-md w-full text-left"
                        >
                          {item.label}
                          <svg
                            className="inline-block h-4 w-4 ml-1 transition-transform duration-200 transform group-hover:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {mobileOpenDropdown === item.label && (
                          <ul className="ml-4 space-y-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex}>
                                <Link
                                  href={dropdownItem.href}
                                  target={dropdownItem.target}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileOpenDropdown(null);
                                  }}
                                  className="block px-4 py-2 text-blue-300 hover:bg-blue-600 rounded-md"
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
                        target={item.target}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileOpenDropdown(null);
                        }}
                        className="block px-4 py-2 text-blue-200 hover:bg-blue-700 rounded-md w-full text-left"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-700 h-[1px] mx-4 my-2" />
            <div className="px-4 sm:px-6 py-4">
              <ul className="space-y-4">
                <li className="font-bold text-xl mb-2 text-blue-100">
                  Bottom Navigation
                </li>
                {navigationData.bottomNavigationItems.map((item, index) => (
                  <li key={`bottom-mobile-${index}`}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleMobileDropdownToggle(item.label)}
                          className="block px-4 py-2 text-blue-200 hover:bg-blue-700 rounded-md w-full text-left"
                        >
                          {item.label}
                          <svg
                            className="inline-block h-4 w-4 ml-1 transition-transform duration-200 transform group-hover:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {mobileOpenDropdown === item.label && (
                          <ul className="ml-4 space-y-2">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex}>
                                <Link
                                  href={dropdownItem.href}
                                  target={dropdownItem.target}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileOpenDropdown(null);
                                  }}
                                  className="block px-4 py-2 text-blue-300 hover:bg-blue-600 rounded-md"
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
                        target={item.target}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileOpenDropdown(null);
                        }}
                        className="block px-4 py-2 text-blue-200 hover:bg-blue-700 rounded-md w-full text-left"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* End Mobile Menu Content */}
          </div>
        )}
        {/* --- End Mobile Menu --- */}
      </nav>
    </div>
  );
};

export default Navbar;