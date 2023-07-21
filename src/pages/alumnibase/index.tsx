import Layout from "@/components/layout";

function AlumiBase() {
  return (
    <Layout>
      <section className="">
        <div className="min-w-full flex flex-col p-8 lg:p-24 pb-0 lg:pb-0 h-full">
          <p className="text-sm">Catch up with KGEC alumni,</p>
          <p className="text-sm">See where they currently work,</p>
          <p className="text-sm">what they are doing, what they have accomplished</p>
          <p className="text-sm">and much more</p>
        </div>
      </section>
    </Layout>
  );
}

export default AlumiBase;
