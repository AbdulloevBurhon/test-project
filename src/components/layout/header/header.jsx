import { ChevronDown } from "lucide-react";
import LanguageSwitcher from "../../ui/lang/LanguageSwitcher";
import ThemeSwitcher from "../../ui/theme/ThemeSwitcher";
import Logo from "./logo";

function Header() {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-zinc-900">
      <div className="flex items-center justify-between px-4 pt-2 pb-2 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <ChevronDown className="dark:text-white" />
        </div>
      </div>
    </header>
  );
}

export default Header;
