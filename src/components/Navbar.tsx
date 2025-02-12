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

  const communityLinks: NavItem[] = [
    { label: "Initiatives", href: "/initiatives" },
    { label: "CoEs", href: "/coes" },
    { label: "Events & Outreach", href: "/events-outreach" },
    { label: "Policy Advocacy", href: "/policy-advocacy" },
    { label: "Thought Leadership", href: "/thought-leadership" },
    { label: "Skills & Capability", href: "/skills-capability" },
    { label: "Advisories", href: "/advisories" },
    { label: "Knowledge Center", href: "/knowledge-center" },
  ];

  const newsLinks: NavItem[] = [
    { label: "Page 1", href: "/news/page1" },
    { label: "Page 2", href: "/news/page2" },
    { label: "Page 3", href: "/news/page3" },
    { label: "Page 4", href: "/news/page4" },
    { label: "Page 5", href: "/news/page5" },
  ];

  const topNavigation: NavItem[] = [
    { label: "About Us", href: "#" }, // Dummy href, will be button
    { label: "Our Community", href: "#" }, // Dummy href, will be button
    { label: "News", href: "#" }, // Dummy href, will be button
    { label: "Events", href: "/events" }, // Events is still a link
  ];

  const bottomNavigation: NavItem[] = [
    { label: "Initiatives", href: "#" }, // Dummy href, will be button
    { label: "CoEs", href: "#" },        // Dummy href, will be button
    { label: "Events & Outreach", href: "#" }, // Dummy href, will be button
    { label: "Policy Advocacy", href: "#" }, // Dummy href, will be button
    { label: "Thought Leadership", href: "#" }, // Dummy href, will be button
    { label: "Skills & Capability", href: "#" }, // Dummy href, will be button
    { label: "Advisories", href: "#" },     // Dummy href, will be button
    { label: "Knowledge Center", href: "#" }, // Dummy href, will be button
  ];


  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [initiativesDropdownOpen, setInitiativesDropdownOpen] = useState(false);
  const [coesDropdownOpen, setCoesDropdownOpen] = useState(false);
  const [eventsOutreachDropdownOpen, setEventsOutreachDropdownOpen] = useState(false);
  const [policyAdvocacyDropdownOpen, setPolicyAdvocacyDropdownOpen] = useState(false);
  const [thoughtLeadershipDropdownOpen, setThoughtLeadershipDropdownOpen] = useState(false);
  const [skillsCapabilityDropdownOpen, setSkillsCapabilityDropdownOpen] = useState(false);
  const [advisoriesDropdownOpen, setAdvisoriesDropdownOpen] = useState(false);
  const [knowledgeCenterDropdownOpen, setKnowledgeCenterDropdownOpen] = useState(false);


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const infoDropdownRef = useRef<HTMLDivElement>(null);
  const communityDropdownRef = useRef<HTMLDivElement>(null);
  const newsDropdownRef = useRef<HTMLDivElement>(null);
  const initiativesDropdownRef = useRef<HTMLDivElement>(null);
  const coesDropdownRef = useRef<HTMLDivElement>(null);
  const eventsOutreachDropdownRef = useRef<HTMLDivElement>(null);
  const policyAdvocacyDropdownRef = useRef<HTMLDivElement>(null);
  const thoughtLeadershipDropdownRef = useRef<HTMLDivElement>(null);
  const skillsCapabilityDropdownRef = useRef<HTMLDivElement>(null);
  const advisoriesDropdownRef = useRef<HTMLDivElement>(null);
  const knowledgeCenterDropdownRef = useRef<HTMLDivElement>(null);


  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    setMobileMenuOpen(false);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  }, [pathname]);


  const handleInfoMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setInfoDropdownOpen(true);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
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
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
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
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  };

  const handleNewsMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setNewsDropdownOpen(false);
    }, 500);
  };

  const handleInitiativesMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setInitiativesDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  };

  const handleInitiativesMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setInitiativesDropdownOpen(false);
    }, 500);
  };


  const handleCoesMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setCoesDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  };

  const handleCoesMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setCoesDropdownOpen(false);
    }, 500);
  };


  const handleEventsOutreachMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setEventsOutreachDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  };

  const handleEventsOutreachMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setEventsOutreachDropdownOpen(false);
    }, 500);
  };


  const handlePolicyAdvocacyMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setPolicyAdvocacyDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  };

  const handlePolicyAdvocacyMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setPolicyAdvocacyDropdownOpen(false);
    }, 500);
  };


  const handleThoughtLeadershipMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setThoughtLeadershipDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  };

  const handleThoughtLeadershipMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setThoughtLeadershipDropdownOpen(false);
    }, 500);
  };


  const handleSkillsCapabilityMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setSkillsCapabilityDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  };

  const handleSkillsCapabilityMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setSkillsCapabilityDropdownOpen(false);
    }, 500);
  };


  const handleAdvisoriesMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setAdvisoriesDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setKnowledgeCenterDropdownOpen(false);
  };

  const handleAdvisoriesMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setAdvisoriesDropdownOpen(false);
    }, 500);
  };


  const handleKnowledgeCenterMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setKnowledgeCenterDropdownOpen(true);
    setInfoDropdownOpen(false);
    setCommunityDropdownOpen(false);
    setNewsDropdownOpen(false);
    setInitiativesDropdownOpen(false);
    setCoesDropdownOpen(false);
    setEventsOutreachDropdownOpen(false);
    setPolicyAdvocacyDropdownOpen(false);
    setThoughtLeadershipDropdownOpen(false);
    setSkillsCapabilityDropdownOpen(false);
    setAdvisoriesDropdownOpen(false);
  };

  const handleKnowledgeCenterMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setKnowledgeCenterDropdownOpen(false);
    }, 500);
  };


  return (
    <div className="w-full shadow">
      <nav className="bg-[#222222] text-white relative flex flex-col lg:flex-row items-start lg:items-center justify-between p-3 mx-auto xl:px-5"> {/* Removed 'container' class */}
        {/* Logo - Big enough to span both levels */}
        <div className="lg:mr-12 mb-4 lg:mb-0"> {/* Added margin-right for logo on desktop */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100"
          >
            <Image
              src="/img/favicon4.png"
              width={300} // Increased width to be bigger
              height={90} // Adjusted height to maintain aspect ratio
              alt="Cyber Colloquy"
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Navigation Links Container - Flex Column on Desktop */}
        <div className="lg:flex lg:flex-col lg:items-start"> {/* Changed lg:items-end to lg:items-start */}
          {/* Top Navigation */}
          <div className="hidden text-center lg:flex lg:items-center mb-2"> {/* Added mb-2 for spacing between top and bottom nav on desktop */}
            <ul className="items-center justify-start flex-1 pt-6 list-none lg:pt-0 lg:flex"> {/* Changed justify-end to justify-start */}
              {topNavigation.map((item, index) => (
                <li
                  className="mr-8 nav__item relative"
                  key={index}
                  onMouseEnter={item.label === 'About Us' ? handleInfoMouseEnter : item.label === 'Our Community' ? handleCommunityMouseEnter : item.label === 'News' ? handleNewsMouseEnter : undefined}
                  onMouseLeave={item.label === 'About Us' ? handleInfoMouseLeave : item.label === 'Our Community' ? handleCommunityMouseLeave : item.label === 'News' ? handleNewsMouseLeave : undefined}
                >
                  {item.label !== 'Events' ? ( // Render button for dropdowns, Link for Events
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
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleInfoMouseLeave}
                    >
                      {infoLinks.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.label === 'Our Community' && communityDropdownOpen && (
                    <div
                      ref={communityDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleCommunityMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.label === 'News' && newsDropdownOpen && (
                    <div
                      ref={newsDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleNewsMouseLeave}
                    >
                      {newsLinks.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
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

          {/* Bottom Navigation - RE-INTRODUCED as Dropdowns */}
          <div className="hidden lg:flex lg:items-center text-center">
            <ul className="items-center justify-start flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {bottomNavigation.map((item, index) => (
                <li
                  className="mr-8 nav__item relative"
                  key={index}
                  onMouseEnter={item.label === 'Initiatives' ? handleInitiativesMouseEnter : item.label === 'CoEs' ? handleCoesMouseEnter : item.label === 'Events & Outreach' ? handleEventsOutreachMouseEnter : item.label === 'Policy Advocacy' ? handlePolicyAdvocacyMouseEnter : item.label === 'Thought Leadership' ? handleThoughtLeadershipMouseEnter : item.label === 'Skills & Capability' ? handleSkillsCapabilityMouseEnter : item.label === 'Advisories' ? handleAdvisoriesMouseEnter : item.label === 'Knowledge Center' ? handleKnowledgeCenterMouseEnter : undefined}
                  onMouseLeave={item.label === 'Initiatives' ? handleInitiativesMouseLeave : item.label === 'CoEs' ? handleCoesMouseLeave : item.label === 'Events & Outreach' ? handleEventsOutreachMouseLeave : item.label === 'Policy Advocacy' ? handlePolicyAdvocacyMouseLeave : item.label === 'Thought Leadership' ? handleThoughtLeadershipMouseLeave : item.label === 'Skills & Capability' ? handleSkillsCapabilityMouseLeave : item.label === 'Advisories' ? handleAdvisoriesMouseLeave : handleKnowledgeCenterMouseLeave}

                >
                  <button className="inline-block text-sm font-normal text-gray-300 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:text-gray-400 group">
                    <span className="block px-4 py-2 rounded-md group-hover:bg-gray-900 group-focus:bg-gray-900">
                      {item.label}
                    </span>
                  </button>


                  {/* Dropdown Render Condition for Bottom Nav Items - Reusing communityLinks for all for now */}
                  {item.label === 'Initiatives' && initiativesDropdownOpen && (
                    <div
                      ref={initiativesDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleInitiativesMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Reusing communityLinks
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                   {item.label === 'CoEs' && coesDropdownOpen && (
                    <div
                      ref={coesDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleCoesMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Reusing communityLinks
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                   {item.label === 'Events & Outreach' && eventsOutreachDropdownOpen && (
                    <div
                      ref={eventsOutreachDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleEventsOutreachMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Reusing communityLinks
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                   {item.label === 'Policy Advocacy' && policyAdvocacyDropdownOpen && (
                    <div
                      ref={policyAdvocacyDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handlePolicyAdvocacyMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Reusing communityLinks
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                   {item.label === 'Thought Leadership' && thoughtLeadershipDropdownOpen && (
                    <div
                      ref={thoughtLeadershipDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleThoughtLeadershipMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Reusing communityLinks
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                   {item.label === 'Skills & Capability' && skillsCapabilityDropdownOpen && (
                    <div
                      ref={skillsCapabilityDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleSkillsCapabilityMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Reusing communityLinks
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                   {item.label === 'Advisories' && advisoriesDropdownOpen && (
                    <div
                      ref={advisoriesDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleAdvisoriesMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Reusing communityLinks
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                   {item.label === 'Knowledge Center' && knowledgeCenterDropdownOpen && (
                    <div
                      ref={knowledgeCenterDropdownRef}
                      className="absolute top-full left-0 z-10 **bg-white dark:bg-gray-800** text-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                      onMouseLeave={handleKnowledgeCenterMouseLeave}
                    >
                      {communityLinks.map((dropdownItem, dropdownIndex) => ( // Reusing communityLinks
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-lg font-normal **text-gray-800 dark:text-gray-200** no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-gray-100"
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


        {/* Get Started Button and Theme Changer - Right Side, Flex Column on Desktop */}
        <div className="gap-3 nav__item mr-2 lg:flex lg:flex-col lg:ml-8 lg:order-2 items-center"> {/* Flex column for button and theme changer on desktop, added ml-8 for spacing */}
          <div className="hidden mr-3 lg:flex nav__item mb-2"> {/* Added mb-2 for spacing */}
            <button
              onClick={() => setGetStartedModalOpen()}
              className="px-6 py-2 text-white bg-[#6366f1] rounded-md hover:bg-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
          <ThemeChanger />
        </div>


        {/* Mobile Menu - No Changes */}
        <div className="lg:hidden">
          {/* ... mobile menu code ... */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;