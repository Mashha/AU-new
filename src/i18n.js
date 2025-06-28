import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationSL from "./locales/slo/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    sl: { translation: translationSL },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
