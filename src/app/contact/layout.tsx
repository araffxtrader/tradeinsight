import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – TradeInsight | Get Support",
  description:
    "Contact TradeInsight support via email, WhatsApp, or Telegram. We're here to help Forex, Gold, Crypto & Funded Traders with their trading journal needs.",
  keywords: [
    "contact TradeInsight",
    "TradeInsight support",
    "trading journal help",
    "TradeInsight email",
  ],
  alternates: {
    canonical: "https://tradeinsight.io/contact",
  },
  openGraph: {
    title: "Contact Us – TradeInsight | Get Support",
    description:
      "Contact TradeInsight support via email, WhatsApp, or Telegram. We're here to help.",
    url: "https://tradeinsight.io/contact",
  },
  twitter: {
    title: "Contact Us – TradeInsight | Get Support",
    description:
      "Contact TradeInsight support via email, WhatsApp, or Telegram.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
