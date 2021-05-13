import React from "react"

import SEO from "../components/seo"
import Part1 from "../components/home/part1"
import Part2 from "../components/home/part2"
import Part3 from "../components/home/part3"
import Part4 from "../components/home/part4"

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
          <Part1 />
          <Part2 />
          <Part3 />
          <Part4 />
        </section>
      </>
    )
  }
}

export default BlogIndex
