'use client'

import React, { useState, useEffect, useRef, useId } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Card {
    key: number;
    title: string;
    description: string;
    src: string;
    content: string | (() => React.ReactNode);
    date: string;
}

interface ExpandableCardProps {
    cards: Card[];
    currentPage: number;
    itemsPerPage: number;
}

export function ExpandableCard({ cards, currentPage, itemsPerPage }: ExpandableCardProps) {
    const [active, setActive] = useState<Card | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCards = cards.slice(startIndex, endIndex);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActive(null);
        };

        if (active) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKeyDown);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    const handleOutsideClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setActive(null);
        }
    };

    useEffect(() => {
        if (active) {
            document.addEventListener("mousedown", handleOutsideClick);
        }
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [active]);

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 grid place-items-center z-[60] p-4">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        >
                            <div className="relative">
                                <motion.div layoutId={`image-${active.title}-${id}`}>
                                    <Image
                                        src={active.src}
                                        alt={active.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-[300px] object-cover"
                                        priority
                                    />
                                </motion.div>
                                <button
                                    onClick={() => setActive(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            <motion.div
                                className="p-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="mb-6">
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                                    >
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-gray-600 dark:text-gray-300 mb-2"
                                    >
                                        {active.description}
                                    </motion.p>
                                    <motion.p className="text-sm text-gray-500 dark:text-gray-400">
                                        {active.date}
                                    </motion.p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {typeof active.content === "function" ? active.content() : active.content}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCards.map((card) => (
                    <div
                        key={card.key}
                        onClick={() => setActive(card)}
                        className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="relative h-[300px] w-full">
                            <Image
                                src={card.src}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-200 text-sm mb-2">
                                {card.description}
                            </p>
                            <p className="text-gray-300 text-xs">
                                {card.date}
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-black/40 flex items-center justify-center"
                        >
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                                Click to view details
                            </span>
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    );
}