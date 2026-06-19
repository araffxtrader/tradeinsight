import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – TradeInsight Trading Journal App | From $5/month",
  description:
    "TradeInsight pricing: Starter $5/mo, Pro $10/mo, Elite $15/mo. Affordable trading journal plans for Forex, Gold, Crypto & Funded Traders. Start your free trial today.",
  keywords: [
    "TradeInsight pricing",
    "trading journal price",
    "cheap trading journal",
    "trading journal plans",
    "Forex journal pricing",
  ],
  alternates: {
    canonical: "https://tradeinsight.io/pricing",
  },
  openGraph: {
    title: "Pricing – TradeInsight Trading Journal App | From $5/month",
    description:
      "TradeInsight pricing: Starter $5/mo, Pro $10/mo, Elite $15/mo. Affordable trading journal plans for all traders.",
    url: "https://tradeinsight.io/pricing",
  },
  twitter: {
    title: "Pricing – TradeInsight Trading Journal App | From $5/month",
    description:
      "TradeInsight pricing: Starter $5/mo, Pro $10/mo, Elite $15/mo. Affordable trading journal plans for all traders.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
