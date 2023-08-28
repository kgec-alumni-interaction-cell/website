const notices = [
  {
    link: "#",
    title: "Bing has been bing chilling",
  },
  {
    link: "#",
    title: "Bing been bing chilling",
  },
  {
    link: "#",
    title: "Has been bing chilling",
  },
];

export default function HomeNotices() {
  return (
    <section className="mnv bg-[#2d4698] min-w-full flex flex-col p-6 md:p-8 lg:p-24 md:h-[calc(100vh-12px)]">
      <h2 className="text-[2rem] lg:text-[3rem] font-black mb-4 text-zinc-50 leading-none">
        Notice Board
      </h2>

      <ul className="list-inside flex-col">
        {notices.map((notice, idx) => (
          <li key={idx} className="flex my-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825T10 2q1.65 0 2.825 1.175T14 6v9.5q0 1.05-.725 1.775T11.5 18q-1.05 0-1.775-.725T9 15.5V6.75q0-.325.213-.537T9.75 6q.325 0 .537.213t.213.537v8.75q0 .425.288.713t.712.287q.425 0 .713-.288t.287-.712V6q0-1.05-.725-1.775T10 3.5q-1.05 0-1.775.725T7.5 6v10.5q0 1.65 1.175 2.825T11.5 20.5q1.65 0 2.825-1.175T15.5 16.5V6.75q0-.325.213-.537T16.25 6q.325 0 .537.213T17 6.75v9.75q0 2.3-1.6 3.9T11.5 22Z"
              />
            </svg>
            <a className="ml-1 text-zinc-50 transition duration-150 ease-in-out hover:text-zinc-400 focus:text-zinc-500 active:text-blue-700" href={notice.link}>{notice.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
