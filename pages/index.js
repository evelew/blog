import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E. Lima - Frontend Developer</title>
        <meta name="description" content="Evellyn Lima - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>evellyn lima</h1>
        <h2 className={styles.subtitle}>frontend developer</h2>
      </main>
    </div>
  );
}
