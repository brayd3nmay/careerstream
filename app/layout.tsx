import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Careerstream | Smart Hiring Through Personality Science",
  description:
    "Careerstream uses personality assessments to calculate compatibility scores between candidates and roles. Find the perfect match based on both soft and hard skills.",
  keywords: [
    "hiring",
    "recruitment",
    "personality test",
    "compatibility score",
    "job matching",
    "soft skills",
    "hard skills",
    "talent acquisition",
  ],
  authors: [{ name: "Careerstream" }],
  openGraph: {
    title: "Careerstream | Smart Hiring Through Personality Science",
    description:
      "Find the perfect match between candidates and roles with our personality-based compatibility scoring system.",
    type: "website",
    siteName: "Careerstream",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careerstream | Smart Hiring Through Personality Science",
    description:
      "Find the perfect match between candidates and roles with our personality-based compatibility scoring system.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
