"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

interface Developer {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
}

const developers: Developer[] = [
  {
    name: "Mahesh Annayboeina",
    role: "Frontend Developer",
    imageUrl: "/img/executive-team/mahesh-annayboeina.png",
    linkedinUrl: "https://www.linkedin.com/in/mahesh-annayboeina-06536428b/",
  },
  {
    name: "Saahil Sawant",
    role: "Backend Developer",
    imageUrl: "/img/executive-team/saahil-sawant.png",
    linkedinUrl: "https://www.linkedin.com/in/saahil-sawant-9b88b6302/",
  },
  {
    name: "Sayee Patil",
    role: "Full Stack Developer",
    imageUrl: "/img/executive-team/sayee-patil.png",
    linkedinUrl: "https://www.linkedin.com/in/sayee-p-79b0b828b/",
  },
  {
    name: "Purva Nalawade",
    role: "DevOps Engineer",
    imageUrl: "/img/executive-team/purva-nalawade.png",
    linkedinUrl: "https://www.linkedin.com/in/purva-arun-nalawade-532921315/",
  },
  {
    name: "Kashyap Gohil",
    role: "DevOps Engineer",
    imageUrl: "/img/executive-team/kashyap-gohil.png",
    linkedinUrl: "https://www.linkedin.com/in/kashyap-gohil-750153323/",
  },
];

const DevelopersPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Developers"
        title="Meet the Team"
        align="center"
        className="text-blue-500"
      >
        Get to know the talented individuals behind our website.
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
        {developers.map((developer, index) => (
          <Link
            key={index}
            href={developer.linkedinUrl}
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-cover bg-center h-[450px]"
              style={{ backgroundImage: `url(${developer.imageUrl})` }}
            >
              <div className="absolute inset-x-0 bottom-0 p-4 text-white bg-gradient-to-t from-black to-transparent">
                <h3 className="text-base font-semibold mb-1">{developer.name}</h3>
                <p className="text-sm">{developer.role}</p>
                <div className="flex items-center mt-2">
                  <FaLinkedin className="mr-2" />
                  <span>LinkedIn</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default DevelopersPage;