import { Button } from "@/components/ui/button";
import heroBG from "@/assets/hero-bg.png";
import heroImg from "@/assets/hero-img.svg";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <div
      className="h-[95vh] bg-cover relative bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBG})`,
      }}
    >
      <div className="w-full h-full" data-aos="fade-up">
        <div className="w-full flex flex-col-reverse md:flex-row absolute left-0 top-1/2 -translate-y-1/2 px-5 mt-10 md:mt-0 lg:px-24 justify-around items-center gap-2">
          <div
            className="md:w-1/2 max-w-[700px]  w-full flex flex-col gap-8 items-center justify-center md:items-start"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h2 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-center md:text-left">
              Creating a community to{" "}
              <span className="underline text-[#74b5fc]">empower youth</span> to
              solve real-world problems using AI
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
  );
}
