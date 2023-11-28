import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

function AlumniBaseInfo() {
  return (
    <section className="min-h-screen min-w-full flex flex-col">
      <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
        <div className="w-full justify-center">
          <h2 className="text-[2.5rem] text-indigo-500 lg:text-[3rem] font-black mb-0 leading-none">
            Alumni Base
          </h2>
          <p className=" text-zinc-950">
            Join the KGEC Alumni Association to stay connected with a vast
            network of successful graduates from diverse fields.
          </p>
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl font-black mb-4 text-indigo-500">
            Why you should care to register?
          </h2>
          <h2 className=" text-lg lg:text-xl mb-2 font-semibold text-indigo-500">
            As a Student of KGEC
          </h2>
          <ul className="list-disc px-5 mb-4 text-zinc-950">
            <li>
              By registering on the college alumni website, students of KGEC
              gain access to a vast network of successful graduates from diverse
              fields.
            </li>
            <li>
              Moreover, staying connected with alumni fosters a sense of
              belonging and philanthropy, encouraging students to give back and
              positively impact the college community.{" "}
            </li>
            <li>
              Joining the alumni website opens doors to an array of
              possibilities, ensuring that the journey through KGEC transcends
              graduation day and continues to evolve with each new connection
              made.
            </li>
          </ul>

          <h2 className="text-indigo-500 text-lg lg:text-xl mb-2 font-semibold">
            As an Alumnus of KGEC
          </h2>
          <ul className="text-zinc-950 list-disc px-5 mb-4">
            <li>
              For the esteemed alumni of KGEC, registering on the college alumni
              website presents an opportunity to reconnect with cherished
              memories and former batchmates.
            </li>
            <li>
              Through this platform, they can extend their support and guidance
              to current students.
            </li>
            <li>
              The alumni network becomes an invaluable resource, offering
              professional growth prospects through partnerships,
              collaborations, and career advancements.
            </li>
            <li>
              Embracing this connection, alumni can find fulfillment in giving
              back to the college that played an integral role in shaping their
              lives, and in witnessing the impact of their contributions on
              future generations of KGEC graduates.
            </li>
          </ul>
          <Link
            href="/login"
            className="bg-indigo-300 hover:bg-indigo-400 duration-300 text-zinc-900 focus:ring-1 ring-indigo-50 lg:min-w-fit py-3 px-5 rounded-full hover:scale-x-[1.03] ease-out shadow-md flex justify-center items-center gap-2 max-w-max font-semibold mt-8 tetx-lg group"
          >
            Sign In
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
              className="hidden group-hover:block duration-300 ease-out delay-300"
            >
              <path
                fill="currentColor"
                d="m140.2 132.2l-41.9 42A6.1 6.1 0 0 1 94 176a6 6 0 0 1-4.2-10.2l31.7-31.8H24a6 6 0 0 1 0-12h97.5L89.8 90.2a5.8 5.8 0 0 1 0-8.4a5.9 5.9 0 0 1 8.5 0l41.9 42l.3.3l.2.2a3.5 3.5 0 0 1 .5.8h.1a6.1 6.1 0 0 1 0 5.6h-.1a3.5 3.5 0 0 1-.5.8l-.2.2ZM192 34h-56a6 6 0 0 0 0 12h56a2 2 0 0 1 2 2v160a2 2 0 0 1-2 2h-56a6 6 0 0 0 0 12h56a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AlumniBaseInfo;
