import React, { Component, useState } from 'react';
import {Redirect} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import '../Form Style/Signin_and_Signup_Style.css';
import SetData from '../Form Data/SetData';
import Subject_Names from '../Form Data/Subject_Names.json'


const subjectNameData = [];
const subjectNames = [];
for (let index = 0; index < Subject_Names.length; index++) {
    subjectNames[index] = Subject_Names[index].subjectName;

}



class Signup extends (Component, SetData) {

    constructor(props, context) {
        super(props, context);
        const currentDate = new Date().getDate();
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        sessionStorage.setItem("logOutInfo", "yes")
        // const finallDate = currentDate + "/" + currentMonth  + "/" + currentYear ;

        this.state = {
            date: new Date(),
            fName: "",
            lName: "",
            subjectName: "ICE",
            mobileNumber: "",
            dateOfBirth: "",
            rollNumber: "",
            gender: "Female",
            skillTest: "None",
            skill: "",
            HTML: "",
            CSS: "",
            JS: "",
            jQuery: "",
            PHP: "",
            None: "None",
            email: "",
            password: "",
            description: "",
            signin_Check: false
        }


    }




    onChaneHandelar = (event) => {

        var ItemsName = event.target.name;
        var ItemsValue = event.target.value;
        this.setState({ [ItemsName]: ItemsValue })
    }
    onChaneSkillHandelar = (event) => {
        var htmlid = document.getElementById("HTMLID");
        var cssid = document.getElementById("CSSID");
        var jsid = document.getElementById("JSID");
        var jqueryid = document.getElementById("jQueryID");
        var phpid = document.getElementById("PHPID");

        if (htmlid.checked || cssid.checked || jsid.checked || jqueryid.checked || phpid.checked) {
            this.setState({ skillTest: "rahatul" })
            this.setState({ None: "" });
        }
        else {
            this.setState({ skillTest: "None" });
            this.setState({ None: "None" });
        }



        if (htmlid.checked) {
            this.setState({ HTML: "HTML, " });
        }
        else {
            this.setState({ HTML: "" });
        }
        if (cssid.checked) {
            this.setState({ CSS: "CSS, " });
        }
        else {
            this.setState({ CSS: "" });
        }
        if (jsid.checked) {
            this.setState({ JS: "JS, " });
        }
        else {
            this.setState({ JS: "" });
        }
        if (jqueryid.checked) {
            this.setState({ jQuery: "jQuery, " });
        }
        else {
            this.setState({ jQuery: "" });
        }
        if (phpid.checked) {
            this.setState({ PHP: "PHP, " });
        }
        else {
            this.setState({ PHP: "" });
        }


    }


    onSubmitHandelar = () => {
        sessionStorage.setItem("fullName", (this.state.fName + " " + this.state.lName));
        sessionStorage.setItem("subjectName", this.state.subjectName);
        sessionStorage.setItem("mobileNumber", this.state.mobileNumber);
        sessionStorage.setItem("dateOfBirth", this.state.dateOfBirth);
        sessionStorage.setItem("rollNumber", this.state.rollNumber);
        sessionStorage.setItem("gender", this.state.gender);
        sessionStorage.setItem("skill", (this.state.HTML + this.state.CSS + this.state.JS + this.state.jQuery + this.state.PHP + this.state.None));
        sessionStorage.setItem("email", this.state.email);
        sessionStorage.setItem("password", this.state.password);
        sessionStorage.setItem("description", this.state.description);
        this.setState({ signin_Check: true })
    }

    // submitHandler = () => {


    //     // sessionStorage.setItem ("fullName" , (this.state.fName + " " + this.state.lName));
    //     // sessionStorage.setItem ("email" , this.state.email);
    //     // sessionStorage.setItem ("password" , this.state.password);

    // }

    goToLoginPage = () => {
        this.setState({ signin_Check: true })
    }

    // onChaneDatePickerHandelar = date =>{

    //     // var currentDate = "03/03/1999"
    //     // var d = date.getFullYear;
    //     // var d = date.getDate;
    //     this.setState({date: date})


    // }

