import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <header>
        <nav className="navbar " role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img alt="Logo" src="/svg/logo.svg" />
            </Link>
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
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/post" className="navbar-item">
                Notes
              </Link>
              {/* <a className="navbar-item">About</a> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
