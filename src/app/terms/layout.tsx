import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – TradeInsight",
  description:
    "Read the Terms of Service for TradeInsight trading journal app. Understand the rules and guidelines for using TradeInsight.",
  alternates: {
    canonical: "https://tradeinsight.io/terms",
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
