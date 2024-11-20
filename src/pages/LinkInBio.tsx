import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBG from "@/assets/hero-bg.png";
import SYAILogo from "@/assets/SYAI Logo.jpg";
import { EllipsisVertical } from 'lucide-react';

export default function LinkInBio() {
  // const socials = [];

  const links = [
    {
      name: "Telegram",
      href: "https://t.me/sgyouthai",
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
        backgroundImage: `url(${heroBG})`,
      }}
    >
      <div
        className={cn(
          "fixed px-5 top-5 w-full container mx-auto left-1/2 -translate-x-1/2 flex justify-between transition-all",
          showHeader ? "opacity-1" : "opacity-0",
        )}
      >
        <div>btn1</div>
        <div>btn2</div>
      </div>
      <div className="container mx-auto p-5">
        <div className="flex flex-col justify-center items-center gap-2 pt-12">
          <img
            src={SYAILogo}
            className="h-28 w-28 rounded-full bg-white object-contain"
          />
          <h2 className="text-xl font-bold">sgyouthai</h2>
        </div>
        <div className="flex flex-col w-full py-8">
          {links.map((e, idx) => {
            return (
              <Link to={e.href} key={e.name + idx}>
                <Button
                  variant="secondary"
                  className="w-full px-6 py-6 text-base h-[4.5rem] relative"
                  size="lg"
                >
                  {e.name}
                  <Button
                    variant="ghost"
                    className="absolute right-2"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      alert("Share Btn");
                    }}
                  >
                    <EllipsisVertical />
                  </Button>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
