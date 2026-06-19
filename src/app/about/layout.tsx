import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – TradeInsight | Our Mission for Traders",
  description:
    "Learn about TradeInsight – our mission to empower traders with the best trading journal app. Meet the team behind the platform trusted by 1,000+ traders worldwide.",
  keywords: [
    "about TradeInsight",
    "TradeInsight team",
    "trading journal company",
    "trading app mission",
  ],
  alternates: {
    canonical: "https://tradeinsight.io/about",
  },
  openGraph: {
    title: "About Us – TradeInsight | Our Mission for Traders",
    description:
      "Learn about TradeInsight – our mission to empower traders with the best trading journal app.",
    url: "https://tradeinsight.io/about",
  },
  twitter: {
    title: "About Us – TradeInsight | Our Mission for Traders",
    description:
      "Learn about TradeInsight – our mission to empower traders with the best trading journal app.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
