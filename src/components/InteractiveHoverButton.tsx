"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

// Define the props, including buttonColor and textColor
interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  buttonColor?: string; // Button color prop
  textColor?: string;   // Text color prop
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, onClick, disabled, buttonColor = '#00008B', textColor = '#ffffff', ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "px-6 py-3 rounded-full font-semibold transition-colors duration-200", // Removed bg-blue-600 and text-white
        className
      )}
      style={{ backgroundColor: buttonColor, color: textColor }} // Use dynamic styles
      whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: buttonColor }} // Invert on hover
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;