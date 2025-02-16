"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

// Define the props we want to ACCEPT, excluding conflicting event handlers
interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Explicitly type onClick
  disabled?: boolean;
  // Add other props you *want* to allow here (e.g., style, id,  etc.)
  // ... but DO NOT include onDrag, onDragStart, etc.
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, onClick, disabled, ...props }, ref) => { // Destructure onClick
  return (
    <motion.button
      ref={ref}
      className={cn(
        "px-6 py-3 text-white bg-blue-600 rounded-full font-semibold transition-colors duration-200",
        "hover:bg-blue-700",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick} // Pass onClick explicitly
      disabled={disabled}
      {...props} // Spread any *other* allowed props
    >
      {children}
    </motion.button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;