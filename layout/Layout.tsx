import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <Header />
      <main className="min-h-screen  text-white">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
