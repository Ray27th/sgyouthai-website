import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import PostHogPageviewTracker from "@/hooks/use-posthog-pageview-tracking.ts";

// Initialise Google Analytics
const TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS || "";
ReactGA.initialize(TRACKING_ID, { debug: import.meta.env.PROD });

// Initialise PostHog
posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: window.location.origin + "/ingest",
  ui_host: import.meta.env.VITE_POSTHOG_HOST,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <BrowserRouter>
        <PostHogPageviewTracker />
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </StrictMode>
);
