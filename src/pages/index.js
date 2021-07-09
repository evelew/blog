import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import TopBlock from "../components/home/topBlock"
import About from "../components/home/about"
// import Knowledge from "../components/home/knowledge"
import Posts from "../components/home/posts"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <>
      <SEO title="Home" />

      <section
        style={{
          minHeight: "100vh",
        }}
      >
        <TopBlock />
        <About />
        {/* <Knowledge /> */}
        <Posts posts={posts} />
      </section>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover_image
            credit_image
            credit_image_author
          }
        }
      }
    }
  }
`
