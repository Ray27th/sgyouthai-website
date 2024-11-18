import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-3 bg-white dark:bg-gray-800">
      <Link to="#" className="flex items-center gap-2">
        <img src={Logo} className="h-[3.25rem] w-[3.25rem]" />
        <span className="text-base font-semibold">Singapore Youth AI</span>
      </Link>
      <div className="hidden md:flex gap-4">
        <Link
          to="#"
          className="text-base font-medium hover:underline underline-offset-4"
        >
          Home
        </Link>
        <Link
          to="#"
          className="text-base font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          to="#"
          className="text-base font-medium hover:underline underline-offset-4"
        >
          Services
        </Link>
        <Link
          to="#"
          className="text-base font-medium hover:underline underline-offset-4"
        >
          Portfolio
        </Link>
        <Link
          to="#"
          className="text-base font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden border-0 ">
            <MenuIcon className="h-12 w-12" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4">
            <Link
              to="#"
              className="text-base font-medium hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-base font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-base font-medium hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link
              to="#"
              className="text-base font-medium hover:underline underline-offset-4"
            >
              Portfolio
            </Link>
            <Link
              to="#"
              className="text-base font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
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
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
