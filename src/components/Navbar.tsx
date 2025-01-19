"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import React, { useState, useRef, useEffect } from "react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { useAuth } from "@clerk/nextjs"; // Import useAuth
import { AuthModal } from "./auth-modal"; // Import AuthModal

export const Navbar = () => {
    const { isSignedIn, isLoaded } = useAuth(); // Use useAuth hook
    const [showAuthModal, setShowAuthModal] = useState(false); // State for AuthModal
    const navigation = [
        { label: "Milestones", href: "/achievements" },
        { label: "Events", href: "/events" },
    ];
    const eventsLinks = [
        { label: "2025", href: "/events/5" },
        { label: "2024", href: "/events/4" },
        { label: "2023", href: "/events/3" },
        { label: "2022", href: "/events/2" },
        { label: "2021", href: "/events/1" },
    ];
    const infoLinks = [
        { label: "Department Info", href: "/department-info" },
        { label: "Faculty", href: "/about" },
    ];
    const [infoOpen, setInfoOpen] = useState(false);
    const infoRef = useRef<HTMLDivElement>(null);
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

    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
                {/* Logo  */}
                <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                        <span>
                            <Image
                                src="/img/favicon2.png"
                                width="32"
                                alt="N"
                                height="32"
                                className="w-8"
                            />
                        </span>
                        <span>Cyber Events</span>
                    </span>
                </Link>

                {/* Auth button and theme changer */}
                <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
                    <ThemeChanger />
                    <div className="hidden mr-3 lg:flex nav__item">
                        {isLoaded && (
                            isSignedIn ? (
                                <Link
                                    href="/dashboard"
                                    className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <button
                                    onClick={() => setShowAuthModal(true)}
                                    className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
                                >
                                    Get Started
                                </button>
                            )
                        )}
                    </div>
                </div>

                <Disclosure>
                    {({ open }) => (
                        <div> {/* ADDED DIV WRAPPER */}
                            <Disclosure.Button
                                aria-label="Toggle Menu"
                                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    {open && (
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                        />
                                    )}
                                    {!open && (
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                        />
                                    )}
                                </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                <>
                                    {navigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                    <div ref={infoRef}>
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <div>
                                                        <Disclosure.Button
                                                            onClick={() => setInfoOpen(!infoOpen)}
                                                            className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                                                        >
                                                            Info
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="flex flex-wrap w-full ml-4 my-1 ">
                                                            {infoLinks.map((item, index) => (
                                                                <Link
                                                                    key={index}
                                                                    href={item.href}
                                                                    className="w-full px-4 py-2  text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                                                                >
                                                                    {item.label}
                                                                </Link>
                                                            ))}
                                                        </Disclosure.Panel>
                                                    </div>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                    {isLoaded && !isSignedIn && (
                                        <button
                                            onClick={() => setShowAuthModal(true)}
                                            className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                                        >
                                            Get Started
                                        </button>
                                    )}
                                </>
                            </Disclosure.Panel>
                        </div>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <Menu setActive={setActiveMenu}>
                        <MenuItem setActive={setActiveMenu} active={activeMenu} item="Milestones" href="/achievements">
                            <div className="flex flex-col p-2">
                                <HoveredLink href="/achievements">Achievements</HoveredLink>
                                <HoveredLink href="/patents">Patents</HoveredLink>
                                <HoveredLink href="/projects">Projects</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActiveMenu} active={activeMenu} item="Events" href="/events">
                            <div className="flex flex-col p-2">
                                {eventsLinks.map((item, index) => (
                                    <HoveredLink key={index} href={item.href}>
                                        {item.label}
                                    </HoveredLink>
                                ))}
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActiveMenu} active={activeMenu} item="About Us" href="/department-info">
                            <div className="flex flex-col p-2">
                                <HoveredLink href="/department-info">Department Info</HoveredLink>
                                <HoveredLink href="/about">Faculty</HoveredLink>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
            </nav>
            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
                mode="sign-in"
            />
        </div>
    );
};