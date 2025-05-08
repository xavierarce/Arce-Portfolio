import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en_translation from "./locales/en/translation.json";
import fr_translation from "./locales/fr/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Set default and fallback language to French
    fallbackLng: "fr",
    lng: "fr",
    debug: true,

    interpolation: {
      escapeValue: false, // React already handles XSS
    },

    resources: {
      en: en_translation,
      fr: fr_translation,
    },
  });

export default i18n;
