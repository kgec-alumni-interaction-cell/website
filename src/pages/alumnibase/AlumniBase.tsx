import React, { useEffect, useState } from "react";
import AlumniCard from "./AlumniCard";
import { Alumni, UserType } from "@/types/types";

interface Props {
  alumniList: Alumni[];
}

function AlumniBase({ alumniList }: Props) {
  console.log(alumniList);

  const [signedInUser, setSignedInUser] = useState<UserType>({} as UserType);

  useEffect(() => {
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("signed-in-user") !== "")
        setSignedInUser(
          JSON.parse(window.localStorage.getItem("signed-in-user") as string)
        );
  }, []);

  useEffect(() => {
    console.log(signedInUser);
  }, [signedInUser]);

  return (
    <section className="bg-white min-w-full flex flex-col">
      <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
        <div className="w-full justify-center flex flex-col gap-9">
          <h2 className="text-[2.5rem] text-indigo-500 lg:text-[3rem] font-black mb-3 leading-none">
            Alumnibase
          </h2>

          <div className="flex flex-col gap-7 md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="text-lg">Hello, {signedInUser?.name}!</span>
              <span className="text-lg">
                Welcome to the KGEC Alumnibase. Here you can view the details of
                our alumni.
              </span>
            </div>

            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.localStorage.removeItem("signed-in-user");
                  window.location.reload();
                }
              }}
              className="bg-indigo-300 hover:bg-indigo-400 duration-300 text-zinc-900 focus:ring-1 ring-indigo-50 lg:min-w-fit py-3 px-5 rounded-full hover:scale-x-[1.03] ease-out shadow-md flex justify-center items-center gap-2 max-w-max font-semibold tetx-lg group"
            >
              Log Out
            </button>
          </div>

          {alumniList && (
            <div className="grid grid-cols-1 md:grid-cols-3 justify-around gap-x-2 gap-y-7">
              {alumniList.map((alumni: Alumni, idx: number) => (
                <AlumniCard key={alumni.id} alumni={alumni} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AlumniBase;
