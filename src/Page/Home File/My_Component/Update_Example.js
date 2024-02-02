import React, { Component } from "react";

class Update_Example extends Component {
  constructor() {
    super();
    // var btnText = "Update Number";

    this.state = { btnText: "Click Me", count: 0 };
  }
  change_Update = () => {
    this.setState({ btnText: "Clicked Me", count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h1>{parseInt(Math.random() * 5) + 1}</h1>
        <button onClick={this.change_Update}>
          {this.state.btnText + "-" + this.state.count}
        </button>
      </div>
    );
  }
}
export default Update_Example;
