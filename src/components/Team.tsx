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
                <p className="text-lg">{e.name}</p>
                <p>{e.position}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
