import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json"; // Caminho corrigido
import translationPT from "./locales/pt/translation.json"; // Caminho corrigido

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n
  .use(initReactI18next) // hook para usar com React
  .init({
    resources,
    lng: "pt", // linguagem padrão
    fallbackLng: "en", // fallback caso a linguagem selecionada não exista
    interpolation: {
      escapeValue: false, // para evitar problemas com XSS no React
    },
  });

export default i18n;
