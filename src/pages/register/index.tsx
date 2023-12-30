import Layout from "@/components/layout";
import Link from "next/link";
import { FormEvent } from "react";

interface FormType {
  name: string;
  email: string;
  alumni: boolean;
  gradYr: string;
  proofOfGrad: string;
  currWorkplace: string;
  password: string;
}

function Register() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    let formObj: FormType = {} as FormType;
    formObj = { ...formObj, ...formData }
    if (formData.alumni) formObj.alumni = true; else formObj.alumni = false;
    
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(formData)
    })

    console.log(formObj)
    console.log(response)
  }
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

                <label className="block text-sm font-medium leading-6 text-yellow-300">
                  <input name="alumni" type="checkbox" /> I have graduated from
                  KGEC
                </label>

                <div className="flex gap-2">
                  <div>
                    <label
                      htmlFor="gradYr"
                      className="block text-sm font-medium leading-6 text-yellow-300"
                    >
                      Graduation Year
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
                    {/* <input
                      type="file"
                      name="small-file-input"
                      id="small-file-input"
                      className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm bg-zinc-50 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:border-0 file:me-4 file:py-2 file:px-4"
                    /> */}
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

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md  bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit for Verification
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-white">
                Already recieved a password?
                <Link
                  href="/login"
                  className="pl-1 font-semibold leading-6 text-yellow-300 hover:text-yellow-200"
                >
                  Log in now!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Register;
