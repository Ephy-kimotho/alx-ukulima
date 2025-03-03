import Layout from "@/layout/Layout";
import type { ReactElement } from "react";

function About() {
  return (
    <section>
      <p>This is the about page</p>
    </section>
  );
}

About.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default About;
