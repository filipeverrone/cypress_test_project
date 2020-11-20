import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt, en } from "./locales";

const langs = ["pt", "en"];

i18n.use(initReactI18next).init({
  resources: { pt, en },
  lng: localStorage.getItem("language"),
  fallbackLng: "pt",

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

const changeLang = (lang) => {
  const language = langs.includes(lang) ? lang : "pt";
  localStorage.setItem("language", language);
  i18n.changeLanguage(language);
  window.location.reload();
};

export default i18n;
export { changeLang };
