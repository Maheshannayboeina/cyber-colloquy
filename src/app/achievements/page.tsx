"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ExpandableCard } from "@/components/expandable-card";
import achievementsData from "@/components/achievementsData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

const formattedAchievements = achievementsData.map((achievement, index) => ({
  key: index,
  title: achievement.achievement,
  description: achievement.name,
  src: achievement.banner || "/placeholder.svg?height=400&width=600",
  date: achievement.date,
  content: achievement.details,
}));

export default function AchievementsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(formattedAchievements.length / ITEMS_PER_PAGE);

  return (
    <Container>
      <SectionTitle preTitle="Our College" title="CYSE Achievements">
        Here are the achievements of our Cyber Security Department.
      </SectionTitle>

      <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
        {/* Responsive margin and spacing */}
        <ExpandableCard
          cards={formattedAchievements}
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
        />

        <div className="flex justify-center">
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

              {/* Show fewer page numbers on small screens */}
              {totalPages <= 5 ? ( // Show all page numbers if 5 or fewer
                [...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))
              ) : (
                <>
                  {/* Show first page */}
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setCurrentPage(1)}
                      isActive={currentPage === 1}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>

                  {/* Show ... if needed */}
                  {currentPage > 2 && (
                    <PaginationItem>
                      <span>...</span>
                    </PaginationItem>
                  )}

                  {/* Show current page and immediate neighbors */}
                  {Array.from(
                    { length: 3 },
                    (_, index) => currentPage - 1 + index
                  )
                    .filter((page) => page > 1 && page < totalPages)
                    .map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                  {/* Show ... if needed */}
                  {currentPage < totalPages - 1 && (
                    <PaginationItem>
                      <span>...</span>
                    </PaginationItem>
                  )}

                  {/* Show last page */}
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setCurrentPage(totalPages)}
                      isActive={currentPage === totalPages}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
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
      </div>
    </Container>
  );
}
