"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, BarChart3, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const navLinks = [
    { href: "/", label: t(locale, "nav.home") },
    { href: "/features", label: t(locale, "nav.features") },
    { href: "/pricing", label: t(locale, "nav.pricing") },
    { href: "/about", label: t(locale, "nav.about") },
    { href: "/faq", label: t(locale, "nav.faq") },
    { href: "/contact", label: t(locale, "nav.contact") },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="TradeInsight Logo"
                width={140}
                height={40}
                className="h-9 w-auto transition-all duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {mounted && (
                <>
                  <button
                    onClick={() => setLocale(locale === "en" ? "bn" : "en")}
                    className="flex h-9 items-center gap-1 rounded-lg border border-border bg-background/50 px-2.5 text-xs font-semibold text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground hover:scale-105"
                    aria-label="Toggle language"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {locale === "en" ? "BN" : "EN"}
                  </button>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground hover:scale-105"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </button>
                </>
              )}

              <Link
                href="/pricing"
                className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                {t(locale, "nav.getStarted")}
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/pricing"
                  className="mt-2 flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90"
                >
                  {t(locale, "nav.getStarted")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
