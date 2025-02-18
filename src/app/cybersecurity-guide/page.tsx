// src/app/cybersecurity-guide/page.tsx
import VideoCarousel from "@/components/VideoCarousel";
import { SectionTitle } from "@/components/SectionTitle";

const videoSlides = [
  {
    videoId: "e0vbhvP97dU",
    title: "Rick Roll",
    description: "Never gonna give you up",
  },
  {
    videoId: "PF8w9keUGnI",
    title: "Rick Roll",
    description: "Never gonna give you up",
  },
  {
    videoId: "d5K1g4qoHHc",
    title: "Cybersecurity Presentation",
    description: "Presentation on cyber security ",
  },
  {
    videoId: "wipMlBMXhkk",
    title: "Cybersecurity in Action",
    description: "Demo on cyber security",
  },
  {
    videoId: "1n0SWF831zU",
    title: "Cybersecurity in Action",
    description: "Demo on cyber security",
  },
  {
    videoId: "d5K1g4qoHHc",
    title: "Cybersecurity in Action",
    description: "Demo on cyber security",
  },
  {
    videoId: "7AqDBEmSpRo",
    title: "Cybersecurity in Action",
    description: "Demo on cyber security",
  },
  // Add More videos
];



export default function CybersecurityGuidePage() {
  return (
    <div className="pt-8">
        <SectionTitle
          preTitle="Learn More"
          title="Cybersecurity Guide Videos"
        >
          Explore our collection of videos on cybersecurity.
        </SectionTitle>
        <VideoCarousel videos={videoSlides} />
      </div>
  );
}