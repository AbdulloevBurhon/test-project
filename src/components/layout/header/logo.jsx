import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="
        flex items-center gap-2
        select-none
        group
        transition-all
        duration-300
      "
    >
      {/* Logo image */}
      <img
        src="/logo.png"
        alt="SkillUp Logo"
        className="
          h-10 w-auto
          object-contain
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-1
        "
      />

      {/* Brand text */}
      <span
        className="
          text-xl font-bold
          tracking-tight
          text-blue-700 dark:text-blue-400
          transition-colors
          duration-300
          group-hover:text-blue-600
        "
      >
        Skill
        <span className="text-orange-400 group-hover:text-orange-500">Up</span>
      </span>
    </Link>
  );
}

export default Logo;
