import React, { Component } from "react";

class OnChange_Event_Handaling extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      comment: "Enter your comment bellow",
    };
  }

  handaler = (event) => {
    var text = event.target.value;
    this.setState({ comment: text });
  };

  render() {
    return (
      <div>
        <p>{this.state.comment}</p>
        <textarea
          className="textAreaStyle"
          onChange={this.handaler.bind(this)}
          placeholder="Write your comment here..."
          type="text"
        ></textarea>
      </div>
    );
  }
}

export default OnChange_Event_Handaling;
