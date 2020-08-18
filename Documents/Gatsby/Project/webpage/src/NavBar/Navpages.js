import React from "react"
import css from "./NavBarCss.module.css"
// import { Link } from "gatsby"
import { AnchorLink as Link } from "gatsby-plugin-anchor-links"
import Courses from "../pages/Courses/index"
export default function Navigation(props) {
  return (
    <div className={css.Navbar}>
      <ul
        style={{
          textDecoration: "none",
          display: props.grid,
          gridTemplateColumns: props.order,
          fontSize: props.textsize,
          padding: props.padding,
          justifyContent: props.space,
          listStyleType: "none",
          color: props.color,
        }}
      >
        <Link className={css.Link} smooth to="../Homepage/Homepage">
          <li style={{ borderBottom: props.border }}>Home</li>
        </Link>
        <Link
          className={css.Link}
          style={{ textDecoration: "none" }}
          smooth
          to="/Courses#Courses"
        >
          <li style={{ borderBottom: props.border }}>Course</li>
        </Link>
        <Link
          className={css.Link}
          style={{ textDecoration: "none" }}
          smooth
          to="/Graduates#Graduates"
        >
          <li style={{ borderBottom: props.border }}>Graduates</li>
        </Link>

        <li style={{ borderBottom: props.border }}>About</li>

        <li style={{ borderBottom: props.border }}>Partners</li>
        <li style={{ borderBottom: props.border }}>Playground</li>
        <li style={{ borderBottom: props.border }}>Blog</li>
      </ul>
    </div>
  )
}
