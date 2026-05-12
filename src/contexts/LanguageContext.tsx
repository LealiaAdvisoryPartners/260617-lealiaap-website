import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { en } from "@/translations/en";
import { pt } from "@/translations/pt";
import { es } from "@/translations/es";
import { getLanguageFromPath } from "@/lib/routing";

type Language = "en" | "pt" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en,
  pt,
  es,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Save to localStorage (your existing behavior)
    localStorage.setItem("language", lang);
    
    // Tell Netlify to override future IP redirects
    document.cookie = `nf_country=${getNfCountry(lang)}; path=/; max-age=${60 * 60 * 24 * 365}`;
  };

  // Helper: map lang to Netlify country override
  const getNfCountry = (lang: Language): string => {
    if (lang === "pt") return "PT";
    if (lang === "es") return "ES";
    return "US"; // en
  };

  // Sync language with URL path changes
  useEffect(() => {
    const pathLang = getLanguageFromPath(location.pathname);
    if (pathLang) {
      setLanguageState(pathLang);
      localStorage.setItem("language", pathLang);
    } else {
      // If no language in path, check localStorage
      const saved = localStorage.getItem("language") as Language | null;
      if (saved && (saved === "en" || saved === "pt" || saved === "es")) {
        setLanguageState(saved);
      } else {
        setLanguageState("en");
      }
    }
  }, [location.pathname]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
