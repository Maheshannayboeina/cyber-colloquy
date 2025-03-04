// src/components/speakers-data.ts (Corrected)
export interface Speaker {  // Added Speaker Interface
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  linkedinUrl: string;
}

export const speakerData: Speaker[] = [ //Use Speaker interface
{
  id: "dineshbareja", // Unique ID (used in URL)
  name: "Mr. Dinesh Bareja",
  title: "Chief Operating Officer",
  imageUrl: "/img/speakers/dinesh-bareja-r.jpg",

  description: "As COO of Open Security Alliance LLP, I lead a team delivering cybersecurity solutions, advisory services, and compliance support, with expertise in ISMS, VAPT, AppSec, GRC, and more, to enterprises and public entities globally.", // New description field
  linkedinUrl: "https://www.linkedin.com/in/dineshbareja",
},
{
  id: "shwetatripathi", // Unique ID (used in URL)
  name: "Ms. Shweta Tripathi",
  title: "Sr. Manager at TataAIA",
  imageUrl: "/img/speakers/shweta-tripathi-r.jpg",

  description: "Sr. Manager at TataAIA with 7+ years in Cybersecurity, Third Party Risk Management, and Auditing. Experienced in ISMS, Cyber Crisis Drills, and Cyber War Games, with certifications in CEM, CHFI, ISO 27001, CISM, and CISSP. Currently pursuing a PhD in Computer Engineering and aiming for a future career in cybersecurity across Canada, Australia, and the USA.", // New description field
  linkedinUrl: "http://linkedin.com/in/shweta-tripathi-47146816/",
},
// Add more speakers here...
{
  id: "ruchigosalia", // Unique ID (used in URL)
  name: "Ruchi Gosalia",
  title: "Front End Developer at V4web",
  imageUrl: "/img/speakers/ruchi-gosalia-r.jpg",

  description: "", // New description field
  linkedinUrl: "https://www.linkedin.com/in/ruchi-gosalia-24b362276/",
},

{
  id: "riteshbhatia", // Unique ID (used in URL)
  name: "Ritesh Bhatia",
  title: "Board Committee Member, Founder - V4WEB",
  imageUrl: "/img/board-members/ritesh-bhatia.jpg",

  description: "Ritesh Bhatia, a Cybercrime Investigator, Cybersecurity & Data Privacy Consultant, and Certified Fraud Examiner (USA), with 20 years of experience, is a TEDx speaker, board committee member, and trainer for top organizations, specializing in cybercrime investigations, security audits, and digital forensics.", // New description field
  linkedinUrl: "https://www.linkedin.com/in/v4web/",
},

{
  id: "akshaygarkel", // Unique ID (used in URL)
  name: "Akshay Garkel",
  title: "Partner & Leader, Cyber at Grant Thornton Bharat LLP",
  imageUrl: "/img/speakers/akshay-garkel-r.jpg",

  description: "Akshay, a business leader with 23 years in Information and Cybersecurity, specializes in managing P&L, practice management, sales, and business development, with expertise in financial institutions across India, APAC, and ME.", // New description field
  linkedinUrl: "https://www.linkedin.com/in/akshaygarkel/",
},
{
  id: "ibrahimkhatri", // Unique ID (used in URL)
  name: "Ibrahim Khatri",
  title: "Founder and CEO of Privezi Solutions",
  imageUrl: "/img/speakers/ibrahim-khatri.png",

  description: "Founder and CEO of Privezi Solutions, brings over 20 years of expertise in privacy, security, data governance, and compliance. A seasoned leader with experience at EY, KPMG, and PwC, he has advised global financial, telecom, pharma, and aviation firms on technology risk, cybersecurity, and regulatory compliance. He has also served as a Data Protection Officer at Qatar National Bank and holds an FIP designation from IAPP.", // New description field
  linkedinUrl: "https://www.linkedin.com/in/ibrahim-khatri/",
},
{
  id: "ajaybhayani", // Unique ID (used in URL)
  name: "Ajay Bhayani",
  title: "Director Security & Partner at AmbiSure Technologies. ",
  imageUrl: "/img/speakers/ajay-bhayani-r.jpg",

  description: "A Security Technocrat by Profession & Entrepreneur by choice. Currently, Director Security & Partner at AmbiSure Technologies. Specializations are in Brand Protection, Security of Identity & Consulting Organizations on Cybersecurity Reviews & Compliance, Cyber Security Marketing, IT Strategy & Execution, Technology Integration, Security Deployment.", // New description field
  linkedinUrl: "https://www.linkedin.com/in/ajaycbhayani/",
},
{
  id: "khusbhujain", // Unique ID (used in URL)
  name: "Khusbhu Jain",
  title: "Managing Partner at Ark Legal l Data Privacy l Technology Law",
  imageUrl: "/img/speakers/khusbhu-jain-r.jpg",

  description: "Law graduate having worked as a lawyer with legal practice having specialisation in Criminal Law. My areas of interest are Data Protection, Technology law, Corporate law, Criminal law and Litigation.", // New description field
  linkedinUrl: "https://www.linkedin.com/in/khushbu-jain-bb10867/",
}
];