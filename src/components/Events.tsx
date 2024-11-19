import { CalendarDays } from "lucide-react";

export default function Events() {
  const events = [
    {
      name: "EAExplore",
    },
    {
      name: "AI Community Gathering at AI Singapore",
    },
    {
      name: "Deeprace Dash",
    },
    {
      name: "Mindful Hacks",
    },
    {
      name: "Youth Action Challenge",
    },
    {
      name: "Fei Yue community services",
    },
    {
      name: "Cedar Girls AI Literacy Program 2024",
    },
  ];

  return (
    <section
      className="pt-8 md:pt-12 container mx-auto px-8 xl:px-24 pb-16 overflow-hidden"
      data-aos="fade-up"
    >
      <h2 className="text-4xl text-center font-medium">Our Past Events</h2>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {events.map((event, idx) => (
          <div
            key={event.name + idx}
            className="flex flex-col gap-5 w-full max-w-sm text-xl md:text-2xl lg:text-lg text-center font-bold items-center justify-center bg-[#00458f] hover:bg-[#003b7a] p-8 rounded-md"
          >
            <CalendarDays style={{ width: "2.5rem", height: "2.5rem" }} />
            <span className="break-words">{event.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}