//src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/Particles"; // Import the Particles component
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { Toaster } from "@/components/ui/toaster";
import Banner from "@/components/Banner";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Security",
  description: "Cyber security",
  icons: {
    icon: "/img/favicon2.png",
    shortcut: "/img/favicon2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.className} relative text-gray-100 bg-black`} // Apply dark mode styles
        style={{
          background: "black",
          zIndex: 1,
        }}
      >
        {/* Make body relative */}
        <Particles
          className="fixed inset-0 -z-10" // Make particles fixed and cover the whole area
          quantity={150}
          staticity={40}
          size={0.6}
          color="#0D5EDF"
        />
        <Banner />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <PopupWidget />
        <Toaster />
      </body>
    </html>
  );
}