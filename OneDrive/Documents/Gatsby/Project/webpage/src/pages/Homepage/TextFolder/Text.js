import React, { useState, useEffect } from "react"
import css from "./Textcss.module.css"
import { Cards } from "./CardComponent"
import { Link } from "gatsby"

export default function Home() {
  const [toggleDisplay, setToggleConditionalRender] = useState(false)
  const [displayCards, setDisplay] = useState([])

  useEffect(() => {
    setDisplay(Cards)
    setToggleConditionalRender(true)
  }, [])
  async function reportWindowSize() {
    let width = window.innerWidth
    setDisplay(Cards)
    if (width > 900) {
      setToggleConditionalRender(true)
    } else {
      setToggleConditionalRender(false)
    }
  }
  window.onresize = reportWindowSize

  return (
    <div className={css.TextForm}>
      <section>
        <li>Special Occasion?</li>

        <div className={css.grid}>
          {toggleDisplay
            ? displayCards.slice(0, 6).map((item, index) => {
                return (
                  <span key={index}>
                    <img src={item.img} />
                    <h2>{item.title}</h2>

                    <p>Skills Include : {item.Skills}</p>
                  </span>
                )
              })
            : displayCards.slice(0, 6).map((item, index) => {
                return (
                  <span key={index}>
                    <img src={item.img} />
                  </span>
                )
              })}
          <Link
            style={{ textDecoration: "none" }}
            to="http://localhost:8000/Graduates"
          >
            <li style={{ float: "right" }}>Browse Our Collection ..</li>
          </Link>
        </div>
      </section>
    </div>
  )
}
