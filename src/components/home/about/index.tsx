import { useRouter } from "next/router";

export default function HomeAbout() {
  const router = useRouter();

  return (
    <section className="about min-w-full flex flex-col px-6 md:px-8 lg:px-24 realtive">
      <h2 className="text-[2rem] lg:text-[3rem] font-black text-indigo-500 mb-4 leading-none">
        Who are we?
      </h2>

      <p className="text-lg text-zinc-950">
        The Kalyani Government Engineering College Alumni Interaction Cell is a
        dynamic and thriving community of distinguished individuals who once
        graced the halls of Kalyani Government Engineering College (KGEC). As
        proud graduates, we are united by the shared experiences and memories of
        our time at KGEC. Our cell aims to foster lifelong connections
        among alumni, promote professional growth, and contribute to the
        development of our beloved alma mater.
      </p>

      <p className="mt-3 text-lg text-zinc-950">
        Our cell is a beacon of unity and camaraderie, bringing together
        graduates from diverse disciplines and generations. We take immense
        pride in our shared experiences, accomplishments, and the values
        instilled in us during our time at KGEC.
      </p>

      <button
        onClick={() => router.push("/about")}
        className="bg-indigo-300 hover:bg-indigo-400 duration-300 text-zinc-900 focus:ring-1 ring-indigo-50 lg:min-w-fit py-3 px-5 rounded-full hover:scale-x-[1.03] ease-out shadow-md flex justify-center items-center gap-2 max-w-max font-semibold mt-8 tetx-lg"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="m221.7 133.7l-72 72a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l58.4-58.3H40a8 8 0 0 1 0-16h156.7l-58.4-58.3a8.1 8.1 0 0 1 11.4-11.4l72 72a8.1 8.1 0 0 1 0 11.4Z"
          />
        </svg>
      </button>
    </section>
  );
}
