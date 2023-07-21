import { Children, useEffect, useState, useRef, useLayoutEffect } from "react";

interface Props {
  children: React.ReactNode;
}

function Slideshow({ children }: Props) {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setSlideWidth(ref.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {}, 2500);
  }, [index]);

  return (
    <div className="mx-0 my-auto overflow-hidden">
      <div
        ref={ref}
        className="whitespace-nowrap transition"
        style={{
          transform: `translate3d(${-index * slideWidth}px, 0, 0)`,
          transition: "ease 1000ms",
        }}
      >
        {children}
      </div>

      <div className="text-center flex flex-col flex-grow mt-10">
        <div className="flex justify-center items-center mb-5">
          {Children.map(children, (_, idx) => (
            <div
              key={idx}
              className={`m-3 flex h-7 w-7 items-center justify-center rounded-full cursor-pointer bg-zinc-400 text-white ${
                index === idx ? "h-10 w-10 text-lg" : ""
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            >{idx+1}</div>
          ))}
        </div>

        {/* <button
          className="bg-zinc-400 text-white mx-3 my-2 py-5 rounded-md"
          onClick={() => {
            setIndex((prev) =>
              prev === Children.count(children) - 1 ? 0 : prev + 1
            );
          }}
        >
          Get Started
        </button> */}
      </div>
    </div>
  );
}

export default Slideshow;
