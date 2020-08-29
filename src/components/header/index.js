import React from "react"
import { Link } from "gatsby"
import ThemeToggle from "../themeToggle"
import "./header.css"

const Header = () => {
 
  return (
    <header className="nav-container">
      <div className="nav-left">
        <Link
          className="nav"
          style={{
            color: "var(--textNormal)",
          }}
          to="/"
          activeStyle={{ color: "var(--textLink)" }}
        >
          Home{" "}
        </Link>
        <Link
          className="nav"
          style={{
            color: "var(--textNormal)",
          }}
          to="/project"
          activeStyle={{ color: "var(--textLink)" }}
        >
          Project{" "}
        </Link>
        <Link
          className="nav"
          style={{
            color: "var(--textNormal)",
          }}
          to="/about"
          activeStyle={{ color: "var(--textLink)" }}
        >
          About{" "}
        </Link>
      </div>
      <ThemeToggle className="nav-right" />
    </header>
  )
}

export default Header
