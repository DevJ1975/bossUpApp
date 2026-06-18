import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import BackgroundCanvas from "@/components/three/BackgroundCanvas";
import { Nav } from "@/components/ui/Nav";
import { site } from "@/lib/site.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "workforce development",
    "frontline training",
    "employee retention",
    "leadership development",
    "airport workforce",
    "Hartsfield-Jackson",
    "ATL airport",
    "microlearning",
    "Workplace Learning Systems",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body id="top" className="min-h-screen bg-ink text-fg antialiased">
        <BackgroundCanvas />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
