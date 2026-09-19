import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { CV } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["500", "600"],
});

const siteUrl = "https://portfolio-azure-eight-54.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${CV.name} — ${CV.title}`,
  description: CV.about,
  keywords: [
    "Omar Abo-Elmaaty",
    "Full-Stack Engineer",
    "AI applications",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "AI agents",
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
      className={`dark ${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <body className="bg-bg font-sans text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
