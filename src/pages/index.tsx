import HomeHero from "@/components/home/hero";
import HomeAbout from "@/components/home/about";
import HomeMNV from "@/components/home/mnv";
import HomeContact from "@/components/home/contact";
import Layout from "@/components/layout";
import HomeNotices from "@/components/home/notices";

export default function Home() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col gap-32 bg-zinc-50 pb-6 md:pb-8 lg:pb-24">
        <HomeHero />
        <HomeAbout />
        <HomeMNV />
        <HomeNotices />
        <HomeContact />
      </section>
    </Layout>
  );
}
