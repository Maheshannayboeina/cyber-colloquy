"use client";
import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroBanner } from "./HeroBanner";
import { FaPause, FaPlay } from "react-icons/fa";
import { Settings } from "react-slick";

// Cast to any to allow ref usage with react-slick
const SliderComponent = dynamic(() => import("react-slick"), {
  ssr: false,
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
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef<any>(null);

  const sliderSettings: Settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: autoplay,
      autoplaySpeed: 3000,
      arrows: true,
      pauseOnHover: true,
      // Optional: Uncomment the following line if your slides have heavy images
      // lazyLoad: "ondemand",
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
    [autoplay]
  );

  const toggleAutoplay = () => {
    if (sliderRef.current) {
      if (autoplay) {
        sliderRef.current.slickPause();
      } else {
        sliderRef.current.slickPlay();
      }
    }
    setAutoplay((prev) => !prev);
  };

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
      {/* Autoplay Control Button */}
      <button
        onClick={toggleAutoplay}
        className="absolute bottom-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={autoplay ? "Pause Autoplay" : "Play Autoplay"}
      >
        {autoplay ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default HeroCarousel;
