//src/app/values-impact/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React from "react";
import DrivingValuesSection from "@/components/DrivingValuesSection"; // Keep the DrivingValuesSection component for the cards

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

export default function ValuesImpactPage() {
  return (
    <Container>
      <SectionTitle
        preTitle="Our Core Beliefs"
        title="Driving Values and Impact"
      >
        Explore the principles and impact that guide our Cyber Security
        Department.
      </SectionTitle>

      <Section title="Our Core Values">
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          At the heart of our Cyber Security Department are the values that
          drive our actions and shape our community. We believe in:
        </p>
        <ul className="text-gray-300 list-disc list-inside text-lg space-y-3">
          <li>
            <strong>Ethical Leadership:</strong> We are committed to fostering
            ethical leaders in cybersecurity.
          </li>
          <li>
            <strong>Innovation and Research:</strong> We champion innovation and
            cutting-edge research.
          </li>
          <li>
            <strong>Collaboration and Community:</strong> We believe in the
            power of collaboration and community engagement.
          </li>
          <li>
            <strong>Impactful Contributions:</strong> We strive to make
            significant contributions to the field and society.
          </li>
        </ul>
        <p className="text-gray-300 mt-6 text-lg leading-relaxed">
          These values are reflected in everything we do, from our teaching
          methods to our research initiatives and our engagement with the wider
          community.
        </p>
      </Section>

      <Section title="Explore Our Impact Areas">
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Discover the key areas where our Cyber Security Department is making a
          significant impact. Click on the areas below to learn more:
        </p>
        <DrivingValuesSection />{" "}
        {/* Include the DrivingValuesSection here to render the cards */}
      </Section>

      <Section title="Commitment to Ethical Cyber Security">
        <p className="text-gray-300 text-lg leading-relaxed">
          Our unwavering commitment to ethical cyber security leadership is
          central to our mission. We prepare students to not only be technically
          proficient but also to lead with integrity, ensuring a safer and more
          secure digital world for everyone.
        </p>
      </Section>
    </Container>
  );
}
