import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import heroBG from "@/assets/hero-bg.png";
import heroImg from "@/assets/hero-img.svg";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);

  // Handle scrolling
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

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-in-out",
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="h-[95vh] bg-cover relative bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBG})`,
        }}
      >
        <div className="w-full h-full " data-aos="fade-up">
          <div className="w-full flex flex-col-reverse md:flex-row absolute left-0 top-1/2 -translate-y-1/2 px-5 mt-10 md:mt-0 lg:px-24 justify-around items-center gap-2">
            <div
              className="md:w-1/2 max-w-[700px]  w-full flex flex-col gap-8 items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h2 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-center md:text-left">
                Creating a community to{" "}
                <span className="underline text-[#74b5fc]">empower youth</span>{" "}
                to solve real-world problems using AI
              </h2>
              <Button variant={"secondary"} asChild>
                <HashLink to={"#About"} smooth>
                  Read More
                </HashLink>
              </Button>
            </div>
            <img
              src={heroImg}
              className="md:w-1/2 max-w-[800px] w-full"
              data-aos="zoom-out"
              data-aos-delay="200"
            />
          </div>
        </div>
      </div>
      <div className="h-[96vh]" id="About">
        About Us
      </div>
      <div className="h-[96vh]" id="Initiatives">
        Initiatives
      </div>

      {/* Return to Top Button */}
      {showTopButton && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-[#74b5fc] text-white p-3 rounded-full shadow-lg hover:bg-[#5699d1] transition"
        >
          <HashLink to={"#"} smooth>
            ↑
          </HashLink>
        </Button>
      )}
    </>
  );
}
