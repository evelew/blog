import { useRouter } from "next/router";

import Header from "./components/header";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isBlogPost = router.asPath.includes("/post/");

  return (
    <>
      {!isBlogPost && <Header />}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
