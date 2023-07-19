/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";

function Events() {
  return (
    <Layout>
      <section className=" bg-zinc-100 min-w-full flex flex-col">
        <div className="min-w-full flex flex-col gap-8 p-12 lg:p-24 h-full">
          <div className="w-full justify-center">
            <h2 className="text-[3rem] lg:text-[4rem] font-black mb-0 leading-none">
              Events
            </h2>
            <p className="text-base">
              Details about upcoming, ongoing and past events from the KGEC
              Alumni Association.
            </p>
          </div>
          {/* eveyrthing will be done using map function, this is just a prototype */}
          <div className="flex flex-col bg-zinc-200 shadow-sm rounded-lg w-full h-1/3 p-4 gap-4">
            <h2 className="font-semibold text-lg">Ongoing Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-zinc-200  shadow-sm rounded-lg w-full h-1/3 p-4 gap-4">
            <h2 className="font-semibold text-lg">Upcoming Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-zinc-200 shadow-sm rounded-lg w-full h-1/3 p-4 gap-4">
            <h2 className="font-semibold text-lg">Past Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
              <div className="flex flex-col bg-zinc-100 shadow-sm rounded-lg h-[200px] p-4">
                <p>event</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Events;
