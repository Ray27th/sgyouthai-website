import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "./providers";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Singapore Youth AI",
  description:
    "Singapore Youth AI is a youth-led, ground-up organization dedicated to fostering the next generation of innovators by equipping young individuals with artificial intelligence (AI) skills. Our vision is to create a community where youths are empowered to use AI to solve real-world problems, driving positive change in society. We aim to democratize AI knowledge through comprehensive programs and seminars, and mentorship opportunities, encouraging young people to engage in projects that contribute to Singapore's technological advancement and societal well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <body className={cn(inter.className, "fullHeight")}>
        <PostHogProvider>{children}</PostHogProvider>
        <SpeedInsights />
        <Toaster richColors expand duration={2500} />
      </body>
    </html>
  );
}
