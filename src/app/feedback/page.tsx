//src/app/feedback/page.tsx
"use client";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link"; // Import the Link component

const FeedbackPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        preTitle="Feedback"
        title="We Value Your Feedback"
        align="center"
        className="text-blue-500"
      >
        The feedback form will appear here after the event is over.
        <br />
        In the mean time check out our latest events.
      </SectionTitle>
      <div className="flex justify-center space-x-2 mt-2">
        {/* External link - keep the <a> tag */}
        <a
          href="https://forms.gle/your-feedback-form-link"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feedback Form
        </a>
        {/* Internal link - use the <Link> component */}
        <Link
          href="/events/4"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
        >
          Cyber Colloquy 4.0
        </Link>
      </div>
    </Container>
  );
};

export default FeedbackPage;
