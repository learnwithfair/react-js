import React from "react";
import ReactDOM from "react-dom";

function FindDOMNode_Method(a) {
  function change_Style_Handeler() {
    var value = document.getElementById("namesID");
    ReactDOM.findDOMNode(value).style.color = "red";

    ReactDOM.findDOMNode(value).innerHTML =
      "MD RAHATUL RABBI </br> Web Developer";
    // ReactDOM.findDOMNode(value).src="https://www.facebook.com ";
  }
  return (
    <div>
      <h1 id="namesID"> MD RAHATUL RABBI</h1>
      <button onClick={change_Style_Handeler.bind(this)}>Set Style</button>
    </div>
  );
}
export default FindDOMNode_Method;
