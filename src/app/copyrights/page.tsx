//src/app/copyrights/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React, { useState, useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { copyrightsData } from "@/components/CopyrightsData"; // Updated import path for copyrightsData

type Copyright = { // Define a type for Copyright data
  sNo: number;
  diaryNo: string;
  applicantName: string[];
  titleOfWork: string;
  departmentName: string;
  status: string;
  copyrightCertificateReceivedDate: string;
  rocNumber: string;
  dateAppliedForCopyright: string;
  ay: string;
  shortDescription?: string;
};

const ITEMS_PER_PAGE = 6;

export default function CopyrightsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const copyrights = useMemo(() => copyrightsData as Copyright[], []); // Use copyrightsData directly and type it

  const totalPages = useMemo(
    () => Math.ceil(copyrights.length / ITEMS_PER_PAGE),
    [copyrights.length]
  );

  const paginatedCopyrights = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return copyrights.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, copyrights]);

  return (
    <Container>
      <SectionTitle
        preTitle="Our Achievements"
        title="Copyrights - Cyber Security Department"
      >
        Explore the copyrights achieved by the Cyber Security Department,
        showcasing our innovative and creative works.
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
        {paginatedCopyrights.map((copyright, index) => (
          <div
            key={copyright.sNo}
            className="bg-gray-800/30 hover:bg-gray-800/80 shadow-md rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col h-full">
              <h3
                className={`font-bold text-white text-lg sm:text-xl mb-2 transition-colors duration-300 ${
                  hoveredCard === index ? "text-indigo-400" : ""
                }`}
              >
                {copyright.titleOfWork}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-4 line-clamp-2">
                {copyright.shortDescription}
              </p>
              {hoveredCard === index && (
                <div className="mt-auto">
                  <p className="text-gray-400 text-sm sm:text-base mb-1">
                    <span className="font-semibold text-gray-300">
                      Applicant Name(s):
                    </span>
                    {copyright.applicantName.join(", ") || "N/A"}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base mb-1">
                    <span className="font-semibold text-gray-300">
                      Department:
                    </span>
                    {copyright.departmentName || "N/A"}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base mb-1">
                    <span className="font-semibold text-gray-300">
                      Status:
                    </span>
                    {copyright.status || "N/A"}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base mb-1">
                    <span className="font-semibold text-gray-300">
                      Certificate Date:
                    </span>
                    {copyright.copyrightCertificateReceivedDate
                      ? new Date(copyright.copyrightCertificateReceivedDate).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })
                      : "N/A"}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    <span className="font-semibold text-gray-300">
                      ROC Number:
                    </span>
                    {copyright.rocNumber || "N/A"}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 sm:mt-8">
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