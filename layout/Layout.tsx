import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="relative">
        <Header />
        <main className="min-h-screen  text-white">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
