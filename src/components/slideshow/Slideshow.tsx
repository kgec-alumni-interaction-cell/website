import { Children, useEffect, useState, useRef, useLayoutEffect } from "react";

interface Props {
  children: React.ReactNode;
  slideTime: number;
}

function Slideshow({ children, slideTime }: Props) {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setSlideWidth(ref.current.offsetWidth);
    }
  }, []);

  // let slideshowTimeout: NodeJS.Timeout;

  useEffect(() => {
    setTimeout(() => {
      setIndex((prev) =>
        prev === Children.count(children) - 1 ? 0 : prev + 1
      );
    }, slideTime);
  }, [index]);

  return (
    <>
      <div className="mx-0 my-auto h-full overflow-hidden">
        <div
          ref={ref}
          className="whitespace-nowrap transition flex gap-0"
          style={{
            transform: `translate3d(${-index * slideWidth}px, 0, 0)`,
            transition: "ease 1000ms",
          }}
        >
          {children}
        </div>
        <div className="text-center flex flex-col flex-grow mt-1"></div>
      </div>

      <div className="text-center flex flex-col flex-grow md:my-3">
        <div className="flex justify-center items-center mb-2">
          {Children.map(children, (_, idx) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={index === idx ? "50" : "27"}
              height={index === idx ? "50" : "27"}
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28Z"
              />
            </svg>
          ))}
        </div>
      </div>

      <div className="flex">
        <button
          onClick={() => {
            setIndex((prev) =>
              prev === 0 ? Children.count(children) - 1 : prev - 1
            );
          }}
          className="w-full bg-zinc-200 ml-10 md:ml-24 mr-3 mb-10 rounded-lg py-1.5 md:py-3 mx-auto hover:bg-sky-100 duration-300 text-zinc-900 focus:ring-1 ring-zinc-50 lg:min-w-fit px-3 shadow-md flex justify-center items-center gap-2 font-semibold group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 md:w-8 h-6 md:h-8"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55L10 18Z"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setIndex((prev) =>
              prev === Children.count(children) - 1 ? 0 : prev + 1
            );
          }}
          className="w-full bg-zinc-200 mr-10 md:mr-24 ml-3 mb-10 rounded-lg py-1.5 md:py-3 mx-auto hover:bg-sky-100 duration-300 text-zinc-900 focus:ring-1 ring-zinc-50 lg:min-w-fit px-3 shadow-md flex justify-center items-center gap-2 font-semibold group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 md:w-8 h-6 md:h-8"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Slideshow;
