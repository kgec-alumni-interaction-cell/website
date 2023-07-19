import Link from "next/link";
import { useState } from "react";

const formatDisplayNumber = (num: number) => {
  let len = num.toString().length;
  let roundLimitStr = "1";
  for (let i = 1; i < len; ++i) roundLimitStr += "0";
  let roundLimit = Number(roundLimitStr);
  return Math.round(num/roundLimit) * roundLimit;
}

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
              <h2 className="font-bold text-3xl">{formatDisplayNumber(numStudents)}+</h2>
              <p>students</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-3xl">{formatDisplayNumber(numCompanies)}+</h2>
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
      <div className="bg-zinc-200 h-full flex flex-col lg:flex-row gap-10 justify-center lg:gap-48 items-center">
        {/* <p className="text-lg lg:text-3xl font-semibold">Lorem ipsum, dolor sit amet </p> */}
        <Link href="/signup" className="w-full text-center lg:text-right">
          <button className="bg-zinc-600 hover:bg-zinc-500 text-white font-bold w-1/2 rounded-lg lg:w-64 text-lg lg:text-2xl py-4 lg:py-5">
            Sign Up
          </button>
        </Link>
        <Link href="/login" className="w-full text-center lg:text-left">
          <button className="bg-zinc-500 text-white hover:bg-zinc-400 font-bold w-1/2 rounded-lg lg:w-64 text-lg lg:text-2xl py-4 lg:py-5">
            Log In
          </button>
        </Link>
      </div>
    </section>
  );
}
