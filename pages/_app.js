import { ThemeProvider } from "@/lib/ThemeContext";
import "../styles/globals.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{`
          html {
            font-family: ${notoSansKR.style.fontFamily};
          }
        `}</style>
        <title>WATCHIT</title>
      </Head>
      <ThemeProvider>
        <Header />
        <Container page>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
