import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import BasicMenu from './tests/BasicMenu';
import About from './tests/About';
import Menu from './tests/Menu';

const Home = () => (
  <li>
    <ul>
      link 1
    </ul>
  </li>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Menu />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              all the things.
            </p>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/basicmenu" component={BasicMenu} />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
