import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/layout";

import Home from "../pages/home/home"; // Главная (до входа)
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Profile from "../pages/profile/profile"; // после входа
///// import profil page
import Cards from "../pages/profile/cards/cards";
import Iq from "../pages/profile/cards/iq/iq";
import IqQuestions from "../pages/profile/cards/iq/iqQuestions/iqQuestions";
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
      {
        path: "profile",
        element: <Profile />,

        children: [
          // /profile
          { index: true, element: <Cards /> },

          // /profile/iq
          {
            path: "iq",
            element: <Iq />,

            children: [
              {
                path: ":category", // frontend / backend
                element: <IqQuestions />,
              },
            ],
          },

          // /profile/rating
          // { path: "rating", element: <Rating /> },
        ],
      },
    ],
  },
]);
