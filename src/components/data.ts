// src/components/data.ts
import { speakerData } from "./speakers-data";

export interface Event {
  id: string;
  title: string;
  year: number;
  date: string; // This will now be YYYY-MM-DD
  description: string;
  location: string;
  images: string[];
  tags: string[];
  colloquyDetails?: ColloquyDetails;
}

export interface Activity {
  date: string; //YYYY-MM-DD
  time: string;
  title: string;
  description?: string;
  speakerId?: string;
}

export interface ColloquyDetails {
  conductedBy?: string;
  activities: Activity[];
  speakers?: ColloquySpeaker[];
}

export interface ColloquySpeaker {
  speakerId: string;
  topic: string;
}
const events: Event[] = [
  {
    id: "colloquy1.0",
    title: "Cybersecurity Colloquy 1.0",
    year: 2022,
    date: "2022-04-13", // YYYY-MM-DD
    description: "Our first annual Cybersecurity Colloquy event.",
    location: "Seminar Hall",
    images: ["/img/events/cyber-colloquy.jpg", "/img/events/2022/event2.jpg"],
    tags: ["cybersecurity", "colloquy", "ai", "data science"],
    colloquyDetails: {
      conductedBy:
        "Maj. Vineet Kumar, Mr. Gaurav Batra, Mrs. Nirali Bhatia, Mr. Ritesh Bhatia",
      activities: [
        {
          date: "2022-04-13", // YYYY-MM-DD
          time: "09:30 AM",
          title: "Inauguration and Opening Keynote",
          description: "Inauguration and Opening Keynote",
        },
        {
          date: "2022-04-13", // YYYY-MM-DD
          time: "11:00 AM",
          title: "Workshop on AI in Cybersecurity",
          description: "Workshop on AI in Cybersecurity",
        },
        {
          date: "2022-04-13", // YYYY-MM-DD
          time: "01:00 PM",
          title: "Technical Session: Malware Analysis Techniques",
          description: "Technical Session: Malware Analysis Techniques",
        },
        {
          date: "2022-04-13", // YYYY-MM-DD
          time: "03:30 PM",
          title: "Networking and Q&A Session",
          description: "Networking and Q&A Session",
        },
      ],
    },
  },
  {
    id: "colloquy2.0",
    title: "Cybersecurity Colloquy 2.0",
    year: 2023,
    date: "2023-10-25", // YYYY-MM-DD
    description: "Our annual Cybersecurity Colloquy event.",
    location: "Conference Room",
    images: ["/img/events/cybercolloquy-2.0.jpg", "/img/events/2023/event2.jpg"],
    tags: ["cybersecurity", "colloquy", "cloud computing", "data science"],
    colloquyDetails: {
      conductedBy: "Mr. Gaurav Batra. Mr. Ritesh Bhatia, Mr. Avkash Kathiriya",
      activities: [
        {
          date: "2023-10-25", // YYYY-MM-DD
          time: "10:00 AM",
          title: "Opening Ceremony and Keynote Speech",
          description: "Opening Ceremony and Keynote Speech",
        },
        {
          date: "2023-10-25", // YYYY-MM-DD
          time: "11:30 AM",
          title: "Workshop on Cloud Security Essentials",
          description: "Workshop on Cloud Security Essentials",
        },
        {
          date: "2023-10-25", // YYYY-MM-DD
          time: "02:00 PM",
          title: "Panel Discussion: The Role of Data Privacy",
          description: "Panel Discussion: The Role of Data Privacy",
        },
        {
          date: "2023-10-25", // YYYY-MM-DD
          time: "03:30 PM",
          title: "Secure Coding Practices Hands-on Session",
          description: "Secure Coding Practices Hands-on Session",
        },
      ],
    },
  },
  {
    id: "colloquy3.0",
    title: "Cybersecurity Colloquy 3.0",
    year: 2024,
    date: "2024-02-15", // YYYY-MM-DD
    description: "Our fourth Cybersecurity Colloquy event.",
    location: "Main Auditorium",
    images: ["/img/events/colloquy3.0.png", "/img/events/2024/event2.jpg"],
    tags: ["cybersecurity", "colloquy", "network security", "blockchain"],
    colloquyDetails: {
      activities: [
        {
          date: "2024-02-15", // YYYY-MM-DD
          time: "09:00 AM",
          title: "Inauguration and Keynote Session",
          description: "Inauguration and Keynote Session",
        },
        {
          date: "2024-02-15", // YYYY-MM-DD
          time: "10:30 AM",
          title: "Technical Session on Blockchain Security",
          description: "Technical Session on Blockchain Security",
        },
        {
          date: "2024-02-15", // YYYY-MM-DD
          time: "01:00 PM",
          title: "Workshop: Hands-on with Network Security Tools",
          description: "Workshop: Hands-on with Network Security Tools",
        },
        {
          date: "2024-02-15", // YYYY-MM-DD
          time: "03:00 PM",
          title: "Panel Discussion: The Future of Cybersecurity",
          description: "Panel Discussion: The Future of Cybersecurity",
        },
        {
          date: "2024-02-15", // YYYY-MM-DD
          time: "04:30 PM",
          title: "Closing Ceremony and Networking",
          description: "Closing Ceremony and Networking",
        },
      ],
    },
  },
  {
    id: "colloquy4.0",
    title: "Cyber Colloquy 4.0: From compliance to confidence",
    year: 2025,
    date: "2025-03-21", // YYYY-MM-DD  CRITICAL: Use the correct start date
    description: "Adopting the new rules for a privacy-centric future",
    location: "Seminar Hall",
    images: ["/img/events/colloquy4.0.png", "/img/events/banner2.png"],
    tags: ["cybersecurity", "colloquy", "quantum computing", "data science"],
    colloquyDetails: {
      conductedBy: "CYSE Department",
      activities: [
        // Day 1: March 21st
        {
          date: "2025-03-21", // YYYY-MM-DD
          time: "9:00 AM - 5:00 PM",
          title: "Sponsor Events",
          description: "Sponsor Events throughout the day.",
        },
        // Day 2: March 22nd
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "10:00 AM - 10:30 AM",
          title: "Opening Ceremony",
          description:
            "Welcome address, keynote speech (if applicable), and event overview.",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "10:30 AM - 10:45 AM",
          title: "Individual Speaker Session",
          description: "ISO 27701 Standards (Privacy Governance & Compliance)",
          speakerId: "dineshbareja",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "10:50 AM - 11:05 AM",
          title: "Individual Speaker Session",
          description: "Data Discovery(Identifying & Mapping Sensitive Data)",
          speakerId: "shwetatripathi",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "11:10 AM - 11:25 AM",
          title: "Individual Speaker Session",
          description: "Data Classification (Organizing & Labeling Data for Protection)",
          speakerId: "ajaybhayani",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "11:30 AM - 11:45 AM",
          title: "Individual Speaker Session",
          description: "Data Minimization (Reducing Excessive Data Collection Risks Effectively)",
          speakerId: "ruchigosalia",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "11:45 AM - 12:15 PM",
          title: "Short Break",
          description: "Refreshments and networking.",
        },

        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "12:15 PM - 12:30 PM",
          title: "Individual Speaker Session",
          description: "Privacy Enhancement Tools (PETs) (Tech Solutions for Privacy Protection)",
          speakerId: "riteshbhatia",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "12:35 PM - 1:00 PM",
          title: "Individual Speaker Session",
          description: "Consent Management (User Control & Transparency in Data Processing)",
          speakerId: "akshaygarkel",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "1:00 PM - 2:00 PM",
          title: "Lunch Break",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "2:00 PM - 2:15 PM",
          title: "Individual Speaker Session",
          description: "Cookie Consent Management (Managing Web & Digital Tracking Compliance)",
          speakerId: "ibrahimkhatri",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "2:15 PM - 2:30 PM",
          title: "Individual Speaker Session",
          description: "Data Privacy Impact Assessment (DPIA) (Risk Analysis & Privacy Compliance)",
          speakerId: "khusbhujain",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "2:30 PM - 2:45 PM",
          title: "QnA Session",
          description: "15-minute speaker slots with Q&A.",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "2:50 PM - 3:10 PM",
          title: "Cyberfratt Quiz",
        },
        {
          date: "2025-03-22", // YYYY-MM-DD
          time: "3:15 PM - 5:00 PM",
          title: "Project Exhibition",
          description: "Project Exhibition by students.",
        },

        // Day 3: March 23rd
        {
          date: "2025-03-23", // YYYY-MM-DD
          time: "9:00 AM - 12:00 PM",
          title: "Awareness Session for Parents",
          description: "Cyber hygiene, online safety, cyber laws, and Q&A.",
        },
        {
          date: "2025-03-23", // YYYY-MM-DD
          time: "12:00 PM - 1:00 PM",
          title: "Lunch Break",
        },
        {
          date: "2025-03-23", // YYYY-MM-DD
          time: "1:00 PM - 5:00 PM",
          title: "Awards Ceremony & Magazine Launch",
          description: "Awards and magazine unveiling.",
        },

        // Day 4: March 24th
        {
          date: "2025-03-24", // YYYY-MM-DD
          time: "9:00 AM - 5:00 PM",
          title: "Sponsor Events",
          description: "Sponsor Events throughout the day.",
        },
      ],
      speakers: [
        { speakerId: "dineshbareja", topic: "ISO 27701 Standards (Privacy Governance & Compliance)" },
        { speakerId: "shwetatripathi", topic: "Data Discovery(Identifying & Mapping Sensitive Data)" },
        { speakerId: "riteshbhatia", topic: "Privacy Enhancement Tools (PETs) (Tech Solutions for Privacy Protection)" },
        { speakerId: "akshaygarkel", topic: "Consent Management (User Control & Transparency in Data Processing)" },
        { speakerId: "ibrahimkhatri", topic: "Cookie Consent Management (Managing Web & Digital Tracking Compliance)" },
        { speakerId: "ruchigosalia", topic: "Data Minimization (Reducing Excessive Data Collection Risks Effectively)",},
        { speakerId: "ajaybhayani", topic: "Data Classification (Organizing & Labeling Data for Protection)",},
        { speakerId: "khusbhujain", topic: "Data Privacy Impact Assessment (DPIA) (Risk Analysis & Privacy Compliance)",},
      ],
    },
  },
];

export { events, speakerData };