"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
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
  ];

  const [infoOpen, setInfoOpen] = useState(false);
  const [milestonesOpen, setMilestonesOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Combined timer ref
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (dropdownSetter: (val: boolean) => void) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    dropdownSetter(true);
  };

  const handleMouseLeave = (dropdownSetter: (val: boolean) => void) => {
    timerRef.current = setTimeout(() => {
      dropdownSetter(false);
      timerRef.current = null;
    }, 200);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    setMobileMenuOpen(false); // Close mobile menu when pathname changes
  }, [pathname]);

  const handleClickOutside = (
    event: MouseEvent,
    dropdownRef: React.RefObject<HTMLDivElement>,
    dropdownSetter: (val: boolean) => void
  ) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      dropdownSetter(false);
    }
  };

  useEffect(() => {
    const handleInfoClickOutside = (event: MouseEvent) =>
      handleClickOutside(event, infoRef, setInfoOpen);

    const handleMilestonesClickOutside = (event: MouseEvent) =>
      handleClickOutside(event, milestonesRef, setMilestonesOpen);

    document.addEventListener("mousedown", handleInfoClickOutside);
    document.addEventListener("mousedown", handleMilestonesClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleInfoClickOutside);
      document.removeEventListener("mousedown", handleMilestonesClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
          <Image
            src="/img/favicon4.png" // Replace with correct path if needed
            width={180} // Adjust width as needed
            height={40}   // Adjust height as needed
            alt="Cyber Colloquy"
          />
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <button
              onClick={() => setGetStartedModalOpen()}
              className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="px-2 py-1 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>

          {mobileMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg p-4 z-50 w-64">
              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="relative">
                  <button
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    onClick={() => setMilestonesOpen(!milestonesOpen)} // Simple toggle for mobile
                  >
                    Milestones
                  </button>
                  {milestonesOpen && (
                    <div className="bg-white dark:bg-gray-700 rounded-md shadow-md mt-1">
                      {milestoneLinks.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    onClick={() => setInfoOpen(!infoOpen)} // Simple toggle for mobile
                  >
                    About Us
                  </button>
                  {infoOpen && (
                    <div className="bg-white dark:bg-gray-700 rounded-md shadow-md mt-1">
                      {infoLinks.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setGetStartedModalOpen()}
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={item.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li
              className="mr-3 nav__item relative"
              onMouseEnter={() => handleMouseEnter(setMilestonesOpen)}
              onMouseLeave={() => handleMouseLeave(setMilestonesOpen)}
            >
              <button className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-200">
                Milestones
              </button>
              {milestonesOpen && (
                <div
                  ref={milestonesRef}
                  className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px]"
                >
                  {milestoneLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li
              className="mr-3 nav__item relative"
              onMouseEnter={() => handleMouseEnter(setInfoOpen)}
              onMouseLeave={() => handleMouseLeave(setInfoOpen)}
            >
              <button className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-200">
                About Us
              </button>
              {infoOpen && (
                <div
                  ref={infoRef}
                  className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2 min-w-[200px]"
                >
                  {infoLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-colors duration-200"
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