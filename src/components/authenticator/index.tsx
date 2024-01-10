import { Dispatch, SetStateAction, useEffect } from "react";

function Authenticator({
  token,
  setToken,
}: {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}) {
  useEffect(() => {
    if (typeof window !== "undefined")
      setToken(window.localStorage.getItem("alumni-admin-token") as string);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-start items-start w-full py-5 gap-3">
      <input
        name="token"
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
  );
}

export default Authenticator;
