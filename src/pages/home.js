import React from "react"

import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    return (
      <>
        <SEO title="Home" />

        <section
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "100vh",
              minWidth: "100vw",
            }}
          >
            <h1
              style={{
                margin: 0,
                color: "white",
                textAlign: "center",
                fontSize: "96px",
              }}
            >
              Evellyn Lima
            </h1>
            <h2
              style={{
                margin: "50px 0 0 0",
                color: "white",
                textAlign: "center",
                fontSize: "36px",
              }}
            >
              Frontend Developer
            </h2>
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "100vh",
              minWidth: "100vw",
            }}
          >
            <h2
              style={{
                margin: "50px 0 0 0",
                color: "#FFB347",
                textAlign: "center",
                fontSize: "36px",
              }}
            >
              Quem é ela
            </h2>

            <div
              style={{
                fontSize: "18px",
                textAlign: "center",
                margin: "60px 0 0 0",
                width: "1200px",
              }}
            >
              <p>
                Eu sou a Evellyn, tenho 25 anos, sou de Curitiba mas agora tô
                morando em São Paulo. Gosto muito de ouvir música em qualquer
                momento do dia, assim que acordo, no banho, lavando louça,
                varrendo a casa, estudando e etc. Gosto de quase todo tipo de
                música, mas o que mais ouço é funk e pop (principalmente
                brasileiro). Gosto muito de conversar, então meus roles
                favoritos envolvem mesa + cerveja + conversa. (acaba logo
                quarentena!!!)
              </p>
              <p>
                E sobre a parte profissional, eu trabalho com frontend desde
                2013, já passei por algumas empresas com modelos e stacks
                diferentes e essas experiências hoje me ajudam a pensar em
                soluções/maneiras diferentes de resolver problemas. O que mais
                gosto de fazer é mexer com JS e refatorar/otimizar soluções. No
                próximo bloco você consegue ver com mais detalhes quais
                tecnologias eu tenho experiência.
              </p>
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "100vh",
              minWidth: "100vw",
            }}
          >
            <h2
              style={{
                margin: "50px 0 0 0",
                color: "#FFB347",
                textAlign: "center",
                fontSize: "36px",
              }}
            >
              Conhecimentos
            </h2>

            <div
              style={{
                alignItems: "center",
                color: "white",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                fontSize: "18px",
                textAlign: "center",
                margin: "60px 0 0 0",
                width: "1200px",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  border: "1px solid white",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "300px",
                  width: "32%",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    lineHeight: "52px",
                    margin: "0",
                  }}
                >
                  HTML
                </h3>
              </div>

              <div
                style={{
                  alignItems: "center",
                  border: "1px solid white",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "300px",
                  width: "32%",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    lineHeight: "52px",
                    margin: "0",
                  }}
                >
                  CSS
                  <br />
                  Sass
                  <br />
                  Stylus
                </h3>
              </div>

              <div
                style={{
                  alignItems: "center",
                  border: "1px solid white",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "300px",
                  width: "32%",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    lineHeight: "52px",
                    margin: "0",
                  }}
                >
                  JavaScript
                  <br />
                  Vanilla
                  <br />
                  React
                  <br />
                </h3>
              </div>

              <div
                style={{
                  alignItems: "center",
                  border: "1px solid white",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "300px",
                  marginTop: "40px",
                  width: "32%",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    lineHeight: "52px",
                    margin: "0",
                  }}
                >
                  Testes
                  <br />
                  Unitários
                  <br />
                  Integração
                </h3>
              </div>

              <div
                style={{
                  alignItems: "center",
                  border: "1px solid white",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "300px",
                  marginTop: "40px",
                  width: "32%",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    lineHeight: "52px",
                    margin: "0",
                  }}
                >
                  Integrações
                  <br />
                  API
                  <br />
                  WP
                </h3>
              </div>
              <div
                style={{
                  alignItems: "center",
                  border: "1px solid white",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "300px",
                  marginTop: "40px",
                  width: "32%",
                }}
              >
                <h3
                  style={{
                    fontSize: "36px",
                    lineHeight: "52px",
                    margin: "0",
                  }}
                >
                  Responsividade
                  <br />
                  Performance
                </h3>
              </div>
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "120px 0",
              // minHeight: "100vh",
              minWidth: "100vw",
            }}
          >
            <h2
              style={{
                margin: "50px 0 0 0",
                color: "#FFB347",
                textAlign: "center",
                fontSize: "36px",
              }}
            >
              Últimos posts
            </h2>

            <div
              style={{
                display: "flex",
                fontSize: "18px",
                justifyContent: "space-between",
                textAlign: "center",
                margin: "60px 0 0 0",
                width: "1200px",
              }}
            >
              <a
                href="#"
                style={{
                  border: "1px solid black",
                  borderRadius: "4px",
                  display: "inline-block",
                  height: "300px",
                  position: "relative",
                  width: "32%",
                }}
              >
                <img
                  src="https://www.blendit.com/wp-content/uploads/2018/08/low-code-o-que-e.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "300px" }}
                />
                <h2
                  style={{
                    position: "absolute",
                    fontSize: "24px",
                    bottom: "0",
                    left: "20px",
                    color: "white",
                  }}
                >
                  como testar o teste
                </h2>
              </a>

              <a
                href="#"
                style={{
                  border: "1px solid black",
                  borderRadius: "4px",
                  display: "inline-block",
                  height: "300px",
                  position: "relative",
                  width: "32%",
                }}
              >
                <img
                  src="https://www.blendit.com/wp-content/uploads/2018/08/low-code-o-que-e.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "300px" }}
                />
                <h2
                  style={{
                    position: "absolute",
                    fontSize: "24px",
                    bottom: "0",
                    left: "20px",
                    color: "white",
                  }}
                >
                  como testar o teste
                </h2>
              </a>

              <a
                href="#"
                style={{
                  border: "1px solid black",
                  borderRadius: "4px",
                  display: "inline-block",
                  height: "300px",
                  position: "relative",
                  width: "32%",
                }}
              >
                <img
                  src="https://www.blendit.com/wp-content/uploads/2018/08/low-code-o-que-e.jpg"
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "300px" }}
                />
                <h2
                  style={{
                    position: "absolute",
                    fontSize: "24px",
                    bottom: "0",
                    left: "20px",
                    color: "white",
                  }}
                >
                  como testar o teste
                </h2>
              </a>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default BlogIndex
