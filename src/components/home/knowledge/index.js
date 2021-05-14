import React from "react"

import "./styles.scss"

const Knowledge = () => {
  return (
    <div className="knowledge">
      <h2>Conhecimentos</h2>

      <div className="knowledge__wrapper">
        <div className="knowledge__block">
          <h3>HTML</h3>
        </div>

        <div className="knowledge__block">
          <h3>
            CSS
            <br />
            Sass
            <br />
            Stylus
          </h3>
        </div>

        <div className="knowledge__block">
          <h3>
            JavaScript
            <br />
            Vanilla
            <br />
            React
            <br />
          </h3>
        </div>

        <div className="knowledge__block">
          <h3>
            Testes
            <br />
            Unitários
            <br />
            Integração
          </h3>
        </div>

        <div className="knowledge__block">
          <h3>
            Integrações
            <br />
            API
            <br />
            WP
          </h3>
        </div>
        <div className="knowledge__block">
          <h3>
            Responsividade
            <br />
            Performance
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Knowledge
