import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

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
  const [numBatches, setNumBatches] = useState<number>(20);
  const [numStudents, setNumStudents] = useState<number>(5437);
  const [numCompanies, setNumCompanies] = useState<number>(53);

  return (
    <section className="h-[calc(100dvh-12px)] bg-zinc-100 min-w-full flex flex-col">
      <div className="min-w-full flex lg:flex-row flex-col p-12 lg:p-24 pb-0 lg:pb-0 h-full">
        <div className="w-full lg:w-[60%] flex flex-col gap-8 justify-center h-full">
          <h3 className="text-[1.5rem] lg:text-[3rem] leading-[1.1] font-black">
            Kalyani Government Engineering College
          </h3>
          <h2 className="text-[3rem] lg:text-[4rem] leading-[1.1] font-black">
            Alumni Association
          </h2>
          <p className="text-lg">
            Building lifelong connections and friendships
          </p>
          <div className="flex justify-around lg:justify-start lg:gap-24 mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-3xl">{numBatches}</h2>
              <p>batches</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-3xl">
                {formatDisplayNumber(numStudents)}+
              </h2>
              <p>students</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-3xl">
                {formatDisplayNumber(numCompanies)}+
              </h2>
              <p>companies</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] hidden lg:block">
          <img
            src="/hero-image.png"
            alt="hero image"
            className="object-fill w-[900] h-[900]"
          />
        </div>
      </div>
      <div className="bg-zinc-200 h-full flex flex-col md:flex-row items-center justify-between py-24">
        <button
          onClick={() => signIn()}
          className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold text-lg lg:text-2xl lg:min-w-fit px-7 lg:px-10 py-7 lg:py-12 lg:mx-24 flex items-center"
        >
          Enter the Alumni Portal
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

        <Link href="https://kgec.edu.in">
          <button
            className="hidden lg:flex bg-zinc-500 hover:bg-zinc-600 text-white font-bold text-lg lg:text-2xl lg:min-w-fit px-7 lg:px-10 py-7 lg:py-12 lg:mx-24 items-center"
          >
            Visit College Website
            <span className="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="#ffffff"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </span>
          </button>
        </Link>

        <button className="hidden lg:flex bg-zinc-400 hover:bg-zinc-500 text-white font-bold text-xl lg:text-2xl px-8 lg:px-10 py-7 lg:py-12 lg:mx-24 items-center">
          Another Thing
        </button>
        <p className="text-sm lg:hidden">...or keep scrolling to learn more</p>
      </div>
    </section>
  );
}
