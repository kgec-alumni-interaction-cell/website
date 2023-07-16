import HomeHero from "@/components/home/hero";
import HomeAbout from "@/components/home/about";
import HomeMNV from "@/components/home/mnv";
import HomeContact from "@/components/home/contact";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col">
      <div className="h-12 p-2 bg-zinc-400 flex justify-between items-center sticky top-0">
        <p>navbar</p>
      </div>
      <HomeHero />
      <HomeAbout />
      <HomeMNV />
      <HomeContact />
    </main>
  );
}
