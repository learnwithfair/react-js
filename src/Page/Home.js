import rahatul from "../rahatul.png";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Home File//My Data and Style/Data_Style.css";

import Class_Component_Example_Demo from "./Home File/My_Component/Class_Component_Example";
import Function_Component_Example_Demo from "./Home File/My_Component/Function_Component_Example";
import Props_In_Function_Example_Demo from "./Home File/My_Component/Props_In_ Function_Example";
import Props_In_Class_Example from "./Home File/My_Component/Props_In_Calss_Example";
import Button_Adding_In_Class_Component from "./Home File/My_Component/Button_Adding_In_Class_Component";
import Button_Adding_In_Function_Component_Example from "./Home File/My_Component/Button_Adding_In_Function_Component";
import Parameterize_Function_Example from "./Home File/My_Component/Parameterize_Function";
import Parameterize_Class_Example from "./Home File/My_Component/Parameterize_Calss_Example";
import State_In_Class_Example from "./Home File/My_Component/State_In_Class";
import Condition_Example from "./Home File/My_Component/Condition_If_Else";
import Condition_If_Else_In_Class from "./Home File/My_Component/Condition_If_Else_In_Class";
import Loop_Example from "./Home File/My_Component/Loop_Example";
import Arrow_Function from "./Home File/My_Component/Arrow_Function";
import Update_Example from "./Home File/My_Component/Update_Example";
import Chatch_ID_For_Change_Value from "./Home File/My_Component/Catch_ID_For_Change_Value";
import ReactDOM_Render_Method from "./Home File/My_Component/ReactDOM_Render_Function";
import FindDOMNode_Method from "./Home File/My_Component/FindDOMNode_Method";
import Data from "./Home File/My Data and Style/Data.json";
import For_Loop_Example from "./Home File/My_Component/For_Loop_Example";
import Map_Function from "./Home File/My_Component/Map_Function";
import Distraction_Example from "./Home File/My_Component/Distraction_Example";
import OnChange_Event_Handaling from "./Home File/My_Component/OnChange_Event_Handaling";
import UseState_Hooks from "./Home File/My_Component/UseState_Hooks";
import Axio from "./Home File/Fatch Data/Axio";
import Fatch from "./Home File/Fatch Data/Fetch";
import DynamicTitle from "../Components/Dynamic_Title/DynamicTitle";

