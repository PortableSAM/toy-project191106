import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./normalize.css";
// Main Component
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Router>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
          </Router>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
