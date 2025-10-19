import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Landoh Clansy — Full Stack Developer | Portfolio",
  description:
    "I'm Landoh Clansy, a passionate full-stack developer from Yaoundé, Cameroon. I build clean, modern apps — from front-end interfaces to back-end APIs, data visualizations, and AI systems. Explore my projects built with Next.js, Node.js, and Python.",
  keywords: [
    "Landoh Clansy",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "Machine Learning Projects",
    "Web Developer Cameroon",
  ],
  authors: [{ name: "Landoh Clansy", url: "https://github.com/Stabat47" }],
  creator: "Landoh Clansy",
  openGraph: {
    title: "Landoh Clansy — Full Stack Developer",
    description:
      "Explore the portfolio of Landoh Clansy — building modern web apps, APIs, and AI-driven systems with a focus on clean design and performance.",
    url: "https://your-vercel-link.vercel.app", // replace with your live site URL
    siteName: "Landoh Clansy Portfolio",
    images: [
      {
        url: "https://your-vercel-link.vercel.app/og-image.png", // optional OG image
        width: 1200,
        height: 630,
        alt: "Landoh Clansy Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landoh Clansy — Full Stack Developer",
    description:
      "I’m Landoh Clansy, a developer passionate about clean code, bold ideas, and AI-powered solutions.",
    creator: "@LandohClensy", 
    images: ["https://your-vercel-link.vercel.app/og-image.png"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0D1117] text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
