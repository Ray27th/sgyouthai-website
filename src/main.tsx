import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

// Initialize Google Analytics
const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS || "";
ReactGA.initialize(TRACKING_ID, { debug: import.meta.env.PROD });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
