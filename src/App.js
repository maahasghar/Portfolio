import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Switch>
        <Route exact path="/#home" component={Home} />
        <Route exact path="/#about" component={About} />
        <Route exact path="/#projects" component={Project} />
        <Route exact path="/#contact" component={Contact} />
        <Redirect to="/#home" />
      </Switch>

      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
