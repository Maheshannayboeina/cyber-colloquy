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
    { label: "Faculty", href: "/about" },
    { label: "Values & Impact", href: "/values-impact" },
  ];

  const communityLinks: NavItem[] = [ //Reusing communityLinks for "News" dropdown in bottom nav now
    { label: "Announcements", href: "/news/announcements" },
    { label: "Press Coverage", href: "/news/press-coverage" },
  ];

  const newsLinks: NavItem[] = [ //Reusing newsLinks for "Play a game" dropdown if needed
    { label: "Alumini", href: "#" },
    { label: "Press Coverage", href: "#" },
    { label: "Organizers", href: "#" },
    { label: "Partners", href: "#" },
  ];

  const initiativesResearchLinks: NavItem[] = [
    { label: "Projects", href: "#" },
    { label: "Patents", href: "#" },
  ];

  const knowledgeHubLinks: NavItem[] = [
    { label: "Articles", href: "#" },
    { label: "Cybersecurity guide", href: "#" },
    { label: "White papers", href: "#" },
    { label: "Advisories", href: "#" },
  ];

  const contactFaqLinks: NavItem[] = [
    { label: "Inquiries", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  const nominationRegistrationLinks: NavItem[] = [
    { label: "Register", href: "#" },
    { label: "Award ceremony", href: "/award-ceremony" },
    { label: "Project expo", href: "#" },
    { label: "Call for sponsors", href: "#" },
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
     { label: "News", href: "#" }, // Added News here in bottom nav - now a dropdown
    { label: "Play a game", href: "#" },
    { label: "Knowledge Hub", href: "#" },
    { label: "Contact & FAQ", href: "#" },
  ];


  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false); // Re-added state for News dropdown
  const [initiativesResearchDropdownOpen, setInitiativesResearchDropdownOpen] = useState(false);
  const [playAGameDropdownOpen, setPlayAGameDropdownOpen] = useState(false);
  const [knowledgeHubDropdownOpen, setKnowledgeHubDropdownOpen] = useState(false);
  const [contactFaqDropdownOpen, setContactFaqDropdownOpen] = useState(false);
  const [nominationRegistrationDropdownOpen, setNominationRegistrationDropdownOpen] = useState(false); // new state
  const [bottomNewsDropdownOpen, setBottomNewsDropdownOpen] = useState(false); // new state for bottom news


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const infoDropdownRef = useRef<HTMLDivElement>(null);
  const communityDropdownRef = useRef<HTMLDivElement>(null);
  const newsDropdownRef = useRef<HTMLDivElement>(null); // Re-added ref for News dropdown
  const initiativesResearchDropdownRef = useRef<HTMLDivElement>(null);
  const playAGameDropdownRef = useRef<HTMLDivElement>(null);
  const knowledgeHubDropdownRef = useRef<HTMLDivElement>(null);
  const contactFaqDropdownRef = useRef<HTMLDivElement>(null);
  const nominationRegistrationDropdownRef = useRef<HTMLDivElement>(null); // new ref
  const bottomNewsDropdownRef = useRef<HTMLDivElement>(null); // new ref for bottom news


  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    setMobileMenuOpen(false);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false); // Re-added to close News dropdown on path change
    setInitiativesResearchDropdownOpen(false);
    setPlayAGameDropdownOpen(false);
    setKnowledgeHubDropdownOpen(false);
    setContactFaqDropdownOpen(false);
    setNominationRegistrationDropdownOpen(false);
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
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
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
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
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
  };

  const handleCommunityMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setCommunityDropdownOpen(false);
    }, 500);
  };

  const handleNewsMouseEnter = () => { // Re-added handler for News
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
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
  };

  const handleNewsMouseLeave = () => { // Re-added handler for News
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
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
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
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
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
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
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
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
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
    setBottomNewsDropdownOpen(false); // close bottom news dropdown
  };

  const handleNominationRegistrationMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setNominationRegistrationDropdownOpen(false);
    }, 500);
  };

  const handleBottomNewsMouseEnter = () => { // new handler for bottom news
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

  const handleBottomNewsMouseLeave = () => { // new handler for bottom news
    closeTimerRef.current = setTimeout(() => {
      setBottomNewsDropdownOpen(false);
    }, 500);
  };


  return (
    <div className="w-full shadow">
      <nav className="bg-[#222222] text-white relative flex flex-col lg:flex-row items-start lg:items-center **justify-start** p-3 mx-auto xl:px-5"> {/* Changed back to justify-start */}
        {/* Logo - Big enough to span both levels */}
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

        {/* Navigation Links Container - Flex Column on Desktop */}
        <div className="lg:flex lg:flex-col lg:items-start">
          {/* Top Navigation */}
          <div className="hidden text-center lg:flex lg:items-center mb-2">
            <ul className="items-center justify-start flex-none pt-6 list-none lg:pt-0 lg:flex">
              {topNavigation.map((item, index) => (
                <li
                  className="mr-8 nav__item relative"
                  key={index}
                  onMouseEnter={item.label === 'About Us' ? handleInfoMouseEnter : item.label === 'Our Community' ? handleCommunityMouseEnter : item.label === 'Events' ? undefined : item.label === 'Nomination & Registration' ? handleNominationRegistrationMouseEnter : undefined} // removed news from top nav mouseover, removed Events
                  onMouseLeave={item.label === 'About Us' ? handleInfoMouseLeave : item.label === 'Our Community' ? handleCommunityMouseLeave : item.label === 'Events' ? undefined : item.label === 'Nomination & Registration' ? handleNominationRegistrationMouseLeave : undefined} // removed news from top nav mouseover, removed Events
                >
                  {item.label !== 'Events' && item.label !== 'Nomination & Registration' && item.label !== 'News' ? (
                    <button className="inline-block text-lg font-normal text-white no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-300 group">
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-block text-lg font-normal text-white no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-300 group"
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {/* Dropdown Render Condition */}
                  {item.label === 'About Us' && infoDropdownOpen && (
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

                  {item.label === 'Our Community' && communityDropdownOpen && (
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


                   {item.label === 'Nomination & Registration' && nominationRegistrationDropdownOpen && (
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
          </div>

          {/* Bottom Navigation */}
          <div className="hidden lg:flex lg:items-center text-center">
            <ul className="items-center justify-start flex-none pt-6 list-none lg:pt-0 lg:flex">
              {bottomNavigation.map((item, index) => (
                <li
                  className="mr-8 nav__item relative"
                  key={index}
                  onMouseEnter={item.label === 'News' ? handleBottomNewsMouseEnter : item.label === 'Initiatives & Research' ? handleInitiativesResearchMouseEnter : item.label === 'Play a game' ? handlePlayAGameMouseEnter : item.label === 'Knowledge Hub' ? handleKnowledgeHubMouseEnter : item.label === 'Contact & FAQ' ? handleContactFaqMouseEnter : undefined} // Added bottom news handler
                  onMouseLeave={item.label === 'News' ? handleBottomNewsMouseLeave : item.label === 'Initiatives & Research' ? handleInitiativesResearchMouseLeave : item.label === 'Play a game' ? handlePlayAGameMouseLeave : item.label === 'Knowledge Hub' ? handleKnowledgeHubMouseLeave : item.label === 'Contact & FAQ' ? handleContactFaqMouseLeave : undefined} // Added bottom news handler
                >
                  {item.label === 'Achievements' || item.label === 'News' ? ( // News and Achievement are now Links
                    <Link
                      href={item.href}
                      className="inline-block text-sm font-normal text-gray-300 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-400 group"
                    >
                      <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button className="inline-block text-sm font-normal text-gray-300 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-400 group">
                    <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                      {item.label}
                    </span>
                  </button>
                  )}


                  {/* Dropdown Render Condition for Bottom Nav Items */}
                  {item.label === 'Initiatives & Research' && initiativesResearchDropdownOpen && (
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


                   {item.label === 'Play a game' && playAGameDropdownOpen && (
                    <div
                      ref={playAGameDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handlePlayAGameMouseLeave}
                    >
                      {newsLinks.map((dropdownItem, dropdownIndex) => ( //Reusing newsLinks - you can change this to a dedicated array if needed
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

                   {item.label === 'Knowledge Hub' && knowledgeHubDropdownOpen && (
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

                   {item.label === 'Contact & FAQ' && contactFaqDropdownOpen && (
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

                  {item.label === 'News' && bottomNewsDropdownOpen && ( // Bottom News dropdown rendering
                    <div
                      ref={bottomNewsDropdownRef}
                      className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleBottomNewsMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Using communityLinks for bottom news dropdown
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


        <ThemeChanger /> {/* Removed className="ml-auto" */}


        {/* Mobile Menu - No Changes */}
        <div className="lg:hidden">
          {/* ... mobile menu code ... */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;