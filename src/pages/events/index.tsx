/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useState } from "react";

function Events() {
  const [ongoingEvents, setOngoingEvents] = useState([
    {
      name: "Bing Chlling",
      description: "Come and chill with bing.",
      image: "https://kgec.edu.in/web/assets/images/event1.jpg",
      link: "#",
    },
    {
      name: "Bing Chlling",
      description:
        "Every even should have four data points: a name, a description, an image and a link.",
      image: "https://kgec.edu.in/web/assets/images/event2.jpg",
      link: "#",
    },
    {
      name: "Bing Chlling",
      description:
        "All these events are stored as a state variable, which will be updated via the CMS.",
      image: "https://kgec.edu.in/web/assets/images/seminar1.PNG",
      link: "#",
    },
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      name: "Bing Chlling",
      description:
        "These are just weird sample events. I hardcoded them. Will be replaced.",
      image: "https://kgec.edu.in/web/assets/images/event1.jpg",
      link: "#",
    },
    {
      name: "Bing Chlling",
      description: "Don't show provide more than 3 of these. Please I beg.",
      image: "https://kgec.edu.in/web/assets/images/event2.jpg",
      link: "#",
    },
    {
      name: "Bing Chlling",
      description: "Still reading? Dang I didn't peg you for a reader.",
      image: "https://kgec.edu.in/web/assets/images/seminar1.PNG",
      link: "#",
    },
  ]);

  const [pastEvents, setPastEvents] = useState([
    {
      name: "Bing Chlling",
      description:
        "Let's talk about the images. They can basically be any size, but try to make it fit into this little cropped area that yopu can see on top.",
      image: "https://kgec.edu.in/web/assets/images/event1.jpg",
      link: "#",
    },
    {
      name: "Bing Chlling",
      description:
        "Every even should have four data points: a name, a description, an image and a link.",
      image: "https://kgec.edu.in/web/assets/images/event2.jpg",
      link: "#",
    },
    {
      name: "Bing Chlling",
      description:
        "Oh and one last thing, try not to make the descriptions of each of these events too big, otherwise it will be difficult to render the writing into this small space as you can clearly see. Make it EXACTLY the size of this piece of text.",
      image: "https://kgec.edu.in/web/assets/images/seminar1.PNG",
      link: "#",
    },
  ]);

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
