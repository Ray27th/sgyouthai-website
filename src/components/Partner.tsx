export default function Partner() {
  const partners = [
    { id: 1, src: "/partner/ai-singapore-logo.png", alt: "AI Singapore Logo" },
    {
      id: 2,
      src: "/partner/youth-action-logo.jpg",
      alt: "Youth Action Challenge Logo",
    },
    { id: 3, src: "/partner/youth-corps-logo.png", alt: "Youth Corps Logo" },
    { id: 4, src: "/partner/for-youths-logo.png", alt: "For Youths Logo" },
    { id: 5, src: "/partner/nyc-logo.jpg", alt: "NYC Logo" },
  ];

  return (
    <section
      className="pt-8 md:pt-12 container mx-auto px-8 xl:px-24 pb-8 overflow-hidden rounded-md"
      data-aos="fade-up"
    >
      <h2 className="text-4xl text-center font-medium">
        Our Partner Organizations
      </h2>
      <div className="flex py-8 items-center justify-center" data-aos="zoom-in">
        <div className="flex flex-wrap w-full">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-grow w-1/3 items-center justify-center bg-white border-[#d6eaff] border p-8"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className=" h-32 object-contain hover:scale-125 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
