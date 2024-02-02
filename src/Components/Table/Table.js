import React from "react";
import Column from "./Column";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <Column name="Md Rahatul Rabbi" age="24" />
        <Column name="Md Rahat Kabit" age="23" />
      </tbody>
    </table>
  );
};

export default Table;
