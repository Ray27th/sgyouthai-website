import { useState } from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

interface ShareButtonProps extends ButtonProps {
  icon?: React.ReactNode; // Add your custom prop for the icon
  linkInfo?: { href: string; name: string };
}

export default function ShareButton({
  icon,
  linkInfo,
  children,
  ...props
}: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button {...props} onClick={handleClick}>
            {icon}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center pb-4">Share link</DialogTitle>
            <DialogDescription>
              {linkInfo && (
                <Link
                  to={linkInfo.href}
                  target="_blank"
                  className="w-full flex-col rounded-lg p-6 shadow-low-elevation-light md:w-[327px] hover:scale-[1.01] hover:shadow-max-elevation-light"
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
            </DialogDescription>
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
