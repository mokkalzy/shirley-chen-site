import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shirley Chen | Marketing Professional",
  description: "Marketing Coordinator with 5+ years of experience in advertising, campaign coordination, and client account management. Specializing in data-driven marketing strategies and content development.",
  keywords: ["marketing", "advertising", "campaign coordination", "content development", "data analytics"],
  authors: [{ name: "Shirley Chen" }],
  openGraph: {
    title: "Shirley Chen | Marketing Professional",
    description: "Marketing Coordinator with 5+ years of experience in advertising and campaign coordination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
