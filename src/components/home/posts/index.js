import React from "react"

import "./styles.scss"

const Posts = () => {
  return (
    <div className="posts">
      <h2>Últimos posts</h2>

      <div className="posts__list">
        <a href="#" className="posts__card">
          <img
            src="https://www.blendit.com/wp-content/uploads/2018/08/low-code-o-que-e.jpg"
            alt=""
          />
          <h3>como testar o teste</h3>
        </a>

        <a href="#" className="posts__card">
          <img
            src="https://www.blendit.com/wp-content/uploads/2018/08/low-code-o-que-e.jpg"
            alt=""
          />
          <h3>como testar o teste</h3>
        </a>

        <a href="#" className="posts__card">
          <img
            src="https://www.blendit.com/wp-content/uploads/2018/08/low-code-o-que-e.jpg"
            alt=""
          />
          <h3>como testar o teste</h3>
        </a>
      </div>
    </div>
  )
}

export default Posts
