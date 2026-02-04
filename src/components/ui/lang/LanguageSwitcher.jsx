import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "ru",
    label: "RU",
    flag: "https://flagcdn.com/w40/ru.png",
  },
  {
    code: "en",
    label: "EN",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    code: "tj",
    label: "TJ",
    flag: "https://flagcdn.com/w40/tj.png",
  },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-22 font-medium">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          w-full flex items-center justify-between
          px-2 py-1.5 rounded-xl border
          backdrop-blur-md
          bg-white/80 dark:bg-gray-900/80
          border-gray-200 dark:border-gray-700
          text-gray-900 dark:text-white
          shadow-lg shadow-black/5 dark:shadow-black/40
          hover:scale-[1.02] hover:shadow-xl
          active:scale-[0.98]
          transition-all duration-200
        `}
      >
        <div className="flex items-center gap-1.5">
          <img src={current.flag} className="w-6 h-4 rounded shadow" alt="" />

          <span className="text-sm tracking-wide">{current.label}</span>
        </div>

        {/* Arrow */}
        <svg
          className={`
            w-4 h-4 text-gray-500 dark:text-gray-300
            transition-transform duration-200
            ${open ? "rotate-180" : ""}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`
    absolute left-0 top-full -mt-px w-full
    rounded-b-xl border
    bg-white/90 dark:bg-gray-900/90
    backdrop-blur-md
    border-gray-200 dark:border-gray-700
    shadow-2xl dark:shadow-black/60
    overflow-hidden
    z-50
    transition-all duration-200 origin-top
    ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
  `}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`
              w-full flex items-center 
              px-3 py-2 text-sm
              text-gray-800 dark:text-gray-100
              hover:bg-gray-100/70
              dark:hover:bg-gray-800/70
              active:bg-gray-200 dark:active:bg-gray-700
              transition
            `}
          >
            <img src={lang.flag} className="w-6 h-4 rounded shadow" alt="" />

            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
