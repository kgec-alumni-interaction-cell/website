import { useState } from "react";
import Link from "next/link";
import { navItems } from ".";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden ">
      <div className="flex justify-between items-center relative">
        <button
          className="text-2xl bg-yellow-300 hover:bg-yellow-300/90 p-2 rounded-lg"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M205.7 194.3a8.1 8.1 0 0 1 0 11.4a8.2 8.2 0 0 1-11.4 0L128 139.3l-66.3 66.4a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l66.4-66.3l-66.4-66.3a8.1 8.1 0 0 1 11.4-11.4l66.3 66.4l66.3-66.4a8.1 8.1 0 0 1 11.4 11.4L139.3 128Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col absolute w-[180px] top-12 right-8 bg-zinc-100/40 backdrop-blur-lg p-2 rounded-lg">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={`${
                router.pathname === item.path ? "bg-yellow-300" : ""
              } rounded-lg p-2 font-semibold flex gap-2 items-center`}
            >
              {item.icon}{item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
