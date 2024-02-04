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

        <title>KGEC Alumni Interaction Cell Website</title>
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
