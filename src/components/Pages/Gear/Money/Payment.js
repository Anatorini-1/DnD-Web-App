import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Input from "../../../SharedComponents/Input"
import { useState } from "react";
import $ from "jquery";
export default function Payment({ data, setData }) {
  const [currency, setCurrency] = useState("CP");
  const [value, setValue] = useState(1);

  const [addHover, setAddHover] = useState(false);
  const [subHover, setSubHover] = useState(false);
  const addMoney = (operation) => {
    let newData = {
      ...data,
      [currency]: Number(data[currency]) + Math.abs(Number(value)) * operation,
    };
    setData(newData);
    
  };

  const selectColor = (val) => {
    switch (val) {
      case "CP":
        return "Chocolate";
      case "SP":
        return "DimGray";
      case "EP":
        return "CornflowerBlue";
      case "GP":
        return "DarkGoldenRod";
      case "PP":
        return "DeepSkyBlue";
    }
  };
  return (
    <div style={ComponentStyle}>
      <div style={{ flex: 1, textAlign: "center" }}>
       
      
        <select
          style={{
            fontSize: "37px",
            border: "2px solid #660308",
            borderRadius: "15px",
            color: selectColor(currency),
            position:"relative",
            top:"-3px"
          }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option style={{ color: selectColor("CP") }} value="CP">
            CP
          </option>
          <option style={{ color: selectColor("SP") }} value="SP">
            SP
          </option>
          <option style={{ color: selectColor("EP") }} value="EP">
            EP
          </option>
          <option style={{ color: selectColor("GP") }} value="GP">
            GP
          </option>
          <option style={{ color: selectColor("PP") }} value="PP">
            PP
          </option>
        </select>
       
        <Input
          type="text"
          value={value}
          focusKey={"payment"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          style={{
            width: "50px",
            height: "50px",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            border: "3px solid #660308",
            borderRadius: "10px",
            position: "relative",
            top: "-5px",
            margin:"10px",
            backgroundColor:"white"
          }}
        />
         <span
          onMouseEnter={() => {
            setAddHover(!addHover);
          }}
          onMouseLeave={() => {
            setAddHover(!addHover);
          }}
          onClick={() => {
            addMoney(1);
          }}
          style={{
            backgroundColor: addHover ? "limegreen" : "transparent",
            height: "50px",
            borderRadius: "50px",
            fontSize: "50px",
            display: "inline-block",
          }}
        >
          <AiOutlinePlusCircle />
        </span>
        <span
          onMouseEnter={() => {
            setSubHover(!subHover);
          }}
          onMouseLeave={() => {
            setSubHover(!subHover);
          }}
          onClick={() => {
            addMoney(-1);
          }}
          style={{
            backgroundColor: subHover ? "orangered" : "transparent",
            height: "50px",
            borderRadius: "50px",
            fontSize: "50px",
            display: "inline-block",
            margin:"10px"
          }}
        >
          <AiOutlineMinusCircle />
        </span>
      </div>
    </div>
  );
}
const ComponentStyle = {
  margin:"0 auto",
  marginTop: "20px",
  border: "3px solid #660308",
  height: "100px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  width: "300px",
  overflowY: "scroll",
  display: "flex",
};
