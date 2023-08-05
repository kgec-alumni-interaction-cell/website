import Layout from "@/components/layout";
import Slide from "@/components/slideshow/Slide";
import Slideshow from "@/components/slideshow/Slideshow";

const points = [
  "Kalyani Government Engineering College (KGEC) in West Bengal was established in 1995 and is affiliated with Maulana Abul Kalam Azad University of Technology, Kolkata. It is renowned as one of the top engineering colleges in the country, offering B.Tech, M.Tech, and MCA courses across ten academic departments.",
  "KGEC fosters a thriving community of eager learners, emphasizing both academic and personal growth. The college's outcome-based education approach puts students at the center of the learning process. The campus spans 75 acres and features state-of-the-art infrastructure, including seminar halls, E-classrooms, and a well-equipped library.",
  "The college encourages industry-academia interaction through workshops, guest lectures, and industrial visits. KGEC boasts robust placement opportunities, with top-notch companies recruiting final year students annually. Students actively participate in coding competitions, hackathons, and events organized by various clubs, including the Entrepreneurship Cell.",
  "Faculty members are involved in research activities and mentor PhD students. The college takes pride in its national-level journal, 'REASON-A Technical Journal.' Preparations for NAAC Accreditation are underway, as KGEC strives for excellence in education, research, and overall growth, empowering students to shine in the world of engineering.",
];

function Scholarships() {
  return (
    <Layout>
      <section className=" bg-zinc-100 min-w-full flex flex-col">
        <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
          <div className="w-full justify-center">
            <h2 className="text-[3rem] lg:text-[4rem] font-black mb-0 leading-none">
              Scholarships
            </h2>
            <p className="text-base mt-2">
              The Alumni Cell of Kalyani Government Engineering College proudly
              presents its scholarship schemes, dedicated to nurturing young
              talents who possess exceptional skills but face financial
              constraints.
            </p>
            <p className="text-base mt-5">
              Our mission is to provide equal opportunities to deserving
              students, enabling them to pursue their academic dreams without
              burden. We envision a future where no promising mind is held back
              due to economic limitations. Through these scholarships, we aim to
              empower the next generation of engineers and innovators, fostering
              a community that thrives on knowledge, creativity, and
              inclusivity.
            </p>
          </div>
        </div>

        <Slideshow>
          {points.map((point: string, idx) => (
            <Slide key={idx}>
              <div className="flex h-full w-[80vw] bg-zinc-50 mx-auto whitespace-normal">
                <p className="text-md">{point}</p>
              </div>
            </Slide>
          ))}
        </Slideshow>
      </section>
    </Layout>
  );
}

export default Scholarships;
