import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Page/Home";
import Tutorial from "../Page/Tutorial";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Gallery from "../Page/Gallery";
import Signin from "../Form Files/Form File/Signin";
import ErrorPage from "../Page/ErrorPage";
import Signup from "../Form Files/Form File/Signup";
// import App from "../App";
class MyRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/about-me" component={About} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/log-in" component={Signin} />
          <Route exact path="/sign-up" component={Signup} />
          {/* <Route exact path="/App" component={App} /> */}
          <Route exact component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default MyRouter;
