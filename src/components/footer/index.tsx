import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-indigo-50 min-w-full min-h-[16vh] max-h-auto flex flex-col-reverse gap-8 justify-start px-6 md:px-8 lg:px-24 py-6">
      <p className="text-md font-semibold leading-tight text-zinc-950">
        Copyright &copy; 2024 KGEC Alumni Interaction Cell. All rights reserved.
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <Link
            href="/"
            className="text-zinc-950 hover:text-zinc-800/80 duration-200 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-zinc-950 hover:text-zinc-800/80 duration-200 font-semibold"
          >
            About
          </Link>
          <Link
            href="/events"
            className="text-zinc-950 hover:text-zinc-800/80 duration-200 font-semibold"
          >
            Events
          </Link>
          <Link
            href="/scholarships"
            className="text-zinc-950 hover:text-zinc-800/80 duration-200 font-semibold"
          >
            Scholariships
          </Link>
          <Link
            href="/alumnibase"
            className="text-zinc-950 hover:text-zinc-800/80 duration-200 font-semibold"
          >
            {" "}
            Alumni Base
          </Link>
        </div>
        <div className="flex divide-x divide-zinc-700 gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=100094278715449&mibextid=ZbWKwL"
            className="text-zinc-950 hover:text-zinc-800/80 duration-200 font-semibold pl-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669c1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
          <a
            href="mailto:kgecalumniinterectioncell@gmail.com"
            className="text-zinc-950 hover:text-zinc-800/80 duration-200 font-semibold pl-6"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 10v8h16v-8l-8 3l-8-3Zm0-4v2l8 3l8-3V6H4Zm0-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
