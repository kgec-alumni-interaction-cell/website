import { useRouter } from "next/router";
import Link from "next/link";
import MobileMenu from "./mobile";

export const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Scholarships",
    path: "/scholarships",
  },
  {
    name: "Alumni Base",
    path: "/alumnibase",
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="h-[3.5rem] px-8 lg:px-24 py-2 bg-zinc-300/40 backdrop-blur-md flex justify-between items-center sticky top-0 z-10 ">
      <div className="flex items-center">
        <h2 className="font-bold">KGEC Alumni Asscoiation</h2>
      </div>
      <div className="items-center hidden lg:flex ">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`p-2 rounded-lg ${
              router.pathname === item.path ? "bg-indigo-300/90 font-semibold" : ""
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
