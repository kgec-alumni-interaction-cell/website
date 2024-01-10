import Authenticator from "@/components/authenticator";
import Layout from "@/components/layout";
import { FormEvent, useState } from "react";

function AddNotice() {
  const [token, setToken] = useState<string>("");

  return (
    <Layout>
      <section className="bg-white min-w-full flex flex-col w-full h-[calc(100vh-12px)]">
        <h2 className="text-[2.5rem] py-5 px-10 text-indigo-500 lg:text-[3rem] font-black mb-0 leading-none">
          Add Notice 
        </h2>

        <form
          className="w-full overflow-y-auto flex flex-col justify-start gap-8 p-12 md:px-8 lg:p-24 max-h-full"
          method="POST"
        >
          <Authenticator token={token} setToken={setToken} />
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Notice Name
            </label>
            <div className="mt-1">
              <input
                name="notice-name"
                required
                className="block w-[200px] md:w-[400px] rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Notice Link
            </label>
            <div className="mt-1">
              <input
                name="notice-link"
                required
                className="block w-[200px] md:w-[400px] rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex w-[200px] justify-center rounded-md bg-indigo-300 hover:bg-indigo-400/80 px-3 py-2 text-sm font-semibold leading-6 text-zinc-800 shadow-sm duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Notice
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default AddNotice;
