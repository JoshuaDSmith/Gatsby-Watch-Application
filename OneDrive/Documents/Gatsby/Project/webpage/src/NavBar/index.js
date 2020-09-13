import React, { useState } from "react"

import Footer from "../FooterComponent/Footer"
import NavBarLogic from "../NavBar/NavBarLogic"

export default ({ children }) => (
  <div>
    <NavBarLogic />
    {children}
    <Footer />
  </div>
)
