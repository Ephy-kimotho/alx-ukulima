import Layout from "@/layout/Layout";
import type { ReactElement } from "react";
import Landing from "@/components/about/Landing";
import Vision from "@/components/about/Vision";
import Mission from "@/components/about/Mission";
import FAQ from "@/components/about/FAQ";

function About() {
  return (
    <section>
      <Landing />
      <Vision />
      <Mission />
      <FAQ />
    </section>
  );
}

About.getLayout = (page: ReactElement) => <Layout title="About">{page}</Layout>;

export default About;
