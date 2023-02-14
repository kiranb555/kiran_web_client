import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translateEN from './en/common.json';
import translateDE from './de/common.json';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
  .init({
    debugger:true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: translateEN
      },
      de: {
        translation: translateDE
      }
    },
  });