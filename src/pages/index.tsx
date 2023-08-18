import HomeHero from "@/components/home/hero";
import HomeAbout from "@/components/home/about";
import HomeMNV from "@/components/home/mnv";
import HomeContact from "@/components/home/contact";
import Layout from "@/components/layout";
import HomeNotices from "@/components/home/notices";

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <HomeAbout />
      <HomeMNV />
      <HomeNotices />
      <HomeContact />
    </Layout>
  );
}
