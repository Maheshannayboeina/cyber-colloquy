"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React, { useState, useEffect } from "react";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
}

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dummy data
    const publicationsArray: Publication[] = [
      {
        title: "The Crime Portal",
        authors: "Dr. Nilakshi Jain",
        journal: "Journal Of Emerging Technologies And Innovative Research",
        year: "2022-23",
      },
      {
        title: "NETWORK SECURITY",
        authors: "Dr. Nilakshi Jain",
        journal: "Journal Of Emerging Technologies And Innovative Research",
        year: "2022-23",
      },
      {
        title: "Title 3",
        authors: "Author 5",
        journal: "Journal 3",
        year: "2023",
      },
      {
        title: "Title 4",
        authors: "Author 6, Author 7, Author 8",
        journal: "Journal 4",
        year: "2024",
      },
    ];
    setPublications(publicationsArray);
    setLoading(false);
  }, []);

  if (loading) {
    return <Container>Loading publications...</Container>;
  }
  if (error) {
    return <Container>Error: {error}</Container>;
  }
  return (
    <Container>
      <SectionTitle preTitle="Our College" title="Publications">
        Here are the publications by our college.
      </SectionTitle>
      <div>
        {publications.map((publication, index) => (
          <div
            key={index}
            className="mb-6 p-4 rounded-md bg-gray-100 dark:bg-gray-800"
          >
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              {publication.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <strong>Authors:</strong> {publication.authors}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <strong>Journal:</strong> {publication.journal}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Year:</strong> {publication.year}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
