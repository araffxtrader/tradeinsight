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
    default: "TradeInsight — Premium Trading Journal & Analytics",
    template: "%s | TradeInsight",
  },
  description:
    "The world's most advanced trading journal. Track trades, analyze performance, and master your strategy with AI-powered insights. Built for Forex, Gold, Crypto & Funded Traders.",
  keywords: [
    "trading journal",
    "trade tracker",
    "forex journal",
    "crypto trading",
    "funded trader",
    "trading analytics",
    "prop firm",
    "performance tracking",
  ],
  authors: [{ name: "TradeInsight" }],
  creator: "TradeInsight",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tradeinsight.io",
    siteName: "TradeInsight",
    title: "TradeInsight — Premium Trading Journal & Analytics",
    description:
      "The world's most advanced trading journal. Track trades, analyze performance, and master your strategy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeInsight — Premium Trading Journal & Analytics",
    description:
      "The world's most advanced trading journal. Track trades, analyze performance, and master your strategy.",
  },
  robots: { index: true, follow: true },
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
