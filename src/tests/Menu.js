import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <div>
  <ul className="menu">
        <li>
          <NavLink exact className="inactive" activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="inactive" activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="inactive" activeClassName="active" to="/basicmenu">
            Basic Menu
          </NavLink>
        </li>
      </ul>
  </div>
)

export default Menu;
