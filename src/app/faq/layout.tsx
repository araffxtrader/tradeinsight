import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – TradeInsight | Frequently Asked Questions",
  description:
    "Find answers to common questions about TradeInsight – the trading journal app. Learn about features, pricing, setup, and support for Forex, Gold, Crypto & Funded Traders.",
  keywords: [
    "TradeInsight FAQ",
    "trading journal questions",
    "TradeInsight help",
    "how to use TradeInsight",
  ],
  alternates: {
    canonical: "https://tradeinsightbd.netlify.app/faq",
  },
  openGraph: {
    title: "FAQ – TradeInsight | Frequently Asked Questions",
    description:
      "Find answers to common questions about TradeInsight – the trading journal app.",
    url: "https://tradeinsightbd.netlify.app/faq",
  },
  twitter: {
    title: "FAQ – TradeInsight | Frequently Asked Questions",
    description:
      "Find answers to common questions about TradeInsight – the trading journal app.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
