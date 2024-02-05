import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

type Props = PropsWithChildren<{}>;

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="The Kalyani Government Engineering College Alumni Interaction Cell is a dynamic and thriving community of distinguished individuals who once graced the halls of Kalyani Government Engineering College (KGEC). As proud graduates, we are united by the shared experiences and memories of our time at KGEC. Our association aims to foster lifelong connections among alumni, promote professional growth, and contribute to the development of our beloved alma mater.

Our association is a beacon of unity and camaraderie, bringing together graduates from diverse disciplines and generations. We take immense pride in our shared experiences, accomplishments, and the values instilled in us during our time at KGEC."
        />
        <meta
          name="keywords"
          content="KGEC Alumni Interaction Cell,
    Kalyani Government Engineering College alumni,
    Alumni networking,
    Alumni engagement,
    Professional development,
    Mentorship,
    Lifelong connections,
    Knowledge exchange,
    Collaboration,
    Industry connections,
    Career growth,
    Alumni events,
    Alumni resources,
    Alumni community,
    KGEC alumni association"
        />
        <meta name="bots" content="index, follow" />

        <title>KGEC Alumni Interaction Cell</title>
      </Head>
      <main className="min-h-screen min-w-screen flex flex-col ">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
