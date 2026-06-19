"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";
import { siteConfig } from "@/lib/config";

export default function SuccessPage() {
  const { locale } = useLanguage();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0" />
      <div className="grid-bg absolute inset-0 opacity-30" />

      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 600,
                y: -20,
                opacity: 1,
                rotate: 0,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: typeof window !== "undefined" ? window.innerHeight + 20 : 900,
                opacity: 0,
                rotate: Math.random() * 720 - 360,
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                delay: Math.random() * 1.5,
                ease: "easeOut",
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ["#2563eb", "#7c3aed", "#ec4899", "#f59e0b", "#059669", "#06b6d4"][Math.floor(Math.random() * 6)],
              }}
            />
          ))}
        </div>
      )}

      <div className="relative mx-auto max-w-lg px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-12 w-12 text-success" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 rounded-full border-2 border-success/20"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute -inset-8 rounded-full border border-success/10"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-1.5 mb-6">
            <Sparkles className="h-4 w-4 text-success" />
            <span className="text-xs font-semibold text-success">{t(locale, "success.paymentSuccess")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {t(locale, "success.title")}
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            {t(locale, "success.subtitle")}
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            {t(locale, "success.message")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="rounded-2xl border border-border bg-card p-6 mb-8">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">{t(locale, "success.nextStep")}</p>
                <p className="text-xs text-muted-foreground">{t(locale, "success.nextStepDesc")}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="space-y-3"
        >
          <a
            href={siteConfig.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#229ED9] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/25 transition-all duration-300 hover:bg-[#1e8bc4] hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            {t(locale, "success.claimAccount")}
            <ExternalLink className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-accent hover:border-primary/30 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            {t(locale, "success.contactSupport")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            {t(locale, "success.backHome")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
