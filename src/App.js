import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import BasicMenu from './tests/BasicMenu';
import About from './tests/About';
import Menu from './tests/Menu';
import Activity from './tests/Activity';
import './css/main.css';

const Home = (props) => (
  <pre>{ JSON.stringify(props.match) }</pre>
)

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

            <Menu />
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/basicmenu" component={BasicMenu} />
              <Route path="/activity/:id" component={Activity} />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
