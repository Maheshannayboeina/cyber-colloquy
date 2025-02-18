// src/components/Impact.tsx
"use client";
import React, { useState } from "react";
import {
  Coins,
  Building2,
  Book,
  FileText,
  Users,
  Shield,
  Award,
  Lightbulb,
  LayoutGrid,
} from "lucide-react";
import { Counter } from "./ui/counter";
import { Container } from "./Container"; // Import Container

interface Stat {
  number: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

const stats: Stat[] = [
  {
    number: 27,
    label: "Project Grant",
    icon: <Coins className="h-8 w-8" />,
    suffix: "LAKH+",
  },
  {
    number: 25,
    label: "Sponsored Lab",
    icon: <Building2 className="h-8 w-8" />,
    suffix: "LAKH+",
  },
  {
    number: 50,
    label: "Publications",
    icon: <Book className="h-8 w-8" />,
    suffix: "+",
  },
  {
    number: 14,
    label: "Books & Books Chapters",
    icon: <Book className="h-8 w-8" />,
    suffix: "+",
  },
  {
    number: 50,
    label: "Copyrights",
    icon: <FileText className="h-8 w-8" />,
    suffix: "+",
  },
  {
    number: 195,
    label: "Internship",
    icon: <Users className="h-8 w-8" />,
    suffix: "+",
  },
  {
    number: 10,
    label: "Consultancy & Sponsorship",
    icon: <Shield className="h-8 w-8" />,
    suffix: "LAKH+",
  },
  {
    number: 7,
    label: "Patents",
    icon: <Award className="h-8 w-8" />,
    suffix: "+",
  },
  {
    number: 30,
    label: "Industry Collaborators",
    icon: <LayoutGrid className="h-8 w-8" />,
    suffix: "+",
  },
  {
    number: 10,
    label: "Students Achievements",
    icon: <Lightbulb className="h-8 w-8" />,
    suffix: "LAKH+",
  },
];

export function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mt-8">
        {/* Key Change:  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 */}
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 md:p-8 rounded-xl border border-dashed border-blue-800 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-500/10"
            // Simplified hover styles using Tailwind classes
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="mb-2 sm:mb-4 md:mb-6" // Responsive margin
              style={{
                color:
                  hoveredIndex === index
                    ? "rgb(59, 130, 246)"
                    : "rgb(37, 99, 235)",
              }}
            >
              {stat.icon}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
              {/* Responsive font sizes */}
              <Counter
                end={stat.number}
                suffix={stat.suffix || "+"}
                duration={2}
              />
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              {/* Responsive font sizes */}
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}