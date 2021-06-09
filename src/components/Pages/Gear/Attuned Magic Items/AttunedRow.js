import React from "react";

import DelButton from '../../../SharedComponents/DelButton'
export default function AttunedRow({ data, setData, dataKey }) {
  const del = () => {
      let newData ={...data};
      //console.log(newData)
      delete newData[dataKey]
      //console.log(newData)
   setData(newData)

  };
  return (
    <div style={ComponentStyle}>
      <div style={{ flex: "6" }}> {data[dataKey].Name}</div>
      <div style={{ flex: "1", textAlign: "center" }}>
        {data[dataKey].Quantity}
      </div>
      <div style={{ flex: "1", textAlign: "center" }}>
        {data[dataKey].Weight}
      </div>
      <div style={{ flex: "2", textAlign: "center" }}>
      <DelButton delFunc={del} />
        &nbsp;
        
      </div>
    </div>
  );
}
const ComponentStyle = {
  height: "40px",
  backgroundColor: "rgba(0,0,0,0.1)",
  fontSize: "30px",
  display: "flex",
  flexDirection: "row",
  marginBottom: "5px",
  borderRadius: "10px",
  border: "2px solid #660308",
  padding: "3px",
};
