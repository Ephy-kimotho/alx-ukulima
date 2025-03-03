import Layout from "@/layout/Layout";
import type { ReactElement } from "react";

function Contact() {
  return (
    <section>
      <p>This is the contact page</p>
    </section>
  );
}

Contact.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Contact;
