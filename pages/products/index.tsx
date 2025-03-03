import Layout from "@/layout/Layout";
import type { ReactElement } from "react";

function Products() {
  return (
    <section>
      <p>This is the products page</p>
    </section>
  );
}

Products.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Products;
