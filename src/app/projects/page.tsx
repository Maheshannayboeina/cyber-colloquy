//src/app/projects/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React, { useState, useEffect, useMemo } from "react"; // Import useMemo
import { projectsData } from "@/components/ProjectsData"; // Import projectsData

type Project = {
  sNo: number;
  productName: string;
  faculty: string;
  students: string;
  academicYear: string;
  shortIntro?: string;
};

export default function ProjectsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Use useMemo to prevent unnecessary re-renders of the projects array
  const projects = useMemo(() => projectsData, []);

  return (
    <Container>
      <SectionTitle
        preTitle="Student Research & Development"
        title="Cyber Security Projects"
      >
        Innovative solutions developed by our students and faculty.
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {/* Responsive grid and gap */}
        {projects.map((project, index) => (
          <div
            key={project.sNo}
            className="bg-gray-800/30 hover:bg-gray-800/80 shadow-md rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg" // Responsive padding
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col h-full">
              <h3
                className={`font-bold text-white text-lg sm:text-xl mb-2 transition-colors duration-300 ${
                  hoveredCard === index ? "text-indigo-400" : ""
                }`} // Responsive font size and conditional color
              >
                {project.productName}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-4 line-clamp-2">
                {/* Responsive font size and margin, line-clamp for short intro */}
                {project.shortIntro}
              </p>
              {hoveredCard === index && (
                <div className="mt-auto">
                  {/* mt-auto pushes details to the bottom on hover */}
                  <p className="text-gray-400 text-sm sm:text-base mb-1">
                    {/* Responsive font size */}
                    <span className="font-semibold text-gray-300">
                      Faculty:
                    </span>{" "}
                    {/* Added font-semibold and text-gray-300 for better contrast */}
                    {project.faculty || "N/A"}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base mb-1">
                    {/* Responsive font size */}
                    <span className="font-semibold text-gray-300">
                      Students:
                    </span>{" "}
                    {/* Added font-semibold and text-gray-300 */}
                    {project.students || "N/A"}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {/* Responsive font size */}
                    <span className="font-semibold text-gray-300">
                      Academic Year:
                    </span>{" "}
                    {/* Added font-semibold and text-gray-300 */}
                    {project.academicYear}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
