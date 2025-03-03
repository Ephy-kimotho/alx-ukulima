import Layout from "@/layout/Layout";
import type { ReactElement } from "react";

function Home() {
  return (
    <section>
      <p>This is the home page</p>
    </section>
  );
}

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
