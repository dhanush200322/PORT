import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollProgress from "@/components/common/ScrollProgress";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DHANUSH AV | Portfolio",
  description: "Portfolio of DHANUSH AV - Full Stack Developer & AI Automation Engineer. Building Intelligent Digital Experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
