export interface Sponsor {
  name: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "CyberFrat",
    description: "A leading tech company.",
    imageUrl: "/img/cyberfrat.png",
    websiteUrl: "https://www.cyberfrat.com/",
  },
  {
    name: "V4WEB",
    description: "Specializes in network security.",
    imageUrl: "/img/v4web.png",
    websiteUrl: "https://v4webcybersecurity.com/",
  },
  {
    name: "COE",
    description: "Centre of Excellence in Cyber Security.",
    imageUrl: "/img/coe.png",
    websiteUrl: "https://www.cyberpeace.center/",
  },
  {
    name: "CyberBaap",
    description: "Your Cybersecurity Sherpa.",
    imageUrl: "/img/cyberbaap.png",
    websiteUrl: "https://www.cyberbaap.org/"
  },
];