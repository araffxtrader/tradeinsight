"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Star, TrendingUp, TrendingDown,
  LineChart, Brain, Shield, Target, Clock, PieChart,
  BarChart3, Zap, Users, Award, ChevronRight, Trophy
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";
import DashboardShowcase from "@/components/DashboardShowcase";
import AnimatedMarquee from "@/components/AnimatedMarquee";
import TiltCard from "@/components/TiltCard";
import GradientOrbs from "@/components/GradientOrbs";
import ShimmerButton from "@/components/ShimmerButton";
import { FTMOLogo, The5ersLogo, FundedNextLogo, TopStepLogo, ApexLogo, MyFundedFuturesLogo } from "@/components/FirmLogos";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

const homeFeatures = [
  { icon: LineChart, titleKey: "Advanced Analytics", titleKeyBn: "উন্নত অ্যানালিটিক্স", descKey: "50+ performance metrics including win rate, profit factor, Sharpe ratio, and equity curves.", descKeyBn: "৫০+ পারফরম্যান্স মেট্রিক্স যার মধ্যে রয়েছে উইন রেট, প্রফিট ফ্যাক্টর, শার্প রেশিও এবং ইক্যুইটি কার্ভ।" },
  { icon: Brain, titleKey: "AI Trade Insights", titleKeyBn: "AI ট্রেড ইনসাইটস", descKey: "Machine learning analyzes your trades to identify patterns and optimize your strategy.", descKeyBn: "মেশিন লার্নিং আপনার ট্রেড বিশ্লেষণ করে প্যাটার্ন শনাক্ত ও কৌশল অপ্টিমাইজ করে।" },
  { icon: Shield, titleKey: "Risk Management", titleKeyBn: "ঝুঁকি ব্যবস্থাপনা", descKey: "Real-time risk scoring, position sizing, and drawdown protection to safeguard your capital.", descKeyBn: "রিয়েল-টাইম ঝুঁকি স্কোরিং, পজিশন সাইজিং এবং ড্রাডাউন প্রোটেকশন।" },
  { icon: Target, titleKey: "Strategy Builder", titleKeyBn: "স্ট্র্যাটেজি বিল্ডার", descKey: "Create, test, and refine trading strategies with our backtesting engine.", descKeyBn: "আমাদের ব্যাকটেস্টিং ইঞ্জিন দিয়ে ট্রেডিং কৌশল তৈরি, পরীক্ষা ও উন্নত করুন।" },
  { icon: Clock, titleKey: "Trade Replay", titleKeyBn: "ট্রেড রিপ্লে", descKey: "Replay your trades tick-by-tick to understand your entry and exit decisions.", descKeyBn: "আপনার প্রবেশ ও প্রস্থান সিদ্ধান্ত বোঝার জন্য টিক-বাই-টিক ট্রেড রিপ্লে করুন।" },
  { icon: PieChart, titleKey: "Portfolio Overview", titleKeyBn: "পোর্টফোলিও ওভারভিউ", descKey: "Track your entire portfolio across multiple brokers in one unified dashboard.", descKeyBn: "একটি একীভূত ড্যাশবোর্ডে একাধিক ব্রোকার জুড়ে আপনার সমগ্র পোর্টফোলিও ট্র্যাক করুন।" },
];

const testimonials = [
  {
    name: "Marcus Chen", role: "Forex Trader, 8 Years", rating: 5, profit: "+142%",
    content: "TradeInsight completely transformed how I approach the markets. The AI insights helped me identify a pattern in my losing trades that I never would have noticed.",
    contentBn: "TradeInsight সম্পূর্ণভাবে রূপান্তরিত করেছে যেভাবে আমি বাজারে প্রবেশ করি। AI ইনসাইটস আমাকে আমার হারানো ট্রেডে একটি প্যাটার্ন শনাক্ত করতে সাহায্য করেছে।",
  },
  {
    name: "Sarah Mitchell", role: "Futures Prop Trader", rating: 5, profit: "+$89K",
    content: "After failing 3 funded challenges, I used TradeInsight to analyze my mistakes. Passed my next challenge on the first attempt.",
    contentBn: "৩টি ফান্ডেড চ্যালেঞ্জ ব্যর্থ হওয়ার পর, আমি আমার ভুল বিশ্লেষণ করতে TradeInsight ব্যবহার করেছি। পরবর্তী চ্যালেঞ্জ প্রথম চেষ্টায় পাস করেছি।",
  },
  {
    name: "David Rodriguez", role: "Swing Trader & Investor", rating: 5, profit: "+67%",
    content: "The portfolio tracking across my multiple brokers is seamless. I finally have a single source of truth for all my trading activity.",
    contentBn: "আমার একাধিক ব্রোকার জুড়ে পোর্টফোলিও ট্র্যাকিং সুবিধাজনক। আমি অবশেষে আমার সমগ্র ট্রেডিং কার্যকলাপের জন্য একটি একক সত্যের উৎস পেয়েছি।",
  },
];

