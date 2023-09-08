import Slide from "@/components/slideshow/Slide";
import Slideshow from "@/components/slideshow/Slideshow";

const points = [
  "Kalyani Government Engineering College (KGEC) in West Bengal was established in 1995 and is affiliated with Maulana Abul Kalam Azad University of Technology, Kolkata. It is renowned as one of the top engineering colleges in the country, offering B.Tech, M.Tech, and MCA courses across ten academic departments.",
  "KGEC fosters a thriving community of eager learners, emphasizing both academic and personal growth. The college's outcome-based education approach puts students at the center of the learning process. The campus spans 75 acres and features state-of-the-art infrastructure, including seminar halls, E-classrooms, and a well-equipped library.",
  "The college encourages industry-academia interaction through workshops, guest lectures, and industrial visits. KGEC boasts robust placement opportunities, with top-notch companies recruiting final year students annually. Students actively participate in coding competitions, hackathons, and events organized by various clubs, including the Entrepreneurship Cell.",
  "Faculty members are involved in research activities and mentor PhD students. The college takes pride in its national-level journal, 'REASON-A Technical Journal.' Preparations for NAAC Accreditation are underway, as KGEC strives for excellence in education, research, and overall growth, empowering students to shine in the world of engineering.",
];

export default function HomeMNV() {
  return (
    <section className="mnv">
      <div className="min-w-full flex flex-col px-6 md:px-8 lg:px-24 h-100">
        <h2 className="text-[2rem] lg:text-[3rem] font-black text-yellow-300 mb-4 leading-none">Mission & Vision</h2>
        {/* <div className="lg:hidden">
          <Slideshow>
            {points.map((point: string, idx) => (
              <Slide key={idx}>
                <div className="flex h-full w-[80vw] mx-auto whitespace-normal">
                  <p className="text-md">{point}</p>
                </div>
              </Slide>
            ))}
          </Slideshow>
        </div> */}
        <ol className="flex text-lg flex-col gap-9">
          {points.map((point: string, idx) => (
            <div className="flex justify-center" key={idx}>
              <div className="my-6 mr-6 md:mr-12 h-[15px] md:h-[30px] w-[25px] md:w-[50px] p-2 py-3 flex items-center justify-center rounded-full bg-yellow-300/80 text-zinc-950 font-bold">
                {idx + 1}
              </div>
              <p className="p-0 text-zinc-100">{point}</p>
            </div>
          ))}
        </ol>
      </div>
    </section>
  );
}
