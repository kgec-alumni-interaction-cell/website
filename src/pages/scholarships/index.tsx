import Layout from "@/components/layout";
import Slide from "@/components/slideshow/Slide";
import Slideshow from "@/components/slideshow/Slideshow";

interface Scholarship {
  name: string;
  description: string;
  link: string;
}

const scholarships: Scholarship[] = [
  {
    name: "IIT KGP free B.Tech CSE",
    description:
      "This is not a real scholarship, obviously. It's just a sample scholarship. Nothing else. Obviously.",
    link: "#",
  },
  {
    name: "Google Scholarship",
    description:
      "There are three required fields: a name, a description and a link. These three fields make up this scholarships card. Try to keep the description between 70-110 words. Having too many words makes these cards uneven and stuff so it's better to not do that.",
    link: "#",
  },
  {
    name: "Bing Chilling Scholarship",
    description:
      "For now, this stuff is just a hardcoded array of objects. Ideally, it should be retrieved from a CMS.",
    link: "#",
  },
];

function Scholarships() {
  return (
    <Layout>
      <section className="bg-white min-w-full flex flex-col">
        <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
          <div className="w-full justify-center">
            <h2 className="text-[2.5rem] text-indigo-500 lg:text-[3rem] font-black mb-0 leading-none">
              Scholarships
            </h2>
            <p className="text-lg text-zinc-950 mt-2">
              The Alumni Cell of Kalyani Government Engineering College proudly
              presents its scholarship schemes, dedicated to nurturing young
              talents who possess exceptional skills but face financial
              constraints.
            </p>
            <p className="text-lg text-zinc-950 mt-5">
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

        <Slideshow slideTime={10000}>
          {scholarships.map((scholarship: Scholarship, idx) => (
            <Slide key={idx}>
              <div className="bg-indigo-50 md:h-[500px] rounded-xl flex flex-col justify-evenly w-[60vw] md:w-[70vw] mx-auto p-4 whitespace-normal text-center items-center">
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-bold text-indigo-500">{scholarship.name}</h1>
                  <p className="text-zinc-950">{scholarship.description}</p>
                </div>
                <button className="bg-indigo-300 hover:bg-indigo-300/90 duration-300 text-zinc-900 focus:ring-1 ring-indigo-50 lg:min-w-fit px-3 py-3 rounded-lg shadow-md flex justify-center items-center gap-2 max-w-max font-semibold mt-8">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 256 256"
                    className="duration-500"
                  >
                    <path
                      fill="currentColor"
                      d="m221.7 133.7l-72 72a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l58.4-58.3H40a8 8 0 0 1 0-16h156.7l-58.4-58.3a8.1 8.1 0 0 1 11.4-11.4l72 72a8.1 8.1 0 0 1 0 11.4Z"
                    />
                  </svg>
                </button>
              </div>
            </Slide>
          ))}
        </Slideshow>
      </section>
    </Layout>
  );
}

export default Scholarships;
