// src/app/page.tsx
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
// import { Faq } from "@/components/Faq"; // Commented out
// import { Cta } from "@/components/Cta"; // Commented out
import { Impact } from "@/components/impact";
import HeroCarousel from "@/components/HeroCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import AboutUs from "@/components/about-us";
import { Speakers } from "@/components/Speakers";
// import { Skeleton } from "@/components/ui/skeleton"; // REMOVED
// import React, { Suspense } from "react"; // REMOVED
import React from "react"; // Reverted to original import

export default function Home() {
  const heroSlides = [
    {
      imageUrl: "/img/banners/colloquy4.0-r.png",
      title: "Cyber Colloquy 4.0",
      tagline: "DPDP: FROM COMPLIANCE TO CONFIDENCE",
      dateWithLocation: "MARCH 21ST -24TH |SAKEC-7TH FLR AUDITORIUM, MUMBAI",
      button1Text: "Register Now!",
      button1Href:
        "https://docs.google.com/forms/d/e/1FAIpQLSdYuWWmDu1T3Z2hQG3Kgd6EFZjFqp4yM0hC__ITg4cWiGgSmA/viewform", // REPLACE WITH ACTUAL FORM
      button2Text: "Learn More",
      button2Href: "/cyber-colloquy-4.0",
    },
    {
      imageUrl: "/img/banners/project-expo-r.png",
      title: "Project Expo",
      tagline: "Skill Up | Protect | Advance",
      dateWithLocation: "Nov 15, 2024 | SAKEC Campus",
      button1Text: "Submit Project",
      button1Href:
        "https://docs.google.com/forms/d/e/1FAIpQLSdBTjPJH0DuFrrSB82Yl5ml492VlWNvLTUIhytKa5dDPLADGw/viewform",
      button2Text: "Explore More",
      button2Href: "/project-expo",
    },
    {
      imageUrl: "/img/banners/register-r.png",
      title: "Industry Attendies",
      tagline: "Insights | Knowledge | Future",
      dateWithLocation: "Various Dates | Online & In-Person",
      button1Text: "Register",
      button1Href:
        "https://docs.google.com/forms/d/e/1FAIpQLSeyCMCsyvNd7BGoc4dKr0dK502KjHMaaX-Lf3eAivj6zOp-EQ/viewform", // REPLACE
      button2Text: "Know More",
      button2Href: "/industry-professional",
    },
    {
      imageUrl: "/img/banners/1-r.png",
      title: "Call For Sponsors",
      tagline: "Connect | Collaborate | Grow",
      dateWithLocation: "Ongoing | Contact Us",
      button1Text: "Sponsor Us",
      button1Href:
        "https://docs.google.com/forms/d/e/1FAIpQLSfXwcZcd9M2TJt_1DkiSwYw3VgqSnndl00fmOU1OcF1kCgK5Q/viewform", // REPLACE
      button2Text: "Join Community",
      button2Href: "/sponsor",
    },
    {
      imageUrl: "/img/banners/2-r.png",
      title: "Award Nominations",
      tagline: "Inform | Secure | Vigilant",
      dateWithLocation: "Deadline: Dec 1, 2024",
      button1Text: "Nominate",
      button1Href:
        "https://docs.google.com/forms/d/e/1FAIpQLSenClnGM83nkAYG-wc1y8ROuQwddD4cXVuHq4DIsrbQrNpZhg/viewform", // REPLACE
      button2Text: "Explore",
      button2Href: "/awards",
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
      {/* Removed Suspense and Skeleton */}
      <HeroCarousel slides={heroSlides} />

      <SectionTitle preTitle="Meet Our Experts" title="Distinguished Speakers">
        Learn from the best in the field. Our speakers bring a wealth of
        knowledge and experience to our events.
      </SectionTitle>
      <Speakers />

      <Container>
        <div className="space-y-16 md:space-y-24">
          <section>
            <SectionTitle
              preTitle="Our Accomplishments"
              title="Achievements and Impact"
            >
              Explore the measurable impact of our Cyber Security Department.
            </SectionTitle>
            <Impact />
          </section>
          <section>
            <SectionTitle
              preTitle="Explore Our Work"
              title="Learn More About Our Activities"
            >
              Discover the various projects, achievements, events, and research
              initiatives carried out by our department. Dive into the world of
              Cyber Security with us.
            </SectionTitle>
            <VideoCarousel videos={videoSlides} />
          </section>
          {/* <section>
            <SectionTitle
              preTitle="Have Questions?"
              title="Frequently Asked Questions"
            >
            Find answers to the common queries about our program, our department, or
              any cyber security related questions.
            </SectionTitle>
            <Faq />
          </section> */}
          <AboutUs />
          {/* <section>
             <Cta />
          </section> */}
        </div>
      </Container>
    </>
  );
}
