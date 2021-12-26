import Head from "next/head";
import Link from "next/link";

import { getLastPosts } from "./helpers/api";
import getPostUrl from "./helpers/getPostUrl";

import s from "../styles/Home.module.scss";

export default function Home({ posts }) {
  const interests = [
    {
      icon: "",
      name: "Refatorar/otimizar soluções",
    },
    {
      icon: "",
      name: "Javascript & React",
    },
    {
      icon: "",
      name: "Assuntos relativos a liderança",
    },
  ];

  const getCurrentlyAge = () => {
    const today = new Date();
    const birthday = new Date("06-12-1995");
    return today.getFullYear() - birthday.getFullYear();
  };

  return (
    <>
      <Head>
        <title>E. Lima - Frontend Developer</title>
        <meta name="description" content="Evellyn Lima - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={s.hero}>
          <h1 className={s.title}>evellyn lima</h1>
          <h2 className={s.subtitle}>frontend developer</h2>
        </section>

        <section className={s.about}>
          <h2 className={s.title}>sobre mim</h2>

          <div className={s.text}>
            <p>
              Eu sou a Evellyn, tenho {getCurrentlyAge()} anos. Sou de Curitiba,
              mas agora tô morando em São Paulo.
            </p>

            <p>
              Eu trabalho com frontend desde 2014, já passei por algumas
              empresas com modelos e stacks diferentes e essas experiências hoje
              me ajudam a pensar em soluções diferentes para resolver problemas.
            </p>

            <p>
              Já trabalhei em projetos de hotsites, blogs, revistas digitais,
              redes sociais, empréstimos, finanças pessoais e projetos
              white-label. O que mais gosto de fazer é mexer com JS e
              refatorar/otimizar soluções.
            </p>
          </div>
        </section>

        <section className={s.interests}>
          <div className={s.wrapper}>
            <h2 className={s.title}>interesses</h2>

            <ul className={s.list}>
              {interests.map(({ name }, i) => (
                <li key={`interest-${i}`}>
                  <div className={s.image} />
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={s.posts}>
          <div className={s.top}>
            <h2 className={s.title}>posts mais recentes</h2>

            <Link href="/blog">
              <a className={s.button}>
                <span>ver todos</span>
              </a>
            </Link>
          </div>

          <ul className={s.list}>
            {posts.map((post, i) => (
              <li className={s.post} key={`posts-${i}`}>
                <Link href={getPostUrl(post.slug)}>
                  <a>
                    <div className={s.image}>
                      <img src={post["cover_image"]} alt="" />
                    </div>
                    <div className={s["text-wrapper"]}>
                      <small className={s.date}>{post.date}</small>
                      <h3 className={s.title}>{post.title}</h3>
                      <h4 className={s.description}>{post.description}</h4>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getLastPosts([
    "cover_image",
    "title",
    "description",
    "date",
    "slug",
  ]);

  return {
    props: { posts },
  };
}
