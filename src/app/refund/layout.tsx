import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy – TradeInsight",
  description:
    "Read the Refund Policy for TradeInsight trading journal app. Understand our refund terms and conditions.",
  alternates: {
    canonical: "https://tradeinsight.io/refund",
  },
  robots: { index: true, follow: true },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
