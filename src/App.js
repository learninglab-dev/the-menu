import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import BasicMenu from './tests/BasicMenu';
import About from './tests/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              all the things.
            </p>
            <div>
              <Route path="/about" component={About} />
            </div>
            <div>
              <Route path="/basicmenu" component={BasicMenu} />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
