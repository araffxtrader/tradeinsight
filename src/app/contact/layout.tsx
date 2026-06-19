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
    canonical: "https://tradeinsightbd.netlify.app/contact",
  },
  openGraph: {
    title: "Contact Us – TradeInsight | Get Support",
    description:
      "Contact TradeInsight support via email, WhatsApp, or Telegram. We're here to help.",
    url: "https://tradeinsightbd.netlify.app/contact",
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
