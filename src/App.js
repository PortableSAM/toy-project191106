import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import "./normalize.css";
// Main Component
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>
            <Navigation>
              <Router>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Router>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Router>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Router>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
