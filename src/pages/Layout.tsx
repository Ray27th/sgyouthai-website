import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useVitePostHog } from "vite-plugin-posthog/react";
import { usePostHog } from "posthog-js/react";

function Layout() {
  const posthog = usePostHog();
  const posthogVite = useVitePostHog();

  posthog?.capture("$pageview");
  posthogVite?.capture("$pageview");
  return (
    <main className="fullHeight flex dark:text-white text-[#444] w-full">
      <div className="grow w-full">
        <Outlet />
      </div>
      <Analytics />
    </main>
  );
}

export default Layout;
