//src/app/board-of-studies-members/page.tsx
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
    image: "/img/board-members/lata-ragha.png",
    link: "https://www.linkedin.com/in/lata-ragha-3265a4287?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bzhs9oD6CRbemVlyZw8ICaA%3D%3D",
  },
  {
    name: "Mr. Ritesh Bhatia",
    role: "Founding Director",
    bio: "V4WEB Cybersecurity",
    image: "/img/board-members/ritesh-bhatia.jpg",
    link: "https://www.linkedin.com/in/v4web?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bvo%2BWIfBqS8qyo05zLIwXvg%3D%3D",
  },
  {
    name: "Major Vineet Kumar",
    role: "Founder & Global President",
    bio: "CyberPeace",
    image: "/img/board-members/vineet-kumar.png",
    link: "",
  },
  {
    name: "Dr. Narendra M. Shekokar",
    role: "Professor, Computer Engineering",
    bio: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
    image: "/img/board-members/narendra-shekokar.png",
    link: "https://www.linkedin.com/in/dr-narendra-shekokar-26b5072a5/",
  },
  {
    name: "Ojas Dedhiya",
    role: "Technology Auditor",
    bio: "Morgan Stanley",
    image: "/img/board-members/ojas-dedhiya.png",
    link: "https://www.linkedin.com/in/ojas-dedhiya-16276ab4/",
  },
  {
    name: "Dr. Vidyadhari Singh",
    role: "HOD (Cybersecurity) & Associate Professor (COMP)",
    bio: "Thakur College of Engineering & Technology (TCET)",
    image: "/img/board-members/vidyadhari-singh.png ",
    link: "https://www.linkedin.com/in/dr-vidyadhari-singh-b6a30224/",
  },
  {
    name: "Dr. Sangita Chaudhari",
    role: "S. Professor - Computer Engineering",
    bio: "DY Patil",
    image: "/img/board-members/sangita-chaudhari.png",
    link: "https://www.linkedin.com/in/dr-sangita-chaudhari-52b6731a/",
  },
  {
    name: "Dr. Manish Madhukar Potey",
    role: "Professor at K J Somaiya College of Engineering",
    bio: "K J Somaiya College of Engineering",
    image: "/img/board-members/manish-potey.jpg",
    link: "https://www.linkedin.com/in/dr-manish-potey-0b978b4b/",
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
      <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        {/* Section Title (if you want a subtitle within this section - optional) */}
        {/* <h2 className="text-3xl font-semibold text-indigo-400 mb-5 border-b pb-2">
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
