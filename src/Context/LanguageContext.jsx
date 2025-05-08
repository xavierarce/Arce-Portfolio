import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n"; // Make sure this file initializes i18next
import { useTranslation } from "react-i18next";

const LanguageContext = createContext({
  language: "fr",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("appLanguage");
    const defaultLang = savedLang || "fr";
    i18n.changeLanguage(defaultLang); // Apply language to i18n on load
    return defaultLang;
  });
  const { t } = useTranslation();

  const translate = (tradKey) => {
    const writeTrad = (key) => {
      return t(`${tradKey}.${key}`);
    };
    return { writeTrad };
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("appLanguage", lang);
    setLanguage(lang);
  };

  // Optional: keep i18n in sync if language is changed externally
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, translate }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
