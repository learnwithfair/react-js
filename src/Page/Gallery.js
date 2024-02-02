import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DynamicTitle from "../Components/Dynamic_Title/DynamicTitle";

class Gallery extends Component {
  render() {
    if (
      sessionStorage.getItem("loginInfo") == null ||
      sessionStorage.getItem("loginInfo") === false
    ) {
      return <Redirect to="/Log-in" />;
    } else {
      return (
        <>
          <DynamicTitle title="Gallery" />
          <div>Gallery Page</div>
        </>
      );
    }
  }
}

export default Gallery;
