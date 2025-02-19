// src/app/page.tsx
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Impact } from "@/components/impact";
import HeroCarousel from "@/components/HeroCarousel"; // Import HeroCarousel
import VideoCarousel from "@/components/VideoCarousel"; // Import the new VideoCarousel

export default function Home() {
  const heroSlides = [
    {
      imageUrl: "/img/banners/colloquy4.png",
      title: "Cyber Colloquy 4.0",
      description: "ADOPTING INDIA'S DPDP FOR A PRIVACY-CENTRIC FUTURE",
      subtitle: "DPDP: FROM COMPLIANCE TO CONFIDENCE",
      buttonText: "Explore Events",
      buttonHref: "/cyber-colloquy-4.0",
    },
    {
      imageUrl: "/img/banners/project-expo.png",
      title: "Project Expo",
      description:
        "Discover exciting cyber security projects at our annual Expo! Network with talent, explore potential collaborations, and see the latest advancements. Register now!",
      subtitle: "Skill Up | Protect | Advance",
      buttonText: "Explore More",
      buttonHref: "/project-expo",
    },
    {
      imageUrl: "/img/banners/industry.png",
      title: "Industry Attendies",
      description:
        "Gain exclusive insights and partner with SAKEC's Cyber Security Department! Attend events, participate in research, and help drive innovation. Register as an Industry Attendee today.",
      subtitle: "Insights | Knowledge | Future",
      buttonText: "Know More",
      buttonHref: "/industry-professional",
    },
    {
      imageUrl: "/img/banners/sponsor.png",
      title: "Call For Sponsors",
      description:
        "Empower cyber security's future! Sponsor our events and gain recognition within a thriving community of students, researchers, and industry leaders. Inquire today!",
      subtitle: "Connect | Collaborate | Grow",
      buttonText: "Join Community",
      buttonHref: "/sponsor",
    },
    {
      imageUrl: "/img/banners/award.png",
      title: "Award Nominations",
      description:
        "Give rising stars the spotlight they deserve! Award nominations provide valuable recognition and boost career opportunities. Nominate a deserving candidate for our prestigious awards.",
      subtitle: "Inform | Secure | Vigilant",
      buttonText: "Nominate",
      buttonHref: "/awards",
    },
  ];

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
      description: "Presentation on cyber security",
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
  ];

  return (
    <>
      {/* Full-width HeroCarousel */}
      <HeroCarousel slides={heroSlides} />

      {/* Main content wrapped in a responsive container */}
      <Container>
        <SectionTitle
          preTitle="Our Accomplishments"
          title="Achievements and Impact"
        >
          Explore the measurable impact of our Cyber Security Department.
        </SectionTitle>
        <Impact />

        <SectionTitle
          preTitle="Explore Our Work"
          title="Learn More About Our Activities"
        >
          Discover the various projects, achievements, events, and research
          initiatives carried out by our department. Dive into the world of Cyber
          Security with us.
        </SectionTitle>
        <VideoCarousel videos={videoSlides} />

        <SectionTitle
          preTitle="Have Questions?"
          title="Frequently Asked Questions"
        >
          Find answers to the common queries about our program, our department, or
          any cyber security related questions.
        </SectionTitle>
        <Faq />

        <Cta />
      </Container>
    </>
  );
}
