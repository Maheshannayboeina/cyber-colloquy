//src/components/Navbar.tsx
"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from 'react'; // Import MouseEventHandler

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
    { label: "Faculty", href: "/about" },
    { label: "Values & Impact", href: "/values-impact" },
  ];

  const communityLinks: NavItem[] = [
    { label: "Alumni", href: "/contributors/alumni" },
    { label: "Contributors", href: "/contributors/all" },
    { label: "Organizers", href: "/contributors/organizers" },
    { label: "Partners", href: "/contributors/partners" },
  ];

  const playAGameLinks: NavItem[] = [
    { label: "CTF", href: "/ctf" },
    { label: "Phishing", href: "/phishing" },
  ];

  const initiativesResearchLinks: NavItem[] = [
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Patents", href: "/patents" },
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
    { label: "Register", href: "/cyber-colloquy-4.0" },
    { label: "Industry Attendies", href: "/industry-professional" },
    { label: "Project Expo", href: "/project-expo" },
    { label: "Call for sponsors", href: "/sponsor" },
    { label: "Award Ceremony", href: "/awards" },
  ];

  const topNavigation: NavItem[] = [
    { label: "About Us", href: "#" },
    { label: "Our Community", href: "#" },
    { label: "Events", href: "/events" },
    { label: "Nomination & Registration", href: "#" },
  ];

  const bottomNavigationItems: NavItem[] = [ // Renamed to bottomNavigationItems
    { label: "Initiatives & Research", href: "#" },
    { label: "Achievements", href: "/achievements" },
    { label: "News", href: "https://www.sakec.ac.in/cyse/cyse-announcements/" },
    { label: "Play a game", href: "#" },
    { label: "Knowledge Hub", href: "#" },
    { label: "Contact & FAQ", href: "#" },
  ];


  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [initiativesResearchDropdownOpen, setInitiativesResearchDropdownOpen] = useState(false);
  const [playAGameDropdownOpen, setPlayAGameDropdownOpen] = useState(false);
  const [knowledgeHubDropdownOpen, setKnowledgeHubDropdownOpen] = useState(false);
  const [contactFaqDropdownOpen, setContactFaqDropdownOpen] = useState(false);
  const [nominationRegistrationDropdownOpen, setNominationRegistrationDropdownOpen] = useState(false);


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const infoDropdownRef = useRef<HTMLDivElement>(null);
  const communityDropdownRef = useRef<HTMLDivElement>(null);
  const initiativesResearchDropdownRef = useRef<HTMLDivElement>(null);
  const playAGameDropdownRef = useRef<HTMLDivElement>(null);
  const knowledgeHubDropdownRef = useRef<HTMLDivElement>(null);
  const contactFaqDropdownRef = useRef<HTMLDivElement>(null);
  const nominationRegistrationDropdownRef = useRef<HTMLDivElement>(null);


  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = Math.round(window.devicePixelRatio * 100); // Estimate zoom percentage
      setIsZoomed(zoomLevel >= 120); // Adjusted zoom threshold
    };

    checkZoom(); // Initial check on component mount

    const handleResize = () => {
      checkZoom();
      setMobileMenuOpen(false); // Close mobile menu on resize (zoom change)
      // Close all dropdowns on resize/zoom change for better UX
      setInfoDropdownOpen(false);
      setCommunityDropdownOpen(false);
      setInitiativesResearchDropdownOpen(false);
      setPlayAGameDropdownOpen(false);
      setKnowledgeHubDropdownOpen(false);
      setContactFaqDropdownOpen(false);
      setNominationRegistrationDropdownOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isZoomed) {
      setMobileMenuOpen(false);
      setInfoDropdownOpen(false);
      setCommunityDropdownOpen(false);
      setInitiativesResearchDropdownOpen(false);
      setPlayAGameDropdownOpen(false);
      setKnowledgeHubDropdownOpen(false);
      setContactFaqDropdownOpen(false);
      setNominationRegistrationDropdownOpen(false);
    }
  }, [isZoomed, pathname]);

  const handleInfoMouseEnter = () => {
    if (!isZoomed) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setInfoDropdownOpen(true);
      setCommunityDropdownOpen(false);
      setInitiativesResearchDropdownOpen(false);
      setPlayAGameDropdownOpen(false);
      setKnowledgeHubDropdownOpen(false);
      setContactFaqDropdownOpen(false);
      setNominationRegistrationDropdownOpen(false);
    }
  };

  const handleInfoMouseLeave = () => {
    if (!isZoomed) {
      closeTimerRef.current = setTimeout(() => {
        setInfoDropdownOpen(false);
      }, 500);
    }
  };

  const handleCommunityMouseEnter = () => {
    if (!isZoomed) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setCommunityDropdownOpen(true);
      setInfoDropdownOpen(false);
      setInitiativesResearchDropdownOpen(false);
      setPlayAGameDropdownOpen(false);
      setKnowledgeHubDropdownOpen(false);
      setContactFaqDropdownOpen(false);
      setNominationRegistrationDropdownOpen(false);
    }
  };

  const handleCommunityMouseLeave = () => {
    if (!isZoomed) {
      closeTimerRef.current = setTimeout(() => {
        setCommunityDropdownOpen(false);
      }, 500);
    }
  };


  const handleInitiativesResearchMouseEnter = () => {
    if (!isZoomed) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setInitiativesResearchDropdownOpen(true);
      setInfoDropdownOpen(false);
      setCommunityDropdownOpen(false);
      setPlayAGameDropdownOpen(false);
      setKnowledgeHubDropdownOpen(false);
      setContactFaqDropdownOpen(false);
      setNominationRegistrationDropdownOpen(false);
    }
  };

  const handleInitiativesResearchMouseLeave = () => {
    if (!isZoomed) {
      closeTimerRef.current = setTimeout(() => {
        setInitiativesResearchDropdownOpen(false);
      }, 500);
    }
  };

  const handlePlayAGameMouseEnter = () => {
    if (!isZoomed) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setPlayAGameDropdownOpen(true);
      setInfoDropdownOpen(false);
      setCommunityDropdownOpen(false);
      setInitiativesResearchDropdownOpen(false);
      setKnowledgeHubDropdownOpen(false);
      setContactFaqDropdownOpen(false);
      setNominationRegistrationDropdownOpen(false);
    }
  };

  const handlePlayAGameMouseLeave = () => {
    if (!isZoomed) {
      closeTimerRef.current = setTimeout(() => {
        setPlayAGameDropdownOpen(false);
      }, 500);
    }
  };

  const handleKnowledgeHubMouseEnter = () => {
    if (!isZoomed) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setKnowledgeHubDropdownOpen(true);
      setInfoDropdownOpen(false);
      setCommunityDropdownOpen(false);
      setInitiativesResearchDropdownOpen(false);
      setPlayAGameDropdownOpen(false);
      setContactFaqDropdownOpen(false);
      setNominationRegistrationDropdownOpen(false);
    }
  };

  const handleKnowledgeHubMouseLeave = () => {
    if (!isZoomed) {
      closeTimerRef.current = setTimeout(() => {
        setKnowledgeHubDropdownOpen(false);
      }, 500);
    }
  };

  const handleContactFaqMouseEnter = () => {
    if (!isZoomed) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setContactFaqDropdownOpen(true);
      setInfoDropdownOpen(false);
      setCommunityDropdownOpen(false);
      setInitiativesResearchDropdownOpen(false);
      setPlayAGameDropdownOpen(false);
      setKnowledgeHubDropdownOpen(false);
      setNominationRegistrationDropdownOpen(false);
    }
  };

  const handleContactFaqMouseLeave = () => {
    if (!isZoomed) {
      closeTimerRef.current = setTimeout(() => {
        setContactFaqDropdownOpen(false);
      }, 500);
    }
  };

  const handleNominationRegistrationMouseEnter = () => {
    if (!isZoomed) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setNominationRegistrationDropdownOpen(true);
      setInfoDropdownOpen(false);
      setCommunityDropdownOpen(false);
      setInitiativesResearchDropdownOpen(false);
      setPlayAGameDropdownOpen(false);
      setKnowledgeHubDropdownOpen(false);
    }
  };

  const handleNominationRegistrationMouseLeave = () => {
    if (!isZoomed) {
      closeTimerRef.current = setTimeout(() => {
        setNominationRegistrationDropdownOpen(false);
      }, 500);
    }
  };


  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  const MenuBarContent = () => {
    const [mobileInfoDropdownOpen, setMobileInfoDropdownOpen] = useState(false);
    const [mobileCommunityDropdownOpen, setMobileCommunityDropdownOpen] = useState(false);
    const [mobileNominationRegistrationDropdownOpen, setMobileNominationRegistrationDropdownOpen] = useState(false);
    const [mobileInitiativesResearchDropdownOpen, setMobileInitiativesResearchDropdownOpen] = useState(false);
    const [mobilePlayAGameDropdownOpen, setMobilePlayAGameDropdownOpen] = useState(false);
    const [mobileKnowledgeHubDropdownOpen, setMobileKnowledgeHubDropdownOpen] = useState(false);
    const [mobileContactFaqDropdownOpen, setMobileContactFaqDropdownOpen] = useState(false);


    return (
      <div className="flex justify-end w-full">
        <button
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
        </button>

        {/* Right Side Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-0 right-0 h-screen bg-white dark:bg-gray-900 z-30 overflow-y-auto w-[300px] shadow-xl">
            <div className="p-4 flex justify-end">
              <button
                className="text-gray-800 dark:text-white focus:outline-none"
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
            <div className="px-6 py-4">
              <ul className="space-y-4">
                <li className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">Top Navigation</li>
                {topNavigation.map((item, index) => (
                  <li key={`top-mobile-${index}`}>
                    <button
                      onClick={() => {
                        if (item.label === "About Us") setMobileInfoDropdownOpen(!mobileInfoDropdownOpen);
                        if (item.label === "Our Community") setMobileCommunityDropdownOpen(!mobileCommunityDropdownOpen);
                        if (item.label === "Nomination & Registration") setMobileNominationRegistrationDropdownOpen(!mobileNominationRegistrationDropdownOpen);
                      }}
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full text-left"
                    >
                      {item.label}
                    </button>
                    {(item.label === "About Us" && mobileInfoDropdownOpen) && (
                      <ul className="ml-4 space-y-2">
                        {infoLinks.map((dropdownItem, dropdownIndex) => (
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
                     {(item.label === "Our Community" && mobileCommunityDropdownOpen) && (
                      <ul className="ml-4 space-y-2">
                        {communityLinks.map((dropdownItem, dropdownIndex) => (
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
                     {(item.label === "Nomination & Registration" && mobileNominationRegistrationDropdownOpen) && (
                      <ul className="ml-4 space-y-2">
                        {nominationRegistrationLinks.map((dropdownItem, dropdownIndex) => (
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
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 h-[1px] mx-4 my-2"></div>
             <div className="px-6 py-4">
              <ul className="space-y-4">
                <li className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">Bottom Navigation</li>
                {bottomNavigationItems.map((item, index) => ( // Use bottomNavigationItems here
                  <li key={`bottom-mobile-${index}`}>
                     <button
                       onClick={() => {
                        if (item.label === "Initiatives & Research") setMobileInitiativesResearchDropdownOpen(!mobileInitiativesResearchDropdownOpen);
                        if (item.label === "Play a game") setMobilePlayAGameDropdownOpen(!mobilePlayAGameDropdownOpen);
                        if (item.label === "Knowledge Hub") setMobileKnowledgeHubDropdownOpen(!mobileKnowledgeHubDropdownOpen);
                        if (item.label === "Contact & FAQ") setMobileContactFaqDropdownOpen(!mobileContactFaqDropdownOpen);
                      }}
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full text-left"
                    >
                      {item.label}
                    </button>
                    {(item.label === "Initiatives & Research" && mobileInitiativesResearchDropdownOpen) && (
                      <ul className="ml-4 space-y-2">
                        {initiativesResearchLinks.map((dropdownItem, dropdownIndex) => (
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
                     {(item.label === "Play a game" && mobilePlayAGameDropdownOpen) && (
                       <ul className="ml-4 space-y-2">
                        {playAGameLinks.map((dropdownItem, dropdownIndex) => (
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
                     {(item.label === "Knowledge Hub" && mobileKnowledgeHubDropdownOpen) && (
                      <ul className="ml-4 space-y-2">
                        {knowledgeHubLinks.map((dropdownItem, dropdownIndex) => (
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
                     {(item.label === "Contact & FAQ" && mobileContactFaqDropdownOpen) && (
                      <ul className="ml-4 space-y-2">
                        {contactFaqLinks.map((dropdownItem, dropdownIndex) => (
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
        className={`text-white relative flex flex-col lg:flex-row lg:items-center justify-between p-1 xl:px-10 w-full`}
        style={{
          backgroundColor: "#111827",
        }}
      >
        {/* Logo */}
        <div className="lg:mr-12 mb-4 lg:mb-0 w-[200px] lg:w-[300px] h-[60px] lg:h-[90px] overflow-hidden">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100"
          >
            <Image
              src="/img/favicon4.png"
              width={300}
              height={90}
              alt="Cyber Colloquy"
              className="hover:scale-105 transition-transform duration-300 ease-in-out object-contain"
              style={imageStyle} // Use the defined style object here
            />
          </Link>
        </div>


        {/* Conditionally render desktop navigation or mobile menu based on isZoomed */}
        {!isZoomed ? (
          <>
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
                            : item.label === "Nomination & Registration"
                              ? handleNominationRegistrationMouseEnter
                              : undefined
                      }
                      onMouseLeave={
                        item.label === "About Us"
                          ? handleInfoMouseLeave
                          : item.label === "Our Community"
                            ? handleCommunityMouseLeave
                            : item.label === "Nomination & Registration"
                              ? handleNominationRegistrationMouseLeave
                              : undefined
                      }
                    >
                       {item.label !== "Events" &&
                        item.label !== "Nomination & Registration" ? (
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

                      {item.label === "Nomination & Registration" && nominationRegistrationDropdownOpen && (
                        <div
                          ref={nominationRegistrationDropdownRef}
                          className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                          onMouseLeave={handleNominationRegistrationMouseLeave}
                        >
                          {nominationRegistrationLinks.map((dropdownItem, dropdownIndex) => (
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
                    </li>
                  ))}
                </ul>

              <div className="top-0 right-100 lg:static lg:top-auto lg:right-auto">
                <ThemeChanger />
              </div>
              </div>


              {/* Bottom Navigation (Desktop - **NOW CONDITIONAL**) */}
              { !mobileMenuOpen && ( // **CONDITION ADDED: Render only if mobileMenuOpen is false**
                <div
                  className="hidden text-center lg:flex lg:items-center text-center"
                  style={{ backgroundColor: "#0D5EDF" }}
                >
                  <ul className="items-center justify-start flex-none pt-1 pb-0 list-none lg:pt-0 lg:flex">
                    {bottomNavigationItems.map((item, index) => ( // Use bottomNavigationItems here
                      <li
                        className="mr-20 nav__item relative"
                        key={index}
                        onMouseEnter={
                          item.label === "Initiatives & Research"
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
                          item.label === "Initiatives & Research"
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
                        {item.label === "Initiatives & Research" && initiativesResearchDropdownOpen && (
                          <div
                            ref={initiativesResearchDropdownRef}
                            className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                            onMouseLeave={handleInitiativesResearchMouseLeave}
                          >
                            {initiativesResearchLinks.map((dropdownItem, dropdownIndex) => (
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
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Menu Icon (for desktop view - hidden when zoomed) */}
            <div className="lg:hidden flex items-center">
              <MenuBarContent />
            </div>
          </>
        ) : (
          /* Render Menubar component when isZoomed is true */
          <MenuBarContent />
        )}

      </nav>
    </div>
  );
};

export default Navbar;