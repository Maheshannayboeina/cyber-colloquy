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

const formattedAchievements = achievementsData.map((achievement,index) => ({
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

      <div className="mt-12 space-y-8">
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

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

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
