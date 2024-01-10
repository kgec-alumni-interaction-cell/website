import Authenticator from "@/components/authenticator";
import Layout from "@/components/layout";
import { useState } from "react";

function AddScholarship() {
  const [token, setToken] = useState<string>("");
  return (
    <Layout>
      <h2 className="text-[2.5rem] px-10 text-indigo-500 lg:text-[3rem] font-black mb-0 leading-none">
        Add Scholarship
      </h2>

      <Authenticator token={token} setToken={setToken} />


    </Layout>
  );
}

export default AddScholarship;
