// src/app/page.tsx
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
// import { Video } from "@/components/Video";  Remove the single video component import
// import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Impact } from "@/components/impact";
import HeroCarousel from "@/components/HeroCarousel"; // Import HeroCarousel - not used but kept import just in case for future
import { benefitOne, benefitTwo } from "@/components/data";
import VideoCarousel from "@/components/VideoCarousel"; // Import the new VideoCarousel
// import { AuroraHero } from "@/components/AurorHero"; // Assuming you are not using AuroraHero anymore
import { HeroBanner } from "@/components/HeroBanner"; // Import HeroBanner

export default function Home() {
  const heroSlides = [
    {
      imageUrl: "/img/Banner.png", // Replace with your actual banner image path
      title: "Cyber Colloquy 4.0",
      description: "Join us for Cyber Colloquy 4.0, the premier event for cybersecurity enthusiasts and professionals alike! Explore cutting-edge topics, engage with industry experts, and network with peers.",
      subtitle: "Engage | Learn | Innovate",
      buttonText: "Explore Events",
      buttonHref: "/events", // Adjust this link to your events page
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

  return (
    <> {/*  Changed Container to a Fragment (<>) */}
      {/* Add the HeroCarousel component */}
      {/* <AuroraHero /> */}
       {/* <HeroCarousel slides={heroSlides} /> */} {/* Commented out HeroCarousel */}
       <HeroBanner
          imageUrl={heroSlides[0].imageUrl}
          title={heroSlides[0].title}
          description={heroSlides[0].description}
          subtitle={heroSlides[0].subtitle}
          buttonText={heroSlides[0].buttonText}
          buttonHref={heroSlides[0].buttonHref}
        />
      {/* Hero Section */}
      {/* <Container> */}
        {/* <Hero /> */}
        {/* Other Sections */}
         {/* <SectionTitle
          preTitle="Cyber Security Department"
          title="Welcome to Our Cyber Event Platform"
        >
          Our source for all events, achievements, projects, and more from various
          cyber security communities.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} /> */}
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
        {/* <Video videoId="dQw4w9WgXcQ" /> Remove the old video component*/}
        <VideoCarousel videos={videoSlides} />{" "}
        {/*Use the new video carousel component*/}
        {/* <SectionTitle
          preTitle="Student & Faculty Highlights"
          title="Hear From Our Community"
        >
          Testimonials from our students and faculty, which showcase the vibrant
          and collaborative environment of our department.
        </SectionTitle> */}
        {/* <Testimonials /> */}
        <SectionTitle
          preTitle="Have Questions?"
          title="Frequently Asked Questions"
        >
          Find answers to the common queries about our program, our department, or
          any cyber security related questions.
        </SectionTitle>
        <Faq />
        <Cta />
      {/* </Container> */}
    </>
  );
}