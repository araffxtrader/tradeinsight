"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { type Locale } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isDetected: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  isDetected: false,
});

const STORAGE_KEY = "tradeinsight-locale";

function isBengaliLanguage(lang: string): boolean {
  return lang.toLowerCase().startsWith("bn") || lang.toLowerCase().startsWith("bd");
}

function detectBrowserLanguage(): Locale {
  if (typeof window === "undefined") return "en";
  const browserLang = navigator.language || (navigator as any).userLanguage || "";
  return isBengaliLanguage(browserLang) ? "bn" : "en";
}

async function detectCountry(): Promise<Locale> {
  try {
    const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    if (!res.ok) return "en";
    const data = await res.json();
    return data.country_code === "BD" ? "bn" : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isDetected, setIsDetected] = useState(false);

  useEffect(() => {
    // 1. Check localStorage first (user's saved preference)
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "bn") {
        setLocaleState(saved);
        setIsDetected(true);
        return;
      }
    }

    // 2. No saved preference — auto-detect
    const detect = async () => {
      const browserLocale = detectBrowserLanguage();

      if (browserLocale === "bn") {
        // Browser language is Bangla — switch immediately
        setLocaleState("bn");
        localStorage.setItem(STORAGE_KEY, "bn");
        setIsDetected(true);
        return;
      }

      // 3. Check country via IP geolocation
      const countryLocale = await detectCountry();
      if (countryLocale === "bn") {
        setLocaleState("bn");
        localStorage.setItem(STORAGE_KEY, "bn");
      } else {
        setLocaleState("en");
        localStorage.setItem(STORAGE_KEY, "en");
      }
      setIsDetected(true);
    };

    detect();
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLocale);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isDetected }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
