import React from "react";


function Labeled_Field({data, onChange, label}) {
  return (
    <div style={ComponentStyle}>
      <h3 style={h3Style}>{label}</h3>
      <input
        name={label}
        value={data[label] ?? ""}
        onChange={(e) => {onChange(e)}}
        style={inputStyle}
        type="text"
      />
    </div>
  );
}

const ComponentStyle = {
  
  borderRadius:"12px",
  marginBottom:"10px",
  padding:"3px",
  textAlign:"center"
}

const inputStyle = {
    height: "34px",
    backgroundColor: "#6e6e70",
    border: "2px solid black",
    borderRadius: "10px",
    fontFamily: "Verdana",
    fontWeight: "bold",
    fontSize:"32px",
    width:"200px",
  };
  
  const h3Style = {
    margin: "0px",
    fontSize:"28px"
  };
  
export default Labeled_Field;
