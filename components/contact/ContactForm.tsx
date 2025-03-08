import { Formik, Form, Field, FormikHelpers, FieldProps } from "formik";
import { ContactFormValues } from "@/interfaces";
import { contactFormSchema } from "@/schemas";
import AuthButton from "../common/AuthButton";

const initialValues: ContactFormValues = {
  first_name: "",
  email: "",
  message: "",
};

function ContactForm() {
  // Function to handle form submission
  const handleSubmit = (
    values: ContactFormValues,
    action: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <section className={`bg-[#f1f3f5] py-10 px-5`}>
      <div>
        <h3 className="text-moss-green text-4xl  md:text5-xl font-bold text-center">
          Contact Form
        </h3>
        <div className="w-[150px] h-1 bg-moss-green rounded mx-auto"></div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="p-6 md:p-8 rounded-3xl bg-[#D9D9D9]/60 w-11/12 max-w-3xl mx-auto mt-6">
          <Field name="first_name">
            {({ field, meta }: FieldProps) => (
              <div>
                <div
                  className={`border-2 ${
                    meta.touched && meta.error
                      ? "border-red-400"
                      : "border-night/60"
                  }  rounded-lg bg-white`}
                >
                  <input
                    type="text"
                    placeholder="Enter your first name."
                    className="bg-transparent py-3 pl-4 text-night placeholder:text-black placeholder:opacity-50 w-full outline-none text-lg"
                    {...field}
                  />
                </div>
                {meta.touched && meta.error && (
                  <p className="text-red-400 ml-4">{meta.error}</p>
                )}
              </div>
            )}
          </Field>

          <Field name="email">
            {({ field, meta }: FieldProps) => (
              <div>
                <div
                  className={`border-2 mt-6 ${
                    meta.touched && meta.error
                      ? "border-red-400"
                      : "border-night/60"
                  }  rounded-lg bg-white`}
                >
                  <input
                    type="email"
                    placeholder="Enter your email."
                    className="bg-transparent py-3 pl-4 text-night placeholder:text-black placeholder:opacity-50 w-full outline-none text-lg"
                    {...field}
                  />
                </div>
                {meta.touched && meta.error && (
                  <p className="text-red-400 ml-4">{meta.error}</p>
                )}
              </div>
            )}
          </Field>

          <Field name="message">
            {({ field, meta }: FieldProps) => (
              <div>
                <div
                  className={`border-2 mt-6 ${
                    meta.touched && meta.error
                      ? "border-red-400"
                      : "border-night/60"
                  }  rounded-lg bg-white`}
                >
                  <textarea
                    placeholder="Enter your email."
                    className="bg-transparent py-3 pl-4 text-night placeholder:text-black placeholder:opacity-50 w-full outline-none text-lg min-h-40"
                    {...field}
                  />
                </div>
                {meta.touched && meta.error && (
                  <p className="text-red-400 ml-4">{meta.error}</p>
                )}
              </div>
            )}
          </Field>

          <AuthButton moreStyles="capitalize  bg-moss-green hover:bg-lime-green mt-10 w-56 py-3 block mx-auto rounded-lg">
            Send message
          </AuthButton>
        </Form>
      </Formik>
    </section>
  );
}

export default ContactForm;
