import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <div>
  <ul className="menu">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/basicmenu">
            Basic Menu
          </NavLink>
        </li>
      </ul>
  </div>
)

export default Menu;
