import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../../i18n/i18n";
import "../style/index.css";

import { AuthProvider } from "../context/authContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
