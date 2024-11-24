import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vitePostHog } from "vite-plugin-posthog";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      vitePostHog({
        apiKey: process.env.VITE_POSTHOG_KEY || "", //Required
        hostUrl: process.env.VITE_POSTHOG_API_HOST || "", //Required
        isCheckingForDevMode: mode === "development", // optional
        config: {
          autocapture: true,
          capture_pageview: true,
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
