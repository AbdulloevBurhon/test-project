import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/layout";

import Home from "../pages/home/home"; // Главная (до входа)
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Profile from "../pages/profile/profile"; // после входа

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      // 🌐 Главная (Landing)
      { index: true, element: <Home /> },

      // 🔐 Auth
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // 👤 После входа
      { path: "profile", element: <Profile /> },
    ],
  },
]);
