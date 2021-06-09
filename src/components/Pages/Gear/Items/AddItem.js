import React from "react";
import { AiOutlineSave } from "react-icons/ai";
import { useState } from "react";
export default function AddItem({ saveNewItem, show }) {
  const [newItem, setNewItem] = useState({});
  const [hover, setHover] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    if(
        newItem.Name != undefined && newItem.Name.length > 0 && 
        newItem.Weight != undefined && newItem.Weight.length > 0 && 
        newItem.Quantity != undefined && newItem.Quantity.length > 0 
    ) saveNewItem(newItem)
  };
  return (
    <div style={{ ...ComponentStyle, display: show ? "block" : "none" }}>
      <form onSubmit={(e) => formHandler(e)} action="">
        <div style={labelStyle}>Add New Item</div>
        <table style={{ borderCollapse: "collapse", margin: "auto" }}>
          <tbody>
            <tr style={tableRowStyle}>
              <td style={tdStyle}>Name</td>
              <td style={tdStyle}>
                <input type="text" style={inputStyle} name="Name" value={newItem.Name ?? ""} onChange={(e) => {setNewItem({...newItem, [e.target.name]:e.target.value})}}/>
              </td>
              <td style={confirmTd} rowSpan="3">
                <div
                  onClick={(e) => formHandler(e)}
                  onMouseEnter={() => setHover(!hover)}
                  onMouseEnter={() => setHover(!hover)}
                  onMouseLeave={() => setHover(!hover)}
                  style={{
                    ...confirmStyle,
                    backgroundColor: hover ? "darkgreen" : "transparent",
                  }}
                >
                  <AiOutlineSave />
                </div>
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={tdStyle}>Quantity</td>
              <td style={tdStyle}>
                <input type="number" style={inputStyle} name="Quantity" value={newItem.Quantity ?? ""} onChange={(e) => {setNewItem({...newItem, [e.target.name]:e.target.value})}} />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={tdStyle}>Weight</td>
              <td style={tdStyle}>
                {" "}
                <input type="number" style={inputStyle} name="Weight" value={newItem.Weight ?? ""} onChange={(e) => {setNewItem({...newItem, [e.target.name]:e.target.value})}} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

const ComponentStyle = {
  border: "3px solid #660308",
  backgroundColor: "rgb(120,255,120)",
  borderRadius: "15px",
  margin: "10px",
  padding: "5px",
  textAlign: "center",
};

const labelStyle = {
  textAlign: "center",
};

const tableRowStyle = {
  height: "10px",
  margin: "0",
};
const tdStyle = {
  height: "30px",
  fontSize: "30px",
};

const confirmTd = {
  padding: "10px",
};

const confirmStyle = {
  height: "55px",
  backgroundColor: "transparent",
  color: "black",
  borderRadius: "15px",
};
const inputStyle = {
    fontSize:"30px",
    borderRadius:"15px",
    border:"3px solid #470206",
    fontWeight:"bold"
}