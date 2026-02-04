import { User, Calendar, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Form from "../../components/ui/form/form";
import Input from "../../components/ui/input/input";
import Label from "../../components/ui/label/label";
import Button from "../../components/ui/button/button";
import Spinner from "../../components/ui/spinner/spinner";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* ===============================
     States
  =============================== */

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [shakeField, setShakeField] = useState("");

  /* ===============================
     Helpers
  =============================== */

  function triggerShake(type = "all") {
    setShakeField(type);

    setTimeout(() => {
      setShakeField("");
    }, 400);
  }

  /* ===============================
     Change
  =============================== */

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));

    setShakeField("");
  }

  /* ===============================
     Submit
  =============================== */

  async function handleSubmit(e) {
    e.preventDefault();

    if (isLoading) return;

    const newErrors = {};

    /* Validation */

    if (!form.name) {
      newErrors.name = t("register.errors.nameRequired");
    }

    if (!form.age) {
      newErrors.age = t("register.errors.ageRequired");
    } else if (form.age < 10 || form.age > 120) {
      newErrors.age = t("register.errors.ageInvalid");
    }

    if (!form.email) {
      newErrors.email = t("register.errors.emailRequired");
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = t("register.errors.emailInvalid");
    }

    if (!form.password) {
      newErrors.password = t("register.errors.passwordRequired");
    } else if (form.password.length < 6) {
      newErrors.password = t("register.errors.passwordShort");
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = t("register.errors.confirmRequired");
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = t("register.errors.confirmNotMatch");
    }

    /* Errors */

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      if (Object.keys(newErrors).length > 1) {
        triggerShake("all");
      } else {
        triggerShake(Object.keys(newErrors)[0]);
      }

      return;
    }

    /* ===============================
     Firebase Register
  =============================== */

    try {
      setIsLoading(true);

      await registerUser(form.email, form.password, form.name, form.age);

      console.log("Register success");

      // 👉 после регистрации — логин
      navigate("/profile");
    } catch (err) {
      console.log("REGISTER ERROR:", err);

      const msg = t("register.errors.emailExists");

      setErrors({
        email: msg,
      });

      triggerShake("email");
    } finally {
      setIsLoading(false);
    }
  }
  /* ===============================
     Render
  =============================== */

  return (
    <section
      className="
        min-h-[calc(100vh-64px)]
        flex items-center justify-center
        bg-gradient-to-br
        from-blue-100 via-white to-indigo-100
        dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
      "
    >
      <div className="w-full px-4">
        <motion.h1
          variants={fadeDown}
          initial="hidden"
          animate="show"
          className="text-3xl font-bold text-center mb-2 dark:text-white"
        >
          {t("register.title")}
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <Form
            noValidate
            onSubmit={handleSubmit}
            onSubmit={handleSubmit}
            className="space-y-6 text-left max-w-md mx-auto"
          >
            {/* Name */}
            <motion.div variants={fadeUp}>
              <Label error={errors.name}>{t("register.name")}</Label>

              <Input
                name="name"
                placeholder={t("register.name")}
                leftIcon={User}
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                shake={shakeField === "all" || shakeField === "name"}
                disabled={isLoading}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </motion.div>

            {/* Age */}
            <motion.div variants={fadeUp}>
              <Label error={errors.age}>{t("register.age")}</Label>

              <Input
                name="age"
                type="number"
                placeholder="18"
                leftIcon={Calendar}
                value={form.age}
                onChange={handleChange}
                error={errors.age}
                shake={shakeField === "all" || shakeField === "age"}
                disabled={isLoading}
              />

              {errors.age && (
                <p className="mt-1 text-sm text-red-500">{errors.age}</p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp}>
              <Label error={errors.email}>{t("register.email")}</Label>

              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                leftIcon={Mail}
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                shake={shakeField === "all" || shakeField === "email"}
                disabled={isLoading}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </motion.div>

            {/* Password */}
            <motion.div variants={fadeUp}>
              <Label error={errors.password}>{t("register.password")}</Label>

              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                leftIcon={Lock}
                value={form.password}
                onChange={handleChange}
                error={errors.password}
                shake={shakeField === "all" || shakeField === "password"}
                disabled={isLoading}
              />

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </motion.div>
            {/* Confirm Password */}
            <motion.div variants={fadeUp}>
              <Label error={errors.confirmPassword}>
                {t("register.confirmPassword")}
              </Label>

              <Input
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                leftIcon={Lock}
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                shake={shakeField === "all" || shakeField === "confirmPassword"}
                disabled={isLoading}
              />

              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </motion.div>
            {/* Button */}
            <motion.div variants={fadeUp}>
              <Button
                fullWidth
                type="submit"
                disabled={isLoading}
                className={`
                mt-2
               bg-gradient-to-r from-green-600 to-emerald-600
                text-white font-semibold
                py-3
                shadow-lg shadow-blue-500/30
              hover:shadow-emerald-500/40
                transition-all
                ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
              `}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Spinner size={18} />
                    {t("register.loading")}
                  </span>
                ) : (
                  t("register.submit")
                )}
              </Button>
            </motion.div>

            {/* Login link */}
            <motion.p
              variants={fadeUp}
              className="pt-4 text-sm text-center dark:text-zinc-400"
            >
              {t("register.haveAccount")}{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                {t("register.login")}
              </Link>
            </motion.p>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}

export default Register;
