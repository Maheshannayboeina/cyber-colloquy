// src/components/HeroBanner.tsx
import React from "react";
import Image from "next/image";
import { BoxReveal } from "@/components/BoxReveal";
import InteractiveHoverButton from "@/components/InteractiveHoverButton";
import { AuroraText } from "@/components/AuroraText"; // Import AuroraText

interface HeroBannerProps {
    imageUrl: string;
    title: string;
    description: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
    imageUrl = "/img/events/cybercolloquy4.0_banner.png",
    title,
    description,
    subtitle = "Your Gateway to Cybersecurity Insights",
    buttonText = "Explore More",
    buttonHref = "/explore",
}) => {
    // Split the title into the first word and the rest
    const [firstWord, ...restOfTitle] = title.split(" ");
    const restTitle = restOfTitle.join(" ");

    return (
        <div className="relative w-full h-full"> {/* Changed to h-full */}
            <div className="relative h-full"> {/* Changed to h-full */}
                <Image
                    src={imageUrl}
                    alt={title || "Cyber Colloquy Event Banner"}
                    fill
                    sizes="100vw" // Added sizes attribute for responsiveness
                    className="object-cover w-full h-full"
                    priority
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full bg-gradient-to-t from-black to-transparent flex items-start justify-center sm:justify-between text-center sm:text-left"> {/* Adjusted padding and alignment */}
                    <div className="sm:max-w-md md:max-w-2xl lg:max-w-3xl"> {/* Adjusted max-w for responsiveness */}
                        <BoxReveal>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2"> {/* Adjusted font sizes */}
                                {firstWord} <AuroraText>{restTitle}</AuroraText>
                            </h1>
                        </BoxReveal>
                        <BoxReveal duration={0.75}>
                            <p className="text-base sm:text-lg text-gray-300 mb-4">{subtitle}</p> {/* Adjusted font sizes */}
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed"> {/* Adjusted font sizes */}
                                {description}
                            </p>
                        </BoxReveal>
                        <div className="mt-4 sm:mt-6"> {/* Adjusted margin-top */}
                            <InteractiveHoverButton
                                onClick={() => {
                                    if (buttonHref) {
                                        window.location.href = buttonHref;
                                    }
                                }}
                            >
                                {buttonText}
                            </InteractiveHoverButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;