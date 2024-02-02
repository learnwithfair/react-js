import React from "react";

const Column = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
  );
};

export default Column;
