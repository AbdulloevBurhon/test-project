import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import AnimatedSection from "../../components/layout/AnimatedSection";
import { fadeDown, fadeUp } from "../../animations/fade";

import LoginForm from "./loginForm";

function Login() {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      {/* Title */}
      <motion.h1
        variants={fadeDown}
        className="text-3xl font-bold text-zinc-900 dark:text-white mb-2"
      >
        {t("login.title")}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeDown}
        className="text-zinc-600 dark:text-zinc-400 mb-8"
      >
        {t("login.subtitle")}
      </motion.p>

      {/* Form */}
      <LoginForm />

      {/* Register */}
      <motion.p
        variants={fadeUp}
        className="mt-6 text-sm text-zinc-600 dark:text-zinc-400"
      >
        {t("login.noAccount")}{" "}
        <Link
          to="/register"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {t("login.register")}
        </Link>
      </motion.p>
    </AnimatedSection>
  );
}

export default Login;
