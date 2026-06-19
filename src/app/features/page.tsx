"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LineChart, Brain, Shield, Target, Clock, PieChart,
  BarChart3, Zap, Globe, Lock, Smartphone, Bell,
  ArrowRight, CheckCircle2
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig } from "@/lib/config";

const features = [
  {
    icon: LineChart,
    title: { en: "Advanced Analytics", bn: "উন্নত অ্যানালিটিক্স" },
    description: { en: "50+ performance metrics including win rate, profit factor, Sharpe ratio, max drawdown, and expectancy.", bn: "৫০+ পারফরম্যান্স মেট্রিক্স যার মধ্যে রয়েছে উইন রেট, প্রফিট ফ্যাক্টর, শার্প রেশিও।" },
    items: [{ en: "Custom date ranges", bn: "কাস্টম তারিখ পরিসীমা" }, { en: "Session analysis", bn: "সেশন বিশ্লেষণ" }, { en: "Day-of-week breakdown", bn: "সপ্তাহের দিন অনুযায়ী বিশ্লেষণ" }, { en: "Asset class comparison", bn: "সম্পদ শ্রেণী তুলনা" }],
  },
  {
    icon: Brain,
    title: { en: "AI-Powered Insights", bn: "AI-চালিত ইনসাইটস" },
    description: { en: "Our machine learning engine analyzes your data to identify your best setups and areas for improvement.", bn: "আমাদের মেশিন লার্নিং ইঞ্জিন আপনার সেরা সেটআপ ও উন্নতির এলাকা শনাক্ত করে।" },
    items: [{ en: "Pattern recognition", bn: "প্যাটার্ন সনাক্তকরণ" }, { en: "Behavioral analysis", bn: "আচরণগত বিশ্লেষণ" }, { en: "Strategy optimization", bn: "কৌশল অপ্টিমাইজেশন" }, { en: "Predictive analytics", bn: "পূর্বাভাসমূলক অ্যানালিটিক্স" }],
  },
  {
    icon: Shield,
    title: { en: "Risk Management Suite", bn: "ঝুঁকি ব্যবস্থাপনা সুইট" },
    description: { en: "Protect your capital with real-time risk scoring, position sizing, and automated drawdown alerts.", bn: "রিয়েল-টাইম ঝুঁকি স্কোরিং ও স্বয়ংক্রিয় ড্রাডাউন অ্যালার্ট দিয়ে আপনার পুঁজি রক্ষা করুন।" },
    items: [{ en: "Risk per trade calculator", bn: "প্রতি ট্রেড ঝুঁকি ক্যালকুলেটর" }, { en: "Portfolio correlation", bn: "পোর্টফোলিও সহসম্পর্ক" }, { en: "Drawdown protection", bn: "ড্রাডাউন প্রোটেকশন" }, { en: "Exposure limits", bn: "এক্সপোজার সীমা" }],
  },
  {
    icon: Target,
    title: { en: "Strategy Builder & Backtesting", bn: "স্ট্র্যাটেজি বিল্ডার ও ব্যাকটেস্টিং" },
    description: { en: "Create rules-based trading strategies and test them against historical data.", bn: "নিয়ম-ভিত্তিক ট্রেডিং কৌশল তৈরি করুন এবং ঐতিহাসিক ডেটার বিরুদ্ধে পরীক্ষা করুন।" },
    items: [{ en: "Visual strategy builder", bn: "ভিজ্যুয়াল স্ট্র্যাটেজি বিল্ডার" }, { en: "Historical backtesting", bn: "ঐতিহাসিক ব্যাকটেস্টিং" }, { en: "Monte Carlo simulation", bn: "মন্টে কার্লো সিমুলেশন" }, { en: "Walk-forward analysis", bn: "ওয়াক-ফরওয়ার্ড অ্যানালিসিস" }],
  },
  {
    icon: Clock,
    title: { en: "Trade Replay", bn: "ট্রেড রিপ্লে" },
    description: { en: "Replay your trades tick-by-tick on the actual chart to refine your decisions.", bn: "আপনার সিদ্ধান্ত উন্নত করতে আসল চার্টে টিক-বাই-টিক ট্রেড রিপ্লে করুন।" },
    items: [{ en: "Tick-by-tick replay", bn: "টিক-বাই-টিক রিপ্লে" }, { en: "Multiple timeframes", bn: "একাধিক টাইমফ্রেম" }, { en: "Annotation tools", bn: "অ্যানোটেশন টুলস" }, { en: "Performance comparison", bn: "পারফরম্যান্স তুলনা" }],
  },
  {
    icon: PieChart,
    title: { en: "Portfolio Dashboard", bn: "পোর্টফোলিও ড্যাশবোর্ড" },
    description: { en: "Track your entire portfolio across multiple brokers in one unified dashboard.", bn: "একটি একীভূত ড্যাশবোর্ডে একাধিক ব্রোকার জুড়ে আপনার সমগ্র পোর্টফোলিও ট্র্যাক করুন।" },
    items: [{ en: "Multi-broker sync", bn: "মাল্টি-ব্রোকার সিঙ্ক" }, { en: "Real-time updates", bn: "রিয়েল-টাইম আপডেট" }, { en: "Cross-asset analysis", bn: "ক্রস-অ্যাসেট অ্যানালিসিস" }, { en: "Custom watchlists", bn: "কাস্টম ওয়াচলিস্ট" }],
  },
  {
    icon: BarChart3,
    title: { en: "Performance Reports", bn: "পারফরম্যান্স রিপোর্ট" },
    description: { en: "Generate professional-grade performance reports with detailed breakdowns.", bn: "বিস্তারিত ব্রেকডাউন সহ পেশাদার-গ্রেড পারফরম্যান্স রিপোর্ট তৈরি করুন।" },
    items: [{ en: "PDF export", bn: "PDF এক্সপোর্ট" }, { en: "Shareable links", bn: "শেয়ারযোগ্য লিঙ্ক" }, { en: "Custom templates", bn: "কাস্টম টেমপ্লেট" }, { en: "Scheduled reports", bn: "নির্ধারিত রিপোর্ট" }],
  },
  {
    icon: Zap,
    title: { en: "Lightning-Fast Import", bn: "অতি দ্রুত ইমপোর্ট" },
    description: { en: "Import trades from any broker in seconds. We support MT4, MT5, TradingView, cTrader, and more.", bn: "যেকোনো ব্রোকার থেকে সেকেন্ডের মধ্যে ট্রেড ইমপোর্ট করুন। আমরা MT4, MT5, TradingView সমর্থন করি।" },
    items: [{ en: "CSV/Excel import", bn: "CSV/Excel ইমপোর্ট" }, { en: "MT4/MT5 sync", bn: "MT4/MT5 সিঙ্ক" }, { en: "TradingView integration", bn: "TradingView ইন্টিগ্রেশন" }, { en: "API connections", bn: "API সংযোগ" }],
  },
  {
    icon: Globe,
    title: { en: "Multi-Asset Support", bn: "মাল্টি-অ্যাসেট সাপোর্ট" },
    description: { en: "Track Forex, Stocks, Crypto, Futures, Options, and Commodities all in one place.", bn: "ফরেক্স, স্টক, ক্রিপ্টো, ফিউচারস, অপশন এবং কমোডিটি সব এক জায়গায় ট্র্যাক করুন।" },
    items: [{ en: "Forex pairs", bn: "ফরেক্স পেয়ার" }, { en: "Stock & ETFs", bn: "স্টক ও ETF" }, { en: "Cryptocurrency", bn: "ক্রিপ্টোকারেন্সি" }, { en: "Futures & Options", bn: "ফিউচারস ও অপশন" }],
  },
  {
    icon: Lock,
    title: { en: "Bank-Grade Security", bn: "ব্যাংক-গ্রেড নিরাপত্তা" },
    description: { en: "Your data is encrypted with AES-256, stored in SOC 2 compliant data centers.", bn: "আপনার ডেটা AES-256 দিয়ে এনক্রিপ্ট করা হয়, SOC 2 সম্মত ডেটা সেন্টারে সংরক্ষিত।" },
    items: [{ en: "End-to-end encryption", bn: "এন্ড-টু-এন্ড এনক্রিপশন" }, { en: "SOC 2 compliant", bn: "SOC 2 সম্মত" }, { en: "Two-factor auth", bn: "দ্বি-ফ্যাক্টর অথেনটিকেশন" }, { en: "Regular audits", bn: "নিয়মিত অডিট" }],
  },
  {
    icon: Smartphone,
    title: { en: "Mobile App", bn: "মোবাইল অ্যাপ" },
    description: { en: "Log and manage trades on the go with our native iOS and Android apps.", bn: "আমাদের নেটিভ iOS ও Android অ্যাপ দিয়ে যেকোনো জায়গায় ট্রেড লগ ও ম্যানেজ করুন।" },
    items: [{ en: "iOS & Android", bn: "iOS ও Android" }, { en: "Offline mode", bn: "অফলাইন মোড" }, { en: "Push notifications", bn: "পুশ নোটিফিকেশন" }, { en: "Quick trade entry", bn: "দ্রুত ট্রেড এন্ট্রি" }],
  },
  {
    icon: Bell,
    title: { en: "Smart Notifications", bn: "স্মার্ট নোটিফিকেশন" },
    description: { en: "Get intelligent alerts for risk limits, daily loss caps, and custom conditions.", bn: "ঝুঁকির সীমা, দৈনিক ক্ষতির সীমা এবং কাস্টম শর্তের জন্য স্মার্ট অ্যালার্ট পান।" },
    items: [{ en: "Risk alerts", bn: "ঝুঁকি অ্যালার্ট" }, { en: "Streak tracking", bn: "স্ট্রিক ট্র্যাকিং" }, { en: "Daily summaries", bn: "দৈনিক সারসংক্ষেপ" }, { en: "Custom triggers", bn: "কাস্টম ট্রিগার" }],
  },
];

