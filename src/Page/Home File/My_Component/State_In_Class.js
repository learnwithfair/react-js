import React, { Component } from "react";

class State_In_Class_Example extends Component {
  constructor() {
    let i = 3;
    super();
    this.state = {
      name: ["MD RAHATUL RABBI", "SHAHANUR RAHMAN", "ABDUL MATIN"],
      roll_1: 190609,
      roll_2: 190617,
      roll_3: 190604,
      age: {
        rahat: 22,
        suhan: 21,
        matin: 24,
      },
    };
  }
  render() {
    return (
      <div>
        <h1>Students Info</h1>
        <p>
          Name: {this.state.name[0]} Roll: {this.state.roll_1} Age:
          {" " + this.state.age.rahat}
        </p>
        <p>
          Name: {this.state.name[1]} Roll: {this.state.roll_2} Age:
          {" " + this.state.age.suhan}
        </p>
        <p>
          Name: {this.state.name[2]} Roll: {this.state.roll_3} Age:
          {" " + this.state.age.matin}
        </p>
      </div>
    );
  }
}
export default State_In_Class_Example;
