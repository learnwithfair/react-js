import React, { useState } from "react";

const UseState_Hooks = () => {
  const [count, setCount] = useState(0);

  const increamentHandelar = () => {
    setCount(count + 1);
  };
  const decreamentHandelar = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 style={{ fontSize: "66px" }}>{count}</h1>
      <button
        onClick={decreamentHandelar.bind(this)}
        style={{ fontSize: "30px" }}
        disabled={count === 0 ? true : false}
      >
        -
      </button>
      <button
        onClick={increamentHandelar.bind(this)}
        style={{ fontSize: "30px" }}
        disabled={count === 10 ? true : false}
      >
        +
      </button>
    </div>
  );
};

export default UseState_Hooks;
