import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

import { PostHogProvider } from "posthog-js/react";

// Initialise Google Analytics
const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS || "";
ReactGA.initialize(TRACKING_ID, { debug: import.meta.env.PROD });

// Initialise PostHog
const options = {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_POSTHOG_KEY}
      options={options}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </StrictMode>
);
