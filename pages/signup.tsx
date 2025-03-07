import { Formik, Form, FormikHelpers } from "formik";
import { signUpSchema } from "@/schemas";
import { nunito } from "@/fonts";
import Input from "@/components/common/Input";
import AuthButton from "@/components/common/AuthButton";
import logo from "@/public/icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaUser } from "react-icons/fa6";
import { Mail, Phone, Eye, EyeOff } from "lucide-react";
import { SignUpInitialValues } from "@/interfaces";
import { useState } from "react";

function Signup() {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Signup form initial values
  const initialValues: SignUpInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  };

  //Function to handle form submission
  const handelSubmit = (
    values: SignUpInitialValues,
    action: FormikHelpers<SignUpInitialValues>
  ) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <section className={`${nunito.className}`}>
        <div className="mt-3 ml-3">
          <Link href="/">
            <Image
              src={logo}
              alt="ukulima logo"
              className="w-9 h-9 sm:w-12 sm:h-12"
            />
          </Link>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={handelSubmit}
        >
          <Form className="w-11/12 max-w-4xl mx-auto">
            <div className="max-w-md mx-auto space-x-3 text-center mb-6">
              <h2 className="text-lime-green font-bold text-xl md:text-3xl">
                Create account
              </h2>
              <p className="text-[#8E8E90]">Register here</p>
            </div>

            <div className="grid md:grid-cols-2 md:gap-5">
              <Input
                type="text"
                Icon={FaUser}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                type="text"
                Icon={FaUser}
                name="lastName"
                placeholder="Last Name"
              />
            </div>

            <Input type="email" Icon={Mail} name="email" placeholder="Email" />
            <Input type="text" Icon={Phone} name="phone" placeholder="Phone" />
            <Input
              type={showPassword ? "text" : "password"}
              Icon={showPassword ? Eye : EyeOff}
              name="password"
              placeholder="Password"
              togglePassword={togglePassword}
            />

            <div className="mt-18  text-center">
              <AuthButton moreStyles="px-30 py-3">Sign up</AuthButton>

              <div className="space-x-4 mt-5">
                <p className="text-black/50">
                  Already have an acoount? &nbsp;
                  <Link
                    href="/login"
                    className="text-lime-green hover:underline"
                  >
                    Log in
                  </Link>
                </p>
                <p className="text-sm text-lime-green">
                  copyright {new Date().getFullYear()}, All rights reserved.
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </section>
    </>
  );
}

export default Signup;
