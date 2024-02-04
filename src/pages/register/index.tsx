/* eslint-disable @next/next/no-img-element */
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
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async (image: File, name: string) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "kgecalumnisite");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/diisii1kl/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.secure_url) {
      return data.secure_url;
    }

    // use ui-avatar for backup
    return `https://ui-avatars.com/api/?name=${name}&background=random&rounded=true&color=fff&size=256`;
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    const imageURL = await uploadImage(avatar!, formData.name as string);
    console.log(formData);
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
    formObj.image = imageURL;
    if (formData.alumni) formObj.alumni = true;
    else formObj.alumni = false;

    console.log(formObj);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ROUTE}/users/register`,
      {
        method: "POST",
        body: JSON.stringify(formObj),
      }
    );

    console.log(response);

    if (response.status === 200) {
      if (typeof window !== "undefined") {
        setRegistered(true);
        setLoading(false);
      }
    }

    setLoading(false);
  }

  const [graduated, setGraduated] = useState<boolean>(false);
  const [degree, setDegree] = useState<string>("B.Tech");
  const [proofOfGrad, setProofOfGrad] = useState<string>("");

  const [signedInUser, setSignedInUser] = useState<string>("");
  const [avatar, setAvatar] = useState<File | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("signed-in-user") !== "")
        setSignedInUser(
          window.localStorage.getItem("signed-in-user") as string
        );
  }, []);

  return (
    <Layout>
      <section className="bg-white min-w-full flex justify-center w-full h-[calc(100vh-12px)]">
        <div className="w-full overflow-y-scroll flex flex-col justify-start items-center gap-8 p-12 px-8 lg:p-24 max-h-full">
          <h2 className="text-[2.5rem] text-indigo-700 lg:text-[3rem] font-black mb-0 leading-none">
            Register into the KGEC Alumni Portal
          </h2>

          <span className="leading-9 tracking-tight">
            Fill in the fields below and send your alumni or student application
            to be verified. The more accurate information you provide, the
            better the chances of being verified!
          </span>

          {signedInUser ? (
            <div className="mt-10 text-center text-xl leading-9 tracking-tight">
              You are already signed in. Log out to register again
            </div>
          ) : registered ? (
            <div className="mt-10 text-center text-xl leading-9 tracking-tight">
              Your application has been sent for verification! Once verified,
              you may{" "}
              <Link
                href="/login"
                className="pl-1 font-semibold leading-6 text-sky-400 hover:text-sky-500"
              >
                Log In
              </Link>{" "}
              with your credentials.
            </div>
          ) : (
            <div className="w-full">
              <form className="space-y-3" onSubmit={onSubmit}>
                <div className="bg-gray-200 rounded-full relative flex items-center justify-center text-gray-500 w-24 h-24">
                  <input
                    type="file"
                    name="image"
                    className="w-full h-full absolute opacity-0"
                    accept="image/*"
                    onChange={(e) => {
                      setAvatar(e.target.files![0]);
                    }}
                  />
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="Profile Image"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="13" r="3" />
                        <path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697c0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" />
                        <path stroke-linecap="round" d="M19 10h-1" />
                      </g>
                    </svg>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block 
                    Labels 9
                    Milestones 0
                    text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      name="name"
                      required
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    E-mail Address
                  </label>
                  <div className="mt-1">
                    <input
                      name="email"
                      required
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="waNum"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    WhatsApp Number
                  </label>
                  <div className="mt-1">
                    <input
                      name="waNum"
                      required
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      placeholder="Enter your WhatsApp number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    LinkedIn Profile URL
                  </label>
                  <div className="mt-1">
                    <input
                      name="linkedin"
                      type="url"
                      required
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      placeholder="Enter your LinkedIn profile URL"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:flex-row w-full">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="degree"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Degree
                    </label>
                    <div className="mt-1">
                      <select
                        name="degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      >
                        {DEGREES.map((degree) => (
                          <option key={degree} value={degree}>
                            {degree}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Department
                    </label>
                    <div className="mt-1">
                      <select
                        name="department"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      >
                        {(degree === "B.Tech"
                          ? BTECH_DEPARTMENTS
                          : degree === "M.Tech"
                          ? MTECH_DEPARTMENTS
                          : degree === "MCA"
                          ? MCA_DEPARTMENTS
                          : []
                        ).map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <label className="text-sm font-medium leading-6 flex items-center gap-1 text-gray-900">
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

                  <div className="flex gap-3 flex-col md:flex-row">
                    <div>
                      <label
                        htmlFor="gradYr"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Year of Graduation
                      </label>
                      <input
                        name="gradYr"
                        required
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                        placeholder="Enter your expected year of graduation"
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="proofOfGrad"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Document of Proof
                      </label>
                      <input
                        name="proofOfGrad"
                        type="url"
                        placeholder="Enter Google Drive link ONLY..."
                        required
                        value={proofOfGrad}
                        onChange={(e) => setProofOfGrad(e.target.value)}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {graduated ? (
                  <>
                    <div className="flex gap-3 flex-col md:flex-row">
                      <div>
                        <label
                          htmlFor="gradYr"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Year Graduated
                        </label>
                        <input
                          name="gradYr"
                          required
                          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                          placeholder="Enter your year of graduation"
                        />
                      </div>

                      <div className="w-full">
                        <label
                          htmlFor="proofOfGrad"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Document of Proof
                        </label>
                        <input
                          name="proofOfGrad"
                          placeholder="Enter Google Drive link ONLY..."
                          required
                          value={proofOfGrad}
                          onChange={(e) => setProofOfGrad(e.target.value)}
                          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="currWorkplace"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Current Professional Status
                      </label>
                      <div className="mt-2">
                        <input
                          name="currWorkplace"
                          required
                          placeholder="Company with position, student, etc"
                          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none focus:outline-none px-3 py-2"
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
                    disabled={proofOfGrad === "" || loading}
                    className="flex w-full justify-center rounded-md bg-indigo-300 hover:bg-indigo-400/80 px-3 py-2 text-sm font-semibold leading-6 text-zinc-800 shadow-sm duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Submit for Verification"}
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

              <p className="mt-8 text-center text-sm text-gray-900">
                Already have an account?
                <Link
                  href="/login"
                  className="pl-1 font-semibold leading-6 text-indigo-400 hover:text-indigo-500"
                >
                  Log In
                </Link>
              </p>
            </div>
          )}
        </div>
        <div className="hidden md:block w-full bg-[url('/old_campus.jpg')] bg-no-repeat bg-cover"></div>
      </section>
    </Layout>
  );
}

export default Register;
