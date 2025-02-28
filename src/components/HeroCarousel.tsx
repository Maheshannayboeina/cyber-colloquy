//src/componentes/HeroCarousel.tsx
"use client";
import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroBanner } from "./HeroBanner";
import { Settings } from "react-slick";

const SliderComponent = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] lg:h-[600px] bg-gray-200 flex items-center justify-center text-gray-500">
      Loading...
    </div>
  ), // Keep loading indicator
}) as any;

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

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const sliderSettings: Settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500, // Original transition speed
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Original autoplay speed
      arrows: true,
      pauseOnHover: true,
      lazyLoad: "ondemand", // Keep lazy loading
      beforeChange: (_: number, next: number) => setCurrentSlide(next),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
          },
        },
      ],
    }),
    [] // Empty dependency array
  );

  if (slides.length === 0) {
    return (
      <div className="w-full h-[450px] lg:h-[600px] bg-gray-200 flex items-center justify-center text-gray-500">
        No slides to display
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-md relative">
      <SliderComponent ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={`${slide.imageUrl}-${slide.title}`} className="relative">
            <div className="h-[450px] lg:h-[600px]">
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
      </SliderComponent>
    </div>
  );
};

export default HeroCarousel;
