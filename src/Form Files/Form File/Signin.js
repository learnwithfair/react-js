import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../Form Style/Signin_and_Signup_Style.css";
const ra = false;

class Signin extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "",
      email: "",
      password: "",
      signin_Check: false,
      signup_Check: false,
    };
  }
  raha() {
    return "rajushdkjfhls";
  }

  onChaneHandelar = (event) => {
    const inputData = event.target.name;
    const inputValue = event.target.value;
    this.setState({ [inputData]: inputValue });
  };
  onSubmitHandelar = (event) => {
    var { name, email, password } = this.state;
    event.preventDefault();

    var getFullName = sessionStorage.getItem("fullName");
    var getEmail = sessionStorage.getItem("email");
    var getPassowrd = sessionStorage.getItem("password");
    if (this.state.password.length < 6) {
      // var passwordValue = document.getElementById("password").onfocus(this);
      alert(
        "Your password less then 6 digit please ues more then 6 digit password"
      );
    } else if (
      name === getFullName &&
      email === getEmail &&
      password === getPassowrd
    ) {
      this.setState({ signin_Check: true });
      sessionStorage.setItem("loginInfo", true);
    } else {
      if (!(name == getFullName)) {
        alert("Your name is incorrect");
      } else if (!(email === getEmail)) {
        alert("Your email is incorrect");
      } else {
        alert("Your password is incorrect");
      }
    }
  };
  goToSignUpPage = () => {
    this.setState({ signup_Check: true });
  };
  setUpYes = () => {
    // sessionStorage.setItem("loginInfo", "yes");
  };
  render() {
    if (this.state.signup_Check) {
      return <Redirect to="/Sign-up" />;
    } else if (this.state.signin_Check) {
      return <Redirect to="/" />;
    }
    // if (sessionStorage.getItem("loginInfo") === "no") {
    //     return <Redirect to="/Home" />
    // }
    else {
      return (
        <div className="signInContainer">
          <div className="formContainer">
            <h1 className="loginTitle">Please Log-in your page </h1>
            <h1 className="loginTitleMarker">
              ********************************************<br></br>
            </h1>

            <form onSubmit={this.onSubmitHandelar}>
              <div style={{ margin: "15px 0px" }}>
                <label className="loginLabel">
                  Full Name:&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <input
                  onChange={this.onChaneHandelar}
                  className="loginInputFill"
                  name="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  required
                ></input>
              </div>
              <div style={{ margin: "15px 0px" }}>
                <label className="loginLabel">
                  Email ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <input
                  onChange={this.onChaneHandelar}
                  className="loginInputFill"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email ID"
                  required
                ></input>
              </div>
              <div style={{ margin: "15px 0px" }}>
                <label className="loginLabel">
                  Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <input
                  onChange={this.onChaneHandelar}
                  className="loginInputFill"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                ></input>
              </div>
              <div className="buttonPosition">
                <input
                  onClick={this.goToSignUpPage}
                  className="loginButton"
                  type="button"
                  value="Sign Up"
                ></input>
                <input
                  onClick={this.setUpYes}
                  className="loginButton"
                  type="submit"
                  value="Sign In"
                ></input>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Signin;
