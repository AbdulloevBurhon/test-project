import { motion } from "framer-motion";

function CardList({ title, icon, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`
        h-20
        sm:h-24
        md:h-28

        rounded-xl

        flex flex-col
        items-center justify-center

        text-white
        font-medium

        bg-gradient-to-br ${color}

        shadow-lg
        cursor-pointer
        transition
      `}
    >
      {icon}

      <span className="mt-1 text-xs text-center sm:text-sm">{title}</span>
    </motion.div>
  );
}

export default CardList;
