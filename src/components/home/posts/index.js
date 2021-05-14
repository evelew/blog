import React from "react"

import "./styles.scss"

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <h2>Posts mais recentes</h2>

      <div className="posts__list">
        {posts.map(({ node: { fields: { slug }, frontmatter: { title } } }) => (
          <a href={slug} className="posts__card" key={slug}>
            <img
              src="https://www.blendit.com/wp-content/uploads/2018/08/low-code-o-que-e.jpg"
              alt=""
            />
            <h3>{title}</h3>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Posts
