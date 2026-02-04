import { Search } from "lucide-react";
import { motion } from "framer-motion";

function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        flex items-center gap-2

        bg-white
        dark:bg-zinc-800

        px-3 py-2
        sm:px-4 sm:py-2.5

        rounded-xl
        mb-4

        shadow
      "
    >
      <Search size={18} className="text-zinc-400" />

      <input
        placeholder="Поиск чатов..."
        className="
          bg-transparent
          outline-none
          w-full
          text-sm sm:text-base

          dark:text-white
          placeholder:text-zinc-400
        "
      />
    </motion.div>
  );
}

export default SearchBar;
