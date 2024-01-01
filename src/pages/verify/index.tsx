import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/layout";
import { Alumni, UserType } from "@/types/types";

export async function getServerSideProps() {
  const result_alumnis = await fetch(
    "https://kgec-alumni-backend.onrender.com/users/alumni"
  );
  const alumnis = await result_alumnis.json();
  const result_students = await fetch(
    "https://kgec-alumni-backend.onrender.com/users/students"
  );
  const students = await result_students.json();
  return {
    props: {
      alumnis,
      students,
    },
  };
}

interface Props {
  alumnis: UserType[];
  students: UserType[];
}

function Verify({ alumnis, students }: Props) {
  const [selectedTab, setSelectedTab] = useState<string>("student");
  const [token, setToken] = useState<string>("");

  return (
    <Layout>
      <h2 className="text-[2.5rem] px-10 text-indigo-500 lg:text-[3rem] font-black mb-0 leading-none">
        Verification Dashboard
      </h2>
      <div className="flex w-full px-10 items-center py-5 gap-3">
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter admin token"
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={() => {
            if (typeof window !== "undefined")
              window.localStorage.setItem("alumni-admin-token", token);
          }}
        >
          Save token
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-0 text-base font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="">
          <button
            onClick={() => {
              setSelectedTab("student");
            }}
            className={`inline-block p-4 rounded-t-lg  ${
              selectedTab == "student" && "bg-gray-800"
            } text-blue-500 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Students
          </button>
        </li>
        <li className="">
          <button
            onClick={() => {
              setSelectedTab("alumni");
            }}
            className={`inline-block p-4 rounded-t-lg ${
              selectedTab == "alumni" && "bg-gray-800"
            }  text-blue-500 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            Alumnis
          </button>
        </li>
      </ul>
      <table className="w-75 text-sm text-left text-gray-500 dark:text-gray-400 mx-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="w-50 px-6 py-3">
              Details
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {(selectedTab == "student" ? students : alumnis)
            .filter((user) => !user.verified)
            .map((user) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  key={user.id}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.id}
                  </td>
                  <td className="px-6 py-4 flex">
                    <div className="mr-4">
                      <Image
                        src={user.image}
                        width="75"
                        height="75"
                        alt="User Image"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300">Name: {user.name}</p>
                      <p>
                        Couse: {user.degree} - {user.department}
                      </p>
                      <p>Gratuaion Year: {user.gradYr}</p>
                      <p>Email: {user.email}</p>
                      <p>WhatsApp Number: {user.waNum}</p>

                      {user.alumni && (
                        <p>Current Working Space: {user.currWorkplace}</p>
                      )}
                      <a
                        href={user.linkedin}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-300"
                      >
                        Linked In
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={async () => {
                        const response = await fetch(
                          "https://kgec-alumni-backend.onrender.com/users/verify",
                          {
                            method: "POST",
                            body: JSON.stringify({
                              id: user.id,
                              token: token,
                            }),
                          }
                        );

                        window.location.reload();
                      }}
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      <a href={user.proofOfGrad} target="_blank">
                        Verify Document
                      </a>
                    </button>
                    <button
                      onClick={async () => {
                        const response = await fetch(
                          "https://kgec-alumni-backend.onrender.com/users/delete",
                          {
                            method: "POST",
                            body: JSON.stringify({
                              id: user.id,
                              token: token
                            }),
                          }
                        );

                        window.location.reload();
                      }}
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
}

export default Verify;
