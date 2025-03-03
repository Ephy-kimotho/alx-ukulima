import { Html, Head, Main, NextScript } from "next/document";
import { mulish } from "@/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`"antialiased" ${mulish.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
