import Image from "next/image";

export default function About() {
  return (
    <section
      className="pt-8 md:pt-12 container mx-auto px-8 xl:px-24 pb-16 overflow-hidden"
      data-aos="fade-up"
    >
      <h2 className="text-4xl text-center font-medium">About Us</h2>
      <div className="flex flex-col md:flex-row pt-12 gap-6 justify-center items-center">
        <Image
          width={1000}
          height={1000}
          alt="about1"
          src="/about-extra-1.svg"
          data-aos="fade-right"
          className="w-full md:w-5/12"
        />
        <div
          className="w-full md:w-1/2 flex flex-col gap-5"
          data-aos="fade-left"
        >
          <p>
            Singapore Youth AI is a youth-led, ground-up organization dedicated
            to fostering the next generation of innovators by equipping young
            individuals with artificial intelligence (AI) skills.
          </p>
          <p>
            Our vision is to create a community where youths are empowered to
            use AI to solve real-world problems, driving positive change in
            society.
          </p>
          <p>
            We aim to democratize AI knowledge through comprehensive programs
            and seminars, and mentorship opportunities, encouraging young people
            to engage in projects that contribute to Singapore's technological
            advancement and societal well-being.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row pt-12 gap-6 justify-center items-center ">
        <div
          className="w-full md:w-1/2 flex flex-col gap-5"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-bold">Our Story</h3>
          <p>
            Singapore Youth AI was established in 2023, culminating from members
            of multiple student groups under AI Singapore’s student outreach
            program. Our foundation was inspired by the vibrant engagements and
            discussions within the AI community, where many young enthusiasts
            gathered yet lacked a unified platform. From our initial eight
            members, we've grown into a thriving community of 600 youths and we
            only continue to grow!
          </p>
          <p>
            Recognizing this gap, we aim to serve as the hub for youth
            interested in AI, providing a collective space to harness and direct
            our passion towards impactful, Singapore-focused AI initiatives. Our
            journey began with the mission to connect, empower, and advance
            young talents in AI, making their noble aspirations actionable and
            impactful.
          </p>
        </div>
        <Image
          width={1000}
          height={1000}
          alt="about2"
          src="/about-extra-2.svg"
          data-aos="fade-left"
          className="w-full md:w-5/12"
        />
      </div>
    </section>
  );
}
