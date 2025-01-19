import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes"; // Using next-themes for consistency
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { Toaster } from "@/components/ui/toaster";
import AppContent from "@/components/AppContent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Cyber Security Events",
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
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AppContent>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </AppContent>
            <PopupWidget />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
