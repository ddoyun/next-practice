import "@/styles/globals.css";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";

// 폰트 적용
// className으로 설정하면 전역으로 사용
// variable로 사용하면 직접 css 속성을 통해 지정하고 font-family에 적용
const NotoR = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
});
const NotoB = Noto_Sans_KR({
  weight: "700",
  subsets: ["latin"],
  variable: "--Noto-B",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next Template</title>
      </Head>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <main className={`${NotoR.className} ${NotoB.variable}`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
