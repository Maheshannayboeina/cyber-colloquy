// components/HeroCarousel.tsx
'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeroBanner } from './HeroBanner';

interface HeroSlide {
    imageUrl: string;
    title: string;
    tagline: string;
    dateWithLocation: string;
    button1Text: string;
    button1Href: string;
    button2Text: string;
    button2Href: string;
}

interface HeroCarouselProps {
    slides: HeroSlide[];
}

const Slider = dynamic(() => import('react-slick'), {
    ssr: false
});


const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0); // Add state for window width

    // Function to update the window width state
    const updateWindowDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
      // Get initial window width
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
        }

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowDimensions);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        responsive: [  // Add responsive settings
            {
                breakpoint: 1024, // Large screens and up
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Medium screens (tablets)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false //maybe turn off arrows
                }
            },
            {
                breakpoint: 480, // Small screens (phones)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false, //maybe turn off dots on very small
                     arrows: false
                }
            }
        ]
    };



    return (
        <div className="w-full overflow-hidden rounded-md">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={`${slide.imageUrl}-${slide.title}`} className="relative"> {/* Make the container relative */}
                         <div  className="h-[450px] lg:h-[600px]">
                        <HeroBanner
                            imageUrl={slide.imageUrl}
                            title={slide.title}
                            tagline={slide.tagline}
                            dateWithLocation={slide.dateWithLocation}
                            button1Text={slide.button1Text}
                            button1Href={slide.button1Href}
                            button2Text={slide.button2Text}
                            button2Href={slide.button2Href}
                            isVisible={index === currentSlide}
                        />
                         </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;