import Layout from "@/components/layout";
import { UserType } from "@/types/types";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface FormType {
  email: string;
  password: string;
}

function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    console.log(formData);
    let formObj: FormType = {} as FormType;
    formObj.email = formData.email as string;
    formObj.password = formData.password as string;

    console.log(formObj);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ROUTE}/users/login`,
      {
        method: "POST",
        body: JSON.stringify(formObj),
      }
    );

    // console.log(await response.json());

    if (response.status === 200) {
      const user = await response.json();
      setLoading(false);
      console.log(user);
      if (typeof window !== "undefined") {
        localStorage.setItem("signed-in-user", JSON.stringify(user));
      }
      router.push("/alumnibase");
    } else {
      setErrorMessage(await response.text());
      setLoading(false);
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
      <section className="bg-white min-w-full flex justify-center w-full h-[calc(100vh-12px)]">
        <div className="w-full overflow-y-auto flex flex-col justify-start items-center gap-8 p-12 px-8 lg:p-24 max-h-full">
          <h2 className="text-[2.5rem] text-indigo-700 lg:text-[3rem] font-black mb-0 leading-none">
            Log In to the KGEC Alumni Portal
          </h2>

          {errorMessage !== "" ? (
            <div
              className="max-w-xs bg-red-500 text-sm text-white rounded-xl shadow-lg"
              role="alert"
            >
              <div className="flex p-4">
                {errorMessage}
                <div className="ms-auto">
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {signedInUser && signedInUser?.verified ? (
            <div className="mt-10 text-center text-xl leading-9 tracking-tight">
              You&apos;re logged in! Check out our Alumnibase.
            </div>
          ) : signedInUser && !signedInUser?.verified ? (
            <div className="mt-10 text-center text-xl leading-9 tracking-tight">
              Seems like you haven&apos;t been verified yet. Kindly have
              patience.
            </div>
          ) : (
            <div className="w-full">
              <form className="space-y-3" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      name="email"
                      required
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-md bg-indigo-300 hover:bg-indigo-400/80 px-3 py-2 text-sm font-semibold leading-6 text-zinc-800 shadow-sm duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sign in
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-900">
                Didn&apos;t register before?
                <Link
                  href="/register"
                  className="pl-1 font-semibold leading-6 text-indigo-400 hover:text-indigo-500"
                >
                  Register now!
                </Link>
              </p>
            </div>
          )}
        </div>
        <div className="hidden md:block w-full bg-[url('/old_campus.jpg')] bg-no-repeat bg-cover"></div>
      </section>
    </Layout>
  );
}

export default Login;
