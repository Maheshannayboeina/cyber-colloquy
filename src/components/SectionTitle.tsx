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
      }`}
    >
      {props.preTitle && (
        <div className="max-w-2xl mt-3 text-3xl  leading-snug font-bold tracking-wider text-indigo-600 uppercase lg:leading-tight lg:text-2xl">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-700 dark:text-gray-300">
          {props.children}
        </p>
      )}
    </div>
  );
};