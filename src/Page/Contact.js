import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DynamicTitle from "../Components/Dynamic_Title/DynamicTitle";

class Contact extends Component {
  render() {
    return (
      <>
        <DynamicTitle title="Contact Us" />
        <div>Contact Page</div>;
      </>
    );
  }
}

export default Contact;
