// components/Sponsors.js
import Image from "next/image";
import Link from "next/link";
import { sponsors } from "./sponsorsData";

export const Sponsors = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Our Sponsors
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
        {sponsors.map((sponsor) => (
          <Link
            key={sponsor.id}
            href={sponsor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] bg-white bg-opacity-90 rounded-lg p-4">
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                width={200} // Keep consistent with max-w
                height={50}  // Maintain aspect ratio
                placeholder="blur"
                blurDataURL={sponsor.blurDataUrl}
                className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};