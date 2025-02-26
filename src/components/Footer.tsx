// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = [
    "Achievements",
    "Patents",
    "Events",
    "Projects",
    "Department Info",
    "Contact Us",
  ];
  // const legal = ["Terms", "Privacy", "Legal"]; // Removed per initial request; easily added back

  return (
    <footer className="bg-gradient-to-t from-blue-700 to-purple-1000 py-10" id="footer"> {/* Added id="footer" to the footer element */}
      <Container>
        {/* --- Horizontal Line - Correct Placement and Styling --- */}
        <div className="border-t border-gray-100 pt-10 mt-5" />

        <div className="flex flex-wrap justify-between gap-8">
          {/* Section 1: Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/img/favicon_r.png"
                alt="Cyber Events"
                width={180}
                height={40}
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                priority
              />
            </Link>
            <p className="mt-4 text-gray-50 text-sm">
              Cyber Events is the website for the Cyber Security Department at
              Shah and Anchor Kutchhi Engineering College.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-auto">
            <h3 className="font-semibold text-gray-50 mb-4">Quick links</h3>
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-50 hover:text-indigo-500 hover:underline transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-auto">
            <h3 className="font-semibold text-gray-50 mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://x.com/sakec" icon={<XIcon />} />
              <SocialLink
                href="https://www.facebook.com/shahanchor/"
                icon={<Facebook />}
              />
              <SocialLink
                href="https://www.instagram.com/cyse_sakec/"
                icon={<Instagram />}
              />
              <SocialLink
                href="https://www.linkedin.com/school/13290638/"
                icon={<Linkedin />}
              />
              <SocialLink
                href="https://www.youtube.com/@CyberSuraksha15"
                icon={<YouTube />}
              />
            </div>
          </div>

          {/* Section 4: Get In Touch */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h3 className="font-semibold text-gray-50 mb-4">Get In Touch</h3>
            <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15085.385107082417!2d72.911583!3d19.048507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f39a7d77d1%3A0x9ebbdeaea9ec24ae!2sShah%20%26%20Anchor%20Kutchhi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1739167948994!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Department Location on Google Maps"
              />
            </div>
            <address className="not-italic text-sm text-gray-50 space-y-1">
              <p>Cyber Security Department,</p>
              <p>Shah & Anchor Kutchhi Engineering College,</p>
              <p>Mahavir Education Trust Chowk, W.T Patil Marg, D P Rd,</p>
              <p>next to Duke&apos;s Company, Chembur,</p>
              <p>Mumbai, Maharashtra 400088</p>
            </address>
            <div className="mt-4 text-sm text-gray-50">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@cyberevents.com"
                  className="text-gray-50 hover:text-indigo-300 hover:underline transition-colors duration-200"
                >
                  cyber.council@sakec.ac.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <span className="text-gray-50 hover:text-indigo-300 transition-colors duration-200">
                  +91 9967039388
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-gray-50 text-center">
          Copyright © {new Date().getFullYear()} Cyber Security Department
        </div>
      </Container>
    </footer>
  );
}

// Helper component for social links (no changes needed)
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-gray-300 hover:scale-110 transition-transform duration-300 ease-in-out"
  >
    {icon}
  </a>
);

// Social Media Icons (no changes needed)
const XIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
  </svg>
);
const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.3-3.58V7.06a4.82 4.82 0 0 0-1.3-3.54 5 5 0 0 0-3.53-1.3zM12 6.13c1.8 0 3.33.65 4.57 1.89A6.2 6.2 0 0 1 18.47 12a6.2 6.2 0 0 1-1.9 4.56 6.2 6.2 0 0 1-4.57 1.89 6.26 6.26 0 0 1-4.56-1.89A6.23 6.23 0 0 1 6.13 12c0-1.8.64-3.33 1.89-4.57A6.23 6.23 0 0 1 12 6.13zm7.54-1.94a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9zm-7.54 3.9a4.24 4.24 0 0 0-4.21 4.21c0 1.16.43 2.15 1.25 2.97a4.14 4.14 0 0 0 2.96 1.3c1.15 0 2.14-.44 2.96-1.3a4.2 4.2 0 0 0 1.26-2.96 4.2 4.2 0 0 0-1.26-2.96A4.2 4.2 0 0 0 12 8.09z" />
  </svg>
);
const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M22.23 0H1.77C.79 0 0 .78 0 1.74v20.51C0 23.22.79 24 1.77 24h20.51C23.21 24 24 23.22 24 22.26V1.74C24 .78 23.21 0 22.23 0zM7.09 20.45H3.56V9.02h3.53v11.43zm-1.77-13a2.08 2.08 0 1 1 0-4.16 2.08 2.08 0 0 1 0 4.16zm15.14 13h-3.53v-5.62c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.72h-3.53V9.02h3.38v1.56h.05c.47-.9 1.61-1.85 3.32-1.85 3.56 0 4.21 2.34 4.21 5.38v6.34z" />
  </svg>
);
const YouTube = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M23.498 6.186a2.983 2.983 0 0 0-2.1-2.106C19.77 3.549 12 3.549 12 3.549s-7.769 0-9.399.531a2.983 2.983 0 0 0-2.1 2.106C0 7.83 0 12.001 0 12.001s0 4.169.501 5.815a2.983 2.983 0 0 0 2.1 2.106c1.63.531 9.399.531 9.399.531s7.77 0 9.398-.531a2.983 2.983 0 0 0 2.1-2.106C24 16.169 24 12 24 12s0-4.17-.502-5.814zM9.608 15.54v-7.08L15.878 12 9.608 15.54z" />
  </svg>
);

export default Footer;