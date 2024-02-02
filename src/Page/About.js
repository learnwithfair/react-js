import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DynamicTitle from "../Components/Dynamic_Title/DynamicTitle";

class About extends Component {
  render() {
    if (
      sessionStorage.getItem("loginInfo") == null ||
      sessionStorage.getItem("loginInfo") === false
    ) {
      return <Redirect to="/Log-in" />;
    } else {
      return (
        <>
          <DynamicTitle title="About Us" />
          <div>About Page</div>
        </>
      );
    }
  }
}

export default About;
