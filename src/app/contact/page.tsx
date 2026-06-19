"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";
import { siteConfig } from "@/lib/config";

export default function ContactPage() {
  const { locale } = useLanguage();
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative">
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">{t(locale, "contact.badge")}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{t(locale, "contact.title")}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{t(locale, "contact.subtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-6">{locale === "en" ? "Get in touch" : "যোগাযোগ করুন"}</h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: { en: "Email", bn: "ইমেইল" }, value: siteConfig.supportEmail, desc: { en: "We'll respond within 24 hours", bn: "২৪ ঘণ্টার মধ্যে উত্তর দেব" } },
                    { icon: MessageSquare, label: { en: "Live Chat", bn: "লাইভ চ্যাট" }, value: { en: "Available 24/7", bn: "২৪/৭ উপলব্ধ" }, desc: { en: "Instant support for urgent queries", bn: "জরুরি প্রশ্নের জন্য তাৎক্ষণিক সাপোর্ট" } },
                    { icon: MapPin, label: { en: "Office", bn: "অফিস" }, value: siteConfig.officeLocation, desc: { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" } },
                    { icon: Clock, label: { en: "Working Hours", bn: "কার্যালয় সময়" }, value: { en: "Mon - Fri, 9AM - 6PM", bn: "শনি - বৃহ, ৯টা - ৬টা" }, desc: { en: "BST (GMT+6)", bn: "BST (GMT+6)" } },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10"><item.icon className="h-5 w-5 text-primary" /></div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{locale === "en" ? item.label.en : item.label.bn}</p>
                        <p className="text-sm font-semibold">{typeof item.value === "object" ? (locale === "en" ? item.value.en : item.value.bn) : item.value}</p>
                        <p className="text-xs text-muted-foreground">{locale === "en" ? item.desc.en : item.desc.bn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                      <div className="mb-4 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-success/10"><Send className="h-8 w-8 text-success" /></div>
                      <h3 className="text-xl font-bold mb-2">{t(locale, "contact.sent")}</h3>
                      <p className="text-sm text-muted-foreground mb-6">{t(locale, "contact.sentDesc")}</p>
                      <button onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }} className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        {locale === "en" ? "Send another message" : "আরেকটি বার্তা পাঠান"}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium mb-1.5">{t(locale, "contact.name")}</label>
                          <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder={locale === "en" ? "Your name" : "আপনার নাম"} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium mb-1.5">{t(locale, "contact.email")}</label>
                          <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5">{t(locale, "contact.subject")}</label>
                        <input type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder={locale === "en" ? "How can we help?" : "আমরা কিভাবে সাহায্য করতে পারি?"} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1.5">{t(locale, "contact.message")}</label>
                        <textarea required rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" placeholder={locale === "en" ? "Tell us more..." : "আমাদের আরো জানান..."} />
                      </div>
                      <button type="submit" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-105">
                        {t(locale, "contact.send")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
