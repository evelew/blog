import React from "react"

import SEO from "../components/seo"
import TopBlock from "../components/home/topBlock"
import About from "../components/home/about"
import Knowledge from "../components/home/knowledge"
import Posts from "../components/home/posts"

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
          <TopBlock />
          <About />
          <Knowledge />
          <Posts />
        </section>
      </>
    )
  }
}

export default BlogIndex
