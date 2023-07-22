import Layout from "@/components/layout";
import { useSession, signIn } from "next-auth/react";

function AlumiBase() {
  const { data: session } = useSession();

  // This is shown if not logged in
  if (!session)
    return (
      <Layout>
        <section className=" bg-zinc-100 min-w-full flex flex-col">
          <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
            <div className="w-full justify-center">
              <h2 className="text-[2rem] lg:text-[3rem] font-black mb-0 leading-none">
                Alumni Base
              </h2>
              <p className="text-base">
                Join the KGEC Alumni Association to stay connected with a vast
                network of successful graduates from diverse fields.
              </p>
            </div>
            <div className="p-4 bg-zinc-200 rounded-lg shadow-sm">
              <h2 className="text-2xl lg:text-3xl font-black mb-4">
                Why you should care to register?
              </h2>
              <h2 className=" text-lg lg:text-xl mb-2 font-semibold">
                As a Student of KGEC
              </h2>
              <ul className="list-disc px-5 mb-4">
                <li>
                  By registering on the college alumni website, students of KGEC
                  gain access to a vast network of successful graduates from
                  diverse fields.
                </li>
                <li>
                  Moreover, staying connected with alumni fosters a sense of
                  belonging and philanthropy, encouraging students to give back
                  and positively impact the college community.{" "}
                </li>
                <li>
                  Joining the alumni website opens doors to an array of
                  possibilities, ensuring that the journey through KGEC
                  transcends graduation day and continues to evolve with each
                  new connection made.
                </li>
              </ul>

              <h2 className=" text-lg lg:text-xl mb-2 font-semibold">
                As an Alumnus of KGEC
              </h2>
              <ul className="list-disc px-5 mb-4">
                <li>
                  For the esteemed alumni of KGEC, registering on the college
                  alumni website presents an opportunity to reconnect with
                  cherished memories and former batchmates.
                </li>
                <li>
                  Through this platform, they can extend their support and
                  guidance to current students.
                </li>
                <li>
                  The alumni network becomes an invaluable resource, offering
                  professional growth prospects through partnerships,
                  collaborations, and career advancements.
                </li>
                <li>
                  Embracing this connection, alumni can find fulfillment in
                  giving back to the college that played an integral role in
                  shaping their lives, and in witnessing the impact of their
                  contributions on future generations of KGEC graduates.
                </li>
              </ul>
              <button
                onClick={() => signIn()}
                className="bg-zinc-50 hover:bg-100/50 duration-300 text-zinc-900 focus:ring-1 ring-zinc-50 lg:min-w-fit px-3 py-3 rounded-lg shadow-sm flex justify-center items-center gap-2 max-w-max font-semibold group"
              >
                Register / Log In
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="hidden group-hover:block duration-500"
                >
                  <path
                    fill="currentColor"
                    d="m221.7 133.7l-72 72a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l58.4-58.3H40a8 8 0 0 1 0-16h156.7l-58.4-58.3a8.1 8.1 0 0 1 11.4-11.4l72 72a8.1 8.1 0 0 1 0 11.4Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    );

  if (session) return <Layout>Logged in</Layout>;
}

export default AlumiBase;
