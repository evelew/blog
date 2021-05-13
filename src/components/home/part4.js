import React from "react"

const Part4 = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 0",
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
  )
}

export default Part4
