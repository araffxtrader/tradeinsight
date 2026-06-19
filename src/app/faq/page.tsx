"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";

const faqCategories = [
  {
    category: { en: "Getting Started", bn: "শুরু করা" },
    questions: [
      { q: { en: "How do I get started with TradeInsight?", bn: "TradeInsight দিয়ে কিভাবে শুরু করব?" }, a: { en: "Simply sign up for a free 14-day trial, connect your broker or import your trades via CSV, and start logging. Our onboarding wizard will guide you through the setup in under 5 minutes.", bn: "শুধু ফ্রি ১৪-দিনের ট্রায়ালের জন্য সাইন আপ করুন, আপনার ব্রোকার সংযুক্ত করুন বা CSV দিয়ে ট্রেড ইমপোর্ট করুন। ৫ মিনিটের কম সময়ে সেটআপ সম্পূর্ণ হবে।" } },
      { q: { en: "Do I need to be an experienced trader?", bn: "আমার কি অভিজ্ঞ ট্রেডার হতে হবে?" }, a: { en: "Not at all! TradeInsight is designed for traders at every level. Whether you're just starting or you're a seasoned professional.", bn: "একদম না! TradeInsight প্রতিটি স্তরের ট্রেডারদের জন্য ডিজাইন করা। আপনি শুরু করছেন বা অভিজ্ঞ পেশাদার।" } },
      { q: { en: "Can I import my historical trades?", bn: "আমি কি আমার ঐতিহাসিক ট্রেড ইমপোর্ট করতে পারি?" }, a: { en: "Yes! We support importing from MT4, MT5, TradingView, cTrader, and many more platforms via CSV/Excel.", bn: "হ্যাঁ! আমরা MT4, MT5, TradingView, cTrader এবং আরো অনেক প্ল্যাটফর্ম থেকে CSV/Excel দিয়ে ইমপোর্ট সমর্থন করি।" } },
    ],
  },
  {
    category: { en: "Account & Billing", bn: "অ্যাকাউন্ট ও বিলিং" },
    questions: [
      { q: { en: "What payment methods do you accept?", bn: "আপনারা কি কি পেমেন্ট পদ্ধতি গ্রহণ করেন?" }, a: { en: "We accept all major credit cards, PayPal, and cryptocurrency. All payments are processed securely via Stripe.", bn: "আমরা সব প্রধান ক্রেডিট কার্ড, পেপাল এবং ক্রিপ্টোকারেন্সি গ্রহণ করি। সব পেমেন্ট Stripe-এর মাধ্যমে নিরাপদে প্রক্রিয়াকৃত।" } },
      { q: { en: "Can I switch plans at any time?", bn: "আমি কি যেকোনো সময় প্ল্যান পরিবর্তন করতে পারি?" }, a: { en: "Absolutely. Upgrade or downgrade anytime from your account settings.", bn: "অবশ্যই। আপনার অ্যাকাউন্ট সেটিংস থেকে যেকোনো সময় আপগ্রেড বা ডাউনগ্রেড করুন।" } },
      { q: { en: "Is there a free trial?", bn: "কি ফ্রি ট্রায়াল আছে?" }, a: { en: "Yes! All plans come with a 14-day free trial with full access. No credit card required.", bn: "হ্যাঁ! সব প্ল্যানে সম্পূর্ণ অ্যাক্সেসসহ ১৪-দিনের ফ্রি ট্রায়াল। ক্রেডিট কার্ডের প্রয়োজন নেই।" } },
      { q: { en: "How do I cancel?", bn: "আমি কিভাবে বাতিল করব?" }, a: { en: "Cancel anytime from your account settings. No contracts, no fees.", bn: "আপনার অ্যাকাউন্ট সেটিংস থেকে যেকোনো সময় বাতিল করুন। কোনো চুক্তি নেই, কোনো ফি নেই।" } },
    ],
  },
  {
    category: { en: "Features & Usage", bn: "ফিচার ও ব্যবহার" },
    questions: [
      { q: { en: "Which brokers do you support?", bn: "আপনারা কোন ব্রোকার সমর্থন করেন?" }, a: { en: "We support 50+ brokers including MT4/MT5, TradingView, cTrader, Interactive Brokers, and many more.", bn: "আমরা MT4/MT5, TradingView, cTrader, Interactive Brokers সহ ৫০+ ব্রোকার সমর্থন করি।" } },
      { q: { en: "Is there a trade limit?", bn: "কি ট্রেডের সীমা আছে?" }, a: { en: "Starter: 500 trades/month. Pro & Premium: Unlimited.", bn: "স্টার্টার: ৫০০ ট্রেড/মাস। প্রো ও প্রিমিয়াম: অসীম।" } },
      { q: { en: "How does AI insights work?", bn: "AI ইনসাইটস কিভাবে কাজ করে?" }, a: { en: "Our AI analyzes your trading patterns, identifies strengths and weaknesses, and provides personalized recommendations.", bn: "আমাদের AI আপনার ট্রেডিং প্যাটার্ন বিশ্লেষণ করে, শক্তি ও দুর্বলতা শনাক্ত করে এবং ব্যক্তিগতকৃত সুপারিশ প্রদান করে।" } },
    ],
  },
  {
    category: { en: "Security & Privacy", bn: "নিরাপত্তা ও গোপনীয়তা" },
    questions: [
      { q: { en: "How is my data protected?", bn: "আমার ডেটা কিভাবে সুরক্ষিত?" }, a: { en: "We use AES-256 encryption, SOC 2 compliant infrastructure, and regular security audits.", bn: "আমরা AES-256 এনক্রিপশন, SOC 2 সম্মত ইনফ্রাস্ট্রাকচার এবং নিয়মিত নিরাপত্তা অডিট ব্যবহার করি।" } },
      { q: { en: "Do you have 2FA?", bn: "আপনাদের কি 2FA আছে?" }, a: { en: "Yes, we support TOTP (Google Authenticator, Authy) and SMS-based 2FA.", bn: "হ্যাঁ, আমরা TOTP (Google Authenticator, Authy) এবং SMS-ভিত্তিক 2FA সমর্থন করি।" } },
      { q: { en: "Can I export or delete my data?", bn: "আমি কি আমার ডেটা এক্সপোর্ট বা মুছে ফেলতে পারি?" }, a: { en: "Absolutely. Export all data anytime in CSV/JSON format, or request complete deletion.", bn: "অবশ্যই। যেকোনো সময় CSV/JSON ফরম্যাটে ডেটা এক্সপোর্ট করুন বা সম্পূর্ণ মুছে ফেলার অনুরোধ করুন।" } },
    ],
  },
];

