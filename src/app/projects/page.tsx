// src/app/projects/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React, { useState, useEffect } from "react";

type Project = {
    sNo: number;
    productName: string;
    participants: string;
    academicYear: string;
};

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Hardcoded data based on the provided image
        const data : Project[] = [
            {
                sNo: 1,
                productName: "HoneyTrack",
                participants:
                  "Dr.Rupali Vairagade Ms Meghali Kalyankar Maj Vineet Kumar Archita Jain Swarangi Patil Aditya Ubale Darshit rupareliya Devansh Sanghvi Nikhil Mokal Vivek Bhagwat",
                academicYear: "2024-25",
              },
              {
                sNo: 2,
                productName: "LinuxAdmin",
                participants:
                  "Dr Nilakshi Jain Maj Vineet Kumar Parasar Sikdar Shubham Kolaskar Pratham Shah Jayan Shah Kayaan Kaizad Billimoria Kushagra Tiwari Sayyed Shamlaan Shuaib",
                academicYear: "2024-25",
              },
              {
                sNo: 3,
                productName: "Cygiene",
                participants:
                  "Dr Shwetambari Borade Ms. Priyanka Singh Maj Vineet Kumar Parasar Sikdar Devansh Sanghvi Nikhil Mokal Vivek Bhagwat Archita Jain Swarangi Patil Aditya Ubale Darshit rupareliya",
                academicYear: "2024-25",
              },
              {
                sNo: 4,
                productName: "CTF Portal HackTheWay: Challenge, Learn, Secure",
                participants:
                  "Dr Nilakshi Jain Dr. Shwetambari Borade Parasar Sikdar Yash Nagare Jasjyot Singh Saini Devendra Mishra Gayatri Tawade Deep Parasiya",
                academicYear: "2024-25",
              },
              {
                sNo: 5,
                productName: "Trusttrace: A one stop solution for multimedia deepfake detection",
                participants:
                  "Dr Nilakshi Jain Dr Shwetambari Borade Maj Vineet Kumar Shubham Kolaskar Pratham Shah Jayan Shah",
                academicYear: "2024-25",
              },
              {
                sNo: 6,
                productName: "Cyber Incident Portal",
                participants:
                  "Dr Shwetambari Borade Maj Vineet Kumar Akshat Adavadkar Drashti Doshi Gaikwad Arya Gulab Chirag Prajapati Shlok Rawat Saahil Sawant Mahesh annayboeina Ronak Ghadge",
                academicYear: "2024-25",
              },
              {
                sNo: 7,
                productName: "Unmasking Digital Impersonation: Financial Fraud via Deepfakes",
                participants:
                  "Dr Nilakshi Jain Ms Viskhakha Shinde Koli Yash Pratap Talawat Paxal Dilip Wagh Kedar Prashant Zunjarrao Sahil Shailesh",
                academicYear: "2024-25",
              },
          ];
          setProjects(data);
        setLoading(false);
    }, []);

    if (loading) {
      return <Container>Loading projects...</Container>;
     }
     if (error) {
        return <Container>Error: {error}</Container>;
     }

    return (
       <Container>
            <SectionTitle preTitle="Our College" title="Projects">
               Here are the projects by our college.
           </SectionTitle>
            <div className="overflow-x-auto">
             <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden">
                <thead className="bg-indigo-500 dark:bg-indigo-700 text-white">
                 <tr>
                      <th className="text-left py-3 px-4 font-semibold text-sm">S.No</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Product Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm">Name of the Participants</th>
                     <th className="text-left py-3 px-4 font-semibold text-sm">Academic Year</th>
                  </tr>
              </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
                    {projects.map((project) => (
                       <tr key={project.sNo} className="hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-200">
                          <td className="py-3 px-4 border-b text-sm">{project.sNo}</td>
                           <td className="py-3 px-4 border-b text-sm">{project.productName}</td>
                            <td className="py-3 px-4 border-b text-sm">{project.participants}</td>
                           <td className="py-3 px-4 border-b text-sm">{project.academicYear}</td>
                      </tr>
                 ))}
                </tbody>
          </table>
        </div>
     </Container>
   );
}