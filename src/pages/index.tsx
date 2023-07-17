import HomeHero from "@/components/home/hero";
import HomeAbout from "@/components/home/about";
import HomeMNV from "@/components/home/mnv";
import HomeContact from "@/components/home/contact";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeMNV />
      <HomeContact />
    </main>
  );
}
