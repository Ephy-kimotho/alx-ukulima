/* eslint-disable @typescript-eslint/no-empty-object-type */
import "@/styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from "next/app";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  /* 
  We retrieve the getLayout function if it's defined on the current component being displayed otherwise we render the page as it is.
*/
  const getLayout = Component.getLayout ?? ((page) => page)


  return getLayout(<Component {...pageProps}/>)
}
