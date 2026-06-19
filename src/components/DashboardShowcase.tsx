"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

export default function DashboardShowcase() {
  const { locale } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Glow behind the device */}
      <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-primary/15 via-purple-500/10 to-primary/15 blur-3xl opacity-60" />

      {/* Device Frame */}
      <div className="relative device-frame bg-card">
        {/* Browser Bar */}
        <div className="relative h-8 bg-muted border-b border-border flex items-center px-4 gap-1.5 z-10">
          <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-warning/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-background border border-border px-3 flex items-center">
            <span className="text-[10px] text-muted-foreground">app.tradeinsight.io/dashboard</span>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
          <Image
            src="/dashboard.png"
            alt="TradeInsight Trading Dashboard"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            priority
          />

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-4 sm:top-16 sm:left-8 glass-card rounded-xl p-3 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10">
                <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground">Win Rate</p>
                <p className="text-xs font-bold text-success">72.4%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 right-4 sm:bottom-20 sm:right-8 glass-card rounded-xl p-3 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground">Total P&L</p>
                <p className="text-xs font-bold text-primary">+$12,847</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
