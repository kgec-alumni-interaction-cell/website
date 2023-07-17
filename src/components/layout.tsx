import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = PropsWithChildren<{}>;

function Layout({ children }: Props) {
  return (
    <main className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
