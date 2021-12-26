import Head from "next/head";
import Link from "next/link";

import ArrowRight from "../public/images/arrow-right.svg";

import { getAllPosts } from "./helpers/api";
import getPostUrl from "./helpers/getPostUrl";

import s from "../styles/Blog.module.scss";

export default function Home({ posts }) {
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
            <a
              href="https://twitter.com/eveleww"
              target="_blank"
              rel="noreferrer"
            >
              twitter
            </a>
            <a
              href="https://www.linkedin.com/in/evellyn-lima/"
              target="_blank"
              rel="noreferrer"
            >
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
                  <Link href={getPostUrl(post.slug)}>
                    <a className={s["text-wrapper"]}>
                      <div className={s["text-info"]}>
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

export async function getStaticProps() {
  const posts = getAllPosts(["title", "description", "date", "slug"]);
  return {
    props: { posts },
  };
}
