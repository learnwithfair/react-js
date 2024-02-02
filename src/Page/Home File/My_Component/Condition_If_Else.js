import React, { Component } from "react";

class Condition_Example extends Component {
  constructor() {
    super();
    this.state = {
      name: "RAHATUL RABBI",
      roll: 190609,
      age: 22,
      n: 1,
    };
  }
  doThis() {
    if (this.state.n > 2) {
      this.setState({ name: "RAHATUL RABBI" });
      this.setState({ roll: 190609 });
      this.setState({ age: 22 });
      this.setState({ n: 1 });
    } else {
      if (this.state.n == 1) {
        this.setState({ name: "SHAHANUR RAHMAN" });
        this.setState({ roll: 190617 });
        this.setState({ age: 21 });
      } else if (this.state.n == 2) {
        this.setState({ name: "ABDUL MATIN" });
        this.setState({ roll: 190604 });
        this.setState({ age: 24 });
      } else {
        this.setState({ name: "RAHATUL RABBI" });
        this.setState({ roll: 190609 });
        this.setState({ age: 22 });
      }
      this.setState({ n: this.state.n + 1 });
    }
  }
  render() {
    return (
      <div>
        <h1>
          NAME: {this.state.name} &nbsp; &nbsp; &nbsp; &nbsp;ROLL:{" "}
          {this.state.roll},&nbsp; &nbsp; &nbsp; &nbsp; AGE: {this.state.age}
        </h1>
        <button onClick={this.doThis.bind(this)}>Next</button>
      </div>
    );
  }
}
export default Condition_Example;
