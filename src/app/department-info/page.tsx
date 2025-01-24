import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-gray-700 dark:text-gray-300 text-base mb-3 leading-relaxed">
    {children}
  </li>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-5">
      {title}
    </h2>
    {children}
  </div>
);

export default function DepartmentInfoPage() {
  return (
    <Container>
      <SectionTitle preTitle="Cyber Security" title="Department Information">
        Shah and Anchor Kutchhi Engineering College
      </SectionTitle>

      <Section title="About">
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          Welcome to the Cyber Security Department at Shah and Anchor Kutchhi
          Engineering College. We are dedicated to preparing students ethically
          in the field of cyber security, and making them capable of leading the
          technical, economic, social, and ethical development of society.
        </p>
      </Section>

      <Section title="Vision & Mission">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Vision
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          To be a high-repute focused department preparing students ethically in
          the field of cyber security and making them capable to lead technical,
          economic, social, and ethical development of society.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Mission
        </h3>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside text-lg">
          <ListItem>
            To provide an academic environment that fosters the development of
            knowledge, skills, values, and confidence to take leadership in
            Cyber Security.
          </ListItem>
          <ListItem>
            To cultivate research and entrepreneurship culture resulting in
            knowledge and innovative technologies that contribute to the
            sustainable development of society.
          </ListItem>
          <ListItem>To enhance academic and corporate collaborations.</ListItem>
        </ul>
      </Section>

      <Section title="Program Specific Outcomes">
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside text-lg">
          <ListItem>
            The Cyber Security graduates are able to gain a thorough
            understanding of the Cyber Security landscape, including its growing
            threats and vulnerabilities.
          </ListItem>
          <ListItem>
            They will develop skills to comprehend and anticipate future
            challenges, as well as be articulate in addressing stakeholders.
          </ListItem>
          <ListItem>
            Graduates will use ethical tools and technologies for the analysis,
            design, and implementation of Cyber Security solutions without
            compromising privacy or security.
          </ListItem>
        </ul>
      </Section>

      <Section title="Program Educational Objectives">
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside text-lg">
          <ListItem>
            Graduates will apply their knowledge to build effective security
            solutions and products for the benefit of society.
          </ListItem>
          <ListItem>
            They will work and communicate effectively in interdisciplinary
            environments, demonstrating leadership skills.
          </ListItem>
          <ListItem>
            Graduates will engage in lifelong learning and professional
            development through self-study, continuing education, or graduate
            studies.
          </ListItem>
        </ul>
      </Section>

      <Section title="Program Outcomes">
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside text-lg">
          <ListItem>
            <strong>Engineering knowledge:</strong> Apply knowledge of
            mathematics, science, engineering fundamentals, and engineering
            specialization to solve complex engineering problems.
          </ListItem>
          <ListItem>
            <strong>Problem analysis:</strong> Identify and analyze complex
            problems using engineering sciences, drawing substantiated
            conclusions.
          </ListItem>
          <ListItem>
            <strong>Design/development of solutions:</strong> Design solutions
            for complex engineering problems that meet specified needs, ensuring
            public health and safety.
          </ListItem>
          <ListItem>
            <strong>Modern tool usage:</strong> Apply modern engineering and IT
            tools for complex tasks while understanding their limitations.
          </ListItem>
          <ListItem>
            <strong>Communication:</strong> Communicate effectively with the
            engineering community and society at large, creating reports and
            documentation, and giving presentations.
          </ListItem>
          <ListItem>
            <strong>Life-long learning:</strong> Recognize the need for
            independent and life-long learning in the context of technological
            change.
          </ListItem>
        </ul>
      </Section>

      <Section title="Accreditations">
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Computer Engineering and Information Technology programs are
          accredited by NBA for 3 years from AY 2022-23.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Electronics and Telecommunication program is accredited by NBA for 3
          years from AY 2024-25.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          Accredited with 'A' Grade (2021) by NAAC for 5 years.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Ranked in band 251-300 (2020) by NIRF.
        </p>
      </Section>
    </Container>
  );
}
