import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdal Ahmad | Full Stack Developer | React, FastAPI & AI Integration",
  description: "Portfolio of Abdal Ahmad — Full Stack Developer with 3+ years experience across React/React Native, Python/FastAPI microservices, PostgreSQL, and AI/LLM integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/gilroy-bold" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/gilroy-medium" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/gilroy" />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#05070f] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
