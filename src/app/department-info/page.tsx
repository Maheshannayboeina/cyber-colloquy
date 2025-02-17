//src/app/department-info/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-3xl font-semibold text-indigo-400 mb-5 border-b pb-2">
      {title}
    </h2>
    {children}
  </div>
);

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <li className="text-gray-300 text-lg leading-relaxed mb-3">
    {children}
  </li>
);

const Vision = () => (
    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
      To be a nationally recognized Cyber Security Department, ethically preparing
      students for leadership roles that drive technological, economic, social,
      and ethical progress.
    </p>
);

const Mission = () => (
  <ul className="text-gray-300 list-disc list-inside text-lg space-y-3">
    <ListItem>
      Cultivate leaders in Cyber Security, equipped with cutting-edge knowledge,
      critical thinking, and a commitment to ethical practice.
    </ListItem>
    <ListItem>
      Foster innovation and research to develop sustainable technologies that
      address the evolving challenges of the digital age.
    </ListItem>
    <ListItem>
      Forge meaningful collaborations with academic institutions and industry
      partners to enhance learning and create opportunities for our students.
    </ListItem>
  </ul>
);

const ProgramSpecificOutcomes = () => (
  <ul className="text-gray-300 list-disc list-inside text-lg space-y-3">
    <ListItem>
      Master the core principles of cyber security, encompassing threats,
      vulnerabilities, and risk management.
    </ListItem>
    <ListItem>
      Acquire the analytical skills necessary to anticipate future cyber
      security challenges and effectively communicate solutions to diverse
      audiences.
    </ListItem>
    <ListItem>
      Demonstrate ethical responsibility by using appropriate tools and
      technologies to develop solutions that protect privacy and uphold security
      standards.
    </ListItem>
  </ul>
);

const ProgramEducationalObjectives = () => (
  <ul className="text-gray-300 list-disc list-inside text-lg space-y-3">
    <ListItem>
      Excel as ethical cyber security professionals, building secure products and
      implementing solutions that benefit society.
    </ListItem>
    <ListItem>
      Demonstrate leadership and teamwork skills, effectively collaborating in
      interdisciplinary environments to drive innovation.
    </ListItem>
    <ListItem>
      Commit to continuous professional development through self-study,
      advanced education, and active engagement in the cyber security community.
    </ListItem>
  </ul>
);

const ProgramOutcomes = () => (
  <ul className="text-gray-300 list-disc list-inside text-lg space-y-3">
    <ListItem>
      <strong>Engineering knowledge:</strong> Apply mathematical, scientific, and
      engineering principles to solve complex cyber security challenges.
    </ListItem>
    <ListItem>
      <strong>Problem analysis:</strong> Systematically identify, analyze, and solve
      complex cyber security problems using critical thinking and evidence-based
      approaches.
    </ListItem>
    <ListItem>
      <strong>Design/development of solutions:</strong> Design secure and robust
      cyber security solutions that meet specific needs, adhering to ethical
      principles and ensuring public safety.
    </ListItem>
    <ListItem>
      <strong>Modern tool usage:</strong> Utilize modern cyber security tools and
      technologies effectively, recognizing their limitations and potential.
    </ListItem>
    <ListItem>
      <strong>Communication:</strong> Communicate cyber security concepts and solutions
      clearly and effectively to diverse audiences, both technical and non-technical.
    </ListItem>
    <ListItem>
      <strong>Life-long learning:</strong> Embrace the importance of continuous learning
      and professional development in response to the rapidly evolving cyber
      security landscape.
    </ListItem>
  </ul>
);

const Accreditations = () => (
  <>
    <p className="text-gray-300 mb-4 text-lg">
      <strong>Computer Engineering and Information Technology Programs:</strong> Accredited by NBA for 3 years from AY 2022-23.
    </p>
    <p className="text-gray-300 mb-4 text-lg">
      <strong>Electronics and Telecommunication Program:</strong> Accredited by NBA for 3 years from AY 2024-25.
    </p>
    <p className="text-gray-300 text-lg mb-4">
        <strong>NAAC Accreditation:</strong> Accredited with &apos;A&apos; Grade (2021) by NAAC for 5 years.
    </p>
    <p className="text-gray-300 text-lg">
     <strong>NIRF Ranking:</strong> Ranked in band 251-300 (2020) by NIRF.
    </p>
  </>
);

export default function DepartmentInfoPage() {
  return (
    <Container>
      <SectionTitle preTitle="Cyber Security Department" title="Empowering Ethical Cyber Security Leaders">
        Explore our vision, mission, and objectives in shaping the next generation of cyber security experts.
      </SectionTitle>

      <Section title="About Us">
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Welcome to the Cyber Security Department at Shah and Anchor Kutchhi
          Engineering College! We are committed to fostering ethical cyber security
          professionals who are not only technically skilled but also equipped to
          lead with integrity and address the global challenges of our digital world.
        </p>
      </Section>

      <Section title="Vision & Mission">
        <Vision />
        <Mission />
      </Section>

      <Section title="Program Specific Outcomes">
        <ProgramSpecificOutcomes />
      </Section>

      <Section title="Program Educational Objectives">
        <ProgramEducationalObjectives />
      </Section>

      <Section title="Our Values - Program Outcomes">
        <ProgramOutcomes />
      </Section>

      <Section title="Recognitions - Accreditations">
        <Accreditations />
      </Section>
    </Container>
  );
}