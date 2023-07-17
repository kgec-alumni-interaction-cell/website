import { PropsWithChildren } from "react";
import Navbar from "./navbar";

type Props = PropsWithChildren<{}>;

function Layout({ children }: Props) {
  return (
    <main className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
