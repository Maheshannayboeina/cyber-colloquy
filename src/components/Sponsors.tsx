import Image from "next/image";
import { sponsors } from "./sponsorsData";

export const Sponsors = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h2 className="text-xl font-semibold text-center text-white">
        Trusted by <span className="text-indigo-600">500+</span> Students
      </h2>
      <div className="flex flex-wrap justify-center items-center mt-8">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="p-2">
            <Image
              src={sponsor.logo}
              width={sponsor.width}
              height={sponsor.height}
              alt={sponsor.name}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
