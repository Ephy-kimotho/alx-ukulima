import Layout from "@/layout/Layout";
import type { ReactElement } from "react";
import Landing from "@/components/contact/Landing";
import ContactForm from "@/components/contact/ContactForm";

function Contact() {
  return (
    <section>
      <Landing />
      <ContactForm />
    </section>
  );
}

Contact.getLayout = (page: ReactElement) => (
  <Layout title="Contact">{page}</Layout>
);

export default Contact;
