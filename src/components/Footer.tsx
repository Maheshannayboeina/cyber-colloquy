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
  const legal = ["Terms", "Privacy", "Legal"];

  return (
    <div className="bg-gradient-to-t from-purple-200 to-blue-300 dark:from-blue-700 dark:to-purple-1000">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/favicon2.png"
                  alt="Cyber Events"
                  width="32"
                  height="32"
                  className="w-8 hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <span className="hover:text-indigo-700 transition-colors duration-300 ease-in-out">
                  Cyber Events
                </span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Cyber Events is the website for the Cyber Security Department at
              Shah and Anchor Kutchhi Engineering College.
            </div>
          </div>

          <div>
            <div>Quick links</div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 ease-in-out focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          {/* <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300 ease-in-out focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div> */}
          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://x.com/sakec"
                target="_blank"
                rel="noopener"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <span className="sr-only">X</span>
                <XIcon />
              </a>
              <a
                href="https://www.facebook.com/shahanchor/"
                target="_blank"
                rel="noopener"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/cyse_sakec/"
                target="_blank"
                rel="noopener"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/school/13290638/"
                target="_blank"
                rel="noopener"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
              <a
                href="https://www.youtube.com/@CyberSuraksha15"
                target="_blank"
                rel="noopener"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <span className="sr-only">YouTube</span>
                <YouTube />
              </a>
            </div>
          </div>

          {/* --- Re-added "Get In Touch" Section in Footer - Updated with new Address --- */}
          <div className="lg:col-span-2">
            <div className="font-semibold text-gray-900 dark:text-gray-50">Get In Touch</div>
            <div className="mt-5 text-gray-500 dark:text-gray-400">
              {/* Google Map Embed  */}
              <div className="aspect-w-16 aspect-h-9 mb-3 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.346173299146!2d72.90900817593585!3d19.048511552833496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f39a7d77d1%3A0x9ebbdeaea9ec24ae!2sShah%20%26%20Anchor%20Kutchhi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1738998139608!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Department Location on Google Maps"
                ></iframe>
              </div>
              <address className="not-italic text-sm">
                <p className="mb-1">Cyber Security Department,</p>
                <p className="mb-1">Shah &amp; Anchor Kutchhi Engineering College,</p>
                <p className="mb-1">Mahavir Education Trust Chowk, W.T Patil Marg, D P Rd,</p>
                <p className="mb-1">next to Duke&apos;s Company, Chembur,</p>
                <p className="mb-1">Mumbai, Maharashtra 400088</p>
              </address>
              <div className="mt-3">
                <p className="mb-1">Email: <a href="mailto:info@cyberevents.com" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200">cyber.council@sakec.ac.in</a></p>
                <p className="mb-1">Phone: <span className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200">+91 9967039388</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Cyber Security Department
        </div>
      </Container>
    </div>
  );
}

const XIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
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
    fill="currentColor"
  >
    <path d="M22.5 12c0 5.8-4.7 10.5-10.5 10.5S1.5 17.8 1.5 12C1.5 6.2 6.2 1.5 12 1.5S22.5 6.2 22.5 12zM12 2c-5.8 0-10.5 4.7-10.5 10.5S6.2 23 12 23s10.5-4.7 10.5-10.5S17.8 2 12 2zM16 12h-2v7h-3v-7H9V9h2V7c0-2.2 1.8-4 4-4h2v3h-2c-1.1 0-2 .9-2 2v2h4l-1 3h-3v7h-3v-7H8V9h3V7c0-3.3 2.7-6 6-6h3V0h-3c-4.4 0-8 3.6-8 8v2h2v3h-3v7h7v-7z" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.2c3.7 0 4.1 0 5.6.1 1.5.1 2.7.7 3.6 1.6 1 .9 1.5 2.1 1.6 3.6 0 1.5 0 1.9-.1 5.6-.1 3.7-.1 4.1-.1 5.6-.1 1.5-.7 2.7-1.6 3.6-1 .9-2.1 1.5-3.6 1.6-1.5 0-1.9 0-5.6-.1-3.7-.1-4.1-.1-5.6-.1-1.5 0-2.7-.7-3.6-1.6-1-.9-1.5-2.1-1.6-3.6 0-1.5 0-1.9.1-5.6.1-3.7.1-4.1.1-5.6.1-1.5.1-2.7.7-3.6 1.6-1 .9-1.5 2.1-1.6 3.6 0 1.5 0 1.9.1 5.6.1 3.7.1 4.1.1 5.6.1 1.5.1 2.7-.7 3.6-1.6 1-.9 1.5-2.1 1.6-3.6 0-1.5 0-1.9-.1-5.6-.1-3.7-.1-4.1-.1-5.6 0-1.5.7-2.7 1.6-3.6 1-1.1 2.1-1.5 3.6-1.6 1.5 0 1.9 0 5.6.1z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.2 2c.8 0 1.4.6 1.4 1.4v17.2c0 .8-.6 1.4-1.4 1.4H7.8c-.8 0-1.4-.6-1.4-1.4V3.4c0-.8.6-1.4 1.4-1.4h8.4zM10 8c0 2.8 1.6 4 4 4 1.2 0 2-.4 2.6-.8v1.8h-2c-.4 0-.6.2-.8.6v8h-2v-8h-2v-1.8c.6.4 1.4.6 2.4.6 2.4 0 3.6-1.2 3.6-3.6V8h-2V6h2V4c0-2.4 2.6-2.8 3.6-2.8 1.6 0 3 1.2 3 3.4v1.8h-2V8h-2V6.6c-.4-.2-.6-.6-.6-.8-.8 0-1.2-.4-1.2-.8v-2.6c0-1.2 1-2 2.2-2.2 1.6 0 3 .8 3 2.6v2h2.8c0-2.8-2.2-4.2-4.2-4.2H10z" />
  </svg>
);

const YouTube = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23.5 7.4s-.1-1.7-.5-2.4c-.4-.6-1.1-.9-1.8-.9-1.2-.1-4.8-.1-4.8-.1s-3.7 0-4.9.1c-.7.1-1.3.3-1.8.9-.4.7-.5 2.4-.5 2.4s0 1.6.5 2.4c.5.6 1.1.9 1.8.9 1.2.1 4.9.1 4.9.1s3.7 0 4.8-.1c.7-.1 1.4-.3 1.8-.9.4-.7.5-2.4.5-2.4zM9.5 14.6V9.3l5.4 2.6-5.4 2.7z" />
  </svg>
);
