import Layout from "@/components/layout";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

interface FormType {
  name: string;
  email: string;
  waNum: string;
  linkedin: string;
  password: string;
  degree: string;
  department: string;
  alumni: boolean;
  gradYr: number;
  proofOfGrad: string;
  currWorkplace: string;
  image: string;
}

const DEGREES = ["B.Tech", "M.Tech", "MCA"];

const BTECH_DEPARTMENTS = [
  "Computer Science and Engineering",
  "Electronics and Communication Engineering",
  "Information Technology",
  "Mechanical Engineering",
  "Electrical Engineering",
];

const MTECH_DEPARTMENTS = [
  "Computer Science and Engineering",
  "Electronics and Communication Engineering",
  "Information Technology",
  "Production Engineering",
  "Electrical Engineering",
];

const MCA_DEPARTMENTS = ["Master of Computer Application"];

function Register() {
  const [registered, setRegistered] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    let formObj: FormType = {} as FormType;
    formObj.name = formData.name as string;
    formObj.email = formData.email as string;
    formObj.waNum = formData.waNum as string;
    formObj.linkedin = formData.linkedin as string;
    formObj.password = formData.password as string;
    formObj.degree = formData.degree as string;
    formObj.department = formData.department as string;
    // formObj.alumni = formData.alumni as unknown as boolean;
    formObj.gradYr = parseInt(formData.gradYr as string);
    formObj.proofOfGrad = formData.proofOfGrad as string;
    formObj.currWorkplace = formData.currWorkplace as string;
    formObj.image = "";
    if (formData.alumni) formObj.alumni = true;
    else formObj.alumni = false;

    console.log(formObj);

    const response = await fetch(
      "https://kgec-alumni-backend.onrender.com/users/register",
      {
        method: "POST",
        body: JSON.stringify(formObj),
      }
    );

    console.log(response);

    if (response.status === 200) {
      if (typeof window !== "undefined") {
        setRegistered(true)
      }
    }
  }

  const [graduated, setGraduated] = useState<boolean>(false);
  const [degree, setDegree] = useState<string>("B.Tech");
  const [proofOfGrad, setProofOfGrad] = useState<string>("");

  const [signedInUser, setSignedInUser] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("signed-in-user") !== "")
        setSignedInUser(
          window.localStorage.getItem("signed-in-user") as string
        );
  }, []);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-violet-500 via-indigo-500 to-indigo-600 min-w-full flex flex-col">
        <div className="min-w-full flex flex-col gap-8 p-12 px-8 lg:p-24 h-full">
          <div className="flex min-h-full flex-col justify-center px-6 pb-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-yellow-300">
                Register into the KGEC Alumni Portal
              </h2>
            </div>

            {signedInUser ? (
              <div className="mt-10 text-center text-xl leading-9 tracking-tight text-zinc-100">
                You are already signed in. Log out to register again
              </div>
            ) : registered ? (
              <div className="mt-10 text-center text-xl leading-9 tracking-tight text-zinc-100">
                Your application has been sent for verification! Once verified, you may <Link
                    href="/login"
                    className="pl-1 font-semibold leading-6 text-yellow-300 hover:text-yellow-200"
                  >
                    Log In
                  </Link> with your credentials.
              </div>
            ) : (
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block 
                    Labels 9
                    Milestones 0
                    text-sm font-medium leading-6 text-yellow-300"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        name="name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-yellow-300"
                    >
                      E-mail Address
                    </label>
                    <div className="mt-2">
                      <input
                        name="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="waNum"
                      className="block text-sm font-medium leading-6 text-yellow-300"
                    >
                      WhatsApp Number
                    </label>
                    <div className="mt-2">
                      <input
                        name="waNum"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium leading-6 text-yellow-300"
                    >
                      LinkedIn Profile URL
                    </label>
                    <div className="mt-2">
                      <input
                        name="linkedin"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-yellow-300"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        name="password"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 md:flex-row w-full">
                    <div className="flex flex-col">
                      <label
                        htmlFor="degree"
                        className="block text-sm font-medium leading-6 text-yellow-300"
                      >
                        Degree
                      </label>
                      <div className="mt-2">
                        <select
                          name="degree"
                          value={degree}
                          onChange={(e) => setDegree(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                          {DEGREES.map((degree) => (
                            <option key={degree} value={degree}>{degree}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="department"
                        className="block text-sm font-medium leading-6 text-yellow-300"
                      >
                        Department
                      </label>
                      <div className="mt-2">
                        <select name="department" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {(degree === "B.Tech"
                            ? BTECH_DEPARTMENTS
                            : degree === "M.Tech"
                            ? MTECH_DEPARTMENTS
                            : degree === "MCA"
                            ? MCA_DEPARTMENTS
                            : []
                          ).map((dept) => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  

                   <label className="block text-sm font-medium leading-6 text-yellow-300">
                    <input
                      name="alumni"
                      type="checkbox"
                      onChange={() => {
                        setGraduated((prev) => !prev);
                      }}
                    />{" "}
                    I am an Alumni
                  </label>

                  {!graduated ? (
                    // <div className="flex gap-2">
                    //   <div>
                    //     <label
                    //       htmlFor="gradYr"
                    //       className="block text-sm font-medium leading-6 text-yellow-300"
                    //     >
                    //       Expected Year of Graduation
                    //     </label>
                    //     <input
                    //       name="gradYr"
                    //       required
                    //       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    //     />
                    //   </div>
                    // </div>

                    <div className="flex gap-2 flex-col md:flex-row">
                        <div>
                          <label
                            htmlFor="gradYr"
                            className="block text-sm font-medium leading-6 text-yellow-300"
                          >
                            Year of Graduation
                          </label>
                          <input
                            name="gradYr"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="proofOfGrad"
                            className="block text-sm font-medium leading-6 text-yellow-300"
                          >
                            Document of Proof
                          </label>
                          <input
                            name="proofOfGrad"
                            placeholder="Enter Google Drive link ONLY..."
                            required
                            value={proofOfGrad}
                            onChange={e => setProofOfGrad(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                  ) : (
                    <></>
                  )}

                 

                  {graduated ? (
                    <>
                      <div className="flex gap-2 flex-col md:flex-row">
                        <div>
                          <label
                            htmlFor="gradYr"
                            className="block text-sm font-medium leading-6 text-yellow-300"
                          >
                            Year Graduated
                          </label>
                          <input
                            name="gradYr"
                            required
                            className="block w-full md:w-28 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="proofOfGrad"
                            className="block text-sm font-medium leading-6 text-yellow-300"
                          >
                            Document of Proof
                          </label>
                          <input
                            name="proofOfGrad"
                            placeholder="Enter Google Drive link ONLY..."
                            required
                            value={proofOfGrad}
                            onChange={e => setProofOfGrad(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="currWorkplace"
                          className="block text-sm font-medium leading-6 text-yellow-300"
                        >
                          Current Professional Status
                        </label>
                        <div className="mt-2">
                          <input
                            name="currWorkplace"
                            required
                            placeholder="Company with position, student, etc"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={proofOfGrad === ""}
                      className="disabled:bg-zinc-400 flex w-full justify-center rounded-md  bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit for Verification
                    </button>
                  </div>
                </form>

                {/* <span className="mt-10 text-center text-sm text-white">
                {signedInUser && (
                  <>
                  Registered successfuly!
                  <Link href="/login">Now Log In</Link>
                  </>
                   )}
              </span> */}

                <p className="mt-10 text-center text-sm text-white">
                  Already have an account?
                  <Link
                    href="/login"
                    className="pl-1 font-semibold leading-6 text-yellow-300 hover:text-yellow-200"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Register;
