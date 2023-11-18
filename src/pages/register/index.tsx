import Layout from "@/components/layout";

function Register() {
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
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-yellow-300"
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

                <label className="block text-sm font-medium leading-6 text-yellow-300">
                    <input type="checkbox" /> I am currently a student at KGEC
                  </label>

                <div className="flex gap-2">
                  <div>
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium leading-6 text-yellow-300"
                    >
                      Graduation Year
                    </label>
                    <input
                      name="year"
                      required
                      className="block w-28 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-yellow-300"
                    >
                      Proof of Graduation
                    </label>
                    <input
                      type="file"
                      name="small-file-input"
                      id="small-file-input"
                      className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm bg-zinc-50 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:border-0 file:me-4 file:py-2 file:px-4"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="work"
                    className="block text-sm font-medium leading-6 text-yellow-300"
                  >
                    Current Workplace
                  </label>
                  <div className="mt-2">
                    <input
                      name="work"
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
                <a
                  href="/login"
                  className="pl-1 font-semibold leading-6 text-yellow-300 hover:text-yellow-200"
                >
                  Log in now!
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Register;
