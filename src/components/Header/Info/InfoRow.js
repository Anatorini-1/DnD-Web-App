import React from "react";
import DynamicFont from "react-dynamic-font";
import { useState } from "react";
function InfoRow({ label, value, onChange }) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={ComponentStyle}>
      <div style={labelStyle}>
        <DynamicFont content={label} />
      </div>
      <input
        onBlur={() => {
          setFocus(false);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        style={{ ...inputStyle, backgroundColor: focus ? "white" : "#6e6e70" }}
        type="text"
        value={value[label] ?? ""}
        onChange={(e)=> {onChange(e)}}
        name={label}
      />
    </div>
  );
}

const ComponentStyle = {
  width: "87%",
  height: "30%",
  backgroundColor: "transparent",

  position: "realtive",
};
const labelStyle = {
  fontWeight: "bold",
  width: "40%",
  lineHeight: "45px",
  fontSize: "30px",
  float: "left",
};
const inputStyle = {
  width: "60%",
  height: "100%",
  textAlign: "right",
  paddingRight: "20px",
  backgroundColor: "#6e6e70",
  border: "2px solid black",
  borderRadius: "10px",
  fontFamily: "Verdana",
  fontWeight: "bold",
  fontSize: "32px",
};
export default InfoRow;
