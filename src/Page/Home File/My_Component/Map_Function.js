import React, { Component } from "react";

class Map_Function extends Component {
  datePiker = () => {
    var date = new Date();
    var current_Date = date.getDate();
    var current_Month = date.getMonth();
    var current_Year = date.getFullYear();
    var footerText = current_Date + "/" + current_Month + "/" + current_Year;
    return footerText;
  };
  render() {
    const { titleText, descText } = this.props;

    return (
      <div className="for_Loop_Div_Style">
        <h2 className="for_Loop_Title_Style">{titleText}</h2>
        <p className="for_Loop_Desc_Style">{descText}</p>
        <p className="for_Loop_Footer_Style">
          <this.datePiker />
        </p>
      </div>
    );
  }
}

export default Map_Function;
