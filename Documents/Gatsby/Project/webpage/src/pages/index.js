import React from "react"
import Layout from "../NavBar/index"
import HomePage from "./Homepage/Homepage"

import css from "./index.module.css"

export default function Home() {
  return (
    <div className={css.margin} id="Graduates">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  )
}
