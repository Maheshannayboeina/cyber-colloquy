//src/components/Container.tsx
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`container mx-auto 
                  px-4 py-4 
                  sm:px-6 sm:py-6 
                  lg:px-8 lg:py-8 
                  ${className}`}
    >
      {children}
    </div>
  );
}
