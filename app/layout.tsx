import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Background from "@/components/Background";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import Toast from "@/components/Toast";
import BackToTop from "@/components/BackToTop";

const SITE = "https://sahillabs.github.io";
const DESCRIPTION =
  "Full-Stack Developer at AIThinkers building production AI products: cross-platform desktop apps with native audio and offline speech, serverless NestJS backends on AWS, and React frontends.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Sahil Khatkar — Full-Stack Developer",
  description: DESCRIPTION,
  keywords: ["Sahil Khatkar", "Full-Stack Developer", "NestJS", "React", "AWS", "AI", "TypeScript", "Next.js"],
  authors: [{ name: "Sahil Khatkar" }],
  openGraph: {
    title: "Sahil Khatkar — Full-Stack Developer",
    description: "Production AI products end to end — desktop apps, serverless NestJS on AWS, and React frontends.",
    url: SITE,
    siteName: "Sahil Khatkar",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sahil Khatkar — Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Khatkar — Full-Stack Developer",
    description: "Production AI products end to end — desktop apps, serverless NestJS on AWS, and React frontends.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { themeColor: "#100C0A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#top" className="skip-link">Skip to content</a>
        <Loader />
        <ScrollProgress />
        <Background />
        <Cursor />
        <Toast />
        <CommandPalette />
        <BackToTop />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
