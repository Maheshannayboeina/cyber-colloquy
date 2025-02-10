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
  const navigation: NavItem[] = [{ label: "Events", href: "/events" }];

  const milestoneLinks: NavItem[] = [
    { label: "Achievements", href: "/achievements" },
    { label: "Patents", href: "/patents" },
    { label: "Projects", href: "/projects" },
  ];

  const infoLinks: NavItem[] = [
    { label: "Department Info", href: "/department-info" },
    { label: "Faculty", href: "/about" },
    { label: "Values & Impact", href: "/values-impact" },
  ];

  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [milestonesDropdownOpen, setMilestonesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const milestonesDropdownRef = useRef<HTMLDivElement>(null);
  const infoDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setInfoDropdownOpen(false);
    setMilestonesDropdownOpen(false);
  }, [pathname]);

  const toggleInfoDropdown = useCallback(() => {
    setInfoDropdownOpen(!infoDropdownOpen);
    setMilestonesDropdownOpen(false);
  }, [infoDropdownOpen]);

  const toggleMilestonesDropdown = useCallback(() => {
    setMilestonesDropdownOpen(!milestonesDropdownOpen);
    setInfoDropdownOpen(false);
  }, [milestonesDropdownOpen]);

  const handleMilestonesMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMilestonesDropdownOpen(true);
    setInfoDropdownOpen(false);
  };

  const handleMilestonesMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setMilestonesDropdownOpen(false);
    }, 500);
  };

  const handleInfoMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setInfoDropdownOpen(true);
    setMilestonesDropdownOpen(false);
  };

  const handleInfoMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setInfoDropdownOpen(false);
    }, 500);
  };

  return (
    <div className="w-full shadow">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1">
        {/* Logo - Size Fixed, Hover Animation Kept */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
        >
          <Image
            src="/img/favicon4.png"
            width={180}
            height={40}
            alt="Cyber Colloquy"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Link>

        {/* Get Started Button - No Changes */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <button
              onClick={() => setGetStartedModalOpen()}
              className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu - No Changes */}
        <div className="lg:hidden">
          {/* ... mobile menu code ... */}
        </div>

        {/* Desktop menu - Hover Box Kept Open When Dropdown Active */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-5 nav__item" key={index}>
                <Link
                  href={item.href}
                  className="inline-block text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:scale-105 group"
                >
                  <span className="block px-4 py-2 rounded-md group-hover:bg-indigo-100 group-focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 dark:group-hover:bg-gray-800 dark:group-focus:bg-gray-800">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}

            <li
              className="mr-5 nav__item relative"
              onMouseEnter={handleMilestonesMouseEnter}
              onMouseLeave={handleMilestonesMouseLeave}
            >
              <button className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:scale-105 group">
                <span className={`block px-4 py-2 rounded-md **${milestonesDropdownOpen ? 'bg-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-gray-800 dark:focus:bg-gray-800' : 'group-hover:bg-indigo-100 group-focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 dark:group-hover:bg-gray-800 dark:group-focus:bg-gray-800'}**`}>Milestones</span> {/* Conditional class for dropdown open state */}
              </button>
              {milestonesDropdownOpen && (
                <div
                  ref={milestonesDropdownRef}
                  className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                  onMouseLeave={handleMilestonesMouseLeave}
                >
                  {milestoneLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-indigo-50 dark:hover:bg-gray-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li
              className="mr-5 nav__item relative"
              onMouseEnter={handleInfoMouseEnter}
              onMouseLeave={handleInfoMouseLeave}
            >
              <button className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 transition-colors duration-300 hover:scale-105 group">
                <span className={`block px-4 py-2 rounded-md **${infoDropdownOpen ? 'bg-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-gray-800 dark:focus:bg-gray-800' : 'group-hover:bg-indigo-100 group-focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 dark:group-hover:bg-gray-800 dark:group-focus:bg-gray-800'}**`}>About Us</span> {/* Conditional class for dropdown open state */}
              </button>
              {infoDropdownOpen && (
                <div
                  ref={infoDropdownRef}
                  className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px] transform scale-y-100 origin-top transition-transform duration-300 ease-out"
                  onMouseLeave={handleInfoMouseLeave}
                >
                  {infoLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-300 hover:scale-105 hover:bg-indigo-50 dark:hover:bg-gray-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;