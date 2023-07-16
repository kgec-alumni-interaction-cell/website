import { useRouter } from "next/router";
import Link from "next/link";
import MobileMenu from "./mobile";

export const navItems = [
  {
    name: "Home",
    path: "/",
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
    name: "Digital Database",
    path: "/digitaldb",
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="h-12 px-12 lg:px-24 py-2 bg-zinc-400 flex justify-between items-center sticky top-0">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">KGEC</h2>
      </div>
      <div className="items-center hidden lg:flex">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`${
              router.pathname === item.path ? "font-bold" : ""
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
