import Head from "next/head";

import s from "../styles/Home.module.scss";

export default function Home() {
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
  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1638292596909-5174a9f6ec11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
      date: "September 27, 2021",
      title: "Criando atalhos para os comandos do git",
      description:
        "A vida é curta demais pra ficar digitando comandos longos ⌨️",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638292596909-5174a9f6ec11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
      date: "September 27, 2021",
      title: "Criando atalhos para os comandos do git",
      description:
        "A vida é curta demais pra ficar digitando comandos longos ⌨️",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638292596909-5174a9f6ec11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
      date: "September 27, 2021",
      title: "Criando atalhos para os comandos do git",
      description:
        "A vida é curta demais pra ficar digitando comandos longos ⌨️",
    },
  ];
  return (
    <div className={s.container}>
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
              Eu sou a Evellyn, tenho 25 anos. Sou de Curitiba, mas agora tô
              morando em São Paulo.
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
          <h2 className={s.title}>posts mais recentes</h2>

          <ul className={s.list}>
            {posts.map((post, i) => (
              <li className={s.post} key={`posts-${i}`}>
                <div className={s.image}>
                  <img src={post.image} alt="" />
                </div>
                <div className={s["text-wrapper"]}>
                  <small className={s.date}>{post.date}</small>
                  <h3 className={s.title}>{post.title}</h3>
                  <h4 className={s.description}>{post.description}</h4>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
