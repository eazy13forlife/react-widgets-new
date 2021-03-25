import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <ul className="Header__ul">
          <Link to="/" className="Header__link">
            Accordion
          </Link>

          <Link to="/wikipedia" className="Header__link">
            Wikipedia
          </Link>

          <Link to="/dropdown" className="Header__link">
            Dropdown
          </Link>

          <Link to="/translate" className="Header__link">
            Translate
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
