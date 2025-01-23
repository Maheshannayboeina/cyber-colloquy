// src/components/Sponsors.tsx
import Image from "next/image";
import { sponsors } from "./sponsorsData";

export const Sponsors = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-xl text-center text-gray-700 dark:text-white">
        Trusted by <span className="text-indigo-600">500+</span> Students
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="pt-2 text-gray-400 dark:text-gray-400"
          >
            <Image
              src={sponsor.logo}
              width={sponsor.width}
              height={sponsor.height}
              alt={sponsor.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
