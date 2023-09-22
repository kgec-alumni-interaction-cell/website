import React from "react";
import AlumniCard from "./AlumniCard";
import Alumni from "@/types/types";

interface Props {
  alumniList: Alumni[];
}

function AlumniBase({ alumniList }: Props) {
  console.log(alumniList)
  return (
    <section className="bg-gradient-to-b from-violet-500 via-indigo-500 to-indigo-600 min-w-full flex flex-col">
      <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
        <div className="w-full justify-center">
          <h2 className="text-[2.5rem] text-yellow-300 lg:text-[3rem] font-black mb-7 leading-none">
            Alumnibase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-around gap-x-2 gap-y-7">
            {alumniList.map((alumni: Alumni, idx: number) => (
              <AlumniCard key={idx} alumni={alumni} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlumniBase;
