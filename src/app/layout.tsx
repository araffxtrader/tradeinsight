import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: {
    default: "TradeInsight – Best Trading Journal App for Traders",
    template: "%s | TradeInsight – Trading Journal App",
  },
  description:
    "TradeInsight is the best trading journal app for Forex, Gold, Crypto & Funded Traders. Track trades, analyze performance with AI-powered insights, and master your strategy. Join 1,000+ traders using TradeInsight.",
  keywords: [
    "TradeInsight",
    "Trade Insight",
    "TradeInsight app",
    "trading journal",
    "TradeInsight trading journal",
    "trade tracker",
    "forex journal",
    "crypto trading journal",
    "funded trader journal",
    "trading analytics",
    "prop firm journal",
    "performance tracking",
    "trading journal app",
    "best trading journal",
    "TradeInsight journal",
  ],
  authors: [{ name: "Mehrajul Hasan Araf", url: "https://tradeinsightbd.netlify.app" }],
  creator: "TradeInsight",
  publisher: "TradeInsight",
  metadataBase: new URL("https://tradeinsightbd.netlify.app"),
  alternates: {
    canonical: "https://tradeinsightbd.netlify.app",
    languages: {
      "en": "https://tradeinsightbd.netlify.app",
      "bn": "https://tradeinsightbd.netlify.app",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tradeinsightbd.netlify.app",
    siteName: "TradeInsight",
    title: "TradeInsight – Best Trading Journal App for Traders",
    description:
      "TradeInsight is the best trading journal app for Forex, Gold, Crypto & Funded Traders. Track trades, analyze performance with AI-powered insights, and master your strategy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TradeInsight – Trading Journal App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeInsight – Best Trading Journal App for Traders",
    description:
      "TradeInsight is the best trading journal app for Forex, Gold, Crypto & Funded Traders. Track trades, analyze performance with AI-powered insights.",
    images: ["/og-image.png"],
    creator: "@tradeinsightbd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "5JSyx0xtz_JdMk5PHyf_Oyv6mL9KXdYRjZasuM9A3pU",
  },
  other: {
    "theme-color": "#6366f1",
    "referrer": "strict-origin-when-cross-origin",
    "msapplication-TileColor": "#6366f1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-['Poppins','Li_Ador_Noirrit'] antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <MouseGlow />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
