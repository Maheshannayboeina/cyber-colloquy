// src/components/data.ts (Corrected)
import { speakerData } from "./speakers-data"; // Import speakerData

export interface Benefit { // Added type definition for benefitOne and benefitTwo
    title: string;
    desc: string;
    image: any; // Using any for now, can be improved
    bullets: {
        title: string;
        desc: string;
        icon: React.ReactNode; // Type for Heroicons
    }[];
}


export interface Event {
  id: number;
  title: string;
  year: number;
  date: string;
  description: string;
  location: string;
  images: string[];
  tags: string[];
  colloquyDetails?: ColloquyDetails; // Optional, specific to Colloquy
  activities?: Activity[]; // Optional, as not all events have it

}

export interface Activity {
  date?: string;
  description?: string;
  image?: string;
  time?: string;
  title?: string;
  speakerId?: string; // Link to speakerData.  Optional
}

export interface ColloquyDetails {
  conductedBy?: string;
  topics?: string[];
  activities?: Activity[];
  speakers?: ColloquySpeaker[]; // Speakers for Colloquy
}

// New interface for speakers specific to Colloquy (event ID 4)
export interface ColloquySpeaker {
  speakerId: string;
  topic: string; // The topic this speaker will cover
}

const events: Event[] = [
    {
        id: 1,
        title: "Cybersecurity Colloquy 1.0",
        year: 2022,
        date: "April 13, 2022",
        description: "Our second annual Cybersecurity Colloquy event.",
        location: "Seminar Hall",
        images: ["/img/events/cyber-colloquy.jpg", "/img/events/2022/event2.jpg"],
        tags: ["cybersecurity", "colloquy", "ai", "data science"],
        colloquyDetails: {
          conductedBy: "Maj. Vineet Kumar, Mr. Gaurav Batra, Mrs. Nirali Bhatia, Mr. Ritesh Bhatia",
          topics: [
            "AI in Cybersecurity",
            "Data Science in Security",
            "Advanced Malware Analysis",
          ],
          activities: [
            {
              time: "09:30 AM",
              description: "Inauguration and Opening Keynote",
              image: "/img/events/2022/activity1.jpg",
            },
            {
              time: "11:00 AM",
              description: "Workshop on AI in Cybersecurity",
              image: "/img/events/2022/activity2.jpg",
            },
            {
              time: "01:00 PM",
              description: "Technical Session: Malware Analysis Techniques",
              image: "/img/events/2022/activity3.jpg",
            },
            {
              time: "03:30 PM",
              description: "Networking and Q&A Session",
              image: "/img/events/2022/activity4.jpg",
            },
          ],
        },
        activities: [
          {
            date: "13th April",
            description: "Panel Discussion on Emerging Cybersecurity Threats",
            image: "/img/events/activity2.jpg",
          },
        ],
      },
      {
        id: 2,
        title: "Cybersecurity Colloquy 2.0",
        year: 2023,
        date: "October 25, 2023",
        description: "Our annual Cybersecurity Colloquy event.",
        location: "Conference Room",
        images: ["/img/events/cybercolloquy-2.0.jpg", "/img/events/2023/event2.jpg"],
        tags: ["cybersecurity", "colloquy", "cloud computing", "data science"],
        colloquyDetails: {
          conductedBy: "Mr. Gaurav Batra. Mr. Ritesh Bhatia, Mr. Avkash Kathiriya",
          topics: ["Cloud Security", "Data Privacy", "Secure Coding Practices"],
          activities: [
            {
              time: "10:00 AM",
              description: "Opening Ceremony and Keynote Speech",
              image: "/img/events/2023/activity1.jpg",
            },
            {
              time: "11:30 AM",
              description: "Workshop on Cloud Security Essentials",
              image: "/img/events/2023/activity2.jpg",
            },
            {
              time: "02:00 PM",
              description: "Panel Discussion: The Role of Data Privacy",
              image: "/img/events/2023/activity3.jpg",
            },
            {
              time: "03:30 PM",
              description: "Secure Coding Practices Hands-on Session",
              image: "/img/events/2023/activity4.jpg",
            },
          ],
        },
        activities: [
          {
            date: "21st March",
            description: "Q&A Sessions",
            image: "/img/events/activity1.jpg",
          },
          {
            date: "21st March",
            description: "Panel Discussions",
            image: "/img/events/activity2.jpg",
          },
          {
            date: "21st March",
            description: "Networking Opportunities,",
            image: "/img/events/activity2.jpg",
          },
          {
            date: "21st March",
            description: "Provide a platform for attendees to connect with peers and industry leaders",
            image: "/img/events/activity2.jpg",
          },
        ],
      },
      {
        id: 3,
        title: "Cybersecurity Colloquy 3.0",
        year: 2024,
        date: "February 15, 2024",
        description: "Our fourth Cybersecurity Colloquy event.",
        location: "Main Auditorium",
        images: ["/img/events/colloquy3.0.png", "/img/events/2024/event2.jpg"],
        tags: ["cybersecurity", "colloquy", "network security", "blockchain"],
        colloquyDetails: {
          topics: ["Network Security", "Blockchain Security", "Cyber Law"],
          activities: [
            {
              time: "09:00 AM",
              description: "Inauguration and Keynote Session",
              image: "/img/events/2024/activity1.jpg",
            },
            {
              time: "10:30 AM",
              description: "Technical Session on Blockchain Security",
              image: "/img/events/2024/activity2.jpg",
            },
            {
              time: "01:00 PM",
              description: "Workshop: Hands-on with Network Security Tools",
              image: "/img/events/2024/activity3.jpg",
            },
            {
              time: "03:00 PM",
              description: "Panel Discussion: The Future of Cybersecurity",
              image: "/img/events/2024/activity4.jpg",
            },
            {
              time: "04:30 PM",
              description: "Closing Ceremony and Networking",
              image: "/img/events/2024/activity5.jpg",
            },
          ],
        },
        activities: [
          {
            date: "15th Feb to 15th March",
            description: "Hackathon Phase 1 (Online) : Challenge your skills, collaborate with global minds, and unravel the depths of cybersecurity from the comfort of your screen.",
            image: "/img/events/activity1.jpg",
          },

          {
            date: "30th - 31st March",
            description: "Hackathon Phase 2 (Hybrid) : Take the plunge into the hybrid experience! Engage in hands-on activities, attend insightful workshops, and network with industry experts on-site at Shah and Anchor Kutchii Engineering College.",
            image: "/img/events/activity3.jpg",
          },
        ],
      },
  {
    id: 4,
    title: "Cyber Colloquy 4.0: From compliance to confidence",
    year: 2025,
    date: "21st to 24th March",
    description: "Adopting the new rules for a privacy-centric future",
    location: "Seminar Hall",
    images: ["/img/events/colloquy4.0.png", "/img/events/banner2.png"],
    tags: ["cybersecurity", "colloquy", "quantum computing", "data science"],
    colloquyDetails: {
      conductedBy: "CYSE Department",
      activities: [
          {
            date: "MARCH 21ST",
            time: "10:00 AM",
            title: "Opening Ceremony",
            description: "Welcome and introductions.",
          },
          {
            date: "MARCH 21ST",
            time: "11:00 AM",
            title: "Keynote: Quantum Computing",
            speakerId: "dineshbareja", // Link to speaker
          },
          {
            date: "MARCH 22ND",
            time: "10:30 AM",
            title: "Panel: Threat Intelligence",
            speakerId: "shweta-tripathi",
          },
          {
             date: "MARCH 22ND",
             time: "02:30 PM",
             title: "Workshop: Cyber Warfare",
             speakerId: "v4web",
          },
          {
              date: "MARCH 23RD",
              time: "10:00 AM",
              title: "Session: Cyber Kill Chain",
              speakerId: "akshaygarkel"
          },
          {
            date: "MARCH 23RD",
            time: "02:00 PM",
            title: "Talk: Offensive Security",
            speakerId: "ibrahim-khatri",
          },
          {
            date: "MARCH 24TH",
            time: "10:00 AM",
            title: "Closing: Defensive Security",
            speakerId: "ruchi-gosalia",
          },
        ],
      speakers: [
        { speakerId: "dineshbareja", topic: "Quantum Computing and its Impact on Cryptography" },
        { speakerId: "shwetatripathi", topic: "Advanced Threat Intelligence and Sharing" },
        { speakerId: "v4web", topic: "The Evolution of Cyber Warfare" },
        { speakerId: "akshaygarkel", topic: "Mastering the Cyber Kill Chain" },
        { speakerId: "ibrahimkhatri", topic: "Offensive Security: Techniques and Strategies" },
        { speakerId: "ruchigosalia", topic: "Defensive Security: Building Resilient Systems" },
        { speakerId: "ajaybhayani", topic: "Defensive Security: Building Resilient Systems" },
        { speakerId: "khusbhoojain", topic: "Defensive Security: Building Resilient Systems" },
      ],
    },
    activities: [
      {
        date: "21st March",
        description: "Sponsor Events",
        image: "/img/events/activity1.jpg",
      },

      {
        date: "22nd March",
        description: "Project Expo",
        image: "/img/events/activity3.jpg",
      },
      {
        date: "22nd March",
        description: "Panel Discussion",
        image: "/img/events/activity4.jpg",
      },
      {
        date: "23rd March",
        description: "Awareness Program By Mumbai and Delhi Police",
        image: "/img/events/ex1.jpg",
      },
      {
        date: "23rd March",
        description: "Award Ceremony",
        image: "/img/events/ex2.jpg",
      },
      {
        date: "24th March",
        description: "Sponsor Events",
        image: "/img/events/activity7.jpg",
      },
    ],
  },
];

export { events, speakerData };