//src/components/Navbar.tsx
"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

export const Navbar = ({
  setGetStartedModalOpen,
}: {
  setGetStartedModalOpen: () => void;
}) => {
  const infoLinks: NavItem[] = [
    { label: "Department Info", href: "/department-info" },
    { label: "Faculty", href: "/faculty" }, // corrected href to faculty
    { label: "Values & Impact", href: "/values-impact" },
  ];

  const communityLinks: NavItem[] = [
    { label: "Announcements", href: "/news/announcements" },
    { label: "Press Coverage", href: "/news/press-coverage" },
  ];

  const playAGameLinks: NavItem[] = [
    { label: "CTF", href: "/ctf" },
    { label: "Phishing", href: "/phishing" },
  ];

  const initiativesResearchLinks: NavItem[] = [
    { label: "Projects", href: "/research/projects" },
    { label: "Patents", href: "/research/patents" },
    { label: "Publications", href: "/research/publications" },
    { label: "Grants", href: "/research/grants" },
  ];

  const knowledgeHubLinks: NavItem[] = [
    { label: "Articles", href: "/knowledge-hub/articles" },
    { label: "Cybersecurity guide", href: "/knowledge-hub/cybersecurity-guide" },
    { label: "White papers", href: "/knowledge-hub/white-papers" },
    { label: "Advisories", href: "/knowledge-hub/advisories" },
    { label: "Tools & Resources", href: "/knowledge-hub/tools-resources" },
  ];

  const contactFaqLinks: NavItem[] = [
    { label: "General Inquiries", href: "/contact/inquiries" },
    { label: "Support", href: "/contact/support" },
    { label: "FAQs", href: "/contact/faqs" },
    { label: "Feedback", href: "/contact/feedback" },
  ];

  const nominationRegistrationLinks: NavItem[] = [
    { label: "Register", href: "/register" },
    { label: "Award ceremony", href: "/award-ceremony" },
    { label: "Project expo", href: "#" }, // You might want to replace '#' with a valid path if available
    { label: "Call for sponsors", href: "#" }, // You might want to replace '#' with a valid path if available
  ];

  const topNavigation: NavItem[] = [
    { label: "About Us", href: "#" },
    { label: "Our Community", href: "#" },
    { label: "Events", href: "/events" },
    { label: "Nomination & Registration", href: "#" },
  ];

  const bottomNavigation: NavItem[] = [
    { label: "Initiatives & Research", href: "#" },
    { label: "Achievements", href: "/achievements" },
    { label: "News", href: "#" },
    { label: "Play a game", href: "#" },
    { label: "Knowledge Hub", href: "#" },
    { label: "Contact & FAQ", href: "#" },
  ];

  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [initiativesResearchDropdownOpen, setInitiativesResearchDropdownOpen] = useState(false);
  const [playAGameDropdownOpen, setPlayAGameDropdownOpen] = useState(false);
  const [knowledgeHubDropdownOpen, setKnowledgeHubDropdownOpen] = useState(false);
  const [contactFaqDropdownOpen, setContactFaqDropdownOpen] = useState(false);
  const [nominationRegistrationDropdownOpen, setNominationRegistrationDropdownOpen] = useState(false);
  const [bottomNewsDropdownOpen, setBottomNewsDropdownOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const infoDropdownRef = useRef<HTMLDivElement>(null);
  const communityDropdownRef = useRef<HTMLDivElement>(null);
  const newsDropdownRef = useRef<HTMLDivElement>(null);
  const initiativesResearchDropdownRef = useRef<HTMLDivElement>(null);
  const playAGameDropdownRef = useRef<HTMLDivElement>(null);
  const knowledgeHubDropdownRef = useRef<HTMLDivElement>(null);
  const contactFaqDropdownRef = useRef<HTMLDivElement>(null);
  const nominationRegistrationDropdownRef = useRef<HTMLDivElement>(null);
  const bottomNewsDropdownRef = useRef<HTMLDivElement>(null);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
    setBottomNewsDropdownOpen(false);
  }, [pathname]);

  const handleInfoMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setInfoDropdownOpen(true);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
    setBottomNewsDropdownOpen(false);
  };

  const handleInfoMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setInfoDropdownOpen(false);
    }, 500);
  };

  const handleCommunityMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setCommunityDropdownOpen(true);
    setInfoDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
    setBottomNewsDropdownOpen(false);
  };

  const handleCommunityMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setCommunityDropdownOpen(false);
    }, 500);
  };

  const handleNewsMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setNewsDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
    setBottomNewsDropdownOpen(false);
  };

  const handleNewsMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setNewsDropdownOpen(false);
    }, 500);
  };

  const handleInitiativesResearchMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setInitiativesResearchDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
    setBottomNewsDropdownOpen(false);
  };

  const handleInitiativesResearchMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setInitiativesResearchDropdownOpen(false);
    }, 500);
  };

  const handlePlayAGameMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setPlayAGameDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
    setBottomNewsDropdownOpen(false);
  };

  const handlePlayAGameMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setPlayAGameDropdownOpen(false);
    }, 500);
  };

  const handleKnowledgeHubMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setKnowledgeHubDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
  };

  const handleKnowledgeHubMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setKnowledgeHubDropdownOpen(false);
    }, 500);
  };

  const handleContactFaqMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setContactFaqDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
    setBottomNewsDropdownOpen(false);
  };

  const handleContactFaqMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setContactFaqDropdownOpen(false);
    }, 500);
  };

  const handleNominationRegistrationMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setNominationRegistrationDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setBottomNewsDropdownOpen(false);
  };

  const handleNominationRegistrationMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setNominationRegistrationDropdownOpen(false);
    }, 500);
  };

  const handleBottomNewsMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setBottomNewsDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
  };

  const handleBottomNewsMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setBottomNewsDropdownOpen(false);
    }, 500);
  };

  return (
    <div className="w-full shadow">
      <nav
        className={`text-white relative flex flex-col lg:flex-row lg:items-center justify-between p-1 xl:px-10 w-full`}
        style={{
          backgroundColor: "#111827",
        }}
      >
        {/* Logo */}
        <div className="lg:mr-12 mb-4 lg:mb-0">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100"
          >
            <Image
              src="/img/favicon4.png"
              width={300}
              height={90}
              alt="Cyber Colloquy"
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>

        <div className="lg:flex lg:flex-col lg:items-start">
          {/* Top Navigation */}
          <div className="hidden text-center lg:flex lg:items-center mb-1 lg:mb-0 pb-1 ">
            <ul className="items-center justify-start flex-none pt-1 list-none lg:pt-2 lg:flex lg:items-center">
              {topNavigation.map((item, index) => (
                <li
                  className="mr-10 nav__item relative"
                  key={index}
                  onMouseEnter={
                    item.label === "About Us"
                      ? handleInfoMouseEnter
                      : item.label === "Our Community"
                      ? handleCommunityMouseEnter
                      : item.label === "Events"
                      ? undefined
                      : item.label === "Nomination & Registration"
                      ? handleNominationRegistrationMouseEnter
                      : undefined
                  }
                  onMouseLeave={
                    item.label === "About Us"
                      ? handleInfoMouseLeave
                      : item.label === "Our Community"
                      ? handleCommunityMouseLeave
                      : item.label === "Events"
                      ? undefined
                      : item.label === "Nomination & Registration"
                      ? handleNominationRegistrationMouseLeave
                      : undefined
                  }
                >
                  {item.label !== "Events" &&
                  item.label !== "Nomination & Registration" &&
                  item.label !== "News" ? (
                    <button className="inline-block text-[1.7rem] font-bold text-white no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-300 group">
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-block text-[1.7rem] font-bold text-white no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-300 group"
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {/* Dropdown Render Condition */}
                  {item.label === "About Us" && infoDropdownOpen && (
                    <div
                      ref={infoDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleInfoMouseLeave}
                    >
                      {infoLinks.map((dropdownItem, dropdownIndex) => (
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

                  {item.label === "Our Community" && communityDropdownOpen && (
                    <div
                      ref={communityDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleCommunityMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none transition-colors duration-300 hover:scale-105 hover:outline hover:outline-gray-700 dark:hover:outline-gray-500"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.label === "Nomination & Registration" &&
                  nominationRegistrationDropdownOpen && (
                    <div
                      ref={nominationRegistrationDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleNominationRegistrationMouseLeave}
                    >
                      {nominationRegistrationLinks.map(
                        (dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none transition-colors duration-300 hover:scale-105 hover:outline hover:outline-gray-700 dark:hover:outline-gray-500"
                          >
                            {dropdownItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Navigation */}
          <div
            className="hidden text-center lg:flex lg:items-center text-center"
            style={{ backgroundColor: "#1f2937" }}
          >
            <ul className="items-center justify-start flex-none pt-1 pb-0 list-none lg:pt-0 lg:flex">
              {bottomNavigation.map((item, index) => (
                <li
                  className="mr-20 nav__item relative"
                  key={index}
                  onMouseEnter={
                    item.label === "News"
                      ? handleBottomNewsMouseEnter
                      : item.label === "Initiatives & Research"
                      ? handleInitiativesResearchMouseEnter
                      : item.label === "Play a game"
                      ? handlePlayAGameMouseEnter
                      : item.label === "Knowledge Hub"
                      ? handleKnowledgeHubMouseEnter
                      : item.label === "Contact & FAQ"
                      ? handleContactFaqMouseEnter
                      : undefined
                  }
                  onMouseLeave={
                    item.label === "News"
                      ? handleBottomNewsMouseLeave
                      : item.label === "Initiatives & Research"
                      ? handleInitiativesResearchMouseLeave
                      : item.label === "Play a game"
                      ? handlePlayAGameMouseLeave
                      : item.label === "Knowledge Hub"
                      ? handleKnowledgeHubMouseLeave
                      : item.label === "Contact & FAQ"
                      ? handleContactFaqMouseLeave
                      : undefined
                  }
                >
                  {item.label === "Achievements" || item.label === "News" ? (
                    <Link
                      href={item.href}
                      className="inline-block text-xl font-normal text-gray-300 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-400 group"
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button className="inline-block text-xl font-normal text-gray-300 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-400 group">
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </button>
                  )}

                  {/* Dropdown Render Condition for Bottom Nav Items */}
                  {item.label === "Initiatives & Research" &&
                  initiativesResearchDropdownOpen && (
                    <div
                      ref={initiativesResearchDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleInitiativesResearchMouseLeave}
                    >
                      {initiativesResearchLinks.map(
                        (dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none transition-colors duration-300 hover:scale-105 hover:outline hover:outline-gray-700 dark:hover:outline-gray-500"
                          >
                            {dropdownItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}

                  {item.label === "Play a game" && playAGameDropdownOpen && (
                    <div
                      ref={playAGameDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handlePlayAGameMouseLeave}
                    >
                      {playAGameLinks.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none transition-colors duration-300 hover:scale-105 hover:outline hover:outline-gray-700 dark:hover:outline-gray-500"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.label === "Knowledge Hub" && knowledgeHubDropdownOpen && (
                    <div
                      ref={knowledgeHubDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleKnowledgeHubMouseLeave}
                    >
                      {knowledgeHubLinks.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none transition-colors duration-300 hover:scale-105 hover:outline hover:outline-gray-700 dark:hover:outline-gray-500"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.label === "Contact & FAQ" && contactFaqDropdownOpen && (
                    <div
                      ref={contactFaqDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleContactFaqMouseLeave}
                    >
                      {contactFaqLinks.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none transition-colors duration-300 hover:scale-105 hover:outline hover:outline-gray-700 dark:hover:outline-gray-500"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.label === "News" && bottomNewsDropdownOpen && (
                    <div
                      ref={bottomNewsDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleBottomNewsMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => (
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

        <ThemeChanger />

        {/* Mobile Menu - You can add your mobile menu implementation here */}
        <div className="lg:hidden">
          {/* Example hamburger icon and mobile menu trigger */}
          {/* <button
            className="text-white focus:outline-none"
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
          </button> */}

          {/* Example Mobile Menu Content (Hidden by default) */}
          {/* {mobileMenuOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Contact
              </Link>
            </div>
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;