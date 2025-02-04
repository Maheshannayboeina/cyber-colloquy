// components/HeroCarousel.tsx
'use client'; // Mark this as a client component
import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeroBanner } from './HeroBanner';

interface HeroSlide {
    imageUrl: string;
    title: string;
    description: string;
}

interface HeroCarouselProps {
    slides: HeroSlide[];
}

const Slider = dynamic(() => import('react-slick'), {
        ssr: false
});


const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Remove arrows
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index}>
                    <HeroBanner
                        imageUrl={slide.imageUrl}
                        title={slide.title}
                        description={slide.description}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default HeroCarousel;