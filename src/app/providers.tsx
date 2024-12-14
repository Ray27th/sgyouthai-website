"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect, ReactNode } from "react";
import PostHogPageView from "./PostHogPageView";

// Define props for the component
interface PostHogProviderProps {
  children: ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
      ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "",
      api_host: "/ingest",
      person_profiles: "always",
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: true,
      enable_heatmaps: true,
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
