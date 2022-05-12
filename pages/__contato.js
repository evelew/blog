import Head from "next/head";

// import ArrowRight from "../public/images/arrow-right.svg";

import s from "../styles/Contact.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contato | E. Lima - Frontend Developer</title>
        <meta name="description" content="Evellyn Lima - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={s.container}>
          <h1>Onde me encontrar:</h1>

          <div>
            <a href="#">github</a>
            <a href="#">linkedin</a>
            <a href="#">twitter</a>
          </div>
        </section>
      </main>
    </>
  );
}
