import "@/styles/globals.css";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next Template</title>
      </Head>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
