import Image from "next/image";
import Link from "next/link";
import { sponsors } from "./sponsorsData";

export const Sponsors = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h2 className="text-xl font-semibold text-center text-white">
        Trusted by{" "}
        <span className="bg-indigo-600 text-white font-extrabold px-3 py-1 rounded-md">
          500+
        </span>{" "}
        Students
      </h2>
      <div className="flex flex-wrap justify-center items-center mt-8">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="p-2">
            <Link
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={sponsor.imageUrl}
                width={300} // Increased width
                height={46} // Increased height
                alt={sponsor.name}
                className="object-contain transition-transform duration-300 hover:scale-105 w-full h-auto" // Responsive classes
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};