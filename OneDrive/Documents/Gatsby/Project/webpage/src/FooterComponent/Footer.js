import React, { useState } from "react"
import css from "../NavBar/NavBarCss.module.css"

export default function Navigation() {
  return (
    <div>
      <footer className={css.FooterStyles}>
        <section>
          <p>FaceBook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </section>
        <p>
          © Copyright 2020 School of Code. All Rights Reserved - Privacy Policy
          - Terms of Use School of Code Ltd is registered in England, Company
          No. 09793790 School of Code, Custard Factory, Gibb Street, Birmingham,
          B9 4AA
        </p>
      </footer>
    </div>
  )
}
