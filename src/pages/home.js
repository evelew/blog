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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas massa velit, aliquet eu blandit id, dapibus in neque.
                Ut gravida in nisi eu luctus. Maecenas pellentesque at diam quis
                consectetur. Nam sed velit eget elit condimentum blandit a nec
                orci. Curabitur ex justo, tristique a arcu quis, laoreet
                interdum nisl. Nunc et dictum metus. Aenean a ultrices massa, a
                auctor augue. Nunc volutpat mattis est, sit amet volutpat leo
                pellentesque sed. Nunc nec mi diam. Nam fringilla magna ut diam
                facilisis consequat. Cras feugiat orci nec euismod luctus.
                Maecenas eu bibendum ante.
              </p>
              <p>
                Sed faucibus faucibus enim nec egestas. Donec tincidunt viverra
                luctus. Nam bibendum a sapien sit amet dictum. Integer mauris
                diam, congue quis urna vitae, lacinia molestie nunc. Mauris mi
                elit, dignissim eget vulputate eu, semper in nisl. Nullam
                dignissim diam non elit dictum, non fermentum justo suscipit.
                Duis vitae arcu a dolor eleifend ornare. Suspendisse tincidunt
                elit ut magna fringilla, sed semper risus viverra. Praesent ac
                ipsum pharetra, dapibus eros sit amet, rhoncus dui. In fermentum
                luctus massa quis tempus. Suspendisse eget risus non enim
                aliquam volutpat. Phasellus ultricies quis ante eu vestibulum.
                Pellentesque id imperdiet augue, quis sagittis massa. Vestibulum
                varius tempor lectus sed molestie. Quisque sapien nisl, aliquam
                et velit id, faucibus fringilla eros.
              </p>
            </div>
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
              Conhecimentos
            </h2>

            <div
              style={{
                alignItems: "center",
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
                  border: "1px solid black",
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
                    fontSize: "40px",
                    margin: "0",
                  }}
                >
                  HTML
                </h3>
              </div>

              <div
                style={{
                  alignItems: "center",
                  border: "1px solid black",
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
                    fontSize: "40px",
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
                  border: "1px solid black",
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
                    fontSize: "40px",
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
                  border: "1px solid black",
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
                    fontSize: "40px",
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
                  border: "1px solid black",
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
                    fontSize: "40px",
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
                  border: "1px solid black",
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
                    fontSize: "40px",
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
        </section>
      </>
    )
  }
}

export default BlogIndex
