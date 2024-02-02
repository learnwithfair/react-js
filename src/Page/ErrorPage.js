import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ErrorPage extends Component {
  render() {
    if (
      sessionStorage.getItem("loginInfo") == null ||
      sessionStorage.getItem("loginInfo") === false
    ) {
      return <Redirect to="/log-in" />;
    } else {
      return (
        <div>
          <h1> 404</h1>
        </div>
      );
    }
  }
}

export default ErrorPage;
