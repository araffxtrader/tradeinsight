"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Users, Lightbulb, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";
import { siteConfig } from "@/lib/config";

const values = [
  { icon: Target, title: { en: "Obsessive About Quality", bn: "মানের প্রতি উদ্বেগ" }, desc: { en: "Every pixel, every interaction is crafted with meticulous attention to detail.", bn: "প্রতিটি পিক্সেল, প্রতিটি ইন্টারঅ্যাকশন মনোযোগ দিয়ে তৈরি।" } },
  { icon: Users, title: { en: "Trader-First", bn: "ট্রেডার-ফার্স্ট" }, desc: { en: "We are traders ourselves. Every decision starts with: 'Will this help traders?'", bn: "আমরা নিজেরাই ট্রেডার। প্রতিটি সিদ্ধান্ত শুরু হয়: 'এটি কি ট্রেডারদের সাহায্য করবে?'" } },
  { icon: Lightbulb, title: { en: "Innovation Driven", bn: "উদ্ভাবনী" }, desc: { en: "We push the boundaries of trading technology with AI and advanced analytics.", bn: "আমরা AI ও উন্নত অ্যানালিটিক্স দিয়ে ট্রেডিং প্রযুক্তির সীমানা এগিয়ে দিই।" } },
  { icon: Rocket, title: { en: "Trust & Transparency", bn: "বিশ্বাস ও স্বচ্ছতা" }, desc: { en: "No hidden fees, no data selling. Your data is yours.", bn: "কোনো লুকানো ফি নেই, কোনো ডেটা বিক্রি নেই। আপনার ডেটা আপনার।" } },
];

const milestones = [
  { year: "2021", title: { en: "The Spark", bn: "শুরু" }, desc: { en: "Founded by prop traders frustrated with existing journaling tools.", bn: "বিদ্যমান জার্নালিং টুল নিয়ে হতাশ প্রপ ট্রেডারদের দ্বারা প্রতিষ্ঠিত।" } },
  { year: "2022", title: { en: "First 1,000", bn: "প্রথম ১,০০০" }, desc: { en: "Reached our first 1,000 users. Launched MT4/MT5 integration.", bn: "প্রথম ১,০০০ ব্যবহারকারী অর্জন। MT4/MT5 ইন্টিগ্রেশন চালু।" } },
  { year: "2023", title: { en: "AI Revolution", bn: "AI বিপ্লব" }, desc: { en: "Launched AI-powered insights. Grew to 15,000 users.", bn: "AI-চালিত ইনসাইটস চালু। ১৫,০০০ ব্যবহারকারীতে পৌঁছে।" } },
  { year: "2024", title: { en: "Global Scale", bn: "বৈশ্বিক স্কেল" }, desc: { en: "Crossed 1,000+ users. Launched mobile apps and strategy backtesting.", bn: "১,০০০+ ব্যবহারকারী অতিক্রান্ত। মোবাইল অ্যাপ ও স্ট্র্যাটেজি ব্যাকটেস্টিং চালু।" } },
  { year: "2025", title: { en: "Enterprise", bn: "এন্টারপ্রাইজ" }, desc: { en: "Launched enterprise tier for prop firms. Processing $12B+ in trade data.", bn: "প্রপ ফার্মের জন্য এন্টারপ্রাইজ টিয়ার চালু। $১২B+ ট্রেড ডেটা প্রক্রিয়াকরণ।" } },
  { year: "2026", title: { en: "The Future", bn: "ভবিষ্যৎ" }, desc: { en: "Building next-gen trading intelligence with real-time market analysis.", bn: "রিয়েল-টাইম বাজার বিশ্লেষণ দিয়ে পরবর্তী প্রজন্মের ট্রেডিং ইন্টেলিজেন্স তৈরি।" } },
];

export default function AboutPage() {
  const { locale } = useLanguage();

  return (
    <div className="relative">
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">{t(locale, "about.badge")}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {locale === "en" ? "On a mission to " : "ট্রেডিং ইন্টেলিজেন্সের "}
              <span className="gradient-text">{t(locale, "about.highlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "en" ? "Built by traders, for traders. We exist to give every trader access to tools once only available to institutional desks." : "ট্রেডারদের দ্বারা, ট্রেডারদের জন্য তৈরি। আমরা বিদ্যমান কারণ প্রতিটি ট্রেডারকে সেই টুল দেওয়া যা আগে শুধু ইনস্টিটিউশনাল ডেস্কের জন্য ছিল।"}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"><Target className="h-6 w-6 text-primary" /></div>
                <h2 className="text-2xl font-bold mb-4">{t(locale, "about.missionTitle")}</h2>
                <p className="text-muted-foreground leading-relaxed">{t(locale, "about.mission")}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"><Eye className="h-6 w-6 text-primary" /></div>
                <h2 className="text-2xl font-bold mb-4">{t(locale, "about.visionTitle")}</h2>
                <p className="text-muted-foreground leading-relaxed">{t(locale, "about.vision")}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">{t(locale, "about.valuesTitle")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{locale === "en" ? "What we " : "যার জন্য আমরা "}<span className="gradient-text">{locale === "en" ? "stand for" : "দাঁড়ি"}</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10"><v.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="text-base font-semibold mb-2">{locale === "en" ? v.title.en : v.title.bn}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{locale === "en" ? v.desc.en : v.desc.bn}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-2xl font-bold text-white">AK</div>
              </div>
              <blockquote className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                {locale === "en"
                  ? '"I started TradeInsight after failing my third funded challenge. I knew I was a good trader, but I couldn\'t see my blind spots. Today, TradeInsight has helped over 1,000+ traders see their trading clearly and improve with every trade."'
                  : '"আমি আমার তৃতীয় ফান্ডেড চ্যালেঞ্জ ব্যর্থ হওয়ার পর TradeInsight শুরু করেছি। আমি জানতাম আমি একজন ভালো ট্রেডার, কিন্তু আমি আমার অন্ধবোধ দেখতে পারছিলনা। আজ, TradeInsight ৫০,০০০+ ট্রেডারকে তাদের ট্রেডিং স্পষ্টভাবে দেখতে সাহায্য করেছে।"'}
              </blockquote>
              <p className="font-semibold">Mehrajul Hasan Araf</p>
              <p className="text-sm text-muted-foreground">Co-Founder & CEO, TradeInsight</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">{t(locale, "about.roadmapTitle")}</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{locale === "en" ? "From idea to " : "ধারণা থেকে "}<span className="gradient-text">{locale === "en" ? "global platform" : "বৈশ্বিক প্ল্যাটফর্ম"}</span></h2>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1}>
                  <div className="relative flex gap-6 pl-12">
                    <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                    <div>
                      <span className="text-xs font-semibold text-primary">{m.year}</span>
                      <h3 className="text-lg font-bold mt-0.5">{locale === "en" ? m.title.en : m.title.bn}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{locale === "en" ? m.desc.en : m.desc.bn}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{locale === "en" ? "Join the TradeInsight family" : "TradeInsight পরিবারে যোগ দিন"}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-105">
                {t(locale, "nav.contact")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:scale-105">
                {locale === "en" ? "See Our Product" : "আমাদের প্রোডাক্ট দেখুন"}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
