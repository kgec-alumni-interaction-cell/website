import React from "react";
import AlumniCard from "./AlumniCard";

const alumniList: {
  name: string;
  pfp: string;
  batch: string;
  worksAt: string;
  linkedinProfile: string;
}[] = [
  {
    name: "Neha Sinha",
    pfp: "http://res.cloudinary.com/dj5k9ihd8/image/upload/v1678289521/drmcsdcgjgjkob7npucx.jpg",
    batch: "2022-26",
    worksAt: "Google",
    linkedinProfile: "#",
  },
  {
    name: "Neha Sinha",
    pfp: "http://res.cloudinary.com/dj5k9ihd8/image/upload/v1678289521/drmcsdcgjgjkob7npucx.jpg",
    batch: "2022-26",
    worksAt: "Google",
    linkedinProfile: "#",
  },
  {
    name: "Neha Sinha",
    pfp: "http://res.cloudinary.com/dj5k9ihd8/image/upload/v1678289521/drmcsdcgjgjkob7npucx.jpg",
    batch: "2022-26",
    worksAt: "Google",
    linkedinProfile: "#",
  },
  {
    name: "Neha Sinha",
    pfp: "http://res.cloudinary.com/dj5k9ihd8/image/upload/v1678289521/drmcsdcgjgjkob7npucx.jpg",
    batch: "2022-26",
    worksAt: "Google",
    linkedinProfile: "#",
  },
  {
    name: "Neha Sinha",
    pfp: "http://res.cloudinary.com/dj5k9ihd8/image/upload/v1678289521/drmcsdcgjgjkob7npucx.jpg",
    batch: "2022-26",
    worksAt: "Google",
    linkedinProfile: "#",
  },
];

function AlumniBase() {
  return (
    <section className="bg-gradient-to-b from-violet-500 via-indigo-500 to-indigo-600 min-w-full flex flex-col">
      <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
        <div className="w-full justify-center">
          <h2 className="text-[2.5rem] text-yellow-300 lg:text-[3rem] font-black mb-7 leading-none">
            Alumnibase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-around gap-x-2 gap-y-7">
            {alumniList.map((alumni, idx) => (
              <AlumniCard key={idx} alumni={alumni} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlumniBase;
