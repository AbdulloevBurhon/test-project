import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { fadeUp } from "../../animations/fade";

import { loginUser } from "../../services/authService";

import Form from "../../components/ui/form/form";
import Input from "../../components/ui/input/input";
import Label from "../../components/ui/label/label";
import Button from "../../components/ui/button/button";
import Spinner from "../../components/ui/spinner/spinner";

function LoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* ===============================
     States
  =============================== */

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    setAuthError("");
    setShakeField("");
  }

  /* ===============================
     Submit (REAL LOGIN)
  =============================== */

  async function handleSubmit(e) {
    e.preventDefault();

    if (isLoading) return;

    const newErrors = {};

    /* Validation */

    if (!form.email) {
      newErrors.email = t("login.errors.emailRequired");
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = t("login.errors.emailInvalid");
    }

    if (!form.password) {
      newErrors.password = t("login.errors.passwordRequired");
    }

    /* Front errors */

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      if (newErrors.email && newErrors.password) {
        triggerShake("all");
      } else {
        triggerShake(Object.keys(newErrors)[0]);
      }

      return;
    }

    /* ===============================
       Firebase Login
    =============================== */

    try {
      setIsLoading(true);

      await loginUser(form.email, form.password);

      console.log("Login success");

      // 👉 После входа редирект
      navigate("/profile");
    } catch (err) {
      console.log("LOGIN ERROR:", err);

      const msg = t("login.errors.invalidCredentials");

      setAuthError(msg);

      setErrors({
        email: msg,
        password: msg,
      });

      triggerShake("all");
    } finally {
      setIsLoading(false);
    }
  }

  /* ===============================
     Render
  =============================== */

  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-6 text-left max-w-md mx-auto"
    >
      {/* Email */}
      <motion.div variants={fadeUp}>
        <Label error={errors.email}>{t("login.email")}</Label>

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
        <Label error={errors.password}>{t("login.password")}</Label>

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

      {/* Button */}
      <motion.div variants={fadeUp}>
        <Button
          fullWidth
          type="submit"
          disabled={isLoading}
          className={`
            mt-2
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white font-semibold
            py-3

            shadow-lg shadow-blue-500/30
            hover:shadow-xl

            transition-all

            ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
          `}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner size={18} />
              {t("login.loading")}
            </span>
          ) : (
            t("login.submit")
          )}
        </Button>
      </motion.div>

      {/* Footer */}
      <motion.div
        variants={fadeUp}
        className="pt-4 text-sm text-center space-y-2"
      >
        {authError && (
          <>
            <p className="text-red-500 font-medium">{authError}</p>

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline font-medium"
            >
              {t("login.forgot")}
            </Link>
          </>
        )}
      </motion.div>
    </Form>
  );
}

export default LoginForm;
