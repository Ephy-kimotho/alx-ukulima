import Layout from "@/layout/Layout";
import type { ReactElement } from "react";
import Landing from "@/components/home/Landing";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

function Home() {
  return (
    <section>
      <Landing />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
    </section>
  );
}

Home.getLayout = (page: ReactElement) => (
  <Layout title="Ukulima">{page}</Layout>
);

export default Home;
