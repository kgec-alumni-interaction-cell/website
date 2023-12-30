import Layout from "@/components/layout";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

interface FormType {
  name: string;
  email: string;
  alumni: boolean;
  gradYr: number;
  proofOfGrad: string;
  currWorkplace: string;
  password: string;
  image: string;
}

function Register() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    let formObj: FormType = {} as FormType;
    formObj.name = formData.name as string;
    formObj.email = formData.email as string;
    // formObj.alumni = formData.alumni as unknown as boolean;
    formObj.gradYr = parseInt(formData.gradYr as string);
    formObj.proofOfGrad = formData.proofOfGrad as string;
    formObj.currWorkplace = formData.currWorkplace as string;
    formObj.password = formData.password as string;
    formObj.image = "";
    if (formData.alumni) formObj.alumni = true;
    else formObj.alumni = false;

    console.log(formObj);

    const response = await fetch(
      "https://kgec-alumni-backend.onrender.com/users/register",
      {
        method: "POST",
        body: JSON.stringify(formObj),
      }
    );

    console.log(response);

    if (response.status === 200) {
      if (typeof window !== "undefined") {
        localStorage.setItem("signed-in-user", formObj.name);
        window.location.reload();
      }
    }
  }

  const [graduated, setGraduated] = useState<boolean>(false);

  const [signedInUser, setSignedInUser] = useState<string>("");

  // useEffect(() => {
  //   if (signedInUser) {}
  // })

  useEffect(() => {
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("signed-in-user") !== "")
        setSignedInUser(
          window.localStorage.getItem("signed-in-user") as string
        );
  }, []);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-violet-500 via-indigo-500 to-indigo-600 min-w-full flex flex-col">
        <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
          <div className="flex min-h-full flex-col justify-center px-6 pb-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-yellow-300">
                Register into the KGEC Alumni Portal
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block 
                    Labels 9
                    Milestones 0
                    text-sm font-medium leading-6 text-yellow-300"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      name="name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-yellow-300"
                  >
                    E-mail Address
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-yellow-300"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {!graduated ? (
                  <div className="flex gap-2">
                    <div>
                      <label
                        htmlFor="gradYr"
                        className="block text-sm font-medium leading-6 text-yellow-300"
                      >
                        Year of Graduation
                      </label>
                      <input
                        name="gradYr"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <label className="block text-sm font-medium leading-6 text-yellow-300">
                  <input
                    name="alumni"
                    type="checkbox"
                    onChange={() => {
                      setGraduated((prev) => !prev);
                    }}
                  />{" "}
                  I have graduated from KGEC
                </label>

                {graduated ? (
                  <>
                    <div className="flex gap-2">
                      <div>
                        <label
                          htmlFor="gradYr"
                          className="block text-sm font-medium leading-6 text-yellow-300"
                        >
                          Year Graduated
                        </label>
                        <input
                          name="gradYr"
                          required
                          className="block w-28 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="w-full">
                        <label
                          htmlFor="proofOfGrad"
                          className="block text-sm font-medium leading-6 text-yellow-300"
                        >
                          Proof of Graduation
                        </label>
                        <input
                          name="proofOfGrad"
                          placeholder="Enter drive link..."
                          required
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="currWorkplace"
                        className="block text-sm font-medium leading-6 text-yellow-300"
                      >
                        Current Workplace
                      </label>
                      <div className="mt-2">
                        <input
                          name="currWorkplace"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md  bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit for Verification
                  </button>
                </div>
              </form>

              <span className="mt-10 text-center text-sm text-white">
                {signedInUser && `Signed in as ${signedInUser}!`}
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Register;
