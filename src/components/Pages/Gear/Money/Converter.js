import React from "react";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

export default function Converter({ data, setData }) {
  const [from, setFrom] = useState("CP");
  const [to, setTo] = useState("SP");
  const [amount, setAmount] = useState(1);
  const [hover, setHover] = useState(false);
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
  const handleConverter = () => {
    let ratio_to_copper = (curr) => {
      switch (curr) {
        case "CP":
          return 1;
        case "SP":
          return 10;
        case "EP":
          return 50;
        case "GP":
          return 100;
        case "PP":
          return 1000;
      }
    };
    let copperValue = amount * ratio_to_copper(from);
    let result = Math.floor(copperValue / ratio_to_copper(to));
    let overflow = copperValue - result * ratio_to_copper(to);
    let newData = {
        ...data,
        CP: data["CP"] + overflow
    }
    newData[from] =  Number(data[from]) - Number(amount);
    newData[to]  = Number(data[to]) + Number(result);
    setData({
         ...data,
          [from]: Number(data[from]) - Number(amount),
          [to] : Number(data[to]) + Number(result),
    });
    
  };
  return (
    <div style={ComponentStyle}>
      Coverter
      <br />
      <table>
        <tbody>
          <tr>
            <td style={{ fontSize: "30px" }}>From</td>
            <td>
              <select
                style={{
                  fontSize: "37px",
                  border: "2px solid #660308",
                  borderRadius: "15px",
                  color: selectColor(from),
                }}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
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
            </td>
            <td rowSpan="3" style={{ textAlign: "center" }}>
              <button
                onMouseEnter={() => {
                  setHover(!hover);
                }}
                onMouseLeave={() => {
                  setHover(!hover);
                }}
                style={{
                  fontSize: "40px",
                  border: "2px solid #660308",
                  borderRadius: "15px",
                  width: "50px",
                  height: "50px",
                  marginLeft: "8px",
                  backgroundColor: hover ? "lightgreen" : "lightgrey",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleConverter();
                }}
              >
                <GrFormNextLink />
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "30px" }}>To</td>
            <td>
              <select
                style={{
                  fontSize: "36px",
                  border: "2px solid #660308",
                  borderRadius: "15px",
                  color: selectColor(to),
                }}
                value={to}
                onChange={(e) => setTo(e.target.value)}
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
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "30px" }}>Amount</td>
            <td style={{ textAlign: "center" }}>
              <input
                type="text"
                style={{
                  fontSize: "35px",
                  width: "45px",
                  height: "35px",
                  textAlign: "center",
                  border: "2px solid #660308",
                  borderRadius: "15px",
                }}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const ComponentStyle = {
  marginLeft: "30px",
  border: "3px solid #660308",
  height: "300px",
  width: "250px",
  borderRadius: "20px",
  padding: "10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "black",
  fontWeight: "bold",
  overflowY: "scroll",
};
