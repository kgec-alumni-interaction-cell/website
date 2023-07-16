/* eslint-disable @next/next/no-img-element */
export default function HomeHero() {
  return (
    <section className="h-[calc(100vh-12px)] bg-sky-100 min-w-full flex flex-col">
      <div className="min-w-full flex lg:flex-row flex-col p-12 lg:p-24 pb-0 lg:pb-0 h-full">
        <div className="w-full lg:w-[60%] flex flex-col gap-8 justify-center h-full">
          <h2 className="text-[3rem] lg:text-[4rem] leading-[1.1] font-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium sequi consequuntur eius tenetur hic, tempore quas illo
            numquam veritatis id.
          </p>
          <div className="flex justify-start gap-12 lg:gap-24 mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-3xl">80+</h2>
              <p>lorem</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-3xl">40+</h2>
              <p>ipsum</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-3xl">70+</h2>
              <p>dolor</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] hidden lg:block">
          <img
            src="/hero-image.png"
            alt="hero image"
            className="object-fill w-[900] h-[900]"
          />
        </div>
      </div>
      <div className="bg-amber-100 h-full flex justify-center items-center">
        <p className="text-lg lg:text-3xl font-semibold">Lorem ipsum, dolor sit amet </p>
      </div>
    </section>
  );
}
