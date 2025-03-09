/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/providers/AuthProvider";
import Layout from "@/layout/Layout";

function withAuth(WrappedComponent: ComponentType<any>) {
  return (props: any) => {
    const router = useRouter();
    const { token } = useAuth();
    const [isCheckingToken, setIsCheckingToken] = useState(true);

    useEffect(() => {
      if (token === null) {
        setIsCheckingToken(true);
      } else if (!token) {
        router.push("/login");
      } else {
        setIsCheckingToken(false);
      }
    }, [token, router]);

    if (isCheckingToken) {
      <div className="bg-[#f1f1f1] grid place-items-center  text-night font-bold text-3xl">
        <p>Validating User...</p>
      </div>;
    }

    return (
      <Layout title="ukulima">
        <WrappedComponent {...props} />
      </Layout>
    );
  };
}

export default withAuth;
