import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Form from "../../components/ui/form/form";
import Input from "../../components/ui/input/input";
import Label from "../../components/ui/label/label";
import Button from "../../components/ui/button/button";

function Login() {
  const { t } = useTranslation();

  const [shake, setShake] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = t("login.errors.emailRequired");
    }

    if (!form.password) {
      newErrors.password = t("login.errors.passwordRequired");
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      setShake(true);
      setTimeout(() => setShake(false), 220);

      return;
    }

    console.log("Login:", form);
  }

  /* Animation Variants */

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
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

      {/* Animated Wrapper */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-md px-6 text-center"
      >
        {/* Title */}
        <motion.h1
          variants={fadeDown}
          className="text-3xl font-bold text-zinc-900 dark:text-white mb-2"
        >
          {t("login.title", { defaultValue: "Welcome Back" })}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeDown}
          className="text-zinc-600 dark:text-zinc-400 mb-8"
        >
          {t("login.subtitle", { defaultValue: "Sign in to continue" })}
        </motion.p>

        {/* Form */}
        <Form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Email */}
          <motion.div variants={fadeUp}>
            <Label htmlFor="email" error={errors.email}>
              {t("login.email", { defaultValue: "Email" })}
            </Label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              shake={shake}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </motion.div>

          {/* Password */}
          <motion.div variants={fadeUp}>
            <Label htmlFor="password" error={errors.password}>
              {t("login.password", { defaultValue: "Password" })}
            </Label>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              shake={shake}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeUp}>
            <Button
              fullWidth
              type="submit"
              className="
                mt-3
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white font-semibold

                py-3

                shadow-lg shadow-blue-500/30
                hover:shadow-xl

                transition-all
              "
            >
              {t("login.submit", { defaultValue: "Login" })}
            </Button>
          </motion.div>
        </Form>

        {/* Register */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-sm text-zinc-600 dark:text-zinc-400"
        >
          Нет аккаунта?{" "}
          <Link
            to="/register"
            className="
              text-blue-600 dark:text-blue-400
              font-medium
              hover:underline
            "
          >
            Зарегистрируйтесь
          </Link>
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Login;
