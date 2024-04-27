import React, { Component } from 'react';

class Parameterize_Function_with_event extends Component {
  handleIsAdmin = (param, event) => {
    const inputValue = event.target.value;
    // Now you can use inputValue as the value of the input field
    // Do whatever you need to do with the input value here
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.handleIsAdmin(param, event)}
        // ^ Pass param and event to the handler function
        />
      </div>
    );
  }
}

export default Parameterize_Function_with_event;
