import { motion } from "framer-motion";

function AnimatedSection({ children }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      className="
        relative
        min-h-[calc(100vh-64px)]
        flex items-center justify-center
        overflow-hidden

        bg-gradient-to-br
        from-blue-100 via-white to-indigo-100
        dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
      "
    >
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[130px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full px-4 sm:px-8 lg:px-16 text-center"
      >
        {children}
      </motion.div>
    </section>
  );
}

export default AnimatedSection;
