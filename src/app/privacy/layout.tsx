import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – TradeInsight",
  description:
    "Read the Privacy Policy for TradeInsight trading journal app. Learn how we collect, use, and protect your trading data.",
  alternates: {
    canonical: "https://tradeinsightbd.netlify.app/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
