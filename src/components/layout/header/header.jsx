import LanguageSwitcher from "../../ui/lang/LanguageSwitcher";
import ThemeSwitcher from "../../ui/theme/ThemeSwitcher";
import Logo from "./logo";

function Header() {
  return (
    <header className="w-full bg-white dark:bg-zinc-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 pt-2 pb-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
