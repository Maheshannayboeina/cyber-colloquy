// app/about/page.tsx
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
    bio: "Prof. Johnson specializes in network security.",
    link: "/teacher/prof-johnson",
    category: "teaching",
  },
  {
    name: "Dr. Shwetambari Borade",
    role: "Assistant Professor",
    image: "/img/faculty/SNB.jpg",
    bio: "Mrs. Davis is passionate about ethical hacking.",
    link: "/teacher/mrs-davis",
    category: "teaching",
  },
  {
    name: "Ms. Pallavi Sawale",
    role: "Lab Instructor",
    image: "/img/faculty/PSW.jpg",
    bio: "Mr. Wilson is an expert in network.",
    link: "/teacher/mr-wilson",
    category: "teaching",
  },
  {
    name: "Mr. Dhananjay Newalkar",
    role: "I/c HOD, Professor",
    image: "/img/faculty/DNW.jpg",
    bio: "Ph.D. (Computer Engineering & Digital Forensic)",
    link: "https://www.linkedin.com/in/dr-nilakshi-jain-7593a264/",
    category: "teaching",
  },
  {
    name: "Ms. Archana Bopche",
    role: "Associate Professor",
    image: "/img/faculty/ABP.jpg",
    bio: "Prof. Johnson specializes in network security.",
    link: "/teacher/prof-johnson",
    category: "teaching",
  },
  {
    name: "Ms. Meghali A Kalyankar",
    role: "Assistant Professor",
    image: "/img/faculty/MAK.jpg",
    bio: "Mrs. Davis is passionate about ethical hacking.",
    link: "/teacher/mrs-davis",
    category: "teaching",
  },
  {
    name: "Ms. Vishakha Shinde",
    role: "Lab Instructor",
    image: "/img/faculty/VKS.jpg",
    bio: "Mr. Wilson is an expert in network.",
    link: "/teacher/mr-wilson",
    category: "teaching",
  },
  {
    name: "Ms. Saraswati Mishra",
    role: "I/c HOD, Professor",
    image: "/img/faculty/SWM.jpg",
    bio: "Ph.D. (Computer Engineering & Digital Forensic)",
    link: "https://www.linkedin.com/in/dr-nilakshi-jain-7593a264/",
    category: "teaching",
  },
  {
    name: "Mr. Shivashankar Bhutekar",
    role: "Associate Professor",
    image: "/img/faculty/SBT.jpg",
    bio: "Prof. Johnson specializes in network security.",
    link: "/teacher/prof-johnson",
    category: "teaching",
  },
  {
    name: "Ms. Priyanka Singh",
    role: "Assistant Professor",
    image: "/img/faculty/PSS.jpg",
    bio: "Mrs. Davis is passionate about ethical hacking.",
    link: "/teacher/mrs-davis",
    category: "teaching",
  },
  {
    name: "Ms. Sneha Shingare",
    role: "Lab Instructor",
    image: "/img/faculty/SSG.jpg",
    bio: "Mr. Wilson is an expert in network.",
    link: "/teacher/mr-wilson",
    category: "teaching",
  },
  {
    name: "Ms. Pranali Pawar",
    role: "I/c HOD, Professor",
    image: "/img/faculty/PPW.jpg",
    bio: "Ph.D. (Computer Engineering & Digital Forensic)",
    link: "https://www.linkedin.com/in/dr-nilakshi-jain-7593a264/",
    category: "teaching",
  },
  {
    name: "Ms. Deepika Burte",
    role: "Associate Professor",
    image: "/img/faculty/DPB.jpg",
    bio: "Prof. Johnson specializes in network security.",
    link: "/teacher/prof-johnson",
    category: "teaching",
  },
  {
    name: "Mr. Sanish Tupe",
    role: "Assistant Professor",
    image: "/img/faculty/STU.jpg",
    bio: "Mrs. Davis is passionate about ethical hacking.",
    link: "/img/faculty/",
    category: "teaching",
  },
  {
    name: "Mr. Vedant Parikh",
    role: "Lab Instructor",
    image: "/img/faculty/VPK.jpg",
    bio: "Mr. Wilson is an expert in network.",
    link: "/teacher/mr-wilson",
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

const About: React.FC = () => {
  const teachingStaff = teachers.filter(
    (teacher) => teacher.category === "teaching"
  );
  const nonTeachingStaff = teachers.filter(
    (teacher) => teacher.category === "non-teaching"
  );

  return (
    <Container>
      <SectionTitle title="Our Teaching Faculty">
        Meet the experienced faculty members of the Cyber Security Department.
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-8">
        {teachingStaff.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>

      <SectionTitle title="Our Technical Staff">
        Meet the dedicated non-teaching members of the Cyber Security
        Department.
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-8">
        {nonTeachingStaff.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>
    </Container>
  );
};

export default About;
