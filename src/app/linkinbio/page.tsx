"use client"

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

export default function LinkInBio() {
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
        >
          <Bell />
        </Button>
        <ShareButton
          className="rounded-full bg-neutral-900/55 hover:bg-neutral-900/35 dark:bg-neutral-50/55 dark:hover:bg-neutral-50/55"
          size="icon"
          linkInfo={{
            name: "SG Youth AI",
            href: window.location.href,
          }}
          icon={<Ellipsis />}
        ></ShareButton>
      </div>
      <div className="container mx-auto p-5 max-w-2xl">
        <div className="flex flex-col justify-center items-center gap-2 pt-10">
          <img
            src="SYAI Logo.jpg"
            className="h-[6.5rem] w-[6.5rem] rounded-full bg-white object-contain"
          />
          <h2 className="text-xl font-bold">sgyouthai</h2>
        </div>
        <div className="flex flex-col w-full py-7 gap-6">
          {links.map((e, idx) => {
            return (
              <Link href={e.href} key={e.name + idx} target="_blank">
                <div
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300 bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80 w-full px-6 py-6 text-lg h-[4.5rem] relative rounded-xl"
                >
                  <span>{e.name}</span>
                  <ShareButton
                    className="absolute right-2"
                    size="icon"
                    variant="ghost"
                    linkInfo={e}
                    icon={<EllipsisVertical />}
                  ></ShareButton>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {socials.map((e) => {
            return (
              <Button
                key={"Social" + e.name}
                className="rounded-full aspect-square w-10 h-10 bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Link href={e.href}>{e.icon}</Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
