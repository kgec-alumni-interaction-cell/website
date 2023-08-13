/* eslint-disable react/no-unescaped-entities */
"use client";

import Layout from "@/components/layout";
import { useState } from "react";

const sidebarItems = [
  {
    name: "About Us",
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

function About() {
  const [curentSidebarItem, setCurrentSidebarItem] = useState(0);
  return (
    <Layout>
      <section className=" bg-zinc-100 min-w-full flex flex-col lg:flex-row min-h-screen p-12 px-8 gap-4 lg:gap-8 lg:p-24">
        <MobileDropDown onSelect={(index) => setCurrentSidebarItem(index)} />
        <div className="w-full lg:w-[75%] ">
          {curentSidebarItem === 0 && (
            <div className="rounded-lg p-2">
              <h2 className="text-2xl lg:text-3xl font-black mb-2">About Us</h2>
              Our association is a beacon of unity and camaraderie, bringing
              together graduates from diverse disciplines and generations. We
              take immense pride in our shared experiences, accomplishments, and
              the values instilled in us during our time at KGEC.
              <h2 className="text-2xl lg:text-3xl font-black my-2">
                Our Goals
              </h2>
              <ul className="list-disc pl-8">
                <li>
                  <strong>Expand alumni network:</strong> Grow the alumni base
                  by connecting with former students from diverse disciplines
                  and graduation years, creating a more inclusive community.{" "}
                </li>
                <li>
                  <strong>Enhance alumni engagement:</strong> Foster active
                  participation through events, reunions, and programs,
                  providing meaningful opportunities for alumni to connect and
                  contribute to college growth.{" "}
                </li>
                <li>
                  <strong>Encourage fundraising support:</strong> Increase
                  alumni participation in fundraising activities to ensure
                  continuous development and better opportunities for current
                  students.
                </li>
                <li>
                  <strong>Promote pride and loyalty:</strong> Showcase alumni
                  achievements and contributions, inspiring a strong KGEC
                  identity among current and former students.{" "}
                </li>
              </ul>
              <p>
                We aim to leave a lasting legacy that empowers future
                generations to uphold KGEC's values of excellence, integrity,
                and social responsibility.
              </p>
            </div>
          )}
          {curentSidebarItem === 1 && <div>Student Members</div>}
          {curentSidebarItem === 2 && (
            <div>
              <h2 className="text-2xl lg:text-3xl font-black mb-2">
                Message from the President
              </h2>
              <p>
                “As the President of the Kalyani Government Engineering College
                Alumni Association and a current student at KGEC, it is an honor
                to extend my warm greetings to all our esteemed alumni. Our
                college takes immense pride in its alumni, and we are thrilled
                to create this platform that fosters strong connections between
                current students and graduates. The KGEC Alumni Association
                serves as a bridge that connects the past, present, and future
                of our institution. Our mission is to celebrate the achievements
                of our alumni, provide guidance and mentorship to current
                students, and actively contribute to the college's growth and
                development. As a student-led association, we are dedicated to
                creating engaging events, workshops, and initiatives that
                promote knowledge exchange and networking. I encourage all
                alumni to actively participate in our activities and share their
                experiences, as we collectively work towards making KGEC a hub
                of excellence and innovation.”
              </p>
              <p className="mt-2 font-semibold">- Shubhankar Das (President)</p>
            </div>
          )}
          {curentSidebarItem === 3 && (
            <div>
              <h2 className="text-2xl lg:text-3xl font-black mb-2">
                Message from the Vice President
              </h2>
              <p>
                “I am delighted to address everyone as the Vice-President of the
                Kalyani Government Engineering College Alumni Association and a
                current student at KGEC. Our college is not just a place of
                learning but also a close-knit community that fosters lifelong
                bonds among its students. As an association of current students,
                we are committed to maintaining strong ties with our esteemed
                alumni. The KGEC Alumni Association aims to provide a supportive
                platform for networking, mentorship, and career guidance.
                Through various events, we hope to bring together current
                students and graduates, creating opportunities for meaningful
                interactions and knowledge-sharing. Your achievements inspire
                us, and we are eager to learn from your experiences to become
                better engineers and leaders. I invite all alumni to join us in
                our endeavors, as together, we can uphold the values of KGEC and
                make a positive impact on the lives of current students.”
              </p>
              <p className="mt-2 font-semibold">
                - Subhadeep Sinha Roy (Vice President)
              </p>
            </div>
          )}
          {curentSidebarItem === 4 && (
            <div>
              <h2 className="text-2xl lg:text-3xl font-black mb-2">
                Message from the Joint Secretaries
              </h2>
              <p>
                “The KGEC Alumni Association aims to bridge the gap between
                current students and graduates, fostering connections that last
                beyond graduation. We are dedicated to organizing events and
                activities that enable current students to interact with alumni,
                seek guidance, and learn from your valuable experiences. Your
                achievements and contributions to society serve as a constant
                source of inspiration for us, and we hope to follow in your
                footsteps as we embark on our own professional journeys. We look
                forward to collaborating with you and celebrating the spirit of
                KGEC, as together, we make a difference in the lives of our
                fellow students and the future of our college.”
              </p>
            </div>
          )}
        </div>
        <div className="w-[25%] flex-col h-full divide-y sticky top-0 hidden lg:flex">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`w-full h-12 flex items-center justify-start cursor-pointer p-2 rounded-lg ${
                curentSidebarItem === index ? "bg-zinc-200" : ""
              }`}
              onClick={() => setCurrentSidebarItem(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function MobileDropDown({ onSelect }: { onSelect: (index: number) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(0);

  const handleDropdownClick = (index: number) => {
    setSelectedDropdownItem(index);
    setIsOpen(false);
    onSelect(index);
  };

  return (
    <div className="w-full flex flex-col lg:hidden items-center justify-center bg-zinc-200 rounded-lg p-2">
      <div
        className="w-full flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className=" font-bold">
          {sidebarItems[selectedDropdownItem].name}{" "}
        </h2>
        <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M128 182a5.8 5.8 0 0 1-4.2-1.8l-80-80a5.9 5.9 0 0 1 8.4-8.4l75.8 75.7l75.8-75.7a5.9 5.9 0 0 1 8.4 8.4l-80 80a5.8 5.8 0 0 1-4.2 1.8Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M208 166a5.8 5.8 0 0 1-4.2-1.8L128 88.5l-75.8 75.7a5.9 5.9 0 0 1-8.4-8.4l80-80a5.8 5.8 0 0 1 8.4 0l80 80A6 6 0 0 1 208 166Z"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="w-full flex flex-col items-center justify-center">
          {sidebarItems
            .filter((item, index) => index !== selectedDropdownItem)
            .map((item, index) => (
              <div
                key={index}
                className={`w-full h-12 flex items-center justify-start cursor-pointer rounded-lg`}
                onClick={() => handleDropdownClick(
                  index + (index >= selectedDropdownItem ? 1 : 0)
                )}
              >
                {item.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default About;