import React, { Component } from "react";

class Button_Adding_In_Class_Component extends Component {
  doThis() {
    alert("I am clicked from class component");
  }

  render() {
    return (
      <div>
        <button onClick={this.doThis}>Button Adding in Class component</button>
      </div>
    );
  }
}
export default Button_Adding_In_Class_Component;
