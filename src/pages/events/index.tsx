/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useState } from "react";

interface EventType {
  name: string;
    description: string;
    image: string;
    link: string;
}

function Events() {
  const [ongoingEvents, setOngoingEvents] = useState<EventType[]>([]);

  const [upcomingEvents, setUpcomingEvents] = useState<EventType[]>([
    // {
    //   name: "Event 6",
    //   description: "Still reading? Dang I didn't peg you for a reader.",
    //   image: "https://kgec.edu.in/web/assets/images/seminar1.PNG",
    //   link: "#",
    // },
  ]);

  const [pastEvents, setPastEvents] = useState<EventType[]>([]);

  const router = useRouter();

  return (
    <Layout>
      <section className="bg-zinc-50 min-w-full flex flex-col">
        <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
          <div className="w-full justify-center">
            <h2 className="text-[2.5rem] lg:text-[3rem] font-black mb-0 leading-none text-indigo-500">
              Events
            </h2>
            <p className="text-lg text-zinc-950">
              Details about upcoming, ongoing and past events from the KGEC
              Alumni Association.
            </p>
          </div>
          {/* eveyrthing will be done using map function, this is just a prototype */}
          <div className="flex flex-col bg-indigo-50 shadow-md rounded-lg w-full h-1/3 p-4 gap-4">
            <h2 className="font-bold text-2xl text-indigo-500">Ongoing Events</h2>
            {ongoingEvents.length === 0 && <span className="">Currently no ongoing events! Stay tuned...</span>}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              {ongoingEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-zinc-50 shadow-md rounded-lg h-auto"
                >
                  <img
                    src={event.image}
                    alt="event image"
                    className="rounded-t-lg object-cover h-36"
                  />
                  <div className="flex flex-col gap-4 p-4 justify-start">
                    <h1 className="text-xl font-bold">{event.name}</h1>
                    <p>{event.description}</p>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700/80 font-semibold hover:text-indigo-700 flex gap-2 items-center"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 256 256"
                        className="duration-500"
                      >
                        <path
                          fill="currentColor"
                          d="m221.7 133.7l-72 72a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l58.4-58.3H40a8 8 0 0 1 0-16h156.7l-58.4-58.3a8.1 8.1 0 0 1 11.4-11.4l72 72a8.1 8.1 0 0 1 0 11.4Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-indigo-50 shadow-md rounded-lg w-full h-1/3 p-4 gap-4">
            <h2 className="font-bold text-2xl text-indigo-500">Upcoming Events</h2>
            {upcomingEvents.length === 0 && <span className="">Currently no upcoming events! Stay tuned...</span>}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              {upcomingEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-zinc-50 shadow-md rounded-lg h-auto"
                >
                  <img
                    src={event.image}
                    alt="event image"
                    className="rounded-t-lg object-cover h-36"
                  />
                  <div className="flex flex-col gap-4 p-4 justify-start">
                    <h1 className="text-xl font-bold">{event.name}</h1>
                    <p>{event.description}</p>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700/80 font-semibold hover:text-indigo-700 flex gap-2 items-center"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 256 256"
                        className="duration-500"
                      >
                        <path
                          fill="currentColor"
                          d="m221.7 133.7l-72 72a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l58.4-58.3H40a8 8 0 0 1 0-16h156.7l-58.4-58.3a8.1 8.1 0 0 1 11.4-11.4l72 72a8.1 8.1 0 0 1 0 11.4Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-indigo-50 shadow-md rounded-lg w-full h-1/3 p-4 gap-4">
            <h2 className="font-semibold text-2xl text-indigo-500">Past Events</h2>
            {pastEvents.length === 0 && <span className="">Currently no past events! Stay tuned...</span>}
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              {pastEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-zinc-50 shadow-md rounded-lg h-auto"
                >
                  <img
                    src={event.image}
                    alt="event image"
                    className="rounded-t-lg object-cover h-36"
                  />
                  <div className="flex flex-col gap-4 p-4 justify-start">
                    <h1 className="text-xl font-bold">{event.name}</h1>
                    <p>{event.description}</p>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700/80 font-semibold hover:text-indigo-700 flex gap-2 items-center"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 256 256"
                        className="duration-500"
                      >
                        <path
                          fill="currentColor"
                          d="m221.7 133.7l-72 72a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l58.4-58.3H40a8 8 0 0 1 0-16h156.7l-58.4-58.3a8.1 8.1 0 0 1 11.4-11.4l72 72a8.1 8.1 0 0 1 0 11.4Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Events;
