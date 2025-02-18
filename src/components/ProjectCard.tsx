// components/ProjectCard.tsx (or ProjectCard.js)
"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Student {
  name: string;
  // email: string; // Removed email, branch, year, mobile as per your request
  // branch: string;
  // year: string;
  // mobile: string;
}

interface ProjectCardProps {
  project: {
    name: string;
    briefDescription: string;
    description: string;
    image: string;
    link?: string;
    mentors: string[];
    students: Student[];
  };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover" // Adjust height as needed
      />
      <div className="p-4 bg-gray-700 text-white">
        <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
        <p className="text-sm text-gray-300">{project.briefDescription}</p>
      </div>

      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 p-4 text-white flex flex-col rounded-lg items-start **overflow-y-auto max-h-full**"> {/* Added overflow-y-auto and max-h-full */}
          <h4 className="font-semibold text-xl mb-1 text-left">{project.name}</h4> {/* Added text-left */}
          <p className="text-sm text-left mb-2">{project.description}</p> {/* Added text-left */}

          <div className="mb-4 text-left"> {/* Added text-left */}
            <h4 className="font-semibold text-lg text-indigo-400 mb-1">Mentors</h4>
            <p className="text-sm">
              {project.mentors.join(', ')} {/* Display mentors as comma-separated string */}
            </p>
          </div>

          <div className="text-left"> {/* Added text-left */}
            <h4 className="font-semibold text-lg text-indigo-400 mb-1">Students</h4>
            <p className="text-sm">
              {project.students.map(student => student.name).join(', ')} {/* Display students as comma-separated string */}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};