import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedSection from "../../components/layout/AnimatedSection";
import { fadeDown, fadeIn, fadeUp } from "../../animations/fade";

import Button from "../../components/ui/button/button";

function Home() {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <motion.div variants={fadeDown}>
        <div
          className="inline-flex mb-6 px-4 py-1.5 rounded-full text-sm font-medium
          bg-blue-100/80 text-blue-700
          dark:bg-blue-900/40 dark:text-blue-300"
        >
          🚀 Learn • Build • Grow
        </div>
      </motion.div>

      <motion.h1
        variants={fadeDown}
        className="max-w-5xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        font-extrabold text-zinc-900 dark:text-white mb-6"
      >
        {t("home.title")}{" "}
        <span className="text-blue-700 dark:text-blue-400">
          {t("home.skillUp")}
          <span className="text-orange-400">Up</span>
        </span>
      </motion.h1>

      <motion.p
        variants={fadeIn}
        className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 mb-10"
      >
        {t("home.desk")}
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
      >
        <Link to="/login" className="w-full">
          <Button fullWidth>{t("home.login")}</Button>
        </Link>

        <Link to="/register" className="w-full">
          <Button variant="outline" fullWidth>
            {t("home.register")}
          </Button>
        </Link>
      </motion.div>
    </AnimatedSection>
  );
}

export default Home;
