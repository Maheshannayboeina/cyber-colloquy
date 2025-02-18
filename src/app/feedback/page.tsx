import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

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
        <br/>
        In the mean time check out our latest events.
      </SectionTitle>
      <div className="flex justify-center space-x-2 mt-2">
        {/* <a
          href="https://forms.gle/your-feedback-form-link"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feedback Form
        </a> */}
        <a
          href="/events/4"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
        >
          Cyber Colloquy 4.0
        </a>
      </div>
    </Container>
  );
};

export default FeedbackPage;