const stats = [
  { value: 1000, suffix: "+", label: "Active Traders", labelBn: "সক্রিয় ট্রেডার" },
  { value: 12, prefix: "$", suffix: "B+", label: "Trades Tracked", labelBn: "ট্র্যাক করা ট্রেড" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", labelBn: "সন্তুষ্টির হার" },
  { value: 4.9, suffix: "/5", label: "Average Rating", labelBn: "গড় রেটিং", decimals: 1 },
];

export default function Home() {
  const { locale } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TradeInsight",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description:
      "TradeInsight is the best trading journal app for Forex, Gold, Crypto & Funded Traders. Track trades, analyze performance with AI-powered insights, and master your strategy.",
    url: "https://tradeinsight.io",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "5",
      highPrice: "15",
      priceCurrency: "USD",
      offerCount: 3,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1000",
    },
    author: {
      "@type": "Organization",
      name: "TradeInsight",
      url: "https://tradeinsight.io",
    },
    brand: {
      "@type": "Brand",
      name: "TradeInsight",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TradeInsight",
    url: "https://tradeinsight.io",
    logo: "https://tradeinsight.io/logo.png",
    sameAs: [
      "https://t.me/tradeinsightbd",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "theiraffx@gmail.com",
      contactType: "customer service",
    },
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <GradientOrbs />
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-xs font-medium text-primary">{t(locale, "hero.badge")}</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                  {t(locale, "hero.title1")}
                  <br />
                  <span className="gradient-text">{t(locale, "hero.title2")}</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                  {t(locale, "hero.description")}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <ShimmerButton className="rounded-xl">
                    <Link
                      href="/pricing"
                      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
                    >
                      {t(locale, "hero.cta")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </ShimmerButton>
                  <Link
                    href="/features"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:border-primary/30 hover:scale-105 active:scale-95"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t(locale, "hero.demo")}
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-[10px] font-bold text-white"
                      >
                        {["M", "S", "K", "A", "J"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">4.9/5</span> {t(locale, "hero.reviews")}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="relative">
              <DashboardShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="relative border-y border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">
              {locale === "en" ? "Trusted by traders from leading prop firms and institutions" : "শীর্ষস্থানীয় প্রপ ফার্ম ও প্রতিষ্ঠানের ট্রেডারদের দ্বারা বিশ্বস্ত"}
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { Logo: FTMOLogo, name: "FTMO" },
              { Logo: The5ersLogo, name: "The5ers" },
              { Logo: FundedNextLogo, name: "Funded Next" },
              { Logo: TopStepLogo, name: "TopStep" },
              { Logo: ApexLogo, name: "Apex" },
              { Logo: MyFundedFuturesLogo, name: "MyFundedFutures" },
            ].map((firm, i) => (
              <AnimatedSection key={firm.name} delay={i * 0.1}>
                <div className="h-8 flex items-center text-muted-foreground/40 transition-colors duration-300 hover:text-muted-foreground/70">
                  <firm.Logo className="h-7 w-auto" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Marquee Ticker */}
      <AnimatedMarquee
        speed={25}
        items={[
          { text: "Forex", icon: "📈" },
          { text: "Gold", icon: "🥇" },
          { text: "Crypto", icon: "₿" },
          { text: "Futures", icon: "📊" },
          { text: "Funded", icon: "🏦" },
          { text: "Analytics", icon: "🎯" },
          { text: "Risk Management", icon: "🛡️" },
          { text: "AI Insights", icon: "🧠" },
          { text: "Trade Journal", icon: "📝" },
          { text: "Backtesting", icon: "⚡" },
        ]}
        className="py-4 border-y border-border bg-muted/20"
      />

      {/* Stats */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                    <CounterAnimation end={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <p className="text-sm text-muted-foreground">{locale === "en" ? stat.label : stat.labelBn}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                {t(locale, "features.badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {t(locale, "features.title")}{" "}
                <span className="gradient-text">{t(locale, "features.highlight")}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t(locale, "features.subtitle")}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeFeatures.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <TiltCard tiltAmount={5}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 h-full"
                  >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{locale === "en" ? feature.titleKey : feature.titleKeyBn}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{locale === "en" ? feature.descKey : feature.descKeyBn}</p>
                  </div>
                </motion.div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <Link href="/features" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                {t(locale, "features.viewAll")}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Funded Trader Section */}
      <section className="relative py-20 sm:py-28 bg-muted/30 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                {t(locale, "funded.badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                {locale === "en" ? "Built for" : "বিশেষভাবে তৈরি"}{" "}
                <span className="gradient-text">{t(locale, "funded.highlight")}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t(locale, "funded.subtitle")}
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { en: "Track challenge progress in real-time", bn: "রিয়েল-টাইমে চ্যালেঞ্জ অগ্রগতি ট্র্যাক করুন" },
                  { en: "Monitor daily loss limits automatically", bn: "স্বয়ংক্রিয়ভাবে দৈনিক ক্ষতির সীমা পর্যবেক্ষণ করুন" },
                  { en: "Analyze risk-reward per trade", bn: "প্রতি ট্রেডে ঝুঁকি-পুরস্কার বিশ্লেষণ করুন" },
                  { en: "Generate funded-ready reports", bn: "ফান্ডেড-রেডি রিপোর্ট তৈরি করুন" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{locale === "en" ? item.en : item.bn}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-105"
              >
                {t(locale, "funded.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl" />
                <div className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10">
                      <Trophy className="h-6 w-6 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{locale === "en" ? "Funded Challenge Tracker" : "ফান্ডেড চ্যালেঞ্জ ট্র্যাকার"}</h3>
                      <p className="text-xs text-muted-foreground">FTMO Challenge - Phase 1</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">{locale === "en" ? "Profit Target" : "লাভের লক্ষ্য"}</span>
                        <span className="text-xs font-semibold text-success">$4,231 / $10,000</span>
                      </div>
                      <div className="h-2 rounded-full bg-border overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "42.3%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-full rounded-full bg-success" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">{locale === "en" ? "Max Daily Loss" : "সর্বোচ্চ দৈনিক ক্ষতি"}</span>
                        <span className="text-xs font-semibold text-primary">$1,247 used / $5,000</span>
                      </div>
                      <div className="h-2 rounded-full bg-border overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "24.9%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7 }} className="h-full rounded-full bg-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">{locale === "en" ? "Trading Days" : "ট্রেডিং দিন"}</span>
                        <span className="text-xs font-semibold text-purple-500">8 / 30</span>
                      </div>
                      <div className="h-2 rounded-full bg-border overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "26.6%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }} className="h-full rounded-full bg-purple-500" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border grid grid-cols-3 gap-4">
                    {[
                      { label: { en: "Win Rate", bn: "উইন রেট" }, value: "72%", color: "text-success" },
                      { label: { en: "Trades", bn: "ট্রেড" }, value: "24", color: "text-primary" },
                      { label: { en: "Status", bn: "স্ট্যাটাস" }, value: { en: "Passing", bn: "পাসিং" }, color: "text-success" },
                    ].map((stat) => (
                      <div key={stat.label.en} className="text-center">
                        <p className={`text-lg font-bold ${stat.color}`}>{typeof stat.value === "object" ? (locale === "en" ? stat.value.en : stat.value.bn) : stat.value}</p>
                        <p className="text-[10px] text-muted-foreground">{locale === "en" ? stat.label.en : stat.label.bn}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                {t(locale, "testimonials.badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {t(locale, "testimonials.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t(locale, "testimonials.subtitle")}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 h-full"
                >
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                    &ldquo;{locale === "en" ? testimonial.content : testimonial.contentBn}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-success">{testimonial.profit}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-purple-500/10 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                  {t(locale, "pricing.badge")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  {locale === "en" ? "Start trading smarter" : "আরো স্মার্টভাবে ট্রেড শুরু করুন"}{" "}
                  <br className="hidden sm:block" />
                  <span className="gradient-text">{locale === "en" ? "for just $5/month" : "মাত্র $৫/মাসে"}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  {locale === "en" ? "Join 1,000+ traders who are already using TradeInsight to improve their performance." : "১,০০০+ ট্রেডারের সাথে যোগ দিন যারা ইতিমধ্যে TradeInsight ব্যবহার করে তাদের পারফরম্যান্স উন্নত করছেন।"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-105"
                  >
                    {t(locale, "nav.pricing")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:scale-105"
                  >
                    {t(locale, "nav.contact")}
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="relative py-16 sm:py-20 border-t border-border bg-muted/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 text-center">
              {locale === "en" ? "Why TradeInsight is the Best Trading Journal App" : "কেন TradeInsight সেরা ট্রেডিং জার্নাল অ্যাপ"}
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                {locale === "en"
                  ? "TradeInsight is a powerful trading journal app designed for Forex, Gold, Crypto, and Funded Traders. Whether you're a beginner or a professional trader, TradeInsight helps you track every trade, analyze your performance, and improve your strategy with AI-powered insights."
                  : "TradeInsight হলো একটি শক্তিশালী ট্রেডিং জার্নাল অ্যাপ যা Forex, Gold, Crypto এবং Funded Tradersদের জন্য ডিজাইন করা হয়েছে। আপনি যদি একজন নতুন বা পেশাদার ট্রেডার হন, TradeInsight আপনাকে প্রতিটি ট্রেড ট্র্যাক করতে, আপনার পারফরম্যান্স বিশ্লেষণ করতে এবং AI-চালিত ইনসাইটস দিয়ে আপনার কৌশল উন্নত করতে সাহায্য করে।"}
              </p>
              <p>
                {locale === "en"
                  ? "With TradeInsight, you get advanced analytics including win rate, profit factor, Sharpe ratio, and equity curves. Our risk management tools help you monitor daily loss limits and position sizing. The strategy backtesting engine lets you test your trading ideas before risking real capital."
                  : "TradeInsight দিয়ে আপনি উইন রেট, প্রফিট ফ্যাক্টর, শার্প রেশিও এবং ইক্যুইটি কার্ভ সহ উন্নত অ্যানালিটিক্স পান। আমাদের ঝুঁকি ব্যবস্থাপনা টুলস আপনাকে দৈনিক ক্ষতির সীমা এবং পজিশন সাইজিং পর্যবেক্ষণ করতে সাহায্য করে। স্ট্র্যাটেজি ব্যাকটেস্টিং ইঞ্জিন আপনাকে আসল পুঁজি ঝুঁকিতে ফেলার আগে আপনার ট্রেডিং আইডিয়া পরীক্ষা করতে দেয়।"}
              </p>
              <p>
                {locale === "en"
                  ? "Join 1,000+ active traders who trust TradeInsight as their go-to trading journal. Start with a plan from just $5/month and take your trading to the next level."
                  : "১,০০০+ সক্রিয় ট্রেডারের সাথে যোগ দিন যারা TradeInsight-কে তাদের প্রধান ট্রেডিং জার্নাল হিসেবে বিশ্বাস করে। মাত্র $৫/মাস থেকে শুরু করুন এবং আপনার ট্রেডিংকে পরবর্তী স্তরে নিয়ে যান।"}
              </p>
            </div>

            {/* Internal Links */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/features" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                {locale === "en" ? "Explore Features" : "ফিচার দেখুন"} <ChevronRight className="h-3 w-3" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                {locale === "en" ? "View Pricing" : "মূল্য দেখুন"} <ChevronRight className="h-3 w-3" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                {locale === "en" ? "About TradeInsight" : "TradeInsight সম্পর্কে"} <ChevronRight className="h-3 w-3" />
              </Link>
              <Link href="/faq" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                {locale === "en" ? "FAQ" : "সচরাচর জিজ্ঞাসা"} <ChevronRight className="h-3 w-3" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                {locale === "en" ? "Contact Support" : "সাপোর্টে যোগাযোগ"} <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
