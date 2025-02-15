// src/app/patents/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React, { useState, useEffect } from "react";
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

const ITEMS_PER_PAGE = 6; // Number of patents per page

export default function PatentsPage() {
    const [patents, setPatents] = useState<Patent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Hardcoded patent data - replace with your actual data source
        const data: Patent[] = [
            {
                sNo: 1,
                patentTitle: "Method and System for Detecting and Mitigating Deepfake Attacks",
                inventors: "Dr. Nilakshi Jain, Dr. Shwetambari Borade, Maj Vineet Kumar",
                patentNumber: "202411000123",
                filingDate: "2024-01-05",
                shortDescription: "A novel method to identify and counter deepfake threats effectively.",
            },
            {
                sNo: 2,
                patentTitle: "AI-Powered Cyber Hygiene Training Platform",
                inventors: "Dr Shwetambari Borade, Ms. Priyanka Singh, Maj Vineet Kumar",
                patentNumber: "202411000234",
                filingDate: "2024-01-15",
                shortDescription: "An intelligent platform for enhancing cyber hygiene practices through AI.",
            },
            {
                sNo: 3,
                patentTitle: "Decentralized Cyber Incident Reporting and Management System",
                inventors: "Dr Shwetambari Borade, Maj Vineet Kumar",
                patentNumber: "202411000345",
                filingDate: "2024-02-01",
                shortDescription: "A secure, decentralized system for managing cyber incidents efficiently.",
            },
            {
                sNo: 4,
                patentTitle: "Linux Administration Learning and Practice Environment",
                inventors: "Dr Nilakshi Jain, Maj Vineet Kumar",
                patentNumber: "202411000456",
                filingDate: "2024-02-10",
                shortDescription: "A practical environment to learn and master Linux administration skills.",
            },
            {
                sNo: 5,
                patentTitle: "HoneyTrack: Advanced Honeycomb Framework for Cyber Threat Intelligence",
                inventors: "Dr.Rupali Vairagade, Ms Meghali Kalyankar, Maj Vineet Kumar",
                patentNumber: "202411000567",
                filingDate: "2024-02-20",
                shortDescription: "An innovative honeycomb framework to gather and analyze cyber threat intelligence.",
            },
            {
                sNo: 6,
                patentTitle: "Capture The Flag Based Cybersecurity Education Portal",
                inventors: "Dr Nilakshi Jain, Dr. Shwetambari Borade",
                patentNumber: "202411000678",
                filingDate: "2024-03-01",
                shortDescription: "An engaging CTF portal designed for effective cybersecurity education.",
            },
            {
                sNo: 7,
                patentTitle: "System for Unmasking Digital Impersonation in Financial Transactions",
                inventors: "Dr Nilakshi Jain, Ms Viskhakha Shinde Koli",
                patentNumber: "202411000789",
                filingDate: "2024-03-10",
                shortDescription: "A system to detect and prevent financial fraud through digital impersonation.",
            },
            {
                sNo: 8,
                patentTitle: "TrustTrace: Multimedia Deepfake Detection and Verification Platform",
                inventors: "Dr Nilakshi Jain, Dr Shwetambari Borade, Maj Vineet Kumar",
                patentNumber: "202411000890",
                filingDate: "2024-03-20",
                shortDescription: "A platform for verifying multimedia content and detecting deepfakes.",
            },
            {
                sNo: 9,
                patentTitle: "Enhanced Cybersecurity Risk Assessment Methodology",
                inventors: "Dr. Shwetambari Borade, Ms. Priyanka Singh",
                patentNumber: "202411000901",
                filingDate: "2024-04-01",
                shortDescription: "An improved methodology for assessing and managing cybersecurity risks.",
            },
            {
                sNo: 10,
                patentTitle: "Secure IoT Device Management Framework",
                inventors: "Maj Vineet Kumar, Dr. Nilakshi Jain",
                patentNumber: "202411001012",
                filingDate: "2024-04-10",
                shortDescription: "A robust framework for securely managing and monitoring IoT devices.",
            },
        ];
        setPatents(data);
        setLoading(false);
    }, []);

    if (loading) {
        return <Container>Loading patents...</Container>;
    }
    if (error) {
        return <Container>Error: {error}</Container>;
    }

    const totalPages = Math.ceil(patents.length / ITEMS_PER_PAGE);
    const paginatedPatents = patents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);


    return (
        <Container>
            <SectionTitle preTitle="Research & Innovation" title="Patents Filed">
                Patents filed by our faculty and students.
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {paginatedPatents.map((patent, index) => (
                    <div
                        key={patent.sNo}
                        className={`bg-white/${hoveredCard === index ? '80' : '30'} dark:bg-gray-800/${hoveredCard === index ? '80' : '10'} shadow-md rounded-md p-0 transition-all duration-300 hover:shadow-lg aspect-square backdrop-blur-sm`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="h-full flex flex-col items-center justify-center">
                            <div className="px-1 h-full flex flex-col justify-center">
                                <h3 className={`font-bold text-gray-800 dark:text-white text-center ${hoveredCard !== index ? 'text-4xl line-clamp-[6]' : 'text-2xl mb-2'}`}>{patent.patentTitle}</h3>
                                {hoveredCard !== index ? (
                                    <p className="text-s text-center mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">{patent.shortDescription}</p>
                                ) : (
                                    <div className="text-left w-full px-5">
                                        <p className="text-m text-gray-600 dark:text-gray-400 mb-2 line-clamp-3 text-center">{patent.shortDescription}</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-m mb-1">
                                            <span className="font-bold">Inventors:</span> {patent.inventors || "N/A"}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 text-m mb-1">
                                            <span className="font-bold">Patent Number:</span> {patent.patentNumber || "N/A"}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 text-m">
                                            <span className="font-bold">Filing Date:</span> {patent.filingDate}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && ( // Conditionally render pagination if there's more than one page
                <div className="flex justify-center mt-8">
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
            )}
        </Container>
    );
}