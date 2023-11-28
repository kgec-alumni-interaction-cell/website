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


  return (
    <>
      <div className="mx-0 my-auto h-full overflow-hidden relative">
        <div
          ref={ref}
          className="whitespace-nowrap transition flex gap-0 left-0"
          style={{
            transform: `translate3d(${-index * slideWidth}px, 0, 0)`,
            transition: "ease 1000ms",
          }}
        >
          {children}
        </div>
        <button
          onClick={() => {
            setIndex((prev) =>
              prev === 0 ? Children.count(children) - 1 : prev - 1
            );
          }}
          className="rounded-full p-4 bg-indigo-50 absolute top-1/2 left-2 md:left-20"
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
          className="rounded-full p-4 bg-indigo-50 absolute top-1/2 right-2 md:right-20"
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
              className="text-indigo-50"
            >
              <path
                fill="currentColor"
                d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28Z"
              />
            </svg>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slideshow;
