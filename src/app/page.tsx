//src/app/page.tsx
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
// import { Video } from "@/components/Video";  Remove the single video component import
// import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Impact } from "@/components/impact";
import HeroCarousel from "@/components/HeroCarousel"; // Import HeroCarousel
import { benefitOne, benefitTwo } from "@/components/data";
import VideoCarousel from "@/components/VideoCarousel"; // Import the new VideoCarousel
// import { HeroBanner } from "@/components/HeroBanner"; // Import HeroBanner - No longer needed

export default function Home() {
  const heroSlides = [
    {
      imageUrl: "/img/banners/project.png", // Replace with your actual banner image path
      title: "Cyber Colloquy 4.0",
      description: "ADOPTING INDIA'S DPDP FOR A PRIVACY-CENTRIC FUTURE",
      subtitle: "DPDP: FROM COMPLIANCE TO CONFIDENCE",
      buttonText: "Explore Events",
      buttonHref: "/cyber-colloquy-4.0", // Adjust this link to your events page
    },
    {
      imageUrl: "/img/banners/colloquy.png", // Replace with your actual banner image path
      title: "Project Expo",
      description: "Discover exciting cyber security projects at our annual Expo! Network with talent, explore potential collaborations, and see the latest advancements. Register now!",
      subtitle: "Skill Up | Protect | Advance",
      buttonText: "Explore More",
      buttonHref: "/project-expo", // Adjust this link to your workshops page
    },
    {
      imageUrl: "/img/banners/industry.png", // Replace with your actual banner image path
      title: "Industry Attendies",
      description: "Gain exclusive insights and partner with SAKEC's Cyber Security Department! Attend events, participate in research, and help drive innovation. Register as an Industry Attendee today.",
      subtitle: "Insights | Knowledge | Future",
      buttonText: "Know More",
      buttonHref: "/industry-professional", // Adjust this link to your speakers page
    },
    {
      imageUrl: "/img/banners/sponsor.png", // Replace with your actual banner image path
      title: "Call For Sponsors",
      description: "Empower cyber security's future! Sponsor our events and gain recognition within a thriving community of students, researchers, and industry leaders. Inquire today!",
      subtitle: "Connect | Collaborate | Grow",
      buttonText: "Join Community",
      buttonHref: "/sponsor", // Adjust this link to your community page
    },
    {
      imageUrl: "/img/banners/award.png", // Replace with your actual banner image path
      title: "Award Nominations",
      description: "Give rising stars the spotlight they deserve! Award nominations provide valuable recognition and boost career opportunities. Nominate a deserving candidate for our prestigious awards.",
      subtitle: "Inform | Secure | Vigilant",
      buttonText: "Nominate",
      buttonHref: "/awards", // Adjust this link to your threats page
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
       <HeroCarousel slides={heroSlides} /> {/* HeroCarousel Component is added here */}
       {/* <HeroBanner  // HeroBanner Component Removed
          imageUrl={heroSlides[0].imageUrl}
          title={heroSlides[0].title}
          description={heroSlides[0].description}
          subtitle={heroSlides[0].subtitle}
          buttonText={heroSlides[0].buttonText}
          buttonHref={heroSlides[0].buttonHref}
        /> */}
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