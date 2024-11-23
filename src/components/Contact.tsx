import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FaTelegramPlane,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import ReactGA from "react-ga";

export default function Contact() {
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://www.instagram.com/sgyouthai/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://www.linkedin.com/company/sgyouthai",
    },
    {
      name: "Telegram",
      icon: <FaTelegramPlane style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://t.me/sgyouthai",
    },
    {
      name: "Discord",
      icon: <FaDiscord style={{ width: "1.15rem", height: "1.15rem" }} />,
      href: "https://discord.gg/TacK5vbeDc",
    },
  ];

  return (
    <footer className="pt-8 md:pt-12 mx-auto overflow-hidden">
      <div className="px-8 xl:px-24 pb-16 container mx-auto">
        <h2 className="text-4xl text-center font-medium">Contact Us</h2>
        <div className="flex flex-col md:flex-row pt-8 gap-6 text-sm justify-center items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h3 className="uppercase text-4xl font-light">
              Singapore Youth AI
            </h3>
            <p>
              Singapore Youth AI was established in 2023, culminating from
              members of multiple student groups under AI Singapore’s student
              outreach program.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <p>
              <span className="font-bold">Email:</span>{" "}
              <Link
                to={"mailto:hello@Singaporeyouthai.org"}
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked on Email",
                  });
                }}
              >
                hello@Singaporeyouthai.org
              </Link>
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((e) => {
                return (
                  <Button
                    key={"Social" + e.name}
                    onClick={() => {
                      ReactGA.event({
                        category: "User",
                        action: "Clicked " + e.name,
                      });
                    }}
                    className="rounded-full aspect-square w-10 h-10 bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <Link to={e.href} target="_blank">
                      {e.icon}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00428a] text-sm w-full h-20 items-center flex justify-center">
        &copy; Copyright&nbsp;
        <span className="font-bold">Singapore Youth AI</span>. All Rights
        Reserved
      </div>
    </footer>
  );
}
