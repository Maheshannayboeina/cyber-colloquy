// src/components/GetStartedModal.tsx
"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Flag, Mail } from "lucide-react";

interface GetStartedModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [playGameOpen, setPlayGameOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handlePlayGameClick = () => {
        setPlayGameOpen(!playGameOpen);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
                setPlayGameOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    return (
        <div
            id="getStartedModal"
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
            <div ref={modalRef} className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-lg relative">
                 <button
                    onClick={onClose}
                   className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none"
                 >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                 </button>
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                Start Your Journey
                </h2>
                <div className="flex flex-col space-y-4">
                    <Link
                        href="/events"
                        onClick={onClose}
                        className="block px-6 py-4 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Go to Events
                    </Link>
                    <div className="flex flex-col space-y-4 ">
                        <button
                            onClick={handlePlayGameClick}
                            className="block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 text-center"
                        >
                            Play a Game
                        </button>
                        {playGameOpen && (
                            <div className="flex  mt-2 justify-center gap-8">
                                <Link
                                    href="/phishing"
                                    onClick={onClose}
                                    className="flex flex-col items-center p-6 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 w-1/2"
                                >
                                    <span className="mb-4">
                                        <Mail className="h-8 w-8 text-gray-800 dark:text-white" />
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                                        Phishing Attack Recognizer
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-300 text-sm text-center">
                                        Test your ability to recognize phishing emails!
                                    </p>
                                </Link>
                                <Link
                                    href="/ctf"
                                    onClick={onClose}
                                    className="flex flex-col items-center p-6 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 w-1/2"
                                >
                                    <span className="mb-4">
                                        <Flag className="h-8 w-8 text-gray-800 dark:text-white" />
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                                        Capture the Flag Lite
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-300 text-sm text-center">
                                        Find the hidden flag and enter the code!
                                    </p>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedModal;