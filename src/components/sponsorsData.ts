// src/components/sponsorsData.ts
export interface Sponsor {
  id: string; // Add unique ID
  name: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  blurDataUrl: string; // Add blurDataURL
}

export const sponsors: Sponsor[] = [
  {
    id: "cyberfrat", // Unique ID
    name: "CyberFrat",
    description: "A leading tech company.",
    imageUrl: "/img/cyberfrat.png",
    websiteUrl: "https://www.cyberfrat.com/",
    blurDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/hH5+RAAAAABJRU5ErkJggg==" // REPLACE with actual blurred image data
  },
  {
    id: "v4web", // Unique ID
    name: "V4WEB",
    description: "Specializes in network security.",
    imageUrl: "/img/v4web.png",
    websiteUrl: "https://v4webcybersecurity.com/",
    blurDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/hH5+RAAAAABJRU5ErkJggg==" // REPLACE with actual blurred image data
  },
  {
    id: "coe", // Unique ID
    name: "COE",
    description: "Centre of Excellence in Cyber Security.",
    imageUrl: "/img/coe.png",
    websiteUrl: "https://www.cyberpeace.center/",
    blurDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/hH5+RAAAAABJRU5ErkJggg==" // REPLACE with actual blurred image data
  },
  {
    id: "cyberbaap", // Unique ID
    name: "CyberBaap",
    description: "Your Cybersecurity Sherpa.",
    imageUrl: "/img/cyberbaap.png",
    websiteUrl: "https://www.cyberbaap.org/",
    blurDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/hH5+RAAAAABJRU5ErkJggg==" // REPLACE with actual blurred image data
  },
];