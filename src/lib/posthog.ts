import { usePostHog } from "posthog-js/react";
import { EventName, Properties, CaptureOptions } from "posthog-js";
import { useVitePostHog } from "vite-plugin-posthog/react";

export function trackEvent(
  event_name: EventName,
  properties?: Properties | null,
  options?: CaptureOptions
) {
  const posthog = usePostHog();
  const posthogVite = useVitePostHog();

  posthog?.capture(event_name, properties, options);
  posthogVite?.capture(event_name, properties, options);
}
