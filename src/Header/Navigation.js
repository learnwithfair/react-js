import React, { Component } from "react";
import "./Header Style/Header_Style.css";
import logo from "./logo.png";
import { NavLink, Redirect } from "react-router-dom";

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { isLoggedIn: false };
  }

  componentDidMount = () => {
    if (sessionStorage.getItem("loginInfo")) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  };

  onLoginNoticeHandler = () => {
    alert("Something Worng. Please Reload your page");
  };
  logoutHandler = () => {
    sessionStorage.setItem("loginInfo", false);
    this.setState({ isLoggedIn: false });
    alert("You'r Log out now.\n\n\n\nAre you conform??");
  };
  render() {
    const logInfo = this.state.isLoggedIn ? (
      <li id="logOutButtonStyle">
        {" "}
        <NavLink
          exact
          to="/Log-in"
          onClick={this.logoutHandler}
          style={{ fontStyle: "normal" }}
        >
          Log out
        </NavLink>
      </li>
    ) : (
      <li id="logOutButtonStyle">
        {" "}
        <a
          href="#"
          style={{ fontStyle: "normal" }}
          onClick={this.onLoginNoticeHandler}
        >
          Log in
        </a>
      </li>
    );

    return (
      <div>
        <div className="subHeader">
          <ul type="none">
            <li style={{ marginLeft: "-40px" }}>
              <a href="tel:01790224950">Mobile Number : 01790224950</a>
            </li>
            <li>
              {" "}
              <a href="mailto:rahatul.ice.09.pust@gmail.com">
                {" "}
                Email : rahatul.ice.09.pust@gmail.com
              </a>
            </li>
            {logInfo}
          </ul>
        </div>
        <div className="headerDiv">
          <div className="logoSection">
            <a href="#">
              {" "}
              <img src={logo} className="headerLogo" title="Learn With Fair" />
            </a>
          </div>
          <div className="titleSection">
            <h1 className="title">LEARN WITH FAIR</h1>
            <div className="navSection">
              <ul>
                <li>
                  {" "}
                  <NavLink
                    className="navMenuStyle"
                    activeClassName="activeClassNameStyle"
                    exact
                    to="/"
                    style={{ marginLeft: "-15px" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    className="navMenuStyle"
                    activeClassName="activeClassNameStyle"
                    exact
                    to="/tutorial"
                  >
                    Tutorial
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    className="navMenuStyle"
                    activeClassName="activeClassNameStyle"
                    exact
                    to="/about-me"
                  >
                    About Me
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    className="navMenuStyle"
                    activeClassName="activeClassNameStyle"
                    exact
                    to="/contact-us"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    className="navMenuStyle"
                    activeClassName="activeClassNameStyle"
                    exact
                    to="/gallery"
                    style={{ marginRight: "0px" }}
                  >
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="separetorStyle"></hr>
      </div>
    );
  }
}

export default Navigation;
