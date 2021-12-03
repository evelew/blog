import Head from "next/head";
import Link from "next/link";

import ArrowRight from "../public/images/arrow-right.svg";

import s from "../styles/Blog.module.scss";

export default function Home() {
  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1638292596909-5174a9f6ec11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
      date: "September 27, 2021",
      href: "/blog/post",
      title: "Criando atalhos para os comandos do git",
      description:
        "A vida é curta demais pra ficar digitando comandos longos ⌨️",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638292596909-5174a9f6ec11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
      date: "September 27, 2021",
      href: "/blog/post",
      title: "Criando atalhos para os comandos do git",
      description:
        "A vida é curta demais pra ficar digitando comandos longos ⌨️",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638292596909-5174a9f6ec11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
      date: "September 27, 2021",
      href: "/blog/post",
      title: "Criando atalhos para os comandos do git",
      description:
        "A vida é curta demais pra ficar digitando comandos longos ⌨️",
    },
  ];
  return (
    <>
      <Head>
        <title>Blog | E. Lima - Frontend Developer</title>
        <meta name="description" content="Evellyn Lima - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={s.top}>
          <p>
            Eu sou a Evellyn Lima, desenvolvedora web [por acaso] desde 2014 e a
            favor de JS sem ponto e vírgula.
          </p>

          <div className={s.links}>
            <a href="https://twitter.com/eveleww" target="_blank">
              twitter
            </a>
            <a href="https://www.linkedin.com/in/evellyn-lima/" target="_blank">
              linkedin
            </a>
          </div>
        </section>

        <section className={s.posts}>
          <div className={s["wrapper-posts"]}>
            <h1 className={s["posts-title"]}>todos os posts</h1>
            <ul className={s.list}>
              {posts.map((post, i) => (
                <li className={s.post} key={`posts-${i}`}>
                  <Link href={post.href}>
                    <a className={s["text-wrapper"]}>
                      <div>
                        <h3 className={s.title}>{post.title}</h3>
                        <small className={s.date}>{post.date}</small>
                        <p className={s.description}>{post.description}</p>
                      </div>

                      <div className={s.arrow}>
                        <ArrowRight />
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
