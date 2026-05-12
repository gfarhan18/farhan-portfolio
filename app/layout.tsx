import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farhan.dev"),
  title: {
    default: "M. Farhan · Full Stack Developer",
    template: "%s · M. Farhan",
  },
  description:
    "M. Farhan — Full Stack Developer with 5+ years building scalable web products in React, Next.js, Nest.js, Node.js and AWS for international clients.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Nest.js Developer",
    "Node.js Developer",
    "Vue.js Developer",
    "AWS",
    "Docker",
    "Freelance Developer",
    "Remote Software Engineer",
    "Farhan",
  ],
  authors: [{ name: "M. Farhan" }],
  creator: "M. Farhan",
  openGraph: {
    type: "website",
    title: "M. Farhan · Full Stack Developer",
    description:
      "5+ years of experience building scalable web apps with React, Next.js, Nest.js and AWS for international clients.",
    siteName: "M. Farhan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Farhan · Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Nest.js and AWS — for global clients.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-ink-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
