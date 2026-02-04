import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/ui/button/button";

function Home() {
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
        from-blue-50 via-white to-indigo-100
        dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
      "
    >
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/25 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/25 rounded-full blur-[140px]" />

      {/* Animated Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full px-4 sm:px-8 lg:px-16 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeDown}
          className="
            inline-flex items-center gap-2
            mb-6
            px-4 py-1.5
            rounded-full
            text-sm font-medium
            bg-blue-100/80 text-blue-700
            dark:bg-blue-900/40 dark:text-blue-300
          "
        >
          🚀 Learn • Build • Grow
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeDown}
          className="
            max-w-5xl mx-auto
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold
            tracking-tight
            text-zinc-900 dark:text-white
            leading-[1.1]
            mb-6
          "
        >
          {t("home.title")}{" "}
          <span className="text-blue-700 dark:text-blue-400">
            {t("home.skillUp")}
            <span className="text-orange-400">Up</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          className="
            max-w-2xl mx-auto
            text-base sm:text-lg md:text-xl
            text-zinc-600 dark:text-zinc-400
            mb-10
          "
        >
          {t("home.desk")}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
            max-w-lg mx-auto
          "
        >
          {/* Login */}
          <Link to="/login" className="w-full">
            <Button
              fullWidth
              className="
                bg-gradient-to-r
                from-blue-600 to-indigo-600
                text-white
                shadow-xl shadow-blue-500/40
                hover:shadow-2xl
                transition-all
              "
            >
              {t("home.login")}
            </Button>
          </Link>

          {/* Register */}
          <Link to="/register" className="w-full">
            <Button
              fullWidth
              variant="outline"
              className="
                border-2 border-blue-600
                text-blue-600
                bg-transparent

                shadow-md shadow-blue-500/20
                hover:shadow-xl hover:shadow-blue-500/40

                hover:border-blue-500
                hover:text-blue-500

                transition-all
              "
            >
              {t("home.register")}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
