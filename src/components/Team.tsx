import { Link } from "react-router-dom";

export default function Team() {
  const team = [
    {
      name: "Raymond Loong Ng",
      position: "SYAI President",
      img: "team/Raymond.jpg",
      linkedin: "https://www.linkedin.com/in/raymond-loong-ng/",
    },
    {
      name: "Soh Hong Yu",
      position: "SYAI Vice President",
      img: "team/HongYu.jpg",
      linkedin: "https://www.linkedin.com/in/soh-hong-yu-ultraraptor/",
    },
    {
      name: "Zaer Z.",
      position: "SYAI Co-Founder",
      img: "team/Zaer.png",
      linkedin: "https://www.linkedin.com/in/zaerzaqy/",
    },
    {
      name: "Cleveland Law",
      position: "SYAI Co-Founder & Head of Events",
      img: "team/Cleveland.jpg",
      linkedin: "https://www.linkedin.com/in/cleveland-law-a381ab242/",
    },
    {
      name: "Dex Yang",
      position: "Head of Events",
      img: "team/Dex.png",
      linkedin: "https://www.linkedin.com",
    },
    {
      name: "Xie Kaiwen",
      position: "Head of Events",
      img: "team/Kaiwen.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Matthias Loong",
      position: "Head of Events",
      img: "team/Matthias.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Vaithiyanathan Sri Kesava Raman",
      position: "Head of Events",
      img: "team/Raman.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Thue Zhan Wei Aden",
      position: "Head of Outreach",
      img: "team/Aden.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Sanfo Bimal Thomas",
      position: "Head of Outreach",
      img: "team/Sanfo.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Nicole Michaella Daduya",
      position: "Head of Social",
      img: "team/Nicole.png",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Rachel Lim Le Shi",
      position: "Head of Social",
      img: "team/Rachel.png",
      linkedin: "https://www.linkedin.com/",
    },
  ];

  return (
    <section
      className="pt-8 md:pt-12 container mx-auto px-8 xl:px-24 pb-16 overflow-hidden"
      data-aos="fade-up"
    >
      <h2 className="text-4xl text-center font-medium">Team</h2>
      <p className="text-center py-5">
        Meet the team behind Singapore Youth AI
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((e, idx) => {
          return (
            <Link to={e.linkedin}>
              <div
                className="flex flex-col gap-1 items-center justify-center"
                key={"Team" + idx}
              >
                <img
                  src={e.img}
                  className="rounded-full aspect-square w-44 object-contain mb-2"
                />
                <p className="text-lg text-center">{e.name}</p>
                <p className="text-center">{e.position}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
