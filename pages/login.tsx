import { Formik, Form, FormikHelpers } from "formik";
import { Mail, Eye, EyeOff, TriangleAlert } from "lucide-react";
import { nunito } from "@/fonts";
import { LoginInitialValues, LoginResponseData } from "@/interfaces";
import { loginSchema } from "@/schemas";
import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { BASE_URL } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/common/Input";
import AuthButton from "@/components/common/AuthButton";
import logo from "@/public/icons/logo.png";
import Head from "next/head";
import axios from "axios";

function Login() {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const { user, setToken } = useAuth();
  const router = useRouter();

  // Function to toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  //Login form initial values
  const initialValues: LoginInitialValues = {
    email: "",
    password: "",
  };

  //Function to handle form submission
  const handleSubmit = async (
    values: LoginInitialValues,
    action: FormikHelpers<LoginInitialValues>
  ) => {
    try {
      const { data } = await axios.post<LoginResponseData>(
        `${BASE_URL}/accounts/login-user/`,
        values,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      sessionStorage.setItem("token", JSON.stringify(data.access));

      setToken(data.access);
      toast.success("Login successfull");
      router.push("/");

      action.resetForm();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.non_field_errors;
        if (message) {
          toast.custom(
            <div className="text-[#FF8000] p-4 rounded-2xl text-base bg-white flex items-center  gap-3 justify-center border shadow">
              <TriangleAlert size={30} color="#FF8000" strokeWidth={1.25} />
              <span>{message}</span>
            </div>
          );
        } else {
          toast.error("An error occured, Please try again");
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <section className={`${nunito.className} flex min-h-screen`}>
        <Toaster position="top-center" />
        <div className="hidden md:flex bg-[url(@/public/images/farmImage.png)] bg-left-bottom bg-cover justify-center inset-shadow-translucent flex-1">
          <article className="space-y-12 text-white mt-28 text-center">
            <h2 className="font-bold text-4xl">Ukulima</h2>

            <div className="italic font-normal space-y-4 text-lg max-w-[350px]">
              <p>Empowering Farmers, Connecting Suppliers.</p>
              <p>
                -Your trusted marketplace for agricultural products and tools.
              </p>
            </div>
          </article>
        </div>

        <div className="flex-1">
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
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-11/12 max-w-2xl mx-auto min-h-[90vh]  relative">
              <div className="text-center mb-5">
                <h3 className="text-lime-green font-bold  capitalize text-3xl">
                  Welcome {user ? `back ${user.first_name}` : "Back"}
                </h3>
                <p className="text-[#8E8E90]  text-base">
                  Log in to your account
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <label
                  htmlFor="email"
                  className="text-lime-green  font-bold text-lg"
                >
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email."
                  Icon={Mail}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-lime-green  font-bold text-lg"
                >
                  Password
                </label>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  Icon={showPassword ? Eye : EyeOff}
                  placeholder="Enter your password."
                  togglePassword={togglePassword}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 space-y-4">
                <div className="text-center">
                  <AuthButton moreStyles="w-2/3 max-w-80 py-3">
                    Log in
                  </AuthButton>
                </div>

                <div className="text-center pb-5 text-sm space-y-2">
                  <p className="text-gray-400">
                    Don&apos;t have an account?
                    <Link
                      href="/signup"
                      className="text-lime-green hover:underline"
                    >
                      &nbsp;Sign up
                    </Link>
                  </p>
                  <p className="text-lime-green">
                    &copy;copyright {new Date().getFullYear()}, All rights
                    reserved.
                  </p>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
}

export default Login;
