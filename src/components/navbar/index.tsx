import { useRouter } from "next/router";
import Link from "next/link";
import MobileMenu from "./mobile";

export const navItems = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M240 208h-16v-92.5a16 16 0 0 0-5.2-11.8l-80-72.7a16 16 0 0 0-21.6 0l-80 72.7a16 16 0 0 0-5.2 11.8V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16ZM48 115.5l80-72.7l80 72.7V208h-48v-48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v48H48Zm96 92.5h-32v-48h32Z"
        />
      </svg>
    ),
  },
  {
    name: "About",
    path: "/about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M224 48h-64a40 40 0 0 0-32 16a40 40 0 0 0-32-16H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM96 192H32V64h64a24 24 0 0 1 24 24v112a39.81 39.81 0 0 0-24-8Zm128 0h-64a39.81 39.81 0 0 0-24 8V88a24 24 0 0 1 24-24h64ZM160 88h40a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16Zm48 40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0 32a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"
        />
      </svg>
    ),
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Events",
    path: "/events",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M40 88h176V48a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8Z"
          opacity=".2"
        />
        <path
          fill="currentColor"
          d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Z"
        />
      </svg>
    ),
  },
  {
    name: "Scholarships",
    path: "/scholarships",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M230.33 141.06a24.34 24.34 0 0 0-18.61-4.77C230.5 117.33 240 98.48 240 80c0-26.47-21.29-48-47.46-48A47.58 47.58 0 0 0 156 48.75A47.58 47.58 0 0 0 119.46 32C93.29 32 72 53.53 72 80c0 11 3.24 21.69 10.06 33a31.87 31.87 0 0 0-14.75 8.4L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a7.93 7.93 0 0 0 1.94-.24l64-16a6.94 6.94 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM119.46 48a31.15 31.15 0 0 1 29.14 19a8 8 0 0 0 14.8 0a31.15 31.15 0 0 1 29.14-19C209.59 48 224 62.65 224 80c0 19.51-15.79 41.58-45.66 63.9l-11.09 2.55A28 28 0 0 0 140 112h-39.32C92.05 100.36 88 90.12 88 80c0-17.35 14.41-32 31.46-32ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.32 8.32 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Z"
        />
      </svg>
    ),
  },
  {
    name: "Alumni Base",
    path: "/alumnibase",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M248.8 146.4a7.7 7.7 0 0 1-4.8 1.6a8 8 0 0 1-6.4-3.2A51.6 51.6 0 0 0 196 124a8 8 0 0 1 0-16a24 24 0 1 0-23.6-28.5a8 8 0 1 1-15.7-3a40 40 0 1 1 66.3 37a67.8 67.8 0 0 1 27.4 21.7a8 8 0 0 1-1.6 11.2Zm-56 66.1a8.1 8.1 0 0 1-3.7 10.7a9.3 9.3 0 0 1-3.5.8a8.1 8.1 0 0 1-7.2-4.5a56.1 56.1 0 0 0-100.8 0a8 8 0 0 1-10.7 3.7a8.1 8.1 0 0 1-3.7-10.7a72.1 72.1 0 0 1 35.6-34.4a48 48 0 1 1 58.4 0a72.1 72.1 0 0 1 35.6 34.4ZM128 172a32 32 0 1 0-32-32a32.1 32.1 0 0 0 32 32Zm-60-56a8 8 0 0 0-8-8a24 24 0 1 1 23.6-28.5a8 8 0 1 0 15.7-3a40 40 0 1 0-66.3 37a67.8 67.8 0 0 0-27.4 21.7a8 8 0 0 0 1.6 11.2A7.7 7.7 0 0 0 12 148a8 8 0 0 0 6.4-3.2A51.6 51.6 0 0 1 60 124a8 8 0 0 0 8-8Z"
        />
      </svg>
    ),
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="h-[3.5rem] px-8 lg:px-24 py-2 bg-yellow-50 flex justify-between items-center sticky top-0 z-10 ">
      <div className="flex items-center">
        <h2 className="font-bold">KGEC Alumni Asscoiation</h2>
      </div>
      <div className="items-center hidden lg:flex ">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`p-2 rounded-lg ${
              router.pathname === item.path ? "bg-yellow-300 font-semibold" : ""
            } cursor-pointer mx-2`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <MobileMenu />
    </nav>
  );
}
