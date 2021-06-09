import React, { useState } from "react";
import Dice from "../img/hitDice/hitDice";
import { FaPercent, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Cup from "../img/dice/delapouite/rolling-dice-cup.svg";
export default function DiceRoller() {
  const [hidden, setHidden] = useState(true);
  const [diceToRoll, setDiceToRoll] = useState(1);
  const [plusHover, setPlusHover] = useState(false);
  const [minusHover, setMinusHover] = useState(false);
  const [diceRolled, setDiceRolled] = useState("");
  const [rolledNumbers, setRolledNumbers] = useState("");
  const [rolledSum, setRolledSum] = useState("");
  const ComponentStyle = {
    width: "600px",
    height: "300px",
    zIndex: "20",
    backgroundColor: "#E1D3C1",
    position: "absolute",
    transition: "0.5s ease all",
    left: hidden ? "-600px" : "0",
    top: "750px",
    border: "4px solid #660308",
    borderBottomRightRadius: "20px",
    borderLeft: "none",
  };

  const iconStyle = {
    position: "absolute",
    left: "596px",
    top: "-4px",
    transition: "0.5s ease all",
    backgroundColor: "#E1D3C1",
    border: "4px solid #5C0307",
    borderRight: "4px solid #5C0307",
    borderLeft: "none",
    padding: "5px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    cursor: "pointer",
  };
  const fuckCSS = {
    width: "5px",
    display: "none",
    height: "114Xpx",
    backgroundColor: "#E1D3C1",
    position: "absolute",
    top: "0",
    right: "-5px",
  };
  const tdStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "20px",

    width: "100px",
    height: "80px",
    fontSize: "50px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const rollADice = (dice) => {
    setDiceRolled(`r${diceToRoll}d${dice}`);
    let sum = 0;
    let res = "";
    if (diceToRoll > 1) {
      for (let i = 0; i < diceToRoll; i++) {
        let rng = Math.floor(Math.random() * dice) + 1;
        res += String(rng);
        sum += Number(rng);
        if (i < diceToRoll - 1) res += " + ";
      }
      //res = `${res} = ${sum}`;
    } else{
      res += String(Math.floor(Math.random() * dice) + 1);
      sum = res
    } 
    setRolledSum(sum);
    setRolledNumbers(res);
  };
  return (
    <div style={ComponentStyle}>
      <div style={iconStyle} name="diceRollerIcon">
        <img
          src={Cup}
          onClick={() => {
            setHidden(!hidden);
          }}
          alt=""
          width={"100px"}
        />
      </div>
      <div style={actualRoller}>
        <table>
          <tbody>
            <tr>
              <td
                onClick={() => {
                  rollADice(4);
                }}
                style={tdStyle}
              >
                <img src={Dice["d4"]} alt="" />
              </td>
              <td
                onClick={() => {
                  rollADice(6);
                }}
                style={tdStyle}
              >
                <img src={Dice["d6"]} alt="" />
              </td>
              <td
                onClick={() => {
                  rollADice(8);
                }}
                style={tdStyle}
              >
                <img src={Dice["d8"]} alt="" />
              </td>
              <td
                onClick={() => {
                  rollADice(10);
                }}
                style={tdStyle}
              >
                <img src={Dice["d10"]} alt="" />
              </td>
              <td
                onClick={() => {
                  rollADice(12);
                }}
                style={tdStyle}
              >
                <img src={Dice["d12"]} alt="" />
              </td>
              <td
                onClick={() => {
                  rollADice(20);
                }}
                style={tdStyle}
              >
                <img src={Dice["d20"]} alt="" />
              </td>
              <td
                onClick={() => {
                  rollADice(100);
                }}
                style={tdStyle}
              >
                <FaPercent />
              </td>
            </tr>
            <tr>
              <td
                colSpan={7}
                style={{ ...tdStyle, border: "3px solid #660308" }}
              >
                <span style={{ color: "MediumSeaGreen" }}>{diceRolled}</span>
                {diceRolled.length > 0 ? " : " : ""}
                <span style={{ color: "DodgerBlue" }}>{rolledNumbers}</span>
                {rolledNumbers.length > 0 ? " = " : ""}
                <span style={{ color: "Tomato" }}>{rolledSum}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2"></td>
              <td
                onMouseEnter={() => {
                  setPlusHover(!plusHover);
                }}
                onMouseLeave={() => {
                  setPlusHover(!plusHover);
                }}
                onClick={() => {
                  setDiceToRoll(diceToRoll + 1);
                }}
                style={{ ...tdStyle, color: plusHover ? "limegreen" : "black" }}
              >
                <FaPlusCircle />
              </td>
              <td style={tdStyle}>{diceToRoll}</td>
              <td
                onMouseEnter={() => {
                  setMinusHover(!minusHover);
                }}
                onMouseLeave={() => {
                  setMinusHover(!minusHover);
                }}
                onClick={() => {
                  setDiceToRoll(diceToRoll > 1 ? diceToRoll - 1 : 1);
                }}
                style={{ ...tdStyle, color: minusHover ? "red" : "black" }}
              >
                <FaMinusCircle />
              </td>
              <td colSpan="2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
const actualRoller = {};
