"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { TeacherCard } from "@/components/TeacherCard"; // Reusing TeacherCard for faculty and coordinators

// Interfaces for each section's data
interface CoeFacultyMember {
  name: string;
  role: string; // e.g., "Professor", "Associate Professor"
  image: string;
  bio: string; // Faculty bio/expertise
  link?: string; // Optional faculty profile link
}

interface CoeCoordinator {
  name: string;
  role: string; // e.g., "Lead Coordinator", "Coordinator"
  image: string;
  bio: string; // Coordinator bio/responsibilities related to CoE
  link?: string; // Optional coordinator contact/profile link
}

interface CoeProject {
  name: string;
  description: string; // Short project description
  image: string; // Project image/thumbnail
  details: string; // More detailed project description
  link?: string; // Optional project website/page link
}

// Data arrays for each section (PLACEHOLDER DATA - REPLACE THESE)
const coeFacultyMembers: CoeFacultyMember[] = [
  {
    name: "Faculty 1 Name",
    role: "Professor",
    bio: "Faculty 1's expertise related to the CoE.",
    image: "/img/coe/faculty/faculty-1.jpg", // Update path
    link: "",
  },
  {
    name: "Faculty 2 Name",
    role: "Associate Professor",
    bio: "Faculty 2's expertise related to the CoE.",
    image: "/img/coe/faculty/faculty-2.jpg", // Update path
    link: "",
  },
  // ... more faculty members
];

const coeCoordinators: CoeCoordinator[] = [
  {
    name: "Coordinator 1 Name",
    role: "Lead Coordinator",
    bio: "Coordinator 1's responsibilities for the CoE.",
    image: "/img/coe/coordinators/coordinator-1.jpg", // Update path
    link: "",
  },
  {
    name: "Coordinator 2 Name",
    role: "Coordinator",
    bio: "Coordinator 2's responsibilities for the CoE.",
    image: "/img/coe/coordinators/coordinator-2.jpg", // Update path
    link: "",
  },
  // ... more coordinators
];

const coeProjects: CoeProject[] = [
  {
    name: "Project 1 Title",
    description: "Short description of Project 1.",
    details: "Detailed description of Project 1 and its goals.",
    image: "/img/coe/projects/project-1.jpg", // Update path
    link: "",
  },
  {
    name: "Project 2 Title",
    description: "Short description of Project 2.",
    details: "Detailed description of Project 2 and its goals.",
    image: "/img/coe/projects/project-2.jpg", // Update path
    link: "",
  },
  // ... more projects
];


const CentresOfExcellencePage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Specialized Units"
        title="Centres of Excellence"
        align="center"
      >
        Discover our specialized centers pushing the boundaries of cybersecurity knowledge.
      </SectionTitle>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">

        {/* COE Faculty Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5 border-b pb-2">
            CoE Faculty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {coeFacultyMembers.map((faculty, index) => (
              <TeacherCard // Reusing TeacherCard for faculty members
                key={index}
                teacher={{
                  name: faculty.name,
                  role: faculty.role,
                  image: faculty.image,
                  bio: faculty.bio,
                  link: faculty.link,
                }}
              />
            ))}
          </div>
        </section>

        {/* COE Coordinators Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5 border-b pb-2">
            CoE Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {coeCoordinators.map((coordinator, index) => (
              <TeacherCard // Reusing TeacherCard for coordinators
                key={index}
                teacher={{
                  name: coordinator.name,
                  role: coordinator.role,
                  image: coordinator.image,
                  bio: coordinator.bio,
                  link: coordinator.link,
                }}
              />
            ))}
          </div>
        </section>

        {/* COE Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5 border-b pb-2">
            CoE Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-4"> {/* Adjusted grid for projects */}
            {coeProjects.map((project, index) => (
              <TeacherCard // Reusing TeacherCard for projects - adjust if needed
                key={index}
                teacher={{
                  name: project.name,
                  role: project.description, // Using description as "role"
                  image: project.image,
                  bio: project.details,   // Using details as "bio"
                  link: project.link,
                }}
              />
            ))}
          </div>
        </section>

      </div>
    </Container>
  );
};

export default CentresOfExcellencePage;