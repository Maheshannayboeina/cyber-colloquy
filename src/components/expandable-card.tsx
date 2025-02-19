//src/components/expandable-card.tsx
"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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

export function ExpandableCard({
  cards,
  currentPage,
  itemsPerPage,
}: ExpandableCardProps) {
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

    // Use overflow-y-scroll on the body *only* when a modal is active.  Crucial for mobile!
    if (active) {
      document.body.style.overflowY = "hidden";  // Prevent double scrollbars
      document.documentElement.style.overflowY = 'hidden'; //for cross-browser
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = 'auto';
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      // Cleanup overflow styles on unmount, even if no modal was open.
      document.body.style.overflowY = "auto";
       document.documentElement.style.overflowY = 'auto';
    };
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
            // Use a fixed position and a backdrop filter for the overlay.
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          // Fixed positioning, full screen, with padding.  Use grid for centering.
          <div className="fixed inset-0 z-[60] p-4 grid place-items-center overflow-y-auto">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              // Constrain the maximum width and height, allow scrolling within the modal.
              className="w-full max-w-2xl max-h-[90vh] rounded-2xl overflow-y-auto bg-gray-900 shadow-2xl"
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
                    className="w-full h-auto max-h-[300px] object-cover" // Responsive image
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
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-gray-300 mb-2"
                  >
                    {active.description}
                  </motion.p>
                  <motion.p className="text-sm text-gray-400">
                    {active.date}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Render content, whether it's a string or a function */}
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid layout for the cards, responsive by default. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCards.map((card) => (
          <div
            key={card.key}
            onClick={() => setActive(card)}
            className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] w-full"> {/* Use aspect ratio for consistent image size */}
              <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={card.key < 6} // Prioritize the first 6 images
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2"> {/* Limit title to 2 lines */}
                {card.title}
              </h3>
              <p className="text-gray-200 text-sm mb-2 line-clamp-2"> {/* Limit description to 2 lines */}
                {card.description}
              </p>
              <p className="text-gray-300 text-xs">{card.date}</p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Better hover effect
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