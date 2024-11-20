import { useEffect, useState } from "react";
import cn from "@/lib/utils"

export default function LinkInBio() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <div className="relative h-[200vh]">
      <div className={cn("fixed top-5 w-full flex justify-between transition-all", showHeader ? "opacity-1" : "opacity-0")}>
       <div>btn1</div>
       <div>btn2</div>
      </div>
      <p>Link In Bio</p>
    </div>
  );
}