export default function FAQPage() {
  const { locale } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const toggleItem = (key: string) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((faq) => ({
        "@type": "Question",
        name: faq.q.en,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a.en,
        },
      }))
    ),
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">{locale === "en" ? "FAQ" : "সচরাচর জিজ্ঞাসা"}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {locale === "en" ? "Frequently asked " : "সচরাচর জিজ্ঞাসা "}
              <span className="gradient-text">{locale === "en" ? "questions" : "উত্তর"}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{locale === "en" ? "Everything you need to know about TradeInsight." : "TradeInsight সম্পর্কে আপনার জানার সবকিছু।"}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, ci) => (
            <div key={ci} className="mb-12 last:mb-0">
              <AnimatedSection>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  {locale === "en" ? category.category.en : category.category.bn}
                </h2>
              </AnimatedSection>
              <div className="space-y-3">
                {category.questions.map((faq, qi) => {
                  const key = `${ci}-${qi}`;
                  const isOpen = openItems[key];
                  return (
                    <AnimatedSection key={qi} delay={qi * 0.05}>
                      <div className="rounded-xl border border-border bg-card overflow-hidden">
                        <button onClick={() => toggleItem(key)} className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-accent/50">
                          <span className="text-sm font-medium pr-4">{locale === "en" ? faq.q.en : faq.q.bn}</span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{locale === "en" ? faq.a.en : faq.a.bn}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
