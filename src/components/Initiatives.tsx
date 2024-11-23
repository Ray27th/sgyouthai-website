import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      className="pt-8 md:pt-12 container mx-auto px-8 xl:px-24 pb-16 overflow-hidden"
      data-aos="zoom-in"
    >
      <h2 className="text-4xl text-center font-medium">Our Initiatives</h2>
      <div className="flex flex-col pt-12 gap-6 justify-center items-center italic">
        <p className="text-center md:text-left">
          SYAI Educate: Singapore Youth AI is launching two cycles of our
          long-term AI Training Bootcamps designed to impart in-depth technical
          AI skills this year. These programs are meticulously structured to
          cater to youths eager to dive deep into the realms of artificial
          intelligence. By blending theoretical knowledge with practical
          applications, participants will embark on a journey to master AI
          technologies and their implementation in real-world scenarios. Keen to
          learn more Sign up as a volunteer trainer or participant{" "}
          <Link target="_blank" to="https://forms.gle/h99vGD7CjD5pyNGF7" className="text-blue-500">
            here!
          </Link>
        </p>
        <p className="text-center md:text-left">
          SYAI Innovate: SYAI Innovate is Singapore Youth AI’s AI For Good
          program designed to empower Singapore's youth to harness artificial
          intelligence for societal betterment in Singapore, fostering an
          open-source environment where ideas and solutions flourish. We warmly
          invite you to register your interest, join our growing collective, and
          contribute to shaping a future where technology serves humanity's
          greatest needs.
        </p>
      </div>
    </section>
  );
}
