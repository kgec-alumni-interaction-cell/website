/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
// import { useSession, signIn } from "next-auth/react";
import AlumniBase from "./AlumniBase";
import AlumniBaseInfo from "./AlumniBaseInfo";
import { Alumni, UserType } from "@/types/types";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function AlumiBase() {
  // const { data: session } = useSession();
  // const session = 0

  const [signedInUser, setSignedInUser] = useState<UserType>({} as UserType);
  const { data, error, isLoading } = useSWR<Alumni[]>(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/users/alumni`,
    fetcher
  );
  const [alumniList, setAlumniList] = useState<Alumni[]>(data as Alumni[]);

  useEffect(() => {
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("signed-in-user") !== "")
        setSignedInUser(
          JSON.parse(window.localStorage.getItem("signed-in-user") as string)
        );
  }, []);

  useEffect(() => {
    setAlumniList(data as Alumni[]);
  }, [data]);

  if (!signedInUser?.id)
    return (
      <Layout>
        <AlumniBaseInfo />
      </Layout>
    );
  else if (!signedInUser.verified) {
    return (
      <Layout>
        <main className="min-h-screen relative min-w-full flex flex-col justify-center items-center text-center">
          <img
            src="https://illustrations.popsy.co/white/falling.svg"
            alt="Falling Illustration"
            className="w-96 h-96 object-cover"
          />

          <h1 className={`text-4xl font-black text-indigo-500`}>
            Your account is not verified yet.
          </h1>
          <p className={`text-lg text-zinc-900`}>
            We will verify your account and notify you via email once it is
            done.
          </p>
          <span className="text-xs absolute right-0 bottom-0 p-4 py-2 text-zinc-800">
            Illustration by{" "}
            <a
              href="https://popsy.co"
              target="_blank"
              className="text-indigo-500"
            >
              Popsy
            </a>
          </span>
        </main>
      </Layout>
    );
  }
  return (
    <Layout>
      <AlumniBase
        alumniList={
          alumniList
            ? alumniList.filter((alumni) => alumni.verified)
            : ([] as Alumni[])
        }
      />
    </Layout>
  );
}

export default AlumiBase;
