import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <ul className="Header__ul">
          <li className="Header__item">
            <Link to="/" className="Header__link">
              Accordion
            </Link>
          </li>
          <li className="Header__item">
            <Link to="/wikipedia" className="Header__link">
              Wikipedia
            </Link>
          </li>
          <li className="Header__item">
            <Link to="/dropdown" className="Header__link">
              Dropdown
            </Link>
          </li>
          <li className="Header__item">
            <Link to="/translate" className="Header__link">
              Translate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
