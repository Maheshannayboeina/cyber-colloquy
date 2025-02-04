import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

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
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100`}>
        <ThemeProvider attribute="class">
          <Banner />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
          <PopupWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}