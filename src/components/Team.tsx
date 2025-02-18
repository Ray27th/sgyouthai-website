import Link from "next/link";
import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Raymond Loong Ng",
      position: "SYAI President",
      img: "/team/Raymond.jpg",
      linkedin: "https://www.linkedin.com/in/raymond-loong-ng/",
    },
    {
      name: "Soh Hong Yu",
      position: "SYAI Vice President",
      img: "/team/HongYu.jpg",
      linkedin: "https://www.linkedin.com/in/soh-hong-yu-ultraraptor/",
    },
    {
      name: "Zaer Bin Zaqy",
      position: "SYAI Co-Founder",
      img: "/team/Zaer.png",
      linkedin: "https://www.linkedin.com/in/zaerzaqy/",
    },
    {
      name: "Cleveland Law",
      position: "SYAI Co-Founder & Head of Events",
      img: "/team/Cleveland.jpg",
      linkedin: "https://www.linkedin.com/in/cleveland-law-a381ab242/",
    },
    {
      name: "Kaleb Nim",
      position: "Head of Community",
      img: "/team/Kaleb.jpeg",
      linkedin: "https://www.linkedin.com/in/kaleb-nim/",
    },
    {
      name: "Xie Kaiwen",
      position: "Head of Events",
      img: "/team/Kaiwen.png",
      linkedin: "https://www.linkedin.com/in/kaiwen-xie/",
    },
    {
      name: "Matthias Loong",
      position: "Head of Events",
      img: "/team/Matthias.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Vaithiyanathan Sri Kesava Raman",
      position: "Head of Events",
      img: "/team/Raman.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Thue Zhan Wei Aden",
      position: "Head of Outreach",
      img: "/team/Aden.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Sanfo Bimal Thomas",
      position: "Head of Outreach",
      img: "/team/Sanfo.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Nicole Michaella Daduya",
      position: "Head of Social",
      img: "/team/Nicole.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Rachel Lim Le Shi",
      position: "Head of Social",
      img: "/team/Rachel.png",
      linkedin: "https://www.linkedin.com/",
    },
  ];

  return (
    <section
      className="pt-8 md:pt-12 container mx-auto px-8 xl:px-24 pb-16 overflow-hidden"
      data-aos="fade-up"
    >
      <h2 className="text-4xl text-center font-medium">Our Team</h2>
      <p className="text-center py-5">
        Meet the team behind Singapore Youth AI
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((e, idx) => {
          return (
            <Link target="_blank" href={e.linkedin} key={"Team" + idx}>
              <div className="flex flex-col gap-1 items-center justify-center bg-white p-5 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
                <Image
                  width={1000}
                  height={1000}
                  src={e.img}
                  className="rounded-full aspect-square w-44 object-cover mb-2"
                  alt={e.name}
                />
                <p className="text-lg text-center font-semibold">{e.name}</p>
                <p className="text-center text-gray-500">{e.position}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
