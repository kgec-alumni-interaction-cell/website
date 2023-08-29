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
          className="text-2xl bg-[#f7c212]/90 hover:bg-[#f7c212] p-2 rounded-lg"
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
                d="M204.2 195.8a5.9 5.9 0 1 1-8.4 8.4L128 136.5l-67.8 67.7a5.9 5.9 0 0 1-8.4-8.4l67.7-67.8l-67.7-67.8a5.9 5.9 0 0 1 8.4-8.4l67.8 67.7l67.8-67.7a5.9 5.9 0 0 1 8.4 8.4L136.5 128Z"
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
                d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6ZM40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12Zm176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12Z"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col absolute top-12 right-12 bg-[#f7c212] p-2 rounded-lg">
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={`${
                router.pathname === item.path ? "bg-[#f2f633]" : ""
              }bg-[#f7c212] hover:bg-[#f3f712] rounded-lg p-2`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
