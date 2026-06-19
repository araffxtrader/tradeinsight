import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features – TradeInsight Trading Journal App",
  description:
    "Explore TradeInsight features: AI-powered trade insights, advanced analytics, risk management, strategy backtesting, trade replay, and portfolio tracking for Forex, Gold, Crypto & Funded Traders.",
  keywords: [
    "TradeInsight features",
    "trading journal features",
    "AI trade insights",
    "trading analytics",
    "risk management tools",
    "strategy backtesting",
    "trade replay",
  ],
  alternates: {
    canonical: "https://tradeinsightbd.netlify.app/features",
  },
  openGraph: {
    title: "Features – TradeInsight Trading Journal App",
    description:
      "Explore TradeInsight features: AI-powered trade insights, advanced analytics, risk management, strategy backtesting, and more.",
    url: "https://tradeinsightbd.netlify.app/features",
  },
  twitter: {
    title: "Features – TradeInsight Trading Journal App",
    description:
      "Explore TradeInsight features: AI-powered trade insights, advanced analytics, risk management, strategy backtesting, and more.",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
