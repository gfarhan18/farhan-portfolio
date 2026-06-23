import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    default: "M. Farhan · Full Stack & AI-Enabled Developer",
    template: "%s · M. Farhan",
  },
  description:
    "M. Farhan — Full Stack & AI-enabled developer building React, Next.js, Vue and Nest.js products. AI integrations, faster delivery, production-grade apps for global clients.",
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
  themeColor: "#121110",
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
      suppressHydrationWarning
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden antialiased">
        <ThemeScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
