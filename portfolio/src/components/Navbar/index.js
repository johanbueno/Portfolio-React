import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <header>
      <div id="mobile-menu-close">
        <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <ul id="menu" className="shadow">
        <li>
        <a href="#about">About</a>

        </li>
        <li>
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            } >
            Contact
            </Link>
        </li>
      </ul>
    </header>
  );
}


export default Navbar;
