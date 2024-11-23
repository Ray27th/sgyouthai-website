import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import {
  Check,
  Link as LinkIcon,
  Share,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ShareButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  linkInfo: { href: string; name: string };
}

export default function ShareButton({
  icon,
  linkInfo,
  children,
  ...props
}: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const scrollRef = useRef<HTMLDivElement>(null); // Ref for scrollable container

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkInfo.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const handleMoreShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: linkInfo.name,
          text: `Check this out: ${linkInfo.name}`,
          url: linkInfo.href,
        })
        .catch((err) => console.error("Error sharing:", err));
    } else {
      alert("Your browser does not support the native share feature.");
    }
  };

  const scrollContainer = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  let socials = [
    { name: "Whatsapp", icon: WhatsappIcon, button: WhatsappShareButton },
    { name: "Telegram", icon: TelegramIcon, button: TelegramShareButton },
    {
      name: "Facebook",
      icon: FacebookIcon,
      button: FacebookShareButton,
    },
    { name: "X", icon: XIcon, button: TwitterShareButton },
    { name: "LinkedIn", icon: LinkedinIcon, button: LinkedinShareButton },
    { name: "Email", icon: EmailIcon, button: EmailShareButton },
  ];

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button {...props} onClick={handleClick}>
            {icon}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:rounded-2xl">
          <DialogHeader className="w-full">
            <DialogTitle className="text-center pb-4">Share link</DialogTitle>
            <div className="inline-flex justify-center w-full px-5">
              {linkInfo && (
                <Link
                  to={linkInfo.href}
                  target="_blank"
                  className="w-full flex-col bg-[rgb(243,243,241)] rounded-2xl p-6 shadow md:w-[327px] hover:scale-[1.01] hover:shadow-max-elevation-light shadow-low-elevation-light"
                  style={{
                    border: "1px solid gainsboro",
                    transition:
                      "transform 250ms ease-in-out, box-shadow 250ms ease-in-out, background-color 700ms linear",
                  }}
                >
                  <div className="flex flex-col items-center self-stretch justify-center gap-4">
                    <div className="flex flex-col items-center self-stretch justify-center gap-2">
                      <h3 className="text-center text-black text-lg font-bold text-balance leading-[120%]">
                        {linkInfo.name}
                      </h3>
                      <p className="overflow-hidden text-black text-center text-base text-ellipsis whitespace-nowrap leading-[150%] w-[min(90%,13ch)]">
                        {linkInfo.href}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
            <div className="max-w-md mx-auto flex flex-col gap-4 self-stretch py-6 overflow-hidden">
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => scrollContainer("left")}
                  className="h-8 w-8"
                >
                  <ChevronLeft size={20} />
                </Button>
                <div
                  ref={scrollRef}
                  className="flex items-start gap-4 overflow-hidden scroll-snap-x w-full"
                  style={{ scrollBehavior: "smooth" }}
                >
                  <div
                    className="flex w-[60px] flex-col items-center justify-center gap-1.5 px-[3px] outline-none focus-visible:ring-1 focus-visible:ring-black"
                    onClick={handleCopyLink}
                  >
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      variant={"secondary"}
                    >
                      {copied ? (
                        <Check
                          style={{ width: "24px", height: "24px" }}
                          color="green"
                        />
                      ) : (
                        <LinkIcon style={{ width: "24px", height: "24px" }} />
                      )}
                    </Button>
                    <div
                      className={cn(
                        "whitespace-nowrap text-center text-xs font-medium",
                        copied ? "text-[green]" : "text-black"
                      )}
                    >
                      {copied ? "Copied" : "Copy Link"}
                    </div>
                  </div>
                  {socials.map((e, idx) => {
                    return (
                      <div
                        key={e.name + idx}
                        className="flex w-[60px] flex-col items-center justify-center gap-1.5 px-[3px] outline-none focus-visible:ring-1 focus-visible:ring-black"
                      >
                        <e.button url={linkInfo.href}>
                          <e.icon size={48} round />
                        </e.button>
                        <div className="whitespace-nowrap text-center text-xs font-medium">
                          {e.name}
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex w-[60px] flex-col items-center justify-center gap-1.5 px-[3px] outline-none focus-visible:ring-1 focus-visible:ring-black">
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      variant={"secondary"}
                      onClick={handleMoreShare}
                    >
                      <Share style={{ width: "24px", height: "24px" }} />
                    </Button>
                    <div className="whitespace-nowrap text-center text-xs font-medium">
                      More
                    </div>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => scrollContainer("right")}
                  className="h-8 w-8"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button {...props} onClick={handleClick}>
          {icon}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Share link</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
