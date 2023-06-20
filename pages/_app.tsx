import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react';
import { NextPage } from "next";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {

  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return getLayout(
    <Component {...pageProps} />
)}
