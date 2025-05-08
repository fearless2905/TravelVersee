import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/landing/css/bootstrap.css";
import Router from "./router"; // Ganti dari App
import AOS from "aos";
import "./assets/landing/css/aos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
