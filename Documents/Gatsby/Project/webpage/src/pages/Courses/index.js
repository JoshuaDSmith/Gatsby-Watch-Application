import React, { useState } from "react"
import Layouts from "../../NavBar/index"
import { Cards } from "../Homepage/TextFolder/CardComponent"
import css from "./Courses.module.css"
export default function () {
  const [CardComponentDisplay, setCardComponentDisplay] = useState([])

  function displayAll() {
    setCardComponentDisplay(Cards.slice(0, 28))
  }

  function SetGenderCards() {
    let GenderValues = Cards.filter(function (Gender) {
      return Gender.Gender == "F"
    })
    setCardComponentDisplay(GenderValues)
  }
  function SetMaleCards() {
    let GenderValues = Cards.filter(function (Gender) {
      return Gender.Gender == "M"
    })
    setCardComponentDisplay(GenderValues)
  }
  return (
    <Layouts>
      <button onClick={displayAll}>Click now</button>
      <button onClick={SetGenderCards}> Click for Female Selection </button>
      <button onClick={SetMaleCards}>Click for Male Selection</button>
      <div className={css.course} id="Courses">
        {CardComponentDisplay.map((cardItem, index) => {
          return (
            <span key={index}>
              <img src={cardItem.img} />
              <h2>{cardItem.title}</h2>
              <p> {cardItem.age}</p>
              <p>{cardItem.Skills}</p>
              <p> Card Gender = {cardItem.Gender}</p>
            </span>
          )
        })}
      </div>
    </Layouts>
  )
}
