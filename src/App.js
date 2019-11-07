import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
//import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import "./normalize.css";
// Main Component

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </header>
      <hr />
      <Main />
    </Router>
  );
}

export default App;
