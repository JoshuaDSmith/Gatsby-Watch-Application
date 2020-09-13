import React, { useState } from "react"
import Layouts from "../../NavBar/index"
import { Cards } from "../Homepage/TextFolder/CardComponent"
var users = [
  {
    name: "John",
    email: "johnson@mail.com",
    age: 25,
    address: "USA",
    black: false,
  },
  {
    name: "Tom",
    email: "tom@mail.com",
    age: 28,
    address: "England",
    black: false,
  },
  {
    name: "John",
    email: "johnson@mail.com",
    age: 21,
    address: "USA",
    black: false,
  },
  {
    name: "Tom",
    email: "tom@mail.com",
    age: 38,
    address: "England",
    black: false,
  },
  {
    name: "Mark",
    email: "mark@mail.com",
    age: 28,
    address: "England",
    black: true,
  },
  {
    name: "Mark",
    email: "mark@mail.com",
    age: 29,
    address: "England",
    black: false,
  },
  {
    name: "Mark",
    email: "mark@mail.com",
    age: 28,
    address: "USA",
    black: true,
  },
]

function App() {
  console.log(Cards)
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
      address: state.address,
      name: state.name,
    }

    if (chosen.age === "") {
      delete chosen.age
    }

    if (chosen.address === "") {
      delete chosen.address
    }

    if (chosen.name === "") {
      delete chosen.name
    }

    var result = users.filter(search, chosen)

    function search(user) {
      return Object.keys(this).every(key => user[key] === this[key])
    }

    setmapFunction(result)
    setState({ age: "", address: "", name: "" })
  }
  return (
    <Layouts>
      <div>
        <label>
          Enter Age Of User
          <input
            type="number"
            name="age"
            value={state.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter Users Address
          <input
            type="text"
            name="address"
            value={state.address}
            onChange={handleChange}
          />
          <label> Enter Users Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <button onClick={onPost}> Click Me</button>
        <section>
          {setItem.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.name}</h1>
                <p>{item.address}</p>
                <p>{item.age}</p>
              </div>
            )
          })}
        </section>
      </div>
    </Layouts>
  )
}
export default App
