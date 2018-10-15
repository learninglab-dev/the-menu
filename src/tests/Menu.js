import React from "react";
import { Link } from 'react-router-dom'

const BasicMenu = () => (
  <div>
    <ul>
      <li>
        <Link to="/">
          <button>
            home
          </button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button>
            About
          </button>
        </Link>
      </li>
      <li>
        <Link to="/basicmenu">
          <button>
            Basic Menu
          </button>
        </Link>
      </li>
    </ul>
  </div>
)

export default BasicMenu;
