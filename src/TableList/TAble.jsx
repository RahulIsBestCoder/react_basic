import React from "react";

const Table = ({ headItems, bodyItems }) => {
  return (
    <div className="main_table_div">
      <div className="table_box">
        <table>
          <thead>
            <tr>
              {headItems.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
