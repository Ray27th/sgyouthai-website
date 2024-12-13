"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";
import Team from "@/components/Team";
import Partner from "@/components/Partner";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "@/components/Gallery";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-in-out",
      duration: 1000,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div id="About">
        <About />
      </div>

      <div
        id="Initiatives"
        className="bg-[#ecf5ff] shadow-[inset_0px_0px_12px_0px_rgba(0,0,0,0.1)]"
      >
        <Initiatives />
      </div>

      <div id="Team">
        <Team />
      </div>

      <div
        id="Partner"
        className="bg-[#ecf5ff] shadow-[inset_0px_0px_12px_0px_rgba(0,0,0,0.1)]"
      >
        <Partner />
      </div>

      <div id="Events" className="bg-[#004a99] text-[#eee]">
        <Events />
      </div>
      <Gallery />

      <div id="Contact" className="bg-[#004a99] text-[#eee]">
        <Contact />
      </div>

      {/* Return to Top Button */}
      {showTopButton && <ScrollTopButton />}
    </>
  );
}
