// src/components/data.js
import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Why Attend Cyber Events?",
  desc: "Explore the benefits and learning opportunities offered by different cyber events. Find out how you can contribute and grow in this industry.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Expert Insights",
      desc: "Gain valuable knowledge from industry experts and academics in the field of cybersecurity.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Hands-on Workshops",
      desc: "Participate in practical workshops to develop essential cybersecurity skills.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Networking Opportunities",
      desc: "Connect with peers, experts, and potential mentors and partners.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "What You Can Expect From Our Events?",
  desc: "Get a glimpse of what awaits you in our diverse range of cyber events. Each event offers a unique program with its own specific goals.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Engaging Discussions",
      desc: "Participate in insightful discussions on different topics of cybersecurity.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Renowned Speakers",
      desc: "Learn from leaders and experts in the field of cybersecurity.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Exciting Competitions",
      desc: "Participate in competitions and put your knowledge to test!",
      icon: <SunIcon />,
    },
  ],
};

const events = [
  {
    id: 1,
    title: "Cybersecurity Colloquy 1.0",
    year: 2022,
    date: "December 10, 2022",
    description: "Our second annual Cybersecurity Colloquy event.",
    location: "Seminar Hall",
    images: ["/img/events/2022/event1.jpg", "/img/events/2022/event2.jpg"],
    tags: ["cybersecurity", "colloquy", "ai", "data science"],
    colloquyDetails: {
      conductedBy: "Prof. Jane Smith",
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
        date: "21st March",
        description: "Inauguration and Keynote Session",
        image: "/img/events/activity1.jpg",
      },
      {
        date: "21st March",
        description: "Panel Discussion on Emerging Cybersecurity Threats",
        image: "/img/events/activity2.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on Ethical Hacking",
        image: "/img/events/activity3.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on AI in Cybersecurity",
        image: "/img/events/activity4.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Cloud Security",
        image: "/img/events/activity5.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Data Privacy",
        image: "/img/events/activity6.jpg",
      },
      {
        date: "24th March",
        description: "Closing Ceremony and Awards",
        image: "/img/events/activity7.jpg",
      },
      {
        date: "24th March",
        description: "Networking Lunch",
        image: "/img/events/activity8.jpg",
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
    images: ["/img/events/2023/event1.jpg", "/img/events/2023/event2.jpg"],
    tags: ["cybersecurity", "colloquy", "cloud computing", "data science"],
    colloquyDetails: {
      conductedBy: "Dr. Alice Johnson",
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
        description: "Inauguration and Keynote Session",
        image: "/img/events/activity1.jpg",
      },
      {
        date: "21st March",
        description: "Panel Discussion on Emerging Cybersecurity Threats",
        image: "/img/events/activity2.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on Ethical Hacking",
        image: "/img/events/activity3.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on AI in Cybersecurity",
        image: "/img/events/activity4.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Cloud Security",
        image: "/img/events/activity5.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Data Privacy",
        image: "/img/events/activity6.jpg",
      },
      {
        date: "24th March",
        description: "Closing Ceremony and Awards",
        image: "/img/events/activity7.jpg",
      },
      {
        date: "24th March",
        description: "Networking Lunch",
        image: "/img/events/activity8.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Cybersecurity Colloquy 3.0",
    year: 2024,
    date: "September 15, 2024",
    description: "Our fourth Cybersecurity Colloquy event.",
    location: "Main Auditorium",
    images: ["/img/events/2024/event1.jpg", "/img/events/2024/event2.jpg"],
    tags: ["cybersecurity", "colloquy", "network security", "blockchain"],
    colloquyDetails: {
      conductedBy: "Mr. Bob Williams",
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
        date: "21st March",
        description: "Inauguration and Keynote Session",
        image: "/img/events/activity1.jpg",
      },
      {
        date: "21st March",
        description: "Panel Discussion on Emerging Cybersecurity Threats",
        image: "/img/events/activity2.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on Ethical Hacking",
        image: "/img/events/activity3.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on AI in Cybersecurity",
        image: "/img/events/activity4.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Cloud Security",
        image: "/img/events/activity5.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Data Privacy",
        image: "/img/events/activity6.jpg",
      },
      {
        date: "24th March",
        description: "Closing Ceremony and Awards",
        image: "/img/events/activity7.jpg",
      },
      {
        date: "24th March",
        description: "Networking Lunch",
        image: "/img/events/activity8.jpg",
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
    images: ["/img/events/colloquy4.0_banner_2.png", "/img/events/banner2.png"],
    tags: ["cybersecurity", "colloquy", "quantum computing", "data science"],
    colloquyDetails: {
      conductedBy: "CYSE Department",
      topics: [
        "Quantum Computing",
        "Threat Intelligence",
        "Cyber Warfare",
        "Cyber Kill Chain",
        "Offensive Security",
        "Defensive Security",
      ],
    },
    activities: [
      {
        date: "21st March",
        description: "Inauguration and Keynote Session",
        image: "/img/events/activity1.jpg",
      },
      {
        date: "21st March",
        description: "Panel Discussion on Emerging Cybersecurity Threats",
        image: "/img/events/activity2.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on Ethical Hacking",
        image: "/img/events/activity3.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on AI in Cybersecurity",
        image: "/img/events/activity4.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Cloud Security",
        image: "/img/events/ex1.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Data Privacy",
        image: "/img/events/ex2.jpg",
      },
      {
        date: "24th March",
        description: "Closing Ceremony and Awards",
        image: "/img/events/activity7.jpg",
      },
      {
        date: "24th March",
        description: "Networking Lunch",
        image: "/img/events/activity8.jpg",
      },
    ],
  },
];

export { benefitOne, benefitTwo, events };
