import React from "react";
function Parameterize_Function_Example() {
  function Display(text) {
    alert(text);
  }

  return (
    <div>
      <button onClick={Display.bind(this, "I am parameterize Function")}>
        Parameterize Function
      </button>
    </div>
  );
}
export default Parameterize_Function_Example;
