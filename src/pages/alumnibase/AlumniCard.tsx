import Alumni from "@/types/types";
import React from "react";

interface Props {
  alumni: Alumni;
}

function AlumniCard({ alumni }: Props) {
  return (
    <div className="flex flex-col mx-auto px-3 py-5 rounded-2xl text-base md:text-lg text-zinc-100 gap-3 w-[270px] bg-gradient-to-b from-violet-700 via-indigo-700 to-indigo-800">
      <img
        className="rounded-full h-28 w-28 mb-5"
        src={alumni?.image}
        alt="No Profile Image"
      />

      <span>
        <span className="font-bold">Name:</span> {alumni?.name}
      </span>
      <span>
        <span className="font-bold">Batch:</span> {alumni?.batch}
      </span>
      <span>
        <span className="font-bold">Works at:</span> {alumni?.worksAt}
      </span>

      <div className="flex gap-3 mt-4">
        <a
          href={alumni?.linkedinProfile}
          className="text-zinc-100 font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AlumniCard;
