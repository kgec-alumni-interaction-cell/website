import Layout from "@/components/layout";
import { useSession, signIn } from "next-auth/react";

function AlumiBase() {
  const { data: session } = useSession();

  // This is shown if not logged in
  if (!session)
    return (
      <Layout>
        <section className="min-w-ful flex flex-col p-8 py-14 lg:p-20">
          <div className="flex-grow mx-auto">
            <button
              onClick={() => signIn()}
              className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold text-md lg:text-2xl lg:min-w-fit px-[24px] lg:px-[24px] py-[8px] lg:py-[12px] flex items-center"
            >
              Register or Log In
              <span className="ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  fill="#ffffff"
                  viewBox="0 0 512 512"
                >
                  <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg>
              </span>
            </button>
          </div>
        </section>

        <div className="min-w-full lg:h-[calc(100vh-216px-48px-40px)] flex flex-col bg-zinc-100 p-8 lg:px-24 lg:py-14">
          <p className="text-3xl mb-10">Why You Should Care to Register</p>
          <p className="text-2xl mb-2">As a Student of KGEC</p>
          <ul className="list-disc px-5 mb-10 lg:text-lg">
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

          <p className="text-2xl mb-2">As an Alumnus of KGEC</p>
          <ul className="list-disc px-5 mb-10 lg:text-lg">
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
        </div>
      </Layout>
    );

  if (session) return <Layout>Logged in</Layout>;
}

export default AlumiBase;
