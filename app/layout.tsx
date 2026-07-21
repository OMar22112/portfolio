import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CV } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://omar-abo-elmaaty.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${CV.name} — ${CV.title}`,
  description: CV.about,
  keywords: [
    "Omar Abo-Elmaaty",
    "Full-Stack Developer",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "AI web applications",
    "Portfolio",
  ],
  authors: [{ name: CV.name }],
  openGraph: {
    title: `${CV.name} — ${CV.title}`,
    description: CV.tagline,
    url: siteUrl,
    siteName: `${CV.name} · Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CV.name} — ${CV.title}`,
    description: CV.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg font-sans text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
