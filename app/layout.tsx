import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yadava HC | Developer Portfolio",
  description:
    "Aspiring Software Engineer | Web Development | React | Java & C++ | DSA | Operating Systems | AI/ML Enthusiast",
  keywords: [
    "Yadava HC",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Yadava HC" }],
  openGraph: {
    title: "Yadava HC | Developer Portfolio",
    description:
      "Aspiring Software Engineer | Web Development | React | Java & C++ | DSA | Operating Systems | AI/ML Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

