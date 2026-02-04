import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">
          <NavLink to="/">Meu Blog</NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