const my_data = [];
for (let index = 0; index < Data.length; index++) {
  my_data[index] = (
    <For_Loop_Example
      key={index}
      titleText={Data[index].title}
      descText={Data[index].desc}
    />
  );
}
// var items = Data.map((item, index) => (
//   <Map_Function key={index} titleText={item.title} descText={item.desc} />
// ));

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //     logoutInfo: false
    // }
  }

  onProfileHandler = () => {
    var allData =
      "Name : " +
      sessionStorage.getItem("fullName") +
      "\n" +
      "Subject Name : " +
      sessionStorage.getItem("subjectName") +
      "\n" +
      "Mobile Number : " +
      sessionStorage.getItem("mobileNumber") +
      "\n" +
      "Date Of Birth : " +
      sessionStorage.getItem("dateOfBirth") +
      "\n" +
      "Rol Number : " +
      sessionStorage.getItem("rollNumber") +
      "\n" +
      "Gender : " +
      sessionStorage.getItem("gender") +
      "\n" +
      "Skill : " +
      sessionStorage.getItem("skill") +
      "\n" +
      "Email : " +
      sessionStorage.getItem("email") +
      "\n" +
      "Password : " +
      sessionStorage.getItem("password") +
      "\n" +
      "Description : " +
      sessionStorage.getItem("description") +
      "\n";
    alert(allData);
  };

  render() {
    // if (this.state.logoutInfo) {
    //     return <Signin />

    // } else {
    if (
      sessionStorage.getItem("loginInfo") == null ||
      sessionStorage.getItem("loginInfo") === false
    ) {
      return <Redirect to="/Log-in" />;
    } else {
      return (
        <div className="App">
          <DynamicTitle title="Home" />

          <img
            src={rahatul}
            onClick={this.onProfileHandler}
            className="profileImageSizeing"
            style={{ position: "fixed", marginLeft: "-48%" }}
            title="Profile"
            toTipText="Profile"
          />
          {/* <button onClick={this.onProfileHandler} style={{ position: 'fixed', marginLeft: "-48%"}}> Profile</button> */}
          <h1 className="for_Loop_Main_Title_Style">
            "class component Example"<br></br>
          </h1>
          <Class_Component_Example_Demo></Class_Component_Example_Demo>
          <h1 className="for_Loop_Main_Title_Style">
            "Function component Example"<br></br>
          </h1>
          <Function_Component_Example_Demo></Function_Component_Example_Demo>
          <h1 className="for_Loop_Main_Title_Style">
            "props in function Example"<br></br>
          </h1>
          <Props_In_Function_Example_Demo
            name="Mahamuda Khatun"
            age="27"
          ></Props_In_Function_Example_Demo>
          <h1 className="for_Loop_Main_Title_Style">
            "Props in class Example"<br></br>
          </h1>
          <Props_In_Class_Example
            name="Marufa Khatun"
            roll="190610"
          ></Props_In_Class_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "Button adding in class component Example"<br></br>
          </h1>
          <Button_Adding_In_Class_Component></Button_Adding_In_Class_Component>
          <h1 className="for_Loop_Main_Title_Style">
            "Button adding in function component Example"<br></br>
          </h1>
          <Button_Adding_In_Function_Component_Example></Button_Adding_In_Function_Component_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "Parameterize function Example"<br></br>
          </h1>
          <Parameterize_Function_Example></Parameterize_Function_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "Parameterize class Example"<br></br>
          </h1>
          <Parameterize_Class_Example></Parameterize_Class_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "State in class Example"<br></br>
          </h1>
          <State_In_Class_Example></State_In_Class_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "condition Example"<br></br>
          </h1>
          <Condition_Example></Condition_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "condition if else in class Example"<br></br>
          </h1>
          <Condition_If_Else_In_Class></Condition_If_Else_In_Class>
          <h1 className="for_Loop_Main_Title_Style">
            "Loop Example"<br></br>
          </h1>
          <Loop_Example></Loop_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "Arrow function Example"<br></br>
          </h1>
          <Arrow_Function></Arrow_Function>
          <h1 className="for_Loop_Main_Title_Style">
            "Update Example"<br></br>
          </h1>
          <Update_Example></Update_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "Catch Id for change value Example"<br></br>
          </h1>
          <Chatch_ID_For_Change_Value></Chatch_ID_For_Change_Value>
          <h1 className="for_Loop_Main_Title_Style">
            "React DOM render() method Example"<br></br>
          </h1>
          <ReactDOM_Render_Method></ReactDOM_Render_Method>
          <h1 className="for_Loop_Main_Title_Style">
            "Find DOM method Example"<br></br>
          </h1>
          <FindDOMNode_Method></FindDOMNode_Method>
          <h1 className="for_Loop_Main_Title_Style">
            "For loop Example"<br></br>
          </h1>
          <div>{my_data}</div>
          {/* For float clear  */}
          <div style={{ clear: "left", width: "100%" }}> </div>
          <h1 className="for_Loop_Main_Title_Style">
            "Map function Example"<br></br>
          </h1>
          <div>
            {Data.map((item, index) => (
              <Map_Function
                key={index}
                titleText={item.title}
                descText={item.desc}
              />
            ))}
          </div>
          <div style={{ clear: "left", width: "100%" }}> </div>
          <h1 className="for_Loop_Main_Title_Style">
            "Distraction Example"<br></br>
          </h1>
          <Distraction_Example
            title1="Father's"
            title2="Mother's"
            title3="Sister"
          ></Distraction_Example>
          <h1 className="for_Loop_Main_Title_Style">
            "On change Event handaling Example"<br></br>
          </h1>
          <OnChange_Event_Handaling />
          <h1 className="for_Loop_Main_Title_Style">
            "useState Hooks Example"<br></br>
          </h1>
          <UseState_Hooks />
          <h1 className="for_Loop_Main_Title_Style">
            "Data Fatching using Fatch"<br></br>
          </h1>
          <Fatch />
          <h1 className="for_Loop_Main_Title_Style">
            "Data Fatching using Axios"<br></br>
          </h1>
          <Axio />
        </div>
      );
    }
  }
}

export default Home;
