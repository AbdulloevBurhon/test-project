import { useEffect, useState } from "react";
//////    просто ставь это в глобальный стиль все
//// @custom-variant dark (&:where(.dark, .dark *));
export default function DarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove(colorTheme);
    body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
