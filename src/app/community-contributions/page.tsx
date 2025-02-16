"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ExpandableCard } from "@/components/expandable-card";
import communityContributionsData from "@/components/communityContributionsData"; // Assuming you will create this data file
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

// Format your community contributions data to match ExpandableCard's expected format
const formattedContributions = communityContributionsData.map((contribution, index) => ({
    key: index,
  title: contribution.contributionTitle, // Adjust based on your data structure - e.g., contribution.title
  description: contribution.branchName, // Adjust based on your data structure - e.g., contribution.branch
  src: contribution.banner || "/placeholder.svg?height=400&width=600", // Adjust based on your data structure - e.g., contribution.image, and placeholder path
  date: contribution.date, // Adjust based on your data structure - e.g., contribution.contributionDate
  content: contribution.details, // Adjust based on your data structure - e.g., contribution.contributionDetails
}));

export default function CommunityContributionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(formattedContributions.length / ITEMS_PER_PAGE);

  return (
    <Container>
      <SectionTitle preTitle="Our Impact" title="Community Contributions - Cyber Security Branches">
        Explore our branches impactful contributions to the community in cyber security.
      </SectionTitle>

      <div className="mt-12 space-y-8">
        <ExpandableCard
          cards={formattedContributions}
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