"use client";

import { useState } from "react";

const sidebarItems = [
  {
    name: "About",
  },
  {
    name: "Student Members",
  },
  {
    name: "Message from the President",
  },
  {
    name: "Message from the Vice President",
  },
  {
    name: "Message from the Joint Secretaries",
  },
];

export default function HomeAbout() {
  const [curentSidebarItem, setCurrentSidebarItem] = useState(0);
  return (
    <section className="h-[calc(100vh-12px)] bg-zinc-50 min-w-full flex">
      <div className="w-[70%]"></div>
      <div className="w-[30%] flex flex-col h-full">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`w-full h-12 flex items-center justify-center cursor-pointer ${
              curentSidebarItem === index ? "bg-zinc-100" : ""
            }`}
            onClick={() => setCurrentSidebarItem(index)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}
