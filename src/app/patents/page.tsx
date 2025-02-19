//src/app/patents/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React, { useState, useMemo } from "react"; // Import useMemo
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Patent = {
  sNo: number;
  patentTitle: string;
  inventors: string;
  patentNumber: string;
  filingDate: string;
  shortDescription?: string;
};

const ITEMS_PER_PAGE = 6;

const patentData: Patent[] = [
  // Moved data to a constant outside the component
  {
    sNo: 1,
    patentTitle:
      "Method and System for Detecting and Mitigating Deepfake Attacks",
    inventors: "Dr. Nilakshi Jain, Dr. Shwetambari Borade, Maj Vineet Kumar",
    patentNumber: "202411000123",
    filingDate: "2024-01-05",
    shortDescription:
      "A novel method to identify and counter deepfake threats effectively.",
  },
  {
    sNo: 2,
    patentTitle: "AI-Powered Cyber Hygiene Training Platform",
    inventors: "Dr Shwetambari Borade, Ms. Priyanka Singh, Maj Vineet Kumar",
    patentNumber: "202411000234",
    filingDate: "2024-01-15",
    shortDescription:
      "An intelligent platform for enhancing cyber hygiene practices through AI.",
  },
  {
    sNo: 3,
    patentTitle: "Decentralized Cyber Incident Reporting and Management System",
    inventors: "Dr Shwetambari Borade, Maj Vineet Kumar",
    patentNumber: "202411000345",
    filingDate: "2024-02-01",
    shortDescription:
      "A secure, decentralized system for managing cyber incidents efficiently.",
  },
  {
    sNo: 4,
    patentTitle: "Linux Administration Learning and Practice Environment",
    inventors: "Dr Nilakshi Jain, Maj Vineet Kumar",
    patentNumber: "202411000456",
    filingDate: "2024-02-10",
    shortDescription:
      "A practical environment to learn and master Linux administration skills.",
  },
  {
    sNo: 5,
    patentTitle:
      "HoneyTrack: Advanced Honeycomb Framework for Cyber Threat Intelligence",
    inventors: "Dr.Rupali Vairagade, Ms Meghali Kalyankar, Maj Vineet Kumar",
    patentNumber: "202411000567",
    filingDate: "2024-02-20",
    shortDescription:
      "An innovative honeycomb framework to gather and analyze cyber threat intelligence.",
  },
  {
    sNo: 6,
    patentTitle: "Capture The Flag Based Cybersecurity Education Portal",
    inventors: "Dr Nilakshi Jain, Dr. Shwetambari Borade",
    patentNumber: "202411000678",
    filingDate: "2024-03-01",
    shortDescription:
      "An engaging CTF portal designed for effective cybersecurity education.",
  },
  {
    sNo: 7,
    patentTitle:
      "System for Unmasking Digital Impersonation in Financial Transactions",
    inventors: "Dr Nilakshi Jain, Ms Viskhakha Shinde Koli",
    patentNumber: "202411000789",
    filingDate: "2024-03-10",
    shortDescription:
      "A system to detect and prevent financial fraud through digital impersonation.",
  },
  {
    sNo: 8,
    patentTitle:
      "TrustTrace: Multimedia Deepfake Detection and Verification Platform",
    inventors: "Dr Nilakshi Jain, Dr Shwetambari Borade, Maj Vineet Kumar",
    patentNumber: "202411000890",
    filingDate: "2024-03-20",
    shortDescription:
      "A platform for verifying multimedia content and detecting deepfakes.",
  },
  {
    sNo: 9,
    patentTitle: "Enhanced Cybersecurity Risk Assessment Methodology",
    inventors: "Dr. Shwetambari Borade, Ms. Priyanka Singh",
    patentNumber: "202411000901",
    filingDate: "2024-04-01",
    shortDescription:
      "An improved methodology for assessing and managing cybersecurity risks.",
  },
  {
    sNo: 10,
    patentTitle: "Secure IoT Device Management Framework",
    inventors: "Maj Vineet Kumar, Dr. Nilakshi Jain",
    patentNumber: "202411001012",
    filingDate: "2024-04-10",
    shortDescription:
      "A robust framework for securely managing and monitoring IoT devices.",
  },
];

export default function PatentsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Use useMemo for patents and paginatedPatents
  const patents = useMemo(() => patentData, []);

  const totalPages = useMemo(
    () => Math.ceil(patents.length / ITEMS_PER_PAGE),
    [patents.length]
  );

  const paginatedPatents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return patents.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, patents]);

  return (
    <Container>
      <SectionTitle preTitle="Research & Innovation" title="Patents Filed">
        Patents filed by our faculty and students.
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
        {/* Responsive grid, gap, and margin */}
        {paginatedPatents.map((patent, index) => (
          <div
            key={patent.sNo}
            className="bg-gray-800/30 hover:bg-gray-800/80 shadow-md rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg" // Responsive padding
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col h-full">
              {" "}
              {/* Use flexbox for layout */}
              <h3
                className={`font-bold text-white text-lg sm:text-xl mb-2 transition-colors duration-300 ${
                  hoveredCard === index ? "text-indigo-400" : ""
                }`} // Responsive font size, conditional color
              >
                {patent.patentTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-4 line-clamp-2">
                {patent.shortDescription}
              </p>
              {hoveredCard === index && (
                <div className="mt-auto">
                  {" "}
                  {/* Push details to the bottom on hover */}
                  <p className="text-gray-400 text-sm sm:text-base mb-1">
                    {/* Responsive font size */}
                    <span className="font-semibold text-gray-300">
                      Inventors:
                    </span>{" "}
                    {/* Improved contrast */}
                    {patent.inventors || "N/A"}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base mb-1">
                    {/* Responsive font size */}
                    <span className="font-semibold text-gray-300">
                      Patent Number:
                    </span>{" "}
                    {/* Improved contrast */}
                    {patent.patentNumber || "N/A"}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {/* Responsive font size */}
                    <span className="font-semibold text-gray-300">
                      Filing Date:
                    </span>{" "}
                    {/* Improved contrast */}
                    {patent.filingDate}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 sm:mt-8">
          {/* Responsive margin */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {/* Create an array from 1 to totalPages for mapping */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </Container>
  );
}
