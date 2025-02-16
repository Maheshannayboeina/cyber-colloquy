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
    <div className="relative w-full">
      <div className="">
        <Image
          src={imageUrl}
          alt={title || "Cyber Colloquy Event Banner"}
          width={1920}
          height={400}
          className="object-cover w-full"
        />
        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent flex items-start justify-between">
          <div>
            <BoxReveal>
              <h1 className="text-5xl font-extrabold text-white mb-2">
                {firstWord} <AuroraText>{restTitle}</AuroraText>
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.75}>
              <p className="text-lg text-gray-300 mb-4">{subtitle}</p>
              <p className="text-base text-gray-300 leading-relaxed">
                {description}
              </p>
            </BoxReveal>
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
  );
};

export default HeroBanner;