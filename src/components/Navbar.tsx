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
  const navigation: NavItem[] = [
    { label: "Achievements", href: "/achievements" },
    { label: "Patents", href: "/patents" },
    { label: "Events", href: "/events" },
    { label: "Projects", href: "/projects" },
  ];
  const infoLinks: NavItem[] = [
    { label: "Department Info", href: "/department-info" },
    { label: "Faculty", href: "/about" },
  ];

  const [infoOpen, setInfoOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const listItemRef = useRef<HTMLLIElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInfoMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setInfoOpen(true);
  };

  const handleInfoMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setInfoOpen(false);
      timerRef.current = null;
    }, 200);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
        setInfoOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [infoRef, setInfoOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/favicon2.png"
                width={32}
                alt="N"
                height={32}
                className="w-8"
              />
            </span>
            <span>Cyber Events</span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <button
              onClick={() => setGetStartedModalOpen()}
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <div className="flex space-x-2 items-center">
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
              <div className="absolute top-20 right-0 bg-white rounded-md shadow-lg p-4 z-50 ">
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
                    <div
                      onMouseEnter={handleInfoMouseEnter}
                      onMouseLeave={handleInfoMouseLeave}
                    >
                      <button className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                        Info
                      </button>
                      {infoOpen && (
                        <div
                          ref={infoRef}
                          className="absolute  bg-white dark:bg-gray-800  rounded-md shadow-lg p-2 mt-2"
                        >
                          {infoLinks.map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="w-full px-4 py-2  text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setGetStartedModalOpen()}
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={item.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              className="mr-3 nav__item"
              ref={listItemRef}
              onMouseEnter={handleInfoMouseEnter}
              onMouseLeave={handleInfoMouseLeave}
            >
              <div className="relative">
                <button className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  About Us
                </button>
                {infoOpen && (
                  <div
                    ref={infoRef}
                    className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 mt-2"
                  >
                    {infoLinks.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
