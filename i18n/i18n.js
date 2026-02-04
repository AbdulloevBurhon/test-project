//// v main.jsx   import "../i18n/i18n.js";

// function App() {
//   const { t, i18n } = useTranslation(); 
//       <h1>{t("hello")}</h1>
//       <select
//         value={i18n.language}
//         onChange={(e) => {
//           i18n.changeLanguage(e.target.value);
//           localStorage.setItem("lang", e.target.value);
//         }}
//       >
//         <option value="ru">Русский</option>
//         <option value="en">English</option>
//         <option value="tj">Тоҷикӣ</option>
//       </select>



import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "../locales/ru.json";
import en from "../locales/en.json";
import tj from "../locales/tj.json";
i18n.use(initReactI18next).init({
  resources: { ru: { translation: ru }, en: { translation: en }, tj: { translation: tj } },
  lng: localStorage.getItem("lang") || "ru",
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;