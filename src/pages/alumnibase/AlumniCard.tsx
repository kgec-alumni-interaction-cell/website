/* eslint-disable @next/next/no-img-element */
import { Alumni } from "@/types/types";
import React from "react";
import Link from "next/link";

interface Props {
  alumni: Alumni;
}

function AlumniCard({ alumni }: Props) {
  return (
    <div className="flex flex-col mx-auto p-6 rounded-2xl text-base md:text-lg text-zinc-900 gap-4 w-full bg-white shadow-lg justify-between relative">
      <a
        href={alumni?.linkedin}
        className="text-gray-700 hover:text-gray-900 font-semibold absolute right-4 top-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a>
      <div className="h-1/2 w-full flex flex-col items-center justify-center">
        <img
          className="rounded-full self-center h-24 w-24 mb-2 border-4 border-gray-300"
          src={
            alumni?.image ||
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          alt="No Profile Image"
        />
        <p className="font-bold text-lg">{alumni?.name}</p>
      </div>

      <div className="flex flex-col h-1/2 items-center text-base justify-center gap-2 leading-none text-center">
        <p className="">
          <span className="font-medium">{alumni?.degree} </span>
          in <span className="font-medium">{alumni?.department}</span>
        </p>
        <p className="flex gap-1 justify-center items-center">
          Works at <span className="font-medium">{alumni?.currWorkplace}</span>
        </p>
        <p className="flex gap-1 justify-center items-center">
          Graduated in <span className="font-medium">{alumni?.gradYr}</span>
        </p>
      </div>

      <div className="flex flex-col gap-1 justify-between text-sm w-full">
        <p className="flex gap-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                d="M12 18a6 6 0 1 1 5.64-3.946a1.54 1.54 0 0 1-.413.599l-.08.074a1.637 1.637 0 0 1-2.747-1.203V12m0 0a2.4 2.4 0 1 1-4.8 0a2.4 2.4 0 0 1 4.8 0Z"
              />
              <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" />
            </g>
          </svg>
          {alumni?.email}
        </p>
        <p className="flex gap-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
            />
          </svg>
          {alumni?.waNum}
        </p>
      </div>
      <Link
        href={alumni?.linkedin ? alumni?.linkedin : `mailto:${alumni?.email}`}
        className="bg-indigo-200 hover:bg-indigo-300 duration-300 text-zinc-800 focus:ring-1 ring-indigo-50 px-3 py-2 rounded-lg leading-none ease-out flex gap-1 items-center justify-center text-base font-normal text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="10" cy="6" r="4" />
            <path
              strokeLinecap="round"
              d="M21 10h-2m0 0h-2m2 0V8m0 2v2m-1.002 6c.002-.164.002-.331.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"
            />
          </g>
        </svg>
        Connect
      </Link>
    </div>
  );
}

export default AlumniCard;
