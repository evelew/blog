import React, { Fragment, useEffect } from "react"

import "./styles.scss"

const TopBlock = () => {
  useEffect(() => {
    loading()
  }, [])

  const loading = () => {
    const title = document.querySelector(".js-title")
    const subtitle = document.querySelector(".js-subtitle")
    // const titleCount = title.textContent.length
    // const subtitleCount = subtitle.textContent.length

    const titleLetters = {
      1: "E",
      2: "v",
      3: "e",
      4: "l",
      5: "l",
      6: "y",
      7: "n",
      8: " ",
      9: "L",
      10: "i",
      11: "m",
      12: "a",
    }

    const interval = setInterval(() => {
      const coloredItems = document.querySelectorAll(".js-colored")

      coloredItems.forEach(item => {
        item.removeAttribute("style")
      })

      const titleRandom = Math.floor(Math.random() * 12) + 1
      // const subtitleRandom = Math.floor(Math.random() * subtitleCount)

      const titleItem = document.querySelector(".js-title").children[
        titleRandom
      ]
      // const subtitleItem = document.querySelector(".js-subtitle").children[
      //   subtitleRandom
      // ]

      titleItem.innerText = titleLetters[titleRandom]

      // titleItem.style.color = "#ff0000"
      // titleItem.classList.add("js-colored")

      // subtitleItem.style.color = "#ff0000"
      // subtitleItem.classList.add("js-colored")
    }, 300)

    // setTimeout(() => {
    // const loadingBlock = document.querySelector(".js-loading")
    // loadingBlock.classList.add("fade-out")

    // setTimeout(() => {
    //   loadingBlock.remove()
    //   clearInterval(interval)
    // }, 300)
    // }, 1500)
  }

  return (
    <Fragment>
      <div className="top-block top-block--loading js-loading">
        <h1 className="js-title">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
            <span key={`title-${item}`}>?</span>
          ))}
        </h1>
        <h2 className="js-subtitle">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <span key={`subtitle-${item}`}>?</span>
          ))}
        </h2>
      </div>

      <div className="top-block">
        <h1>Evellyn Lima</h1>
        <h2>Frontend Developer</h2>
      </div>
    </Fragment>
  )
}

export default TopBlock
