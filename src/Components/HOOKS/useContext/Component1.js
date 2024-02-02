import React, { useState } from "react";
import Component2 from "./Component2";
import { UserContext } from "./UserContext";
const Component1 = () => {
  const [user, setUser] = useState({ id: 101, name: "MD RAHATUL RABBI" });
  const [text, setText] = useState("hello I am text");
  return (
    <UserContext.Provider value={{ user, text }}>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;

// global state
// component1 -> component2 -> component3 -> component4
