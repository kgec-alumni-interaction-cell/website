import Link from "next/link";
import { navItems } from ".";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import type { UserType } from "@/types/types";

export default function MobileMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [signedInUser, setSignedInUser] = useState<UserType>({} as UserType);

  useEffect(() => {
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("signed-in-user") !== "")
        setSignedInUser(
          JSON.parse(window.localStorage.getItem("signed-in-user") as string)
        );
  }, []);

  return (
    <div className="lg:hidden ">
      <div className="flex justify-between items-center relative">
        <button
          className="text-2xl bg-indigo-300 hover:bg-indigo-300/90 p-2 rounded-lg"
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
                router.pathname === item.path ? "bg-indigo-200" : ""
              } rounded-lg p-2 font-semibold flex gap-2 items-center`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          {signedInUser ? (
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.localStorage.removeItem("signed-in-user");
                  window.location.reload();
                }
              }}
              className="rounded-lg p-2 font-semibold flex gap-2 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" />
                  <path
                    stroke-linejoin="round"
                    d="M15 12H2m0 0l3.5-3M2 12l3.5 3"
                  />
                </g>
              </svg>
              Log Out
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-lg p-2 font-semibold flex gap-2 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linejoin="round"
                    d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"
                  />
                  <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" />
                </g>
              </svg>
              Log In
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
