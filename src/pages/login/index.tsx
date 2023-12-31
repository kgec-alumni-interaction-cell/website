import Layout from "@/components/layout";
import { UserType } from "@/types/types";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

interface FormType {
  email: string;
  password: string;
}

function Login() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    let formObj: FormType = {} as FormType;
    formObj.email = formData.email as string;
    formObj.password = formData.password as string;

    console.log(formObj);

    const response = await fetch(
      "https://kgec-alumni-backend.onrender.com/users/login",
      {
        method: "POST",
        body: JSON.stringify(formObj),
      }
    );

    // console.log(await response.json());

    if (response.status === 200) {
      const user = await response.json();
      console.log(user);
      if (typeof window !== "undefined") {
        localStorage.setItem("signed-in-user", JSON.stringify(user));
        window.location.reload();
      }
    }
  }

  const [signedInUser, setSignedInUser] = useState<UserType>({} as UserType);

  useEffect(() => {
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("signed-in-user") !== "")
        setSignedInUser(
          JSON.parse(
            window.localStorage.getItem("signed-in-user") as string
          ) as UserType
        );
  }, []);

  useEffect(() => {
    console.log(signedInUser);
  }, [signedInUser]);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-violet-500 via-indigo-500 to-indigo-600 min-w-full flex flex-col">
        <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
          <div className="flex min-h-full flex-col justify-center px-6 pb-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-yellow-300">
                Log In to the KGEC Alumni Portal
              </h2>
            </div>

            {signedInUser && signedInUser?.verified ? (
              <div className="mt-10 text-center text-xl leading-9 tracking-tight text-zinc-100">
                You&apos;re logged in! Check out our Alumnibase.
              </div>
            ) : signedInUser && !signedInUser?.verified ? (
              <div className="mt-10 text-center text-xl leading-9 tracking-tight text-zinc-100">
                Seems like you haven't been verified yet. Kindly have patience.
              </div>
            ) :  (
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-yellow-300"
                    >
                      E-mail
                    </label>
                    <div className="mt-2">
                      <input
                        name="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-yellow-300"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-white">
                  Didn&apos;t register before?
                  <Link
                    href="/register"
                    className="pl-1 font-semibold leading-6 text-yellow-300 hover:text-yellow-200"
                  >
                    Register now!
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
