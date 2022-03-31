import { useRouter } from "next/router";

import markdownToHtml from "../helpers/remark";
import { getAllPosts, getPostBySlug } from "../helpers/api";

import ArrowLeft from "../../public/images/arrow-left.svg";

import s from "../../styles/BlogPost.module.scss";

const Post = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <div className={s.hero}>
        <div className={s["hero-wrapper"]}>
          <button className={s["hero-button"]} onClick={() => router.back()}>
            <ArrowLeft />
          </button>
        </div>

        <h1 className={s.title}>{post.title}</h1>

        <div
          className={s["hero-image"]}
          style={{ backgroundImage: `url(${post.cover_image})` }}
        />
      </div>
      <main className={s.body}>
        <small className={s.date}>{post.date}</small>

        <div
          className={s.text}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </main>
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "cover_image",
    "credit_image",
    "credit_image_author",
    "content",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}