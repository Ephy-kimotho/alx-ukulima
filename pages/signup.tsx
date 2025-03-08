import { Formik, Form, FormikHelpers } from "formik";
import { signUpSchema } from "@/schemas";
import { nunito } from "@/fonts";
import { FaUser } from "react-icons/fa6";
import { Mail, Phone, Eye, EyeOff, TriangleAlert } from "lucide-react";
import { SignUpInitialValues, User } from "@/interfaces";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/router";
import Input from "@/components/common/Input";
import AuthButton from "@/components/common/AuthButton";
import logo from "@/public/icons/logo.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

function Signup() {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { setUser } = useAuth();

  // Function to toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Signup form initial values
  const initialValues: SignUpInitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  };

  //Function to handle form submission
  const handelSubmit = async (
    values: SignUpInitialValues,
    action: FormikHelpers<SignUpInitialValues>
  ) => {
    try {
      const { data } = await axios.post<User>("/api/signup", values);
      setUser(data);

      toast.success("Account created successfully");
      router.push("/login");
      action.resetForm();

    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.data.email || err.response?.data.phone) {
          toast.custom(
            <div className="text-[#FF8000] w-[70%] max-w-52 p-4 rounded-2xl text-sm bg-white flex gap-3 items-center justify-center border shadow">
              <TriangleAlert size={24} color="#FF8000" strokeWidth={1.25} />
              <span>User already exists</span>
            </div>
          );
        } else {
          toast.error("An error occured, please try again.");
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <section className={`${nunito.className}`}>
        <Toaster position="top-center" />
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
                name="first_name"
                placeholder="First Name"
              />
              <Input
                type="text"
                Icon={FaUser}
                name="last_name"
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