    render() {

        for (let index = 0; index < subjectNames.length; index++) {
            subjectNameData[index] = <option value={subjectNames[index]}>{subjectNames[index]}</option>;
        }

        // if (this.state.HTML ===""||this.state.CSS ===""||this.state.JS ===""||this.state.jQuery ===""||this.state.PHP ==="" ) {
        //     this.setState({skillTest:""});

        // }else{
        //     this.setState({skillTest:"RAHATUL"});
        // }
        if (this.state.signin_Check) {
            return <Redirect to = "/Log-in" />

        } else {

            return (

                <div className="signInContainer">
                    <div className="formContainer">
                        <h1 className="loginTitle">Student Registrasion Form</h1>
                        <h1 className="loginTitleMarker">***********************************************************<br></br></h1>
                        <div><SetData></SetData></div>
                        <form onSubmit={this.onSubmitHandelar}>
                            <fieldset>
                                <legend style={{ color: "rgb(134, 2, 2)" }}>
                                    Student Info
                                </legend>

                                <div style={{ margin: "15px 0px" }}>
                                    <label className="loginLabel">First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
                                    <input onChange={this.onChaneHandelar} list="firstNames" className="loginInputFill" id="signupFirstLastNameID" name="fName" type="text" placeholder="Enter Your First Name" required></input>

                                    <label className="loginLabel" style={{ marginLeft: "50px" }}>Last name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
                                    <input onChange={this.onChaneHandelar} list="lastNames" className="loginInputFill" id="signupFirstLastNameID" name="lName" type="text" placeholder="Enter Your Last Name" required></input>
                                </div>
                                <div style={{ margin: "15px 0px" }}>
                                    <label className="loginLabel">Subject Name:&nbsp;</label>
                                    <select onChange={this.onChaneHandelar} className="selectItem" name="subjectName" value={this.state.subjectName}>
                                        {subjectNameData}
                                    </select>
                                    <label className="loginLabel" style={{ marginLeft: "50px" }}>Mobile No&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
                                    <input onChange={this.onChaneHandelar} className="loginInputFill" id="signupFirstLastNameID" name="mobileNumber" type="text" placeholder="Enter Your Full Name"  ></input>
                                </div>

                                {/* <Calendar></Calendar> */}
                                <div style={{ margin: "15px 0px" }}>


                                    <label className="loginLabel"  >Date of Birth&nbsp;&nbsp;:&nbsp;</label>
                                    <input onChange={this.onChaneHandelar} className="loginInputFill" id="signupFirstLastNameID" type="text" name="dateOfBirth" placeholder="DD / MM / YYYY" ></input>
                                    {/* <label className="loginLabel" style={{ marginLeft: "50px" }}>Date of Birth:</label>
                                    <DatePicker  onChange={this.onChaneDatePickerHandelar} selected = {this.state.date} className="loginInputFill" id="datePickerPosition"   name="dateOfBirth" placeholder="DD / MM / YYYY" ></DatePicker> */}
                                    <label className="loginLabel" style={{ marginLeft: "50px" }}>Roll Number:&nbsp;</label>
                                    <input onChange={this.onChaneHandelar} className="loginInputFill" id="signupFirstLastNameID" name="rollNumber" type="number" placeholder="Enter Your Roll Num.." ></input>

                                </div>
                                <div style={{ margin: "15px 0px" }}>
                                    <label className="loginLabel">Your Gender&nbsp;&nbsp;&nbsp;:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <input onChange={this.onChaneHandelar} type="radio" name="gender" value="Male" checked={(this.state.gender === "Male") ? true : false} style={{ cursor: "pointer" }} /><spam className="loginLabel" style={{ color: "black" }}>&nbsp;Male</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input onChange={this.onChaneHandelar} type="radio" name="gender" value="Female" checked={(this.state.gender === "Female") ? true : false} style={{ cursor: "pointer" }} /><spam className="loginLabel" style={{ color: "black" }}>&nbsp;Female</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input onChange={this.onChaneHandelar} type="radio" name="gender" value="Other" checked={(this.state.gender === "Other") ? true : false} style={{ cursor: "pointer" }} /><spam className="loginLabel" style={{ color: "black" }}>&nbsp;Other</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                </div>

                                <div style={{ margin: "15px 0px" }}>
                                    <label className="loginLabel">Your Skill &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>

                                    <input onChange={this.onChaneSkillHandelar} type="checkbox" value="HTML" name="HTML" id="HTMLID" style={{ cursor: "pointer" }}></input><spam className="loginLabel" style={{ color: "black" }}>&nbsp;HTML</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input onChange={this.onChaneSkillHandelar} type="checkbox" value="CSS" name="CSS" id="CSSID" style={{ cursor: "pointer" }}></input><spam className="loginLabel" style={{ color: "black" }}>&nbsp;CSS</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input onChange={this.onChaneSkillHandelar} type="checkbox" value="JS" name="JS" id="JSID" style={{ cursor: "pointer" }}></input><spam className="loginLabel" style={{ color: "black" }}>&nbsp;JS</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input onChange={this.onChaneSkillHandelar} type="checkbox" value="jQuery" name="jQuery" id="jQueryID" style={{ cursor: "pointer" }}></input><spam className="loginLabel" style={{ color: "black" }}>&nbsp;jQuery</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input onChange={this.onChaneSkillHandelar} type="checkbox" value="PHP" name="PHP" id="PHPID" style={{ cursor: "pointer" }} ></input><spam className="loginLabel" style={{ color: "black" }}>&nbsp;PHP</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input onChange={this.onChaneSkillHandelar} type="checkbox" value="None" name="None" id="NoneID" style={{ cursor: "pointer" }} checked={(this.state.skillTest === "None") ? true : false}></input><spam className="loginLabel" style={{ color: "black" }}>&nbsp;None</spam>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




                                </div>
                                <div style={{ margin: "15px 0px" }}>
                                    <label className="loginLabel">Email ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
                                    <input onChange={this.onChaneHandelar} className="loginInputFill" name="email" type="email" placeholder="Enter Your Email ID" required></input>
                                </div>

                                <div style={{ margin: "15px 0px" }}>
                                    <label className="loginLabel">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label>
                                    <input onChange={this.onChaneHandelar} className="loginInputFill" name="password" type="password" id="password" placeholder="Enter Your Password" required></input>
                                </div>

                            </fieldset>

                            <fieldset>

                                <legend style={{ color: "rgb(134, 2, 2)" }}>
                                    Description
                                </legend>
                                <textarea onChange={this.onChaneHandelar} name="description" className="textArea" placeholder="Write your short description here...">

                                </textarea>

                            </fieldset>

                            <div className="buttonPosition">

                                <input className="loginButton" type="reset" value="Reset"></input>
                                <input className="loginButton" type="submit" value="Submit"></input>
                                <h4 onClick={this.goToLoginPage} className="goToLogInPage" > Go to Log in Page</h4>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }

    }
}

export default Signup;