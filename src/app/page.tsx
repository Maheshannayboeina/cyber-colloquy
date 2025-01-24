// src/app/page.tsx
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
// import { Video } from "@/components/Video";  Remove the single video component import
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Impact } from "@/components/impact";
import HeroCarousel from "@/components/HeroCarousel";
import { benefitOne, benefitTwo } from "@/components/data";
import VideoCarousel from "@/components/VideoCarousel"; // Import the new VideoCarousel


export default function Home() {
    const heroSlides = [
        {
          imageUrl: "/img/events/colloquy4.0_banner_2.png",
          title: "",
          description: ""
        },
        {
          imageUrl: "/img/events/banner2.png",
          title: "",
          description: ""
        },
        {
          imageUrl: "/img/events/banner3.png",
          title: "",
          description: ""
        },
        // Add more slides as needed
    ];

    const videoSlides = [
        {
            videoId: "e0vbhvP97dU",
            title: "Rick Roll",
            description: "Never gonna give you up"
        },
        {
            videoId: "dQw4w9WgXcQ",
            title: "Rick Roll",
            description: "Never gonna give you up"
        },
         {
            videoId: "d5K1g4qoHHc",
            title: "Cybersecurity Presentation",
             description: "Presentation on cyber security "
        },
        {
           videoId: "wipMlBMXhkk",
           title: "Cybersecurity in Action",
           description: "Demo on cyber security"
        },
        // Add More videos
    ];


    return (
        <Container>
            {/* Add the HeroCarousel component */}
            <HeroCarousel slides={heroSlides} />

            {/* Hero Section */}
            <Hero />

            {/* Other Sections */}
            <SectionTitle
                preTitle="Cyber Security Department"
                title="Welcome to Our Cyber Event Platform"
            >
                <p className="text-gray-700 dark:text-gray-300">
                    Our source for all events, achievements, projects, and more from various cyber security communities.
                </p>
            </SectionTitle>

            <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />

            <Impact />

            <SectionTitle
                preTitle="Explore Our Work"
                title="Learn More About Our Activities"
            >
                <p className="text-gray-700 dark:text-gray-300">
                    Discover the various projects, achievements, events, and research
                    initiatives carried out by our department. Dive into the world of
                    Cyber Security with us.
                </p>
            </SectionTitle>
            {/* <Video videoId="dQw4w9WgXcQ" /> Remove the old video component*/}
            <VideoCarousel videos={videoSlides} />  {/*Use the new video carousel component*/}

            <SectionTitle
                preTitle="Student & Faculty Highlights"
                title="Hear From Our Community"
            >
                <p className="text-gray-700 dark:text-gray-300">
                    Testimonials from our students and faculty, which showcase the vibrant
                    and collaborative environment of our department.
                </p>
            </SectionTitle>
            <Testimonials />

            <SectionTitle
                preTitle="Have Questions?"
                title="Frequently Asked Questions"
            >
                <p className="text-gray-700 dark:text-gray-300">
                    Find answers to the common queries about our program, our department,
                    or any cyber security related questions.
                </p>
            </SectionTitle>
            <Faq />
            <Cta />
        </Container>
    );
}