export default function FeaturesPage() {
  const { locale } = useLanguage();

  return (
    <div className="relative">
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
              {locale === "en" ? "Features" : "ফিচার"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {locale === "en" ? "Built for " : "বিশেষভাবে তৈরি "}
              <span className="gradient-text">{locale === "en" ? "serious traders" : "সিরিয়াস ট্রেডারদের জন্য"}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "en"
                ? "Every feature is designed with one goal: helping you become a consistently profitable trader."
                : "প্রতিটি ফিচার একটি লক্ষ্য নিয়ে ডিজাইন করা: আপনাকে ধারাবাহিকভাবে লাভজনক ট্রেডার হতে সাহায্য করা।"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{locale === "en" ? feature.title.en : feature.title.bn}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">{locale === "en" ? feature.description.en : feature.description.bn}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                        {locale === "en" ? item.en : item.bn}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                {locale === "en" ? "Integrations" : "ইন্টিগ্রেশন"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {locale === "en" ? "Connects with your " : "আপনার "}
                <span className="gradient-text">{locale === "en" ? "existing tools" : "বিদ্যমান টুলসের সাথে সংযুক্ত"}</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {["MetaTrader 4", "MetaTrader 5", "TradingView", "cTrader", "Interactive Brokers", "Thinkorswim", "NinjaTrader", "TradeStation", "FXCM", "OANDA"].map((name, i) => (
              <AnimatedSection key={name} delay={i * 0.05}>
                <div className="flex items-center justify-center rounded-xl border border-border bg-card p-4 h-20 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground">
                  {name}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {locale === "en" ? "Ready to trade smarter?" : "আরো স্মার্টভাবে ট্রেড করতে প্রস্তুত?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              {locale === "en" ? "Start your free 14-day trial today. No credit card required." : "আজই আপনার ফ্রি ১৪-দিনের ট্রায়াল শুরু করুন। ক্রেডিট কার্ডের প্রয়োজন নেই।"}
            </p>
            <a
              href={siteConfig.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-105"
            >
              {locale === "en" ? "Get Started Free" : "ফ্রিতে শুরু করুন"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
