import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "var(--bg)",
          color: "var(--textNormal)",
          transition: "color 0.2s ease-out, background 0.2s ease-out",
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        
      </div>
      <Footer className="page_footer" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
