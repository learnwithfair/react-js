import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import BootstrapTableWithFiltering from "../Components/Bootstrap-Table-With-Filtering/BootstrapTableWithFiltering";
import FAQS from "../Components/FAQ/FAQS";
import Toggle from "../Components/Toggle/Toggle";
import Table from "../Components/Table/Table";
import UserForm from "../Components/RefExample/UserForm";
import ReactBootstrap from "../Components/React_Bootstrap/ReactBootstrap";
import LifeCycle from "../Components/LifeCycle/LifeCycle";
import DataFetch from "../Components/HOOKS/CustomHooks/DataFetch";
import Component1 from "../Components/HOOKS/useContext/Component1";
import ToastExample from "../Components/TOAST/ToastExample";
import DynamicTitle from "../Components/Dynamic_Title/DynamicTitle";
import Filter from "../Components/Filter/Filter";
import UseReducer from "../Components/HOOKS/UseReducer";

// import ModalDemo from "../Components/Modal/ModalDemo";


class Tutorial extends Component {
  render() {
    if (
      sessionStorage.getItem("loginInfo") == null ||
      sessionStorage.getItem("loginInfo") === false
    ) {
      return <Redirect to="/Log-in" />;
    } else {
      return (
        <div div align="middle">
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "FAQs"<br></br>
          </h1>
          <FAQS />
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Toggle"<br></br>
          </h1>
          <Toggle />

          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Table"<br></br>
          </h1>
          <Table />

      
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Ref Example"<br></br>
          </h1>
          <UserForm />
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "React Bootstrap"<br></br>
          </h1>


          <ReactBootstrap />

          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "React Life Cycle"<br></br>
          </h1>
          <LifeCycle />

          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "React Custom Hooks"<br></br>
          </h1>
          <DataFetch />
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "React Use Context"<br></br>
          </h1>
          <Component1 />
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Toast Example"<br></br>
          </h1>
          <ToastExample />
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Dynamic Title (Helmet)"<br></br>
          </h1>
          <DynamicTitle title="Tutorial" />
          <p>It is used for customize head tag</p>
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Filter Example"<br></br>
          </h1>
          <Filter />
          <div style={{ clear: "left", width: "100%" }}> </div>
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Use Reducer Example"<br></br>
          </h1>
          <UseReducer />

          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Bootstrap Table With Filtering"<br></br>
          </h1>
          <BootstrapTableWithFiltering />
          <h1
            style={{ textAlign: "center" }}
            className="for_Loop_Main_Title_Style"
          >
            "Bootstrap Modal"<br></br>
          </h1>
      {/* <ModalDemo/> */}
        </div>
      );
    }
  }
}

export default Tutorial;
