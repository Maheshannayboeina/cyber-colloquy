"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { TeacherCard } from "@/components/TeacherCard"; // Corrected import here
import { ProjectCard } from "@/components/ProjectCard";
import { MemberCards } from "@/components/MemberCards"; // Import MemberCards!
import { coeFacultyMembers, coeCoordinators, coeProjects } from "@/components/CentreOfExcellenceData"; // Import data

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

      <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-5 border-b pb-2">
            CoE Faculty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
            {coeFacultyMembers.map((teacher, index) => (
              <TeacherCard
                key={index}
                teacher={teacher}
              />
            ))}
          </div>
        </section>

        {/* COE Coordinators Section (Using MemberCards now) */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-5 border-b pb-2">
            CoE Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            {coeCoordinators.map((coordinator, index) => (
              <MemberCards // Using MemberCards for Coordinators!
                key={index}
                member={coordinator} // Pass coordinator data as 'member' prop
              />
            ))}
          </div>
        </section>

        {/* COE Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-400 mb-5 border-b pb-2">
            CoE Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-4"> {/* Adjusted grid for projects */}
            {coeProjects.map((project, index) => (
              <ProjectCard // Use ProjectCard here
                key={index}
                project={project} // Pass the entire project object
              />
            ))}
          </div>
        </section>

      </div>
    </Container>
  );
};

export default CentresOfExcellencePage;