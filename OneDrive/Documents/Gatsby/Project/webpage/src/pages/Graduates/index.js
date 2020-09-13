import React, { useState, useEffect } from "react"
import Layouts from "../../NavBar/index"
import { Cards } from "../Homepage/TextFolder/CardComponent"
import css from "../Courses/Courses.module.css"
import Switch from "react-switch"
import Modal from "react-modal"
const initialState = [
  { id: "Female?", Gender: "F", selected: false },
  { id: "Black?", race: "Black", selected: false },
  { id: "Sweet?", Flavour: "sweet", selected: false },
]
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 199, .10)",
    opacity: 8,
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "960px",
    margin: "32px auto",
    padding: 0,
    border: 0,
    backgroundColor: "red",
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    width: 600,
    height: 600,
  },
}

export default function () {
  const { filterAndSortArray } = require("multiple-array-filter")
  const [pick, setPicked] = useState(initialState)
  const [modalOpen, setModalOpen] = useState(false)
  const [CardComponentDisplay, setCardComponentDisplay] = useState([])
  const [isON, setisOn] = useState(false)
  useEffect(() => {
    setCardComponentDisplay(Cards)
  }, [])

  function togglePreferences(index) {
    setPicked([
      ...pick.slice(0, index),
      { ...pick[index], selected: !pick[index].selected },
      ...pick.slice(index + 1),
    ])
  }

  function postHandler() {
    let newfilters = pick.filter(function (Selected) {
      return Selected.selected === true
    })
    console.log(newfilters)
    var i
    for (i = 0; i < newfilters.length; i++) {
      let Race = newfilters[i].race
      let Sex = newfilters[i].Gender
      let Flavour = newfilters[i].Flavour

      if (newfilters[i].selected === true) {
        setCardComponentDisplay(
          Cards.filter(function (Options) {
            let Choices = Options.Gender === Sex
            let raceCards = Options.Ethnicity === Race
            let flavourCards = Options.Flavour === Flavour
            return Choices || raceCards || flavourCards
          })
        )
      }
    }
  }
  // const filters = [{ field: "Gender", search: ["F"] }]
  // const filters2 = [{ field: "Ethnicity", search: ["Black"] }]

  // const filtered_array = filterAndSortArray(Cards, filters)
  // const filtered_array2 = filterAndSortArray(filtered_array, filters2)

  // console.log(filtered_array)
  // console.log(filtered_array2)

  function ClearCriteria() {
    setCardComponentDisplay(Cards)
  }

  function closeModal() {
    if (modalOpen === true) {
      setModalOpen(false)
      setisOn(false)
    } else if (modalOpen === false) {
      setModalOpen(true)
      setisOn(true)
    }
  }
  return (
    <Layouts>
      <div className={css.ColumnView}>
        <div className={css.filterFormatting}>
          <h1> Filtered Search</h1>
          {pick.map((item, index) => (
            <div key={item.id}>
              <p>{item.id}</p>
              <Switch
                onChange={() => togglePreferences(index)}
                checked={item.selected}
                value={item.selected}
              />
            </div>
          ))}
          <h1> Age Range: </h1>
          <div className={css.AgepreferencesGrid}>
            <li>0-25</li>
            <li>26-50</li>
            <li>51+</li>
          </div>
          <button onClick={postHandler}>submit your preferences </button>
          <button onClick={ClearCriteria}> Clear Criteria</button>
        </div>

        <div className={css.course}>
          {CardComponentDisplay.map((cardItem, index) => {
            return isON ? (
              <Modal
                index={index}
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Modal"
              >
                <p>Hello There</p>
                <p>{cardItem.title}</p>
                <p>Awesome content here</p>
                <button onClick={closeModal}>ClickMe</button>
              </Modal>
            ) : (
              <span key={index} id="#Graduates">
                <img src={cardItem.img} />
                <section>
                  <h2>{cardItem.title}</h2>

                  <button onClick={closeModal}>Description</button>
                </section>
                <section>
                  <p>Age: {cardItem.Age}</p>
                  <p>Watch Maker: {cardItem.Gender}</p>
                  <p>Foreign Made: {cardItem.Ethnicity}</p>
                  <p>Flavour: {cardItem.Flavour} </p>
                </section>
              </span>
            )
          })}
        </div>
      </div>
    </Layouts>
  )
}
