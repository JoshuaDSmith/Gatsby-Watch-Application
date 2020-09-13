import React, { useState } from "react"
import { Cards as users } from "../Homepage/TextFolder/CardComponent"
import css from "./Courses.module.css"
import Layout from "../../NavBar/index"

function App() {
  console.log(users)
  const [state, setState] = React.useState({
    age: "",
    address: "",
    name: "",
  })
  const [setItem, setmapFunction] = useState([])

  function handleChange(evt) {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  function onPost() {
    console.log(state)

    let chosen = {
      age: state.age,
      Flavour: state.address,
      Brand: state.name,
    }

    if (chosen.age === "") {
      delete chosen.age
    }

    if (chosen.Flavour === "") {
      delete chosen.Flavour
    }

    if (chosen.Brand === "") {
      delete chosen.Brand
    }

    var result = users.filter(search, chosen)

    function search(user) {
      return Object.keys(this).every(key => user[key] === this[key])
    }

    setmapFunction(result)
    console.log(result)
    setState({ age: "", address: "", name: "" })
  }
  return (
    <Layout>
      <div>
        {/* <label>
          Enter Age Of User
          <input
            type="number"
            name="age"
            value={state.age}
            onChange={handleChange}
          /> */}
        {/* </label> */}
        <label>
          Flavour here
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
          <label> Enter Brand</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <button onClick={onPost}> Click Me</button>

        <h1> Blurb</h1>
        <p>
          {" "}
          To use the multi filter: Brands available are: Juice, Zealium & Pearl
          (CamelCase)
        </p>
        <p>
          {" "}
          These can be paired up with Flavour sweet or sour (lowercase), The
          filter will filter all cards relevant to your selection.
        </p>
        <section className={css.course}>
          {setItem.map((item, index) => {
            return (
              <span key={index}>
                <img src={item.img} />
                <h2>{item.title}</h2>
                <section className={css.CardText}>
                  <p>{item.Flavour}</p>
                  <p>{item.Age}</p>
                  <p>{item.Gender}</p>
                  <p>{item.Brand}</p>
                </section>
                <button>Description</button>
              </span>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}
export default App
