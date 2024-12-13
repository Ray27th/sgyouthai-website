import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const links = [
    { href: "#", name: "Home" },
    { href: "#About", name: "About" },
    { href: "#Initiatives", name: "Initiatives" },
    { href: "#Team", name: "Team" },
    { href: "#Partner", name: "Partner Organisation" },
    { href: "#Events", name: "Past Events" },
    { href: "#Contact", name: "Contact" },
  ];

  return (
    <div className="flex items-center justify-between px-3 md:px-8 py-4 bg-white dark:bg-gray-800 fixed w-full max-w-[100vw] top-0 left-0 right-0 z-10 h-[80px] shadow-md">
      <Link href="/" className="flex items-center gap-2 w-max">
        <Image
          src="/logo.png"
          width={1000}
          height={1000}
          className="h-[3.25rem] w-[3.25rem]"
          alt="Logo"
        />
        <span className="text-base font-semibold">Singapore Youth AI</span>
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link, index) => (
          <Link
            key={"URL" + index + link.name}
            href={link.href}
            className="text-base hover:underline underline-offset-4"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden border-0 ">
            <MenuIcon className="h-12 w-12" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-4 w-[200px] px-2 py-4">
            {links.map((link, index) => (
              <SheetClose asChild key={index}>
                <Link
                  href={link.href}
                  className="text-lg hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
interface IconProps extends React.SVGProps<SVGSVGElement> {}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "1.5rem", height: "1.5rem" }}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
