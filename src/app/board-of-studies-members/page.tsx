"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { TeacherCard } from "@/components/TeacherCard";

interface BoardMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  link?: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Dr Lata Ragha",
    role: "HoD - Computer Engineering",
    bio: "Fr. C. Rodrigues Institute of Technology",
    image: "/img/board-members/dr-lata-ragha.jpg",
    link: "",
  },
  {
    name: "Mr. Ritesh Bhatia",
    role: "Founding Director",
    bio: "V4WEB Cybersecurity",
    image: "/img/board-members/ritesh-bhatia.jpg",
    link: "",
  },
  {
    name: "Major Vineet Kumar",
    role: "Founder & Global President",
    bio: "CyberPeace",
    image: "/img/board-members/vineet-kumar.jpg",
    link: "",
  },
  {
    name: "Dr. Narendra M. Shekokar",
    role: "Professor, Computer Engineering",
    bio: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
    image: "/img/board-members/narendra-shekokar.jpg",
    link: "",
  },
  {
    name: "Ojas Dedhiya",
    role: "Technology Auditor",
    bio: "Morgan Stanley",
    image: "/img/board-members/ojas-dedhiya.jpg",
    link: "",
  },
  {
    name: "Dr. Vidyadhari Singh",
    role: "HOD (Cybersecurity) & Associate Professor (COMP)",
    bio: "Thakur College of Engineering & Technology (TCET)",
    image: "/img/board-members/vidyadhari-singh.jpg",
    link: "",
  },
  {
    name: "Dr. Sangita Chaudhari",
    role: "S. Professor - Computer Engineering",
    bio: "DY Patil",
    image: "/img/board-members/sangita-chaudhari.jpg",
    link: "",
  },
  {
    name: "Dr. Manish Madhukar Potey",
    role: "Professor at K J Somaiya College of Engineering",
    bio: "K J Somaiya College of Engineering",
    image: "/img/board-members/manish-potey.jpg",
    link: "",
  },
];


const BoardOfStudiesMembersPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Esteemed Team"
        title="Board of Studies Members"
        align="center"
      >
        Guiding and Shaping Our Cyber Security Department
      </SectionTitle>

      {/* Mimic the Section styling from AboutPage directly here */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        {/* Section Title (if you want a subtitle within this section - optional) */}
        {/* <h2 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-5 border-b pb-2">
          Members {/* Example Subtitle - Remove if you don't want it */}
        {/* </h2> */}

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-8">
          {boardMembers.map((member, index) => (
            <TeacherCard
              key={index}
              teacher={{
                name: member.name,
                role: member.role,
                image: member.image,
                bio: member.bio,
                link: member.link,
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BoardOfStudiesMembersPage;