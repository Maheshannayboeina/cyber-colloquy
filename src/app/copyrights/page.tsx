"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { ExpandableCard } from "@/components/expandable-card";
import { copyrightsData } from "@/components/CopyrightsData"; // Import Copyrights Data
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react"; // Import React

const ITEMS_PER_PAGE = 6;

// Format copyrights data to match ExpandableCard's expected format
const formattedCopyrights = copyrightsData.map((copyright, index) => {
  const applicantNames = copyright.applicantName.join(", "); // Join applicant names into a string
  const dateApplied = new Date(copyright.dateAppliedForCopyright).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  }); // Format date

  return {
    key: index,
    title: copyright.titleOfWork,
    description: `Diary No: ${copyright.diaryNo} | AY: ${copyright.ay}`, // Combine Diary No and AY for description
    src: "/img/copyright-placeholder.svg?height=400&width=600", // Placeholder image for copyrights, you can create copyright-placeholder.svg in public/img or use a generic one
    date: `Applied Date: ${dateApplied}`, // Display formatted applied date
    content: () => ( // Changed to return a function that returns JSX
      <div className="space-y-4">
        <p><strong>Applicant Name(s):</strong> {applicantNames}</p>
        <p><strong>Department:</strong> {copyright.departmentName}</p>
        <p><strong>Status:</strong> {copyright.status}</p>
        <p><strong>Copyright Certificate Received Date:</strong> {copyright.copyrightCertificateReceivedDate}</p>
        <p><strong>ROC Number:</strong> {copyright.rocNumber}</p>
      </div>
    ),
  };
});

export default function CopyrightsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(formattedCopyrights.length / ITEMS_PER_PAGE);

  return (
    <Container>
      <SectionTitle preTitle="Our Achievements" title="Copyrights - Cyber Security Department">
        Explore the copyrights achieved by the Cyber Security Department, showcasing our innovative and creative works.
      </SectionTitle>

      <div className="mt-12 space-y-8">
        <ExpandableCard
          cards={formattedCopyrights}
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