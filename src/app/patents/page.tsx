// src/app/patents/page.tsx
"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React, { useState, useEffect } from "react";

interface Publication {
  applicantName: string;
  titleOfWork: string;
  certificateDate: string;
  ay: string;
  status?: string;
  serialNumber?: number;
}

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Hardcoded data based on the provided image
    const data = [
      {
        "applicantName": "Dr Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data",
        "certificateDate": "16-05-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data (part2)",
        "certificateDate": "16-05-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "Network Security",
        "certificateDate": "11-1-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "The Crime Portal",
        "certificateDate": "11-1-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Prof. Kiran Talele",
        "titleOfWork": "AI based student attendance management system using face recognition",
        "certificateDate": "14-09-2022",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya, Mr. Sachin Khadatare",
        "titleOfWork": "A system for digital certificate authentication using Block Chain",
        "certificateDate": "14-09-2022",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "A Novel Method for Dynamic Content Management in IoT for Smart Cities",
        "certificateDate": "14-09-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "A Novel Method for Dynamic Content Management in IoT for Smart Cities Part 2",
        "certificateDate": "14-09-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Snehal Patil, Prof. Komal Sutar, Prof. Vihang Bhole",
        "titleOfWork": "A Methodology for Securing Network from Threats by Using Honeypots",
        "certificateDate": "12-04-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Pratik Gaikwad, Prof. Vihang Bhole, Mr. Vivek Jadhav",
        "titleOfWork": "A Methodology for Securing Network from Threats by Using Honeypots Part 2",
        "certificateDate": "12-04-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Mr. Vivek Jadhav, Dr. Nilakshi Jain",
        "titleOfWork": "Smart Contract for a Secure and Decentralized Voting System",
        "certificateDate": "12-04-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Mr. Vivek Jadhav, Dr. Nilakshi Jain",
        "titleOfWork": "Smart Contract for a Secure and Decentralized Voting System Part 2",
        "certificateDate": "12-04-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Mr. Vivek Jadhav",
        "titleOfWork": "The Use of AI in Social Network Data Analysis Part 1",
        "certificateDate": "12-04-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Mr. Vivek Jadhav",
        "titleOfWork": "The Use of AI in Social Network Data Analysis Part 2",
        "certificateDate": "12-04-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Framework for secure and transparent online examination",
        "certificateDate": "29-06-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane, Dr. Amit Singh",
        "titleOfWork": "A Real-Time Patient Monitoring System for Smart Hospitals",
        "certificateDate": "29-06-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Snehal Patil, Prof. Komal Sutar, Dr. Prachi Gharpure, Dr. Dhirendra Maurya",
        "titleOfWork": "Cybersecurity Training Program on Data Privacy",
        "certificateDate": "29-06-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane, Dr. Amit Singh, Dr. Nilakshi Jain",
        "titleOfWork": "Securing Smart Cities with a Novel Data Analytics Framework Based on IoT",
        "certificateDate": "29-06-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Ms. Shivangi M., Mr. Yash L",
        "titleOfWork": "Online Crime Report Portal",
        "certificateDate": "14-09-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Mr. Omkar Shelar, Mr. Pratik Patil",
        "titleOfWork": "A Comparative Study of Machine Learning Algorithms for Cyber Attack Detection",
        "certificateDate": "29-06-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "A Methodology for Data Leak Prevention in Cloud Computing ",
        "certificateDate": "12-04-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 3)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 4)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 5)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 6)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 7)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 8)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 9)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 10)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 11)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "Software Implementation for Secure Cloud Data(Part 12)",
        "certificateDate": "07-08-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Pratik Gaikwad, Mr. Shivam Sharma, Mr. Pratik Patil",
        "titleOfWork": "Data mining technique for effective intrusion detection on web servers",
        "certificateDate": "27-07-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "AI based approach for identifying ransomware attack",
        "certificateDate": "27-07-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "An optimized secure IoT framework for agricultural monitoring and environmental analysis",
        "certificateDate": "27-07-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "The Crime Portal (part 2)",
        "certificateDate": "15-03-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "The Crime Portal (part 3)",
        "certificateDate": "15-03-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "Data Analytics with IoT: Smart Cities and Environmental Challenges",
        "certificateDate": "15-03-2023",
        "ay": "2022-23",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "A framework for secure data management",
        "certificateDate": "08-08-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Prof. Snehal Patil, Dr. Nilakshi Jain",
        "titleOfWork": "Blockchain based secure and decentralized voting system",
        "certificateDate": "13-09-2022",
        "ay": "2021-22",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "A Study of Different Cryptographic Algorithms for Network Security Part 1",
        "certificateDate": "29-06-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "A Study of Different Cryptographic Algorithms for Network Security Part 2",
        "certificateDate": "29-06-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "A Methodology for Securing Network from Threats by Using Honeypots Part 3",
        "certificateDate": "29-06-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Dr. Prachi Gharpure, Dr. Dhirendra Maurya",
        "titleOfWork": "Framework for secure and transparent online examination",
        "certificateDate": "29-06-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Mr. Vivek Jadhav, Prof. Snehal Patil",
        "titleOfWork": "Implementation of Secure Smart Contracts for E Voting System",
        "certificateDate": "29-06-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Dhirendra Maurya",
        "titleOfWork": "Application of Cryptography in cloud computing for the data security",
        "certificateDate": "29-06-2022",
        "ay": "2020-21",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Pratik Gaikwad, Prof. Snehal Patil",
        "titleOfWork": "Secure Authentication Framework for E-Learning Applications",
        "certificateDate": "12-04-2022",
        "ay": "2019-20",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane, Dr. Amit Singh",
        "titleOfWork": "A Real-Time Patient Monitoring System for Smart Hospitals Part 2",
        "certificateDate": "12-04-2022",
        "ay": "2019-20",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Dr. Dhirendra Maurya",
        "titleOfWork": "System for Detection of Malicious Attacks through IoT devices using Machine Learning Algorithms Part 1",
        "certificateDate": "29-06-2022",
        "ay": "2019-20",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Dr. Dhirendra Maurya",
        "titleOfWork": "System for Detection of Malicious Attacks through IoT devices using Machine Learning Algorithms Part 2",
        "certificateDate": "29-06-2022",
        "ay": "2019-20",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "Study of data hiding and compression techniques in digital images ",
        "certificateDate": "29-06-2022",
        "ay": "2019-20",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Komal Sutar",
        "titleOfWork": "Design and Implementation of Energy Efficient Routing protocol for Wireless Sensor Network",
        "certificateDate": "12-04-2022",
        "ay": "2018-19",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Snehal Patil, Prof. Komal Sutar, Prof. Vihang Bhole",
        "titleOfWork": "A Methodology for Securing Network from Threats by Using Honeypots Part 4",
        "certificateDate": "12-04-2022",
        "ay": "2018-19",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Pratik Gaikwad, Prof. Vihang Bhole, Mr. Vivek Jadhav",
        "titleOfWork": "A Methodology for Securing Network from Threats by Using Honeypots Part 5",
        "certificateDate": "12-04-2022",
        "ay": "2018-19",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Snehal Patil, Prof. Komal Sutar, Dr. Nilakshi Jain",
        "titleOfWork": "Smart Contract for a Secure and Decentralized Voting System Part 3",
        "certificateDate": "12-04-2022",
        "ay": "2018-19",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "An Improved Approach for Detection of Phishing Attacks on Smart Phones",
        "certificateDate": "12-04-2022",
        "ay": "2018-19",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Mr. Vivek Jadhav, Dr. Dhirendra Maurya",
        "titleOfWork": "Online Examination System Using Cryptography and Steganography Techniques",
        "certificateDate": "12-04-2022",
        "ay": "2018-19",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Dr. Prachi Gharpure, Dr. Dhirendra Maurya",
        "titleOfWork": "A Study of Different Cryptographic Algorithms for Network Security Part 3",
        "certificateDate": "12-04-2022",
        "ay": "2018-19",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "A Blockchain based approach for securing cloud data",
        "certificateDate": "12-04-2022",
        "ay": "2017-18",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Dr. Dhirendra Maurya",
        "titleOfWork": "Secure Routing Protocol to detect Sinkhole attack in Wireless Sensor Network",
        "certificateDate": "12-04-2022",
        "ay": "2017-18",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Komal Sutar",
        "titleOfWork": "A Methodology for Securing Network from Threats by Using Honeypots Part 6",
        "certificateDate": "12-04-2022",
        "ay": "2017-18",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "Study and Implementation of Network Simulator tools for network security",
        "certificateDate": "12-04-2022",
        "ay": "2017-18",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Priyanka Sonawane, Prof. Komal Sutar",
        "titleOfWork": "A Review Paper on Security Threats in IoT Based Applications",
        "certificateDate": "12-04-2022",
        "ay": "2017-18",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Dr. Dhirendra Maurya",
        "titleOfWork": "An Improved Method for Dynamic Content Management in IoT for Smart Cities",
        "certificateDate": "12-04-2022",
        "ay": "2017-18",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Pratik Gaikwad, Prof. Vihang Bhole",
        "titleOfWork": "A Methodology for Securing Network from Threats by Using Honeypots Part 7",
        "certificateDate": "12-04-2022",
        "ay": "2017-18",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "A Novel Algorithm for Intrusion Detection System using Clustering Techniques",
        "certificateDate": "12-04-2022",
        "ay": "2017-18",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya",
        "titleOfWork": "A Hybrid Intrusion Detection System for Network Security based on Cloud Computing",
        "certificateDate": "12-04-2022",
        "ay": "2016-17",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar, Dr. Nilakshi Jain",
        "titleOfWork": "A Novel Methodology for Securing IoT Data",
        "certificateDate": "12-04-2022",
        "ay": "2016-17",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Mr. Omkar Shelar, Mr. Pratik Patil, Mr. Nikhil S.",
        "titleOfWork": "A Comparative Study of Machine Learning Algorithm for Cyber Attack Detection (Part 2)",
        "certificateDate": "12-04-2022",
        "ay": "2016-17",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain, Dr. Dhirendra Maurya, Mr. Omkar Shelar, Mr. Pratik Patil",
        "titleOfWork": "A Framework for Secure and Reliable Digital Healthcare System",
        "certificateDate": "12-04-2022",
        "ay": "2016-17",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "A Novel Method of Data Security in Cloud by Using Cryptography & Data Hiding Technique Part 1",
        "certificateDate": "12-04-2022",
        "ay": "2015-16",
        "status": "registered"
      },
      {
        "applicantName": "Dr. Nilakshi Jain",
        "titleOfWork": "A Novel Method of Data Security in Cloud by Using Cryptography & Data Hiding Technique Part 2",
        "certificateDate": "12-04-2022",
        "ay": "2015-16",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "Enhanced Methodology for Data Security in Cloud by Using Cryptography Technique",
        "certificateDate": "12-04-2022",
        "ay": "2015-16",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "Enhanced Methodology for Data Security in Cloud by Using Cryptography Technique (Part 2)",
        "certificateDate": "12-04-2022",
        "ay": "2015-16",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Komal Sutar",
        "titleOfWork": "A Methodology for Efficient Resource Utilization in Wireless Networks",
        "certificateDate": "12-04-2022",
        "ay": "2015-16",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane, Dr. Amit Singh",
        "titleOfWork": "Design and Implementation of an Effective Secure and Reliable Mobile Payment System",
        "certificateDate": "12-04-2022",
        "ay": "2014-15",
        "status": "registered"
      },
      {
        "applicantName": "Prof. Neha More, Prof. Priyanka Sonawane",
        "titleOfWork": "An Effective Data Security Model using Improved Cryptographic Approach",
        "certificateDate": "12-04-2022",
        "ay": "2014-15",
        "status": "registered"
      }
    ];
    const registeredPublications = data
      .filter((publication) => publication.status === "registered")
      .map((item, index) => ({ ...item, serialNumber: index + 1 })); // Added S.No field
    setPublications(registeredPublications);
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
      <SectionTitle preTitle="Our College" title="Patents">
      In these patents, our college's vision shines.
      </SectionTitle>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <th className="p-2 border">S.No</th>
              <th className="p-2 border">Applicant Name</th>
              <th className="p-2 border">Title of Work</th>
              <th className="p-2 border">Copyright Certificate Received Date</th>
              <th className="p-2 border">AY</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((publication) => (
              <tr key={publication.serialNumber} className="border-b">
                <td className="p-2 border">{publication.serialNumber}</td>
                <td className="p-2 border">{publication.applicantName}</td>
                <td className="p-2 border">{publication.titleOfWork}</td>
                <td className="p-2 border">{publication.certificateDate}</td>
                <td className="p-2 border">{publication.ay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}