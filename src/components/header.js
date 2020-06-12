import React, { useState } from "react"

import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const [active, setActive] = useState(false)
  return (
    <div className="container">
      <header>
        <nav className="navbar " role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="/svg/logo.svg" />
            </a>
            <a
              role="button"
              onClick={() => setActive(!active)}
              className={
                active
                  ? "navbar-burger burger is-active"
                  : "navbar-burger burger"
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={active ? "navbar-menu is-active" : "navbar-menu"}>
            <div className="navbar-start"></div>
            <div className="navbar-end">
              <a className="navbar-item">Home</a>
              <a className="navbar-item">Documentation</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
