import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import "./normalize.css";
// Component
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
/* 
- React Router Dom v5 
  Link 와 Route를 Router로 포장.
- React MDL 사용
  Layout은 MDL를 사용하였음.
*/
function App() {
  return (
    <Router>
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Title" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="content-page">
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </div>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
