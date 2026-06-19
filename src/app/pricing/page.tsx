"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X, ArrowRight, Zap, Star, Crown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";
import { pricingPlans, siteConfig } from "@/lib/config";

const icons = [Zap, Star, Crown];
const cardColors = [
  { ring: "border-border", glow: "", badge: "" },
  { ring: "border-primary", glow: "shadow-2xl shadow-primary/20", badge: "bg-primary text-primary-foreground" },
  { ring: "border-border", glow: "", badge: "" },
];

export default function PricingPage() {
  const { locale } = useLanguage();

  return (
    <div className="relative">
      {/* Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
              {t(locale, "pricing.badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {locale === "en" ? "Simple, " : "সহজ, "}
              <span className="gradient-text">{locale === "en" ? "transparent pricing" : "স্বচ্ছ মূল্য"}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t(locale, "pricing.subtitle")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
            {pricingPlans.map((plan, i) => {
              const Icon = icons[i];
              const colors = cardColors[i];
              const isPopular = plan.popular;

              return (
                <AnimatedSection key={plan.id} delay={i * 0.15}>
                  <motion.div
                    whileHover={{ y: isPopular ? -10 : -5 }}
                    transition={{ duration: 0.3 }}
                    className={`relative rounded-2xl border-2 bg-card transition-all duration-300 ${
                      isPopular
                        ? `border-primary shadow-2xl shadow-primary/15 ${isPopular ? "p-7 sm:p-9" : "p-6 sm:p-8"} scale-[1.03] z-10`
                        : `border-border p-6 sm:p-8 hover:border-primary/30 hover:shadow-lg`
                    }`}
                  >
                    {/* Subtle glow for Pro */}
                    {isPopular && (
                      <div className="absolute -inset-1 rounded-2xl bg-primary/8 blur-xl -z-10" />
                    )}
                    {/* Popular Badge */}
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-md">
                          <Star className="h-3 w-3 fill-current" />
                          {locale === "en" ? "MOST POPULAR" : "সবচেয়ে জনপ্রিয়"}
                        </div>
                      </div>
                    )}

                    {/* Plan Header */}
                    <div className="mb-6">
                      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${isPopular ? "bg-primary/15" : "bg-muted"}`}>
                        <Icon className={`h-7 w-7 ${isPopular ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{locale === "en" ? plan.name.en : plan.name.bn}</h3>
                      <p className="text-sm text-muted-foreground">{locale === "en" ? plan.target.en : plan.target.bn}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className={`font-bold ${isPopular ? "text-5xl" : "text-4xl"}`}>${plan.price}</span>
                        <span className="text-sm text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">≈ {plan.priceBDT.toLocaleString()} BDT {plan.period}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2.5">
                          {feature.included ? (
                            <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground/30 shrink-0" />
                          )}
                          <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/40 line-through"}`}>
                            {locale === "en" ? feature.text.en : feature.text.bn}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href={plan.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all duration-300 ${
                        isPopular
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:scale-105"
                          : "border border-border bg-background text-foreground hover:bg-accent hover:border-primary/30 hover:scale-105"
                      }`}
                    >
                      {locale === "en" ? plan.cta.en : plan.cta.bn}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {t(locale, "pricing.faqTitle")}
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { q: { en: "Can I switch plans later?", bn: "পরে কি আমি প্ল্যান পরিবর্তন করতে পারি?" }, a: { en: "Yes, you can upgrade or downgrade at any time. When upgrading, you'll be prorated for the remainder of your billing cycle.", bn: "হ্যাঁ, আপনি যেকোনো সময় আপগ্রেড বা ডাউনগ্রেড করতে পারেন।" } },
              { q: { en: "Is there a free trial?", bn: "কি ফ্রি ট্রায়াল আছে?" }, a: { en: "Yes! All plans come with a 14-day free trial. No credit card required to start.", bn: "হ্যাঁ! সব প্ল্যানে ১৪-দিনের ফ্রি ট্রায়াল। ক্রেডিট কার্ডের প্রয়োজন নেই।" } },
              { q: { en: "What payment methods do you accept?", bn: "আপনারা কি কি পেমেন্ট পদ্ধতি গ্রহণ করেন?" }, a: { en: "We accept all major credit cards (Visa, Mastercard), bKash, Nagad, Rocket, and cryptocurrency payments.", bn: "আমরা সব প্রধান ক্রেডিট কার্ড, বিকাশ, নগদ, রকেট এবং ক্রিপ্টোকারেন্সি গ্রহণ করি।" } },
              { q: { en: "Can I cancel anytime?", bn: "আমি কি যেকোনো সময় বাতিল করতে পারি?" }, a: { en: "Absolutely. There are no contracts or commitments. Cancel anytime from your dashboard with one click.", bn: "অবশ্যই। কোনো চুক্তি নেই। এক ক্লিকে যেকোনো সময় বাতিল করুন।" } },
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-sm font-semibold mb-2">{locale === "en" ? faq.q.en : faq.q.bn}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{locale === "en" ? faq.a.en : faq.a.bn}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
