import React, { Component } from "react";

class Chatch_ID_For_Change_Value extends Component {
  constructor() {
    super();
    this.state = {
      first_Name: "",
      last_Name: "",
      Roll: "",
      Age: "",
      GPA: "",
      Number: "",
    };
  }
  resetData() {
    this.setState({
      first_Name: "",
      last_Name: "",
      Roll: "",
      Age: "",
      GPA: "",
    });

    this.setState({ Number: "" });
  }
  formHandelar() {
    alert("are you Conform?");
    this.setState({ first_Name: document.getElementById("first_Name").value });
    this.setState({ last_Name: document.getElementById("last_Name").value });
    this.setState({ Roll: document.getElementById("Roll").value });
    this.setState({ Age: document.getElementById("Age").value });
    this.setState({ GPA: document.getElementById("GPA").value });
    this.setState({ Number: document.getElementById("Number").value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            id="first_Name"
            type="text"
            placeholder="Enter your first name"
          ></input>
          <br></br>
          <input
            id="last_Name"
            type="text"
            placeholder="Enter your last name"
          ></input>
          <br></br>
          <input id="Roll" type="text" placeholder="Enter your Roll"></input>
          <br></br>
          <input id="Age" type="number" placeholder="Enter your Age"></input>
          <br></br>
          <input id="GPA" type="text" placeholder="Enter your GPA"></input>
          <br></br>
          <input
            id="Number"
            type="text"
            placeholder="Enter your Mobile Number"
          ></input>
          <br></br>
        </form>
        <button onClick={this.formHandelar.bind(this)}>Submit</button>&nbsp;
        &nbsp; &nbsp; &nbsp;
        <button onClick={this.resetData.bind(this)}>Reset</button>
        <br></br>
        <div>
          <h1>Student Info</h1>
          <p>
            NAME: {this.state.first_Name}&nbsp; {this.state.last_Name}
          </p>
          <p>
            ROLL: {this.state.Roll}&nbsp; &nbsp; &nbsp; &nbsp; AGE:{" "}
            {this.state.Age}&nbsp; &nbsp; &nbsp; &nbsp; GPA: {this.state.GPA}
          </p>
          <p>PHONE NUMBER: {this.state.Number}</p>
        </div>
      </div>
    );
  }
}
export default Chatch_ID_For_Change_Value;
