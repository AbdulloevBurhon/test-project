import { Monitor, ChevronDown } from "lucide-react";

function CategoryButton({ open, onClick, title }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full px-3 py-2 transition-all duration-300 border shadow-sm  sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur border-zinc-200/60 dark:border-zinc-800/60 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/40"
    >
      {/* LEFT */}
      <h1 className="text-sm font-semibold truncate sm:text-base md:text-xl text-zinc-900 dark:text-white">
        💻 {title}
      </h1>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg sm:w-9 sm:h-9 md:w-10 md:h-10 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
          <Monitor size={18} />
        </div>

        <ChevronDown
          size={18}
          className={`
            text-zinc-600
            dark:text-zinc-300
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </div>
    </button>
  );
}

export default CategoryButton;
