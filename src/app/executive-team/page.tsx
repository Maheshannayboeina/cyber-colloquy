"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MemberCards } from "@/components/MemberCards"; // Make sure this path is correct
import executiveTeamData from "@/components/executiveTeamData"; // Import the data

const sectionCategories = ["Core Committee", "Members", "CoE Coordinators", "Advisory Board"];

const ExecutiveTeamPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Leadership"
        title="Executive Team"
        align="center"
      >
        Meet our dedicated Executive Team
      </SectionTitle>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        {sectionCategories.map((category, index) => {
          const membersInCategory = executiveTeamData.filter(
            (member) => member.category === category
          );

          if (membersInCategory.length === 0) {
            return null; // Don't render section if no members in this category
          }

          return (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5 border-b pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
                {membersInCategory.map((member, memberIndex) => (
                  <MemberCards // Using MemberCards component here
                    key={memberIndex}
                    member={{ // Changed 'teacher' prop to 'member' to match MemberCards component
                      name: member.name,
                      designation: member.designation, // Use 'designation' as defined in MemberCards props
                      image: member.image,
                      linkedin: member.linkedin, // Use 'linkedin' as defined in MemberCards props
                      year: member.year,      // Pass year
                      team: member.team,      // Pass team
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