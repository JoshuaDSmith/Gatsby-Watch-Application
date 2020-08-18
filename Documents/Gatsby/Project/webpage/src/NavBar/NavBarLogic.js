import React, { useState } from "react"
import css from "./NavBarCss.module.css"
import NavOptions from "./Navpages"

export default function Logic() {
  return (
    <div className={css.Navbar}>
      <NavOptions color="black" />
    </div>
  )
}
