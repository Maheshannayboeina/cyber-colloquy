"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MemberCards } from "@/components/MemberCards"; // Make sure this path is correct
import executiveTeamData from "@/components/executiveTeamData"; // Import the data

const sectionCategories = [
  "Core Committee",
  "Members",
  "CoE Coordinators",
  "Advisory Board",
];

const ExecutiveTeamPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Leadership"
        title="Executive Team"
        align="center"
        className="text-blue-500"
      >
        Meet our dedicated Executive Team
      </SectionTitle>

      <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
        {/* Responsive padding and margin */}
        {sectionCategories.map((category, index) => {
          const membersInCategory = executiveTeamData.filter(
            (member) => member.category === category
          );

          if (membersInCategory.length === 0) {
            return null; // Don't render section if no members in this category
          }

          return (
            <section key={index} className="mb-8 sm:mb-10 md:mb-12">
              {/* Responsive margin */}
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-400 mb-3 sm:mb-5 border-b pb-2">
                {/* Responsive heading */}
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-4">
                {/* Responsive grid and gap, py is kept for vertical spacing */}
                {membersInCategory.map((member, memberIndex) => (
                  <MemberCards // Using MemberCards component here
                    key={memberIndex}
                    member={{
                      // Changed 'teacher' prop to 'member' to match MemberCards component
                      name: member.name,
                      designation: member.designation, // Use 'designation'
                      image: member.image,
                      linkedin: member.linkedin, // Use 'linkedin'
                      year: member.year, // Pass year
                      team: member.team, // Pass team
                    }}
                    showHoverDetails={true} // Indicate to MemberCards to show hover details
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Container>
  );
};

export default ExecutiveTeamPage;