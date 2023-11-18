import Layout from "@/components/layout";
// import { useSession, signIn } from "next-auth/react";
import AlumniBase from "./AlumniBase";
import AlumniBaseInfo from "./AlumniBaseInfo";
import Alumni from "@/types/types";

export async function getServerSideProps() {
  const res = await fetch(
    "https://kgec-alumni-website.vercel.app/api/alumni/list"
  );
  const alumniList = await res.json();
  return {
    props: {
      alumniList,
    },
  };
}

interface Props {
  alumniList: Alumni[];
}

function AlumiBase({ alumniList }: Props) {
  // const { data: session } = useSession();
  const session = 0

  // This is shown if not logged in
  if (!session)
    return (
      <Layout>
        <AlumniBaseInfo />
      </Layout>
    );

  if (session)
    return (
      <Layout>
        <AlumniBase alumniList={alumniList || ([] as Alumni[])} />
      </Layout>
    );
}

export default AlumiBase;
