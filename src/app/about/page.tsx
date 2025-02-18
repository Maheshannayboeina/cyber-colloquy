// app/about/page.tsx
"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { TeacherCard } from "@/components/TeacherCard";

interface Teacher {
  name: string;
  role: string;
  image: string;
  bio: string;
  link?: string;
  category: "teaching" | "non-teaching";
}

const teachers: Teacher[] = [
  {
    name: "Dr. Nilakshi Jain",
    role: "I/c HOD, Professor",
    image: "/img/faculty/Nilakshi-jain.jpg",
    bio: "Ph.D. (Computer Engineering & Digital Forensic)",
    link: "https://www.linkedin.com/in/dr-nilakshi-jain-7593a264/",
    category: "teaching",
  },
  {
    name: "Dr. Rupali Vairagade",
    role: "Associate Professor",
    image: "/img/faculty/Rupali_Vairagade.jpg",
    bio: "Ph. D (Computer Science and Engineering)",
    link: "https://www.linkedin.com/in/rupali-vairagade-2881bb81/",
    category: "teaching",
  },
  {
    name: "Dr. Shwetambari Borade",
    role: "Assistant Professor",
    image: "/img/faculty/SNB.jpg",
    bio: "Ph.D. (Information Technology)",
    link: "https://www.linkedin.com/in/shwetambari-borade-a05a113b/",
    category: "teaching",
  },
  {
    name: "Ms. Pallavi Sawale",
    role: "Assistant Professor",
    image: "/img/faculty/PSW.jpg",
    bio: "M.E (Electronics and telecom Engineering)",
    link: "https://www.linkedin.com/in/pallavi-sawale-870237240",
    category: "teaching",
  },
  {
    name: "Mr. Dhananjay Newalkar",
    role: "Assistant Professor",
    image: "/img/faculty/DNW.jpg",
    bio: "M.E (Computer Engineering )",
    link: "https://www.linkedin.com/in/dhananjay-newalkar-7820a5319/",
    category: "teaching",
  },
  {
    name: "Ms. Archana Bopche",
    role: "Assistant Professor",
    image: "/img/faculty/ABP.jpg",
    bio: "M.Tech(Computer Science and Engineering)",
    link: "https://www.linkedin.com/in/archana-bopche-07313919/?originalSubdomain=in",
    category: "teaching",
  },
  {
    name: "Ms. Meghali A Kalyankar",
    role: "Assistant Professor",
    image: "/img/faculty/MAK.jpg",
    bio: "M.E. (Computer Science and Engineering)",
    link: "https://www.linkedin.com/in/meghali-kalyankar-7b752a22a/",
    category: "teaching",
  },
  {
    name: "Ms. Vishakha Shinde",
    role: "Assistant Professor",
    image: "/img/faculty/VKS.jpg",
    bio: "M.E. (Computer Engineering)",
    link: "https://www.linkedin.com/in/vishakha-shinde-0b3669226/",
    category: "teaching",
  },
  {
    name: "Ms. Saraswati Mishra",
    role: "Assistant Professor",
    image: "/img/faculty/SWM.jpg",
    bio: "M.Tech (Electronics and Communication Engineering)",
    link: "https://www.linkedin.com/in/saraswati-mishra-0a97562b4",
    category: "teaching",
  },
  {
    name: "Mr. Shivashankar Bhutekar",
    role: "Assistant Professor",
    image: "/img/faculty/SBT.jpg",
    bio: "M.Tech (Information Technology)",
    link: "https://www.linkedin.com/in/shivashankar-bhutekar-6719303a/",
    category: "teaching",
  },
  {
    name: "Ms. Priyanka Singh",
    role: "Assistant Professor",
    image: "/img/faculty/PSS.jpg",
    bio: "M.Tech (Information Security)",
    link: "https://www.linkedin.com/in/priyanka-singh-673822104?trk=contact-info",
    category: "teaching",
  },
  {
    name: "Ms. Sneha Shingare",
    role: "Assistant Professor",
    image: "/img/faculty/SSG.jpg",
    bio: "M.Tech (Computer Science and Engineering)",
    link: "https://www.linkedin.com/mwlite/in/mrs-sneha-shingare-80a535247",
    category: "teaching",
  },
  {
    name: "Ms. Pranali Pawar",
    role: "Assistant Professor",
    image: "/img/faculty/PPW.jpg",
    bio: "M.E.(Digital Electronics Engineering)",
    link: "https://www.linkedin.com/in/pranali-pojage-a28544260",
    category: "teaching",
  },
  {
    name: "Ms. Deepika Burte",
    role: "Associate Professor",
    image: "/img/faculty/DPB.jpg",
    bio: "M.E. (Computer Engineering)",
    link: "https://www.linkedin.com/in/deepika-burte-61b701250",
    category: "teaching",
  },
  {
    name: "Mr. Sanish Tupe",
    role: "	System Engineer at Tata Consultancy Services",
    image: "/img/faculty/STU.jpg",
    bio: "B.E (Information Technology)",
    link: "https://www.linkedin.com/in/sanish-tupe-2a240811a/?originalSubdomain=in",
    category: "teaching",
  },
  {
    name: "Mr. Vedant Parikh",
    role: "Software Development Engineer at Apperture",
    image: "/img/faculty/VPK.jpg",
    bio: "B.E (Information Technology)",
    link: "https://www.linkedin.com/in/vedant-a-parikh/?originalSubdomain=in",
    category: "teaching",
  },
  {
    name: "Ms. Poonam Ganesh Kamble",
    role: "Laboratory Assistant",
    image: "/img/faculty/poonam.kamble.jpg",
    bio: "Diploma (Computer Engineering)",
    category: "non-teaching",
  },
  {
    name: "Mr. Ganesh Masane",
    role: "Laboratory Assistant",
    image: "/img/faculty/ganesh.masane.jpg",
    bio: "Diploma(Hardware and Networking)",
    category: "non-teaching",
  },
];

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
    {/* Responsive padding and margin */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-400 mb-3 sm:mb-5 border-b pb-2">
      {/* Responsive heading */}
      {title}
    </h2>
    {children}
  </div>
);

const AboutPage: React.FC = () => {
  const teachingStaff = teachers.filter(
    (teacher) => teacher.category === "teaching"
  );
  const nonTeachingStaff = teachers.filter(
    (teacher) => teacher.category === "non-teaching"
  );

  return (
    <Container>
      <SectionTitle
        preTitle="Meet Our Team"
        title="Faculty of Cyber Security Department"
      >
        Passionate Educators and Technical Experts Shaping Future Cyber Security
        Leaders.
      </SectionTitle>

      <Section title="Our Teaching Faculty">
        <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
          {/* Responsive text */}
          Meet the experienced faculty members of the Cyber Security Department.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8">
          {/* Responsive grid */}
          {teachingStaff.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </Section>

      <Section title="Our Technical Staff">
        <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
          {/* Responsive text */}
          Meet the dedicated non-teaching members of the Cyber Security
          Department.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8">
          {/* Responsive grid */}
          {nonTeachingStaff.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default AboutPage;