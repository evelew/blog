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
      name: "JavaScript",
    },
    {
      icon: "",
      name: "Assuntos relativos a liderança",
    },
  ];

  const getCurrentlyAge = () => {
    const today = new Date();
    const birthday = new Date("12/06/1995");
    const isTheSameOrAfterMonth = today.getMonth() >= birthday.getMonth();
    const isTheSameOrAfterDay = today.getDate() >= birthday.getDate();

    if (isTheSameOrAfterMonth && isTheSameOrAfterDay) {
      return today.getFullYear() - birthday.getFullYear();
    } else {
      return today.getFullYear() - birthday.getFullYear() - 1;
    }
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
          <div>
            <h1 className={s.title}>evellyn lima</h1>
            <h2 className={s.subtitle}>frontend developer</h2>
          </div>

          <div className={s.image}>
            <img src="/images/evellyn-lima-illustration.svg" alt="" />

            <div className={s["arrow-illustration"]}>
              <svg
                width="197"
                height="145"
                viewBox="0 0 197 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M192.882 11.417C192.882 11.417 191.82 11.0897 189.696 10.4352C187.577 9.78061 185.037 9.09879 182.076 8.3897C179.115 7.67671 174.396 7.19748 167.921 6.95203C161.442 6.70657 154.501 6.86047 147.098 7.41372C139.696 7.97086 131.814 9.35788 123.453 11.5748C115.092 13.7956 106.392 17.0293 97.3527 21.2761C88.3176 25.5229 79.4774 30.8566 70.8319 37.2774C62.1903 43.6943 54.4059 50.8827 47.4786 58.8424C40.5552 66.8022 34.9214 75.7925 30.5772 85.8133C26.237 95.838 23.087 103.841 21.1272 109.821C19.1675 115.802 17.5097 121.069 16.1538 125.624C14.798 130.178 14.085 132.532 14.0148 132.684C13.9486 132.835 13.859 132.972 13.746 133.093C13.633 133.213 13.5045 133.315 13.3603 133.397C13.2161 133.474 13.0622 133.529 12.8986 133.56C12.735 133.587 12.5713 133.589 12.4077 133.566C12.2441 133.543 12.0882 133.492 11.9402 133.414C11.7921 133.34 11.6616 133.243 11.5486 133.122C11.4317 133.005 11.3382 132.872 11.2681 132.724C11.1941 132.572 11.1473 132.415 11.1278 132.251C11.1083 132.087 11.1161 131.924 11.1512 131.76C11.1824 131.6 11.2408 131.448 11.3265 131.304C11.4083 131.16 11.5116 131.034 11.6363 130.924C11.7609 130.815 11.8993 130.73 12.0512 130.667C12.2071 130.605 12.3668 130.568 12.5304 130.556C12.6941 130.545 12.8558 130.56 13.0155 130.603C13.1791 130.646 13.3291 130.712 13.4655 130.802C13.6058 130.891 13.7265 131.002 13.8278 131.135C13.9291 131.263 14.0071 131.406 14.0616 131.561C14.1162 131.717 14.1454 131.879 14.1493 132.047C14.1493 132.21 14.1239 132.372 14.0733 132.532C14.0226 132.687 13.9486 132.834 13.8512 132.97C13.7538 133.102 13.6369 133.215 13.5006 133.309C13.3642 133.402 13.2162 133.472 13.0564 133.519C12.8967 133.566 12.735 133.585 12.5713 133.578C12.4077 133.574 12.248 133.543 12.0921 133.484C11.9363 133.422 11.7941 133.338 11.6655 133.233C11.5408 133.128 11.4337 133.005 11.3441 132.865C11.2583 132.724 11.196 132.574 11.1571 132.415C11.1181 132.251 11.1064 132.087 11.122 131.924C11.1376 131.76 11.1454 131.678 11.1454 131.678C11.1454 131.678 11.6752 129.36 12.735 124.724C13.7947 120.091 14.9791 114.549 16.2882 108.097C17.5973 101.641 20.4532 93.0152 24.8558 82.2191C29.2584 71.4191 35.124 61.8444 42.4526 53.495C49.7773 45.1417 57.9786 37.6378 67.0565 30.9833C76.1306 24.3287 85.3995 18.8137 94.8631 14.4384C104.323 10.0631 113.457 6.74748 122.266 4.49163C131.076 2.23968 139.328 0.868246 147.022 0.377335C154.717 -0.109679 162.018 -0.125263 168.926 0.330582C175.834 0.790324 180.905 1.49357 184.139 2.44033C187.372 3.38319 189.946 4.42345 191.859 5.56112C193.764 6.69878 194.796 7.31437 194.956 7.40787C195.112 7.50138 195.254 7.61242 195.383 7.74099C195.511 7.86956 195.624 8.01177 195.722 8.16762C195.815 8.32346 195.889 8.48905 195.944 8.66437C195.998 8.8397 196.032 9.01697 196.043 9.19619C196.059 9.37541 196.049 9.55463 196.014 9.73385C195.983 9.91308 195.93 10.0865 195.856 10.254C195.782 10.4215 195.689 10.5774 195.576 10.7215C195.467 10.8657 195.34 10.9942 195.196 11.1072C195.052 11.2202 194.896 11.3157 194.728 11.3936C194.565 11.4676 194.393 11.5222 194.214 11.5572C194.035 11.5884 193.856 11.6001 193.676 11.5923C193.493 11.5806 193.314 11.5475 193.139 11.4929C192.967 11.4423 192.882 11.417 192.882 11.417Z"
                  fill="#49423D"
                />
                <path
                  d="M4.08561 107.904C4.08561 107.904 4.40314 108.424 5.03821 109.465C5.67717 110.509 6.23431 111.615 6.70964 112.784C7.18886 113.949 7.58042 115.439 7.88432 117.255C8.18822 119.07 8.4025 121.028 8.52718 123.128C8.65575 125.228 8.85835 127.455 9.13497 129.808C9.4077 132.161 9.69017 134.113 9.98238 135.664C10.2707 137.215 10.9661 137.633 12.0687 136.92C13.1713 136.204 14.3597 135.175 15.6337 133.835C16.9038 132.491 19.072 130.858 22.1383 128.937C25.2045 127.017 28.037 125.333 30.6357 123.888C33.2383 122.446 35.5506 121.215 37.5727 120.194C39.5948 119.174 41.2117 118.488 42.4234 118.137C43.639 117.791 44.7221 117.646 45.6727 117.705C46.6234 117.763 47.1786 117.773 47.3383 117.734C47.502 117.699 47.6656 117.687 47.8292 117.699C47.9929 117.715 48.1507 117.755 48.3026 117.822C48.4546 117.892 48.5929 117.981 48.7175 118.091C48.8383 118.204 48.9377 118.332 49.0156 118.476C49.0974 118.62 49.1539 118.774 49.1851 118.938C49.2124 119.102 49.2143 119.265 49.1909 119.429C49.1675 119.592 49.1188 119.748 49.0448 119.896C48.9669 120.044 48.8695 120.177 48.7526 120.294C48.6357 120.407 48.5013 120.5 48.3494 120.574C48.2013 120.644 48.0455 120.691 47.8818 120.715C47.7182 120.734 47.5546 120.728 47.3909 120.697C47.2273 120.662 47.0753 120.604 46.9351 120.522C46.7909 120.44 46.6643 120.337 46.5552 120.212C46.4461 120.087 46.3584 119.949 46.2922 119.797C46.2299 119.641 46.1929 119.481 46.1812 119.318C46.1695 119.154 46.1851 118.991 46.2279 118.827C46.2669 118.667 46.3331 118.519 46.4266 118.383C46.5162 118.242 46.6253 118.122 46.7539 118.02C46.8864 117.919 47.0305 117.839 47.1864 117.781C47.3422 117.726 47.502 117.697 47.6656 117.693C47.8331 117.693 47.9948 117.718 48.1507 117.769C48.3104 117.816 48.4565 117.89 48.589 117.991C48.7214 118.089 48.8364 118.204 48.9338 118.336C49.0273 118.472 49.0974 118.62 49.1442 118.78C49.1909 118.94 49.2123 119.102 49.2085 119.265C49.2007 119.433 49.1675 119.592 49.1091 119.744C49.0507 119.9 48.9688 120.042 48.8637 120.171C48.7585 120.3 48.6357 120.407 48.4955 120.492C48.3552 120.582 48.2851 120.627 48.2851 120.627C48.2851 120.627 47.9714 120.985 47.3442 121.702C46.7208 122.423 45.9494 123.056 45.0299 123.602C44.1104 124.143 42.6786 124.954 40.7344 126.033C38.7902 127.112 36.5617 128.347 34.0487 129.738C31.5357 131.125 28.9584 132.609 26.3168 134.191C23.6753 135.773 21.546 137.38 19.9292 139.013C18.3123 140.641 16.5746 141.958 14.7162 142.963C12.8577 143.972 11.12 144.307 9.50315 143.969C7.88627 143.63 6.56548 142.821 5.54081 141.543C4.52002 140.261 3.82262 138.691 3.44859 136.833C3.07067 134.974 2.76482 132.791 2.53106 130.281C2.29339 127.776 2.16287 125.546 2.1395 123.59C2.12002 121.638 2.0869 119.961 2.04015 118.558C1.99339 117.159 1.79469 115.895 1.44404 114.765C1.0895 113.635 0.78365 112.472 0.526507 111.276C0.265467 110.08 0.113519 109.398 0.0706613 109.231C0.027804 109.067 0.0044274 108.9 0.00053129 108.728C-0.00336482 108.561 0.0141676 108.393 0.0531288 108.226C0.0920899 108.062 0.150532 107.902 0.228454 107.746C0.30248 107.594 0.395987 107.454 0.508974 107.326C0.618065 107.193 0.742741 107.078 0.883001 106.981C1.02326 106.879 1.17131 106.798 1.32716 106.735C1.4869 106.673 1.65248 106.63 1.82391 106.607C1.99145 106.583 2.15898 106.579 2.32651 106.595C2.49404 106.615 2.65963 106.652 2.82327 106.706C2.98301 106.765 3.13301 106.84 3.27327 106.934C3.41742 107.031 3.54794 107.142 3.66483 107.267C3.77781 107.392 3.87522 107.53 3.95704 107.682C4.04275 107.83 4.08561 107.904 4.08561 107.904Z"
                  fill="#49423D"
                />
              </svg>
            </div>
          </div>
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
            {/* <div className={s["interests-star"]}>
              <img src="/images/star.svg" alt="" />
            </div> */}

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

                    {i === 0 && (
                      <span className={s.new}>
                        <img src="/images/new.svg" alt="" />
                      </span>
                    )}

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
