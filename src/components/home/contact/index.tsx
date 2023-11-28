export default function HomeContact() {
  return (
    <section className="">
      <div className="min-w-full flex flex-col px-6 md:px-8 lg:px-24">
        <h2 className="text-[2rem] lg:text-[3rem] font-black mb-4 text-indigo-500 leading-none">
          Contact Us
        </h2>
        <p className="text-lg text-zinc-950">
          Have questions or want to get in touch with the Alumni Association? We
          are here to help!
        </p>
        <p className="text-lg text-zinc-950">
          Reach out to us through the following means:
        </p>
        <ul className="list-disc ml-6 my-7 text-lg font-semibold marker:text-zinc-950">
          <li className="">
            <span className="text-zinc-950 py-2 px-3">
              Shubhankar Das (+91 9064632186)
            </span>
          </li>
          <li className="">
            <span className="text-zinc-950 py-2 px-3">
              Arbendu Pratihar (+91 8597058785)
            </span>
          </li>
          <li className="">
            <span className="text-zinc-950 py-2 px-3">
              Samridhdha Milia (+91 9804443065)
            </span>
          </li>
        </ul>
        <p className="text-zinc-950 text-lg">
          As an alumnus of KGEC, you are automatically part of our community. We
          encourage you to become an active member and contribute to the legacy
          of excellence.
        </p>
      </div>
    </section>
  );
}
