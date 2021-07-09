import React from "react"

import "./styles.scss"

const TopBlock = () => {
  return (
    <section className="top-block">
      <header className="header">
        <a href="./blog">Blog</a>
      </header>
      <div className="top-block__text">
        <h1>
          <a href="https://www.linkedin.com/in/evellyn-lima/" target="_blank">
            Evellyn Lima
          </a>
        </h1>
        <h2>Frontend Developer</h2>
      </div>
    </section>
  )
}

export default TopBlock
