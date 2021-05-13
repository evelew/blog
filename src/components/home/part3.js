import React from "react"

const Part3 = () => {
  return (
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
  )
}

export default Part3
