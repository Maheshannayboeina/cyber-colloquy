//src/app/projects/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React, { useState, useEffect } from "react";
import { projectsData } from "@/components/ProjectsData"; // Import projectsData

type Project = {
  sNo: number;
  productName: string;
  faculty: string; // Separate field for faculty
  students: string; // Separate field for students
  academicYear: string;
  shortIntro?: string; // Optional short intro
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null); // Track hovered card index

  useEffect(() => {
    // Fetch data from ProjectsData.js
    const data: Project[] = projectsData; // Directly use imported data
    if (data) {
      setProjects(data);
      setLoading(false);
    } else {
      setError("Failed to load projects data.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Container>Loading projects...</Container>;
  }
  if (error) {
    return <Container>Error: {error}</Container>;
  }

  return (
    <Container>
      <SectionTitle
        preTitle="Student Research & Development"
        title="Cyber Security Projects"
      >
        Innovative solutions developed by our students and faculty.
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {" "}
        {/* Adjusted grid-cols and gap */}
        {projects.map((project, index) => (
          <div
            key={project.sNo}
            className={`bg-gray-800/${
              hoveredCard === index ? "80" : "30"
            } shadow-md rounded-md p-0 transition-all duration-300 hover:shadow-lg aspect-square backdrop-blur-sm`} // Dynamic opacity on hover
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full flex flex-col items-center justify-center">
              {" "}
              {/* Centered content */}
              <div className="px-1 h-full flex flex-col justify-center">
                {" "}
                {/* Added flex column and justify-center to container */}
                <h3
                  className={`font-bold text-white text-center ${
                    hoveredCard !== index
                      ? "text-4xl line-clamp-[6]"
                      : "text-2xl mb-2"
                  }`}
                >
                  {project.productName}
                </h3>{" "}
                {/* Dynamic text size - reduced non-hovered size to text-4xl */}
                {hoveredCard !== index ? (
                  <p className="text-s text-center mt-2 text-gray-400 line-clamp-2">
                    {project.shortIntro}
                  </p> // text-xs, text-center, mt-0.5, changed from text-[0.6rem] to text-xs
                ) : (
                  <div className="text-left w-full px-5">
                    {" "}
                    {/* Left align details when hovered, and take full width, added px-2 */}
                    <p className="text-m text-gray-400 mb-2 line-clamp-3 text-center">
                      {project.shortIntro}
                    </p>{" "}
                    {/* Short intro centered on hover also */}
                    <p className="text-gray-400 text-m mb-1">
                      <span className="font-bold">Faculty:</span>{" "}
                      {project.faculty || "N/A"}
                    </p>
                    <p className="text-gray-400 text-m mb-1">
                      <span className="font-bold">Students:</span>{" "}
                      {project.students || "N/A"}
                    </p>
                    <p className="text-gray-400 text-m">
                      <span className="font-bold">Academic Year:</span>{" "}
                      {project.academicYear}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}