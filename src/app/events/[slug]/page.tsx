// app/redirect/[slug]/page.tsx
import { redirect } from "next/navigation";

export default function RedirectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Example condition logic (you can change this)
  let targetUrl = "/";

  if (slug === "echelon2025") {
    targetUrl =
      "https://e27-dot-yamm-track.appspot.com/2wRbZvIkpK8tJ9Gga5xS3a4KoECgSwbJWeMlgC-zTrLP7uyYUlgHyrp4N5_EInwd19REmIL4GplqlWT15wvkk8j-6bzkg_x-SJzZEddEkfj8x76mf3zgcd7O3YgFL6jJu7xhlHzaGfHDM6Tuo-I_agGDCRcEokglkUCuER8l8QpuyYP5HmrxDeUqlIZEgzfBsYnuUsivp3cfe-i8XMe9WRoTWZsc";
  } else {
    targetUrl = "/"; // Or any fallback
  }

  redirect(targetUrl);
}
