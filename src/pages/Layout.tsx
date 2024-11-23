import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function Layout() {
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
