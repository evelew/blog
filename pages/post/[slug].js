import s from "../../styles/BlogPost.module.scss";

const Post = () => {
  return (
    <>
      <div className={s.hero}>
        <div className={s["hero-image"]} />
      </div>
      <main className={s.body}>
        <small className={s.date}>September 27, 2021</small>
        <h1 className={s.title}>Criando atalhos para os comandos do git</h1>
        <h2 className={s.subtitle}>
          A vida é curta demais pra ficar digitando comandos longos ⌨️
        </h2>

        <div className={s.text}>
          <p>
            Tem muitos comandos do git que são difíceis de lembrar de cabeça e
            pra não precisar ficar buscando toda vez como fazer aquele comando
            que você quase nunca usa você pode criar atalhos no git, e o melhor
            é que essa criação é super simples.
          </p>
        </div>
      </main>
    </>
  );
};

export default Post;
