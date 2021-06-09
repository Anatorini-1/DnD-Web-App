import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function ProfficiencyRow({ group,allData,data,setData }) {
  const [closeHover, setCloseHover] = useState(false);
  const closeButtonStyle = {
    backgroundColor: closeHover ? "red" : "pink",
    fontSize: "30px",
    height: "30px",
    width: "30px",
    borderRadius: "30px",
  };
  const del = () => {
  let newData = allData;
  let toEdit = [];
  for(let e in newData[group]) toEdit.push(newData[group][e])
    toEdit = toEdit.filter((e) => {return e != data})
    newData[group] = toEdit;
    setData(newData)
  }
  return (
    <div style={ComponentStyle}>
      <div style={{ flex: 5 }}> {data}</div>
      <div style={{ flex: 1 }}>
        <div
        onClick = {() => {del()}}
          onMouseEnter={() => {
            setCloseHover(true);
          }}
          onMouseLeave={() => {
            setCloseHover(false);
          }}
          style={closeButtonStyle}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
    </div>
  );
}
const ComponentStyle = {
  display: "flex",
};
