import React from "react"

import "./styles.scss"

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <h2>Posts mais recentes</h2>

      <div className="posts__list">
        {posts.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title, cover_image },
            },
          }) => (
            <a href={slug} className="posts__card" key={slug}>
              <img src={cover_image} alt="" />
              <h3>{title}</h3>
            </a>
          )
        )}
      </div>
    </div>
  )
}

export default Posts
