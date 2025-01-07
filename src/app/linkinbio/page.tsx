"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Ellipsis, Bell } from "lucide-react";
import {
  FaTelegramPlane,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";

export default function LinkInBio() {
  const posthog = usePostHog();
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://www.instagram.com/sgyouthai/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://www.linkedin.com/company/sgyouthai",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://t.me/sgyouthai",
    },
    {
      name: "Discord",
      icon: <FaDiscord style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://discord.gg/TacK5vbeDc",
    },
  ];

  const links = [
    {
      name: "CYS x SYAI Monthly AI Meetup (Jan 2025)",
      href: "https://forms.gle/VBXpVgzeJgCpaxmM7",
    },
    {
      name: "Telegram",
      href: "https://t.me/sgyouthai",
    },
    {
      name: "Discord",
      href: "https://discord.gg/TacK5vbeDc",
    },
    {
      name: "Website",
      href: "https://sgyouthai.org/",
    },
  ];

  const [showHeader, setShowHeader] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("");

  // Handle scroll for showing/hiding header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set the current URL (browser-only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const capture_linkInBio = (linkName: string) => {
    posthog?.capture(`Clicked LinkInBio: ${linkName}`);
  };

  const capture_social = (linkName: string) => {
    posthog?.capture(`Clicked Social: ${linkName}`);
  };

  return (
    <div
      className="relative h-full bg-cover bg-no-repeat text-white"
      style={{
        backgroundImage: `url(/hero-bg.png)`,
      }}
    >
      <div
        className={cn(
          "fixed px-3 top-5 w-full container mx-auto left-1/2 -translate-x-1/2 flex justify-between transition-all max-w-2xl",
          showHeader ? "opacity-1" : "opacity-0"
        )}
      >
        <Button
          className="rounded-full bg-neutral-900/55 hover:bg-neutral-900/35 dark:bg-neutral-50/55 dark:hover:bg-neutral-50/25"
          size="icon"
          onClick={() => {
            posthog?.capture("Clicked Notification Bell");
            toast.info("Coming soon!");
          }}
        >
          <Bell />
        </Button>
        <ShareButton
          className="rounded-full bg-neutral-900/55 hover:bg-neutral-900/35 dark:bg-neutral-50/55 dark:hover:bg-neutral-50/55"
          size="icon"
          linkInfo={{
            name: "SG Youth AI",
            href: currentUrl, // Use state for the URL
          }}
          icon={<Ellipsis />}
        ></ShareButton>
      </div>
      <div className="container mx-auto p-5 max-w-2xl">
        <div className="flex flex-col justify-center items-center gap-2 pt-10">
          <Image
            src={"/SYAI Logo.jpg"}
            className="h-[6.5rem] w-[6.5rem] rounded-full bg-white object-contain"
            width={640}
            height={640}
            alt="SYAI Logo"
            priority
          />
          <h2 className="text-xl font-bold">sgyouthai</h2>
        </div>
        <div className="flex flex-col w-full py-7 gap-6">
          {links.map((e, idx) => (
            <Link
              href={e.href}
              key={e.name + idx}
              target="_blank"
              onClick={() => capture_linkInBio(e.name)}
              className="inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300 bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 w-full px-8 py-6 text-lg min-h-[4.5rem] relative rounded-xl text-center"
            >
              <span>{e.name}</span>
              <ShareButton
                className="absolute right-2"
                size="icon"
                variant="ghost"
                linkInfo={e}
                icon={<EllipsisVertical />}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {socials.map((e) => (
            <Button
              asChild
              key={"Social" + e.name}
              onClick={() => capture_social(e.name)}
              className="rounded-full aspect-square w-10 h-10 bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Link href={e.href} target="_blank">
                {e.icon}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
