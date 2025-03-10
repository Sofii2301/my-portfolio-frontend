import { createContext, useState, useContext } from "react";
import translationEn from '../assets/locales/en/translation.json';
import translationEs from '../assets/locales/es/translation.json';

const translations = {
    en: translationEn,
    es: translationEs,
};

const languages = {
    en: { name: "English", flag: "🇺🇸" },
    es: { name: "Español", flag: "🇪🇸" },
};

// Create context
const LanguageContext = createContext();

// Context provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es"); // Default language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language], languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use context anywhere
export function useLanguage() {
  return useContext(LanguageContext);
}
