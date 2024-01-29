import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const formatDisplayNumber = (num: number) => {
  let len = num.toString().length;
  let roundLimitStr = "1";
  for (let i = 1; i < len; ++i) roundLimitStr += "0";
  let roundLimit = Number(roundLimitStr);
  return Math.round(num / roundLimit) * roundLimit;
};

/* eslint-disable @next/next/no-img-element */
export default function HomeHero() {
  //  Ideally these values should be fetched from a CMS or DB, I made them states just in case.
  //  The last two are formatted based upon their values, it's nothing but an aesthetic choice.
  const [numBatches, setNumBatches] = useState<number>(25);
  const [numStudents, setNumStudents] = useState<number>(5437);
  const [numCompanies, setNumCompanies] = useState<number>(53);

  const router = useRouter();

  return (
    <section className="h-[calc(100vh-12px)] hero bg-no-repeat bg-cover lg:bg-bottom min-w-full flex flex-col">
      <div className="min-w-full flex lg:flex-row flex-col px-8 lg:px-24 pb-0 lg:pb-0 h-[95%]">
        <div className="w-full flex flex-col justify-center lg:items-center h-full ">
          <h3 className="text-[1rem] lg:text-[2rem] font-semibold leading-[1.1] m-0 text-zinc-100">
            Kalyani Government Engineering College
          </h3>
          <h2 className="text-[2.5rem] lg:text-[4rem] leading-[1] font-black m-0 bg-gradient-to-b from-violet-400 via-indigo-400 to-indigo-500 text-transparent bg-clip-text my-2 lg:my-0">
            Alumni Association
          </h2>
          <p className="text-lg mb-8 text-zinc-100">
            Building lifelong connections and friendships
          </p>
          <div className="flex justify-start gap-8 lg:gap-24 mb-8">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="font-bold text-3xl text-zinc-50">{numBatches}</h2>
              <p className="text-zinc-100">batches</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="font-bold text-3xl text-zinc-50">
                {formatDisplayNumber(numStudents)}+
              </h2>
              <p className="text-zinc-100">students</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="font-bold text-3xl text-zinc-50">
                {formatDisplayNumber(numCompanies)}+
              </h2>
              <p className="text-zinc-100">companies</p>
            </div>
          </div>
          <button
            onClick={() => router.push("/alumnibase")}
            className="bg-gradient-to-tl from-blue-100 via-sky-200 to-indigo-300 hover:from-blue-200 hover:via-sky-300 hover:to-indigo-400 duration-300 text-zinc-900 focus:ring-1 ring-indigo-50 lg:min-w-fit px-5 py-3 hover:scale-x-[1.03] ease-out rounded-full shadow-md flex justify-center items-center gap-2 max-w-max font-semibold group"
          >
            Visit the Alumni Base
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 256"
              className="hidden group-hover:block duration-300 ease-out delay-300"
            >
              <path
                fill="currentColor"
                d="m221.7 133.7l-72 72a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l58.4-58.3H40a8 8 0 0 1 0-16h156.7l-58.4-58.3a8.1 8.1 0 0 1 11.4-11.4l72 72a8.1 8.1 0 0 1 0 11.4Z"
              />
            </svg>
          </button>
        </div>

        {/* <img
          src="/old_campus.jpg"
          alt="hero image"
          className="object-fill absolute top-0 left-0 right-0 -z-[10]"
        /> */}
      </div>
      {/* <div className="bg-zinc-300/50 h-[5%] flex flex-col gap-10 md:flex-row items-center justify-between lg:justify-around py-12">
        <div className="flex-grow lg:w-full lg:text-right lg:mr-48">
          <p className="text-2xl lg:text-3xl font-medium w-full">
            Are you a KGECian?
          </p>
        </div>

        <div className="flex-grow lg:w-full lg:ml-48">
          <button
            onClick={() => router.push("/alumnibase")}
            className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold text-md lg:text-2xl lg:min-w-fit px-[24px] lg:px-[24px] py-[8px] lg:py-[12px] flex items-center"
          >
            Visit the Alumni Base
            <span className="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="#ffffff"
                viewBox="0 0 512 512"
              >
                <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </span>
          </button>
        </div>
      </div> */}
    </section>
  );
}
