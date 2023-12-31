import React from "react";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/layout";

const users = [
  {
    id: "0",
    name: "Deba",
    email: "asafdsf",
    image: "/android-chrome-384x384.png",
    alumni: true,
    gradYr: "2026",
    proofOfGrad: "https://www.google.com",
    currWorkplace: "KGEC",
    token: "",
    password: "",
  },
  {
    id: "1",
    name: "Debamrita Paul",
    email: "imdeba",
    image: "/android-chrome-384x384.png",
    alumni: true,
    gradYr: "2026",
    proofOfGrad: "",
    currWorkplace: "KGEC",
    token: "",
    password: "",
  },
];

function Verify() {
  return (
    <Layout>
      <ul className="grid grid-cols-2 gap-0 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="">
          <a
            href="#"
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          >
            Students
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Alumnies
          </a>
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
          {users.map((user) => {
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
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Gratuaion Year: {user.gradYr}</p>
                    {user.alumni && (
                      <p>Current Working Space: {user.currWorkplace}</p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    <a href={user.proofOfGrad} target="_blank">
                      Verify
                    </a>
                  </button>
                  <button
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
