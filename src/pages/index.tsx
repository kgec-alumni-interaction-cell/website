import HomeHero from "@/components/home/hero";
import HomeAbout from "@/components/home/about";
import HomeMNV from "@/components/home/mnv";
import HomeContact from "@/components/home/contact";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeMNV />
      <HomeContact />
    </Layout>
  );
}
