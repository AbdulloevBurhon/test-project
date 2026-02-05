import { Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-3 mb-1.5 sm:p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/70"
    >
      {/* Top */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold sm:text-lg dark:text-white">
          Burhon
        </h3>

        <div className="flex items-center gap-1 text-yellow-400">
          <Trophy size={18} />
          <span className="text-sm font-medium sm:text-base">2706</span>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3">
        <Star size={16} className="text-yellow-400" />

        <div className="flex-1 h-2.5 bg-zinc-300 dark:bg-zinc-700 rounded-full">
          <div className="h-full w-[45%] bg-blue-500 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
