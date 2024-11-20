import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import heroBG from "@/assets/hero-bg.png";
import Logo from "@/assets/logo.png";

export default function LinkInBio() {
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
      className="relative h-[200vh] bg-cover bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${heroBG})`,
      }}
    >
      <div className={cn("fixed p-5 top-5 w-full flex justify-between transition-all", showHeader ? "opacity-1" : "opacity-0")}>
        <div>btn1</div>
        <div>btn2</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={Logo} className="h-32 w-32 rounded-full bg-white object-contain" />
        <h2 className="text-lg font-bold">sgyouthai</h2>
      </div>
      <p>Link In Bio</p>
    </div>
  );
}
