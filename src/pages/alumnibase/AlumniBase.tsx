import React, { useEffect, useState } from "react";
import AlumniCard from "./AlumniCard";
import { Alumni, UserType } from "@/types/types";

interface Props {
  alumniList: Alumni[];
}

const DEPARTMENTS = [
  "Computer Science and Engineering",
  "Electronics and Communication Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Production Engineering",
  "Master of Computer Application",
];

const DEGREES = ["B.Tech", "M.Tech", "MCA"];

function AlumniBase({ alumniList }: Props) {
  const [signedInUser, setSignedInUser] = useState<UserType>({} as UserType);
  const [filterByDepartment, setFilterByDepartment] = useState<string>("all");
  const [filterByDegree, setFilterByDegree] = useState<string>("all");

  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const [filteredAlumniList, setFilteredAlumniList] =
    useState<Alumni[]>(alumniList);

  console.log(filteredAlumniList);

  const search = (query: string) => {
    setFilteredAlumniList(
      alumniList.filter(
        (alumni) =>
          Array.from(Object.values(alumni)).some((value) =>
            value.toString().toLowerCase().includes(query.toLowerCase())
          ) &&
          (filterByDepartment !== "all"
            ? alumni.department === filterByDepartment
            : true) &&
          (filterByDegree !== "all" ? alumni.degree === filterByDegree : true)
      )
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("signed-in-user") !== "")
        setSignedInUser(
          JSON.parse(window.localStorage.getItem("signed-in-user") as string)
        );
  }, []);

  return (
    <section className="bg-white min-w-full flex flex-col min-h-screen">
      <div className="min-w-full flex flex-col gap-8 p-8 lg:p-24 h-full">
        <div className="w-full justify-center flex flex-col gap-3">
          <h2 className="text-[2.5rem] text-indigo-500 lg:text-[3rem] font-black mb-3 leading-none">
            Alumnibase
          </h2>

          <div className="flex flex-col gap-7 md:flex-row justify-between h-full items-center">
            <div className="flex flex-col">
              <span className="text-lg">Hello, {signedInUser?.name}!</span>
              <span className="text-lg">
                Welcome to the KGEC Alumnibase. Here you can view the details of
                our alumni.
              </span>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full gap-3 items-end justify-between">
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Serach for an alumni..."
              value={searchQuery || ""}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                search(e.target.value);
              }}
            />
            <div className="flex w-full gap-3 lg:flex-row flex-col">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="filter-by" className="text-sm">
                  Filter by department
                </label>
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  onChange={(e) => {
                    setFilterByDepartment(e.target.value);
                    if (e.target.value === "all") {
                      setFilteredAlumniList(
                        alumniList.filter(
                          (alumni) =>
                            (searchQuery
                              ? Array.from(Object.values(alumni)).some(
                                  (value) =>
                                    value
                                      .toString()
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase())
                                )
                              : true) &&
                            (filterByDegree !== "all"
                              ? alumni.degree === filterByDegree
                              : true)
                        )
                      );
                    } else {
                      setFilteredAlumniList(
                        alumniList.filter(
                          (alumni) =>
                            alumni.department.toLowerCase() ===
                              e.target.value.toLowerCase() &&
                            (searchQuery
                              ? Array.from(Object.values(alumni)).some(
                                  (value) =>
                                    value
                                      .toString()
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase())
                                )
                              : true) &&
                            (filterByDegree !== "all"
                              ? alumni.degree === filterByDegree
                              : true)
                        )
                      );
                    }
                  }}
                  defaultValue={"all"}
                >
                  <option value="all">All</option>
                  {DEPARTMENTS.map((department, i) => (
                    <option value={department} key={i}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="filter-by" className="text-sm">
                  Filter by degree
                </label>
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  onChange={(e) => {
                    setFilterByDegree(e.target.value);
                    if (e.target.value === "all") {
                      setFilteredAlumniList(
                        alumniList.filter(
                          (alumni) =>
                            (searchQuery
                              ? Array.from(Object.values(alumni)).some(
                                  (value) =>
                                    value
                                      .toString()
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase())
                                )
                              : true) &&
                            (filterByDepartment !== "all"
                              ? alumni.department === filterByDepartment
                              : true)
                        )
                      );
                    } else {
                      setFilteredAlumniList(
                        alumniList.filter(
                          (alumni) =>
                            alumni.degree.toLowerCase() ===
                              e.target.value.toLowerCase() &&
                            (searchQuery
                              ? Array.from(Object.values(alumni)).some(
                                  (value) =>
                                    value
                                      .toString()
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase())
                                )
                              : true) &&
                            (filterByDepartment !== "all"
                              ? alumni.department === filterByDepartment
                              : true)
                        )
                      );
                    }
                  }}
                  defaultValue={"all"}
                >
                  <option value="all">All</option>
                  {DEGREES.map((degree, i) => (
                    <option value={degree} key={i}>
                      {degree}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredAlumniList && (
            <div className="grid grid-cols-1 w-full md:grid-cols-3 lg:grid-cols-4 justify-around gap-3">
              {filteredAlumniList.map((alumni: Alumni, idx: number) => (
                <AlumniCard key={alumni.id} alumni={alumni} />
              ))}
            </div>
          )}
          {filteredAlumniList.length === 0 && (
            <div className="flex flex-col gap-2 leading-none items-center justify-center">
              <h2 className="text-2xl text-indigo-500 font-semibold">
                No results found!
              </h2>
              <p className="text-lg text-gray-500">
                Try changing the search query or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AlumniBase;
