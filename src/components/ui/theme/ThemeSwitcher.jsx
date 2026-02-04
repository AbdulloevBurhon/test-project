import DarkMode from "../../../hooks/darkMode";

function ThemeSwitcher() {
  const [colorTheme, setTheme] = DarkMode();

  return (
    <button
      onClick={() => setTheme(colorTheme)}
      className={`
        relative flex items-center justify-center
        w-11 h-11 rounded-xl border
        backdrop-blur-md
        bg-white/80 dark:bg-gray-900/80
        border-gray-200 dark:border-gray-700
        shadow-lg shadow-black/5 dark:shadow-black/40
        hover:scale-105 hover:shadow-xl
        active:scale-95
        transition-all duration-200
      `}
      aria-label="Toggle theme"
    >
      {/* Sun */}
      <svg
        className={`
    absolute w-5 h-5 text-yellow-400
    drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]
    drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]
    transition-all duration-300
    ${
      colorTheme === "dark"
        ? "opacity-100 rotate-0 scale-100"
        : "opacity-0 rotate-90 scale-50"
    }
  `}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>

      {/* Moon */}
      <svg
        className={`
          absolute w-5 h-5 text-indigo-400
          transition-all duration-300
          ${
            colorTheme === "dark"
              ? "opacity-0 -rotate-90 scale-50"
              : "opacity-100 rotate-0 scale-100"
          }
        `}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        />
      </svg>
    </button>
  );
}

export default ThemeSwitcher;
