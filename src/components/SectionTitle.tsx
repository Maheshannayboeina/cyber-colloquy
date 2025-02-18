// src/components/SectionTitle.tsx
import React from "react";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
  id?: string; // Add the optional ID prop
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <div
      id={props.id} // Add the ID prop to the container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      } ${props.className || ""}`} // Added props.className
    >
      {props.preTitle && (
        <div className="max-w-2xl mt-3 text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-indigo-600 uppercase lg:leading-tight">
          {/* Removed redundant lg:text-2xl, used responsive sizes */}
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl">
          {/* Used responsive sizes for title */}
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-sm sm:text-base md:text-lg leading-normal text-gray-300">
          {/* Used responsive sizes for paragraph */}
          {props.children}
        </p>
      )}
    </div>
  );
};