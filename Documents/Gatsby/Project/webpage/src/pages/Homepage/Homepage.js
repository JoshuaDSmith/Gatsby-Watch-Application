import React from "react"
import Image from "./ImageFolder/Image"
import Text from "./TextFolder/Text"
import css from "./Homepage.module.css"
import Layout from "../../NavBar/Navpages"
export default function Home() {
  return (
    <div className={css.grid}>
      <Layout></Layout>
      <div>
        <Image />
      </div>
      <div>
        <Text />
      </div>
    </div>
  )
}
