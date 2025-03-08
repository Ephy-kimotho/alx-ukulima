import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import AuthProvider from "@/providers/AuthProvider";

function Layout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div className="relative">
        <AuthProvider>
          <Header />
          <main className="min-h-screen  text-white">{children}</main>
          <Footer />
        </AuthProvider>
      </div>
    </>
  );
}

export default Layout